const mongoose = require("mongoose")
const {Schema} = mongoose;

const orderSchema = new Schema({
    sortof: {type: String, required: true},
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
},

{    
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})


module.exports = mongoose.model("Order", orderSchema)