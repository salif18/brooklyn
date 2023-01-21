//importation du module bcrypt
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/userTable')
const dotenv = require('dotenv')
dotenv.config()

exports.signup =(req,res,next)=>{
    bcrypt.hash(req.body.password, 10)
    .then((hash)=>{
        const users = new Users({
            prenom:req.body.prenom,
            nom:req.body.nom,
            address:req.body.address,
            numero:req.body.numero,
            password:hash
        })
        users.save()
        .then(()=>res.status(201).json({msg:'new user'}))
        .catch((error)=>res.status(500).json({error}))
    })
    .catch((error)=>res.status(500).json({error}))
}

exports.login=(req,res,next)=>{
    Users.findOne({numero:req.body.numero})
    .then((user)=>{
        if(!user){
            return res.status(400).json({msg:'number incorrect'}) 
        }

        bcrypt.compare(req.body.password,user.password)
        .then((valid)=>{
           if(!valid){
            return res.status(400).json({msg:'password incorrect'})
        }
        return res.status(200).json({
            userId:user._id,
            token:jwt.sign(
                {userId:user._id },
            `${process.env.TOKEN_KEY_SECRET}`,
            {expiresIn:'24h'})
        })
        })
        .catch((err)=>res.status(500).json({err}))
    })
    .catch((err)=>res.status(500).json({err}))
}

exports.getUsers =(req,res,next)=>{
    Users.findOne({id:req.params.id})
    .then((user)=>res.status(200).json(user))
    .catch((err)=>res.status(400).json({err}))
}