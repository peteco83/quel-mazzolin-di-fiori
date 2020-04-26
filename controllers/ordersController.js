const createError = require("http-errors")
const Order = require("../models/ordersSchema")

exports.getOrders = async(req,res,next) => {
    try {
        const orders = await Order.find()
        res.json({success: true, orders: orders})
    }
    catch(err) {
        next(err)
    }
    
}

exports.getOrder = async (req,res,next) => {
    const {id} = req.params
    try {
        const order = await Order.findById(id)
        if (!order) throw createError(404)
        res.json({success: true, order: order})
    }
    catch(err) {
        next(err)
    }
    
}

exports.postOrder = (req,res,next) => {
    // db.get("orders").push(req.body).last().assign({id:shortid.generate()}).write()
    try {

    const order = new Order({
        sortof: req.body.sortof,
        name: req.body.name,
        quantity: req.body.quantity,
    })
    order.save()

    res.json({success: true, order: req.body})
    }
    catch(err) {
        next(err)
    }
}

exports.putOrder = async(req, res, next) => {
    const {id} = req.params
    
    try {
        
        const order = await Order.findByIdAndUpdate(id, {
            sortof: req.body.sortof,
            name: req.body.name,
            quantity: req.body.quantity,
        } )
        
        res.json({success:true, order: order})
    } catch(err) {
        next(err)
    }

    
}

exports.deleteOrder = async (req, res, next) => {
   const {id} = req.params
   try {
        const deletedOrder = await Order.findByIdAndDelete(id)
        res.json({success: true, order: deletedOrder})
   } catch(err) {
       next(err)
   }
}