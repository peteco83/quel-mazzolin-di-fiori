const createError = require("http-errors")
const Order = require("../models/ordersSchema")
const Client = require("../models/clientsSchema")

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate("product", "-__v -year -img -price")
        res.json({ success: true, orders: orders })
    }
    catch (err) {
        next(err)
    }

}

exports.getOrder = async (req, res, next) => {
    const { id } = req.params
    try {
        const order = await Order.findById(id).populate("product", "-__v -year -img -price")
        if (!order) throw createError(404)
        res.json({ success: true, order: order })
    }
    catch (err) {
        next(err)
    }

}

exports.postOrder = async (req, res, next) => {
    const { order, client } = req.body

    try {

        const newOrder = new Order()
        newOrder.product = order
        await newOrder.save()
        let clientData = await Client.findById(client)
        clientData.order.push(newOrder._id)
        await clientData.save()
        res.json({ success: true, order: newOrder, client: clientData })
    }
    catch (err) {
        next(err)
    }
}

exports.putOrder = async (req, res, next) => {
    const { id } = req.params
    const order = req.body

    try {

        const updatedOrder = await Order.findByIdAndUpdate(id, order, { new: true })
        if (!updatedOrder) throw createError(500)
        res.json({ success: true, order: updatedOrder })
    } catch (err) {
        next(err)
    }


}

exports.deleteOrder = async (req, res, next) => {
    const { id } = req.params
    try {
        const deletedOrder = await Order.findByIdAndDelete(id)
        if (!deletedOrder) throw createError(404)
        res.json({ success: true, order: deletedOrder })
    } catch (err) {
        next(err)
    }
}