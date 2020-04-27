const mongoose = require("mongoose")
const {Schema} = mongoose;

const orderSchema = new Schema({
    productID: {type: String, required: true},
    quantity: {type: Number, required: true},
    createAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model("Order", orderSchema)