const express = require("express")
const app = express()
const createError = require("http-errors")
const mongoose = require("mongoose")
const logger = require("morgan")
const env = require("./config/config")


const indexRoute = require("./routes/indexRoute")
const productsRoute = require("./routes/productsRoute")
const ordersRoute = require("./routes/ordersRoute")
const clientsRoute = require("./routes/clientsRoute")
const { cors } = require("./middleware/security")

const port = process.env.PORT || 4000

mongoose.connect(env.db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.on("error", (err) => console.log(err))
mongoose.connection.on("open", () => console.log("database connected"))

app.use(express.json())
app.use(logger("dev"))
app.use(cors)
app.use(express.static("client/build"))

app.use("/", indexRoute)
app.use("/products", productsRoute)
app.use("/orders", ordersRoute)
app.use("/clients", clientsRoute)

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    res.json({ status: err.status, err: err.message })
})

app.listen(port, () => console.log("server is running"))