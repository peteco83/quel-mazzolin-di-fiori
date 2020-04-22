const db = require("../models/db")
const shortid = require('shortid');

exports.getOrders = (req,res,next) => {
    let orders = db.get("orders").value()
    res.json({success: true, orders: orders})
    
}

exports.getOrder = (req,res,next) => {
    const {id} = req.params
    let order = db.get("orders").find({id}).value()
    res.json({success: true, order: order})
}

exports.postOrder = (req,res,next) => {
    db.get("orders").push(req.body).last().assign({id:shortid.generate()}).write()
    res.json({success: true, order: req.body})
}

exports.putOrder = (req, res, next) => {
    const {id} = req.params
    const order = req.body
    order.id = shortid.generate()
    db.get("orders").find({id}).assign(order).write()
    res.json({success:true, order: order})
}

exports.deleteOrder = (req, res, next) => {
   const {id} = req.params
   const order = db.get("orders").remove({id}).write()
   res.json({success: true, order: order})
}