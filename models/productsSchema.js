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

    // we are not going to use the virtuals
})

// productSchema.virtual("fullName").get(function(){ 
//     return `${this.firstName} ${this.lastName}`
// })

module.exports = mongoose.model("Product", productSchema)