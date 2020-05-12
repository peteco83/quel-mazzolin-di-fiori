const Route = require("express").Router()
const { getClients, getClient, postClient, putClient, deleteClient, login, logout } = require("../controllers/clientsController")
const { validateInputs } = require("../middleware/validator")
const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuthenticator")

Route.get("/", auth, isAdmin, getClients)
Route.get("/:id", auth, getClient)
Route.post("/", validateInputs(), postClient)
Route.post("/login", login)
Route.put("/:id", auth, putClient)
Route.delete("/:id", auth, deleteClient)
Route.get("/logout", logout)

module.exports = Route