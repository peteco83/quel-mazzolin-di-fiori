const mongoose = require("mongoose")
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require("jsonwebtoken")
const { encrypt, compare } = require("../lib/encryption")
// const AddressSchema = require("./addressSchema")
const env = require("../config/config")


const clientSchema = new Schema({
    firstName: { type: String, required: true },
    // si no pone required el usuario se lo puede saltar
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["Admin", "User"], required: false },
    tokens: [{ token: { type: String, required: true } }],
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    street: { type: String, require: true },
    city: { type: String, default: "Berlin" },
    zipCode: { type: Number, require: true },
    order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]

},

    {
        toObject: {
            virtuals: true
        },
    })

clientSchema.plugin(uniqueValidator)

clientSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`
})

clientSchema.methods.generateAuthToken = function () {
    const client = this;
    const token = jwt.sign({ _id: client._id }, env.jwt_key).toString()
    client.tokens.push({ token })
    return token
}

clientSchema.methods.getPublicFields = function () {
    let returnObject = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        role: this.role,
        street: this.street,
        zipCode: this.zipCode,
        order: this.order,
        _id: this._id
    }
    return returnObject
}

clientSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await encrypt(this.password)
    next()
    // before storing the user instance (that means before running the save() function in the addUser() one), this this function is going to run and it will convert the password into a hash
})

clientSchema.methods.checkPassword = async function (password) {
    const client = this;
    return await compare(password, client.password)
}

clientSchema.statics.findByToken = function (token) {
    const Client = this;
    let decoded;

    try {
        decoded = jwt.verify(token, env.jwt_key)
    } catch (err) {
        return;
    }

    return Client.findOne({ _id: decoded._id }).select("-password -__v")

}


module.exports = mongoose.model("Client", clientSchema)