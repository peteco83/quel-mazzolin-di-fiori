const createError = require("http-errors")
const Client = require("../models/clientsSchema")
const faker = require("faker/locale/de")

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

exports.postClient = async(req,res,next) => {
    try {
    const client = new Client(req.body)    
    await client.save()
    res.json({success: true, client: client})
    }
    catch(err) {
        next(err)
    }
}

exports.putClient = async(req, res, next) => {
    const {id} = req.params    
    const client = req.body
    try {
        
        const updateClient = await Client.findByIdAndUpdate(id, client, {new: true})
        if(!updateClient) throw createError(500)
        res.json({success:true, client: updateClient})
    } catch(err) {
        next(err)
    }

    
}

exports.deleteClient = async (req, res, next) => {
   const {id} = req.params
   try {
        const deletedClient = await Client.findByIdAndDelete(id)
        if(!deletedClient) throw createError(404)
        res.json({success: true, client: deletedClient})
   } catch(err) {
       next(err)
   }
}

