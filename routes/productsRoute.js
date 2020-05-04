const Route = require("express").Router()
const { getProducts, getProduct, postProduct, putProduct, deleteProduct } = require("../controllers/productsController")
const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuthenticator")

Route.get("/", auth, getProducts)
Route.get("/:id", auth, getProduct)
Route.post("/", auth, isAdmin, postProduct)
Route.put("/:id", auth, isAdmin, putProduct)
Route.delete("/:id", auth, isAdmin, deleteProduct)

module.exports = Route