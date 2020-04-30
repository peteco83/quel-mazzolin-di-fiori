const Route = require("express").Router()
const {getClients, getClient, postClient, putClient, deleteClient, login} = require("../controllers/clientsController")
const {validateInputs} = require("../middleware/validator")

Route.get("/", getClients)
Route.get("/:id", getClient)
Route.post("/", validateInputs(), postClient)
Route.post("/login", login)
Route.put("/:id", putClient)
Route.delete("/:id", deleteClient)

module.exports = Route