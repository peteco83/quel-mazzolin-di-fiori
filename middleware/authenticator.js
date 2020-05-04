const Client = require("../models/clientsSchema")
const createError = require("http-errors")

const auth = async (req, res, next) => {
    const token = req.header("x-auth")

    try {
        const client = await Client.findByToken(token)
        if (!client) throw createError(403)

        req.client = client;
        req.token = token;

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = auth