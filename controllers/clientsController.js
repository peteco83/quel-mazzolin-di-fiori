const createError = require("http-errors")
const Client = require("../models/clientsSchema")
const { encrypt } = require("../lib/encryption")

exports.getClients = async (req, res, next) => {
    try {
        const clients = await Client.find()
        res.json({ success: true, clients: clients })
    }
    catch (err) {
        next(err)
    }

}

exports.getClient = async (req, res, next) => {
    const { id } = req.params
    try {
        const client = await Client.findById(id)
        if (!client) throw createError(404)
        res.header("test", "123")
        res.json({ success: true, client: client })
    }
    catch (err) {
        next(err)
    }

}

exports.postClient = async (req, res, next) => {
    try {
        const client = new Client(req.body)
        const token = client.generateAuthToken()
        await client.save()
        const publicData = client.getPublicFields()
        // res.header("x-auth", token)
        req.session.token = token;
        req.session.client = client
        res.cookie("login", true)
        res.json({ success: true, client: publicData, token: token })
    }
    catch (err) {
        next(err)
    }
}

exports.putClient = async (req, res, next) => {
    const { id } = req.params
    const client = req.body

    try {
        if (Object.keys(req.body).includes("password")) {
            const hashedPassword = await encrypt(client.password)
            client.password = hashedPassword
        }

        const updateClient = await Client.findByIdAndUpdate(id, client, { new: true })
        if (!updateClient) throw createError(500)
        res.json({ success: true, client: updateClient })
    } catch (err) {
        next(err)
    }


}

exports.deleteClient = async (req, res, next) => {
    const { id } = req.params
    try {
        const deletedClient = await Client.findByIdAndDelete(id)
        if (!deletedClient) throw createError(404)
        res.json({ success: true, client: deletedClient })
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const client = await Client.findOne({ email })
        const valid = await client.checkPassword(password)
        if (!valid) throw createError(404)
        let token = client.generateAuthToken()
        const publicData = client.getPublicFields()
        req.session.token = token;
        req.session.client = publicData
        res.cookie("login", true)
        res.json({ success: true, client: publicData, token: token })
    } catch (err) {
        next(err)
    }
}

exports.logout = async (req, res, next) => {

    try {
        req.session.destroy()
        res.json({ success: true })
    } catch (err) {
        next(err)
    }


}