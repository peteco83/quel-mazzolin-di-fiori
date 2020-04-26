const createError = require("http-errors")
const Product = require("../models/productsSchema")

exports.getProducts = async(req,res,next) => {
    try {
        const products = await Product.find()
        res.json({success: true, products: products})
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

exports.postProduct = (req,res,next) => {
    // db.get("products").push(req.body).last().assign({id:shortid.generate()}).write()
    try {

    const product = new Product({
        sortof: req.body.sortof,
        name: req.body.name,
        price: req.body.price,
    })
    product.save()

    res.json({success: true, product: req.body})
    }
    catch(err) {
        next(err)
    }
}

exports.putProduct = async(req, res, next) => {
    const {id} = req.params
    // product.id = shortid.generate()
    // db.get("products").find({id}).assign(product).write()
    
    try {
        
        const product = await Product.findByIdAndUpdate(id, {
            sortof: req.body.sortof,
            name: req.body.name,
            price: req.body.price,
        } )
        
        res.json({success:true, product: product})
    } catch(err) {
        next(err)
    }

    
}

exports.deleteProduct = async (req, res, next) => {
   const {id} = req.params
   try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        res.json({success: true, product: deletedProduct})
   } catch(err) {
       next(err)
   }
}