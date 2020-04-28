const Route = require("express").Router()
const {getProducts, getProduct, postProduct, putProduct, deleteProduct} = require("../controllers/productsController")

Route.get("/", getProducts)
Route.get("/:id", getProduct)
Route.post("/", postProduct)
Route.put("/:id", putProduct)
Route.delete("/:id", deleteProduct)

module.exports = Route