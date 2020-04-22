const express = require("express")
const app = express()
const createError = require("http-errors")

const indexRoute = require("./routes/indexRoute")
const productsRoute = require("./routes/productsRoute")
const ordersRoute = require("./routes/ordersRoute")
const clientsRoute = require("./routes/clientsRoute")

const port = process.env.PORT || 3000

app.use(express.json())

app.use("/", indexRoute)
app.use("/products", productsRoute)
app.use("/orders", ordersRoute)
app.use("/clients", clientsRoute)

app.use((req,res,next) => {
    next(createError(404))
})

app.use((err, req,res,next) => {
    res.json({status: err.status, err: err.message})
})

app.listen(port, () => console.log("server is running"))