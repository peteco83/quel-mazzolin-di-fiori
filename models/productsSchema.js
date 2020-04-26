const mongoose = require("mongoose")
const {Schema} = mongoose;

const productSchema = new Schema({
    sortof: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
},

{    
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})


module.exports = mongoose.model("Product", productSchema)