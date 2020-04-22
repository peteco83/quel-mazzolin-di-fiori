
const products = []

exports.getProducts = (req,res,next) => {
    res.json({products: products})
    
}

exports.postProduct = (req,res,next) => {
    console.log(req.body)
    if(!products.includes(req.body)){
        products.push(...req.body)
    }
    res.json({products})
}

exports.putProduct = (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("put request received on /products/:id")
}

exports.deleteProduct = (req, res, next) => {
    console.log(req.params.id)
    res.send("received delete request on /products/:id")
}