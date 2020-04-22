const Route = require("express").Router()
const {getProducts, postProduct, putProduct, deleteProduct} = require("../controllers/productsController")

Route.get("/", getProducts)
Route.post("/", postProduct)
Route.put("/:id", putProduct)
Route.delete("/:id", deleteProduct)

module.exports = Route