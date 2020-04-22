const db = require("../models/db")
const shortid = require('shortid');

exports.getClients = (req,res,next) => {
    let clients = db.get("clients").value()
    res.json({success: true, clients: clients})
    
}

exports.getClient = (req,res,next) => {
    const {id} = req.params
    let client = db.get("clients").find({id}).value()
    res.json({success: true, client: client})
}

exports.postClient = (req,res,next) => {
    db.get("clients").push(req.body).last().assign({id:shortid.generate()}).write()
    res.json({success: true, client: req.body})
}

exports.putClient = (req, res, next) => {
    const {id} = req.params
    const client = req.body
    client.id = shortid.generate()
    db.get("clients").find({id}).assign(client).write()
    res.json({success:true, client: client})
}

exports.deleteClient = (req, res, next) => {
   const {id} = req.params
   const client = db.get("clients").remove({id}).write()
   res.json({success: true, client: client})
}