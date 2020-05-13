const mongoose = require("mongoose")
const { Schema } = mongoose;

const orderSchema = new Schema({

    // quantity: {type: Number, required: true},
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    createAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model("Order", orderSchema)