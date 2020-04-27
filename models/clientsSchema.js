const mongoose = require("mongoose")
const {Schema} = mongoose;


const clientSchema = new Schema({
    firstName: {type: String, required: true},
    // si no pone required el usuario se lo puede saltar
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    zipCode: {type: Number, required: true},

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

clientSchema.virtual("fullName").get(function(){ 
    return `${this.firstName} ${this.lastName}`
})

module.exports = mongoose.model("Client", clientSchema)