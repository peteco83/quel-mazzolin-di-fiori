const Route = require("express").Router()
const {getClients, getClient, postClient, putClient, deleteClient} = require("../controllers/clientsController")

Route.get("/", getClients)
Route.get("/:id", getClient)
Route.post("/", postClient)
Route.put("/:id", putClient)
Route.delete("/:id", deleteClient)

module.exports = Route