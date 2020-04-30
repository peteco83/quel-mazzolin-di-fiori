const mongoose = require("mongoose")
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require("jsonwebtoken")
const { encrypt, compare } = require("../lib/encryption")
const AddressSchema = require("./addressSchema")


const clientSchema = new Schema({
    firstName: { type: String, required: true },
    // si no pone required el usuario se lo puede saltar
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tokens: [{ token: { type: String, required: true } }],
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: AddressSchema,

},

    {
        toObject: {
            virtuals: true
        },
        // toJSON: {
        //     virtuals: true
        // }

        // we are not going to use the virtuals
    })

clientSchema.plugin(uniqueValidator)

clientSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`
})

clientSchema.methods.generateAuthToken = function () {
    const client = this;
    const token = jwt.sign({ _id: client._id }, "peteco1983").toString()
    client.tokens.push({ token })
    return token
}

clientSchema.methods.getPublicFields = function () {
    let returnObject = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
    }
    return returnObject
}

clientSchema.pre("save", async function (next) {
    this.password = await encrypt(this.password)
    next()
    // before storing the user instance (that means before running the save() function in the addUser() one), this this function is going to run and it will convert the password into a hash
})

clientSchema.methods.checkPassword = async function (password) {
    const client = this;
    return await compare(password, client.password)
}


module.exports = mongoose.model("Client", clientSchema)