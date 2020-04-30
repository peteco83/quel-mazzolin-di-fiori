const createError = require("http-errors")
const Product = require("../models/productsSchema")
const jwt = require("jsonwebtoken")

exports.getProducts = async(req,res,next) => {
    try {
        const value = req.header("test")
        const check = jwt.verify(value, "peteco1983")
        if(check) {
            const products = await Product.find()
            res.json({success: true, products: products})
        } else {
            throw createError(404)
        }
        
    }
    catch(err) {
        next(err)
    }
    
}

exports.getProduct = async (req,res,next) => {
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        if (!product) throw createError(404)
        res.json({success: true, product: product})
    }
    catch(err) {
        next(err)
    }
    
}

exports.postProduct = async(req,res,next) => {
    
    try {
    const product = new Product(req.body)
    await product.save()
    res.json({success: true, product: product})
    }
    catch(err) {
        next(err)
    }
}

exports.putProduct = async(req, res, next) => {
    const {id} = req.params
    const product = req.body
    
    try {
        
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true} )
        if(!updateProduct) throw createError(500)
        res.json({success:true, product: updateProduct})
    } catch(err) {
        next(err)
    }

    
}

exports.deleteProduct = async (req, res, next) => {
   const {id} = req.params
   try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct) throw createError(404)
        res.json({success: true, product: deletedProduct})
   } catch(err) {
       next(err)
   }
}