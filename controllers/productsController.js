const db = require("../models/db")
const shortid = require('shortid');

exports.getProducts = (req,res,next) => {
    let products = db.get("products").value()
    res.json({success: true, products: products})
    
}

exports.getProduct = (req,res,next) => {
    const {id} = req.params
    let product = db.get("products").find({id}).value()
    res.json({success: true, product: product})
}

exports.postProduct = (req,res,next) => {
    db.get("products").push(req.body).last().assign({id:shortid.generate()}).write()
    res.json({success: true, product: req.body})
}

exports.putProduct = (req, res, next) => {
    const {id} = req.params
    const product = req.body
    product.id = shortid.generate()
    db.get("products").find({id}).assign(product).write()
    res.json({success:true, product: product})
}

exports.deleteProduct = (req, res, next) => {
   const {id} = req.params
   const product = db.get("products").remove({id}).write()
   res.json({success: true, product: product})
}