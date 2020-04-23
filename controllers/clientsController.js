const createError = require("http-errors")
const db = require("../models/db")
const shortid = require('shortid');
const Client = require("../models/clientsSchema")

exports.getClients = async(req,res,next) => {
    try {
        const clients = await Client.find()
        res.json({success: true, clients: clients})
    }
    catch(err) {
        next(err)
    }
    
}

exports.getClient = async (req,res,next) => {
    const {id} = req.params
    try {
        const client = await Client.findById(id)
        if (!client) throw createError(404)
        res.json({success: true, client: client})
    }
    catch(err) {
        next(err)
    }
    
}

exports.postClient = (req,res,next) => {
    // db.get("clients").push(req.body).last().assign({id:shortid.generate()}).write()
    try {

    const client = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    client.save()

    res.json({success: true, client: req.body})
    }
    catch(err) {
        next(err)
    }
}

exports.putClient = async(req, res, next) => {
    const {id} = req.params
    // client.id = shortid.generate()
    // db.get("clients").find({id}).assign(client).write()
    const client = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    try {
        
        Client.findByIdAndUpdate(id, client)
        // client.save()

        
        res.json({success:true, client: client})
    } catch(err) {
        next(err)
    }

    
}

exports.deleteClient = (req, res, next) => {
   const {id} = req.params
   const client = db.get("clients").remove({id}).write()
   res.json({success: true, client: client})
}