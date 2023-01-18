//importation module fs
const fs = require('fs')
const Products = require('../models/prodTable')

exports.createProducts = (req,res,next)=>{
    const products = new Products({
        userId:req.body.userId,
        image:req.body.image,
        nom:req.body.nom,
        category:req.body.category,
        description:req.body.description,
        prix:req.body.prix
    })
    products.save()
    .then(()=>res.status(201).json({msg:'new product'}))
    .catcth((err)=>res.status(400).json({err}))
}

exports.readProducts = (req,res,next)=>{
    Products.find()
    .then((products)=>res.status(200).json(products))
    .catch((err)=>res.status(400).json({err}))
}

exports.readOneProduct =(req,res,next)=>{
    Products.findOne({_id:req.params.id})
    .then((product)=>res.status(200).json(product))
    .catch((err)=>res.status(400).json({err}))
}

exports.updateProduct = (req,res,next)=>{
    Products.updateOne({ _id: req.params.id})
    .then(()=>res.status(200).json({msg:'product update'}))
    .catch((err)=>res.status(400).json({err}))
}

exports.deleteProducts =(req,res,next)=>{
    Products.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({msg:'product delete'}))
    .catch((err)=>res.status(400).json({msg:'delete products'}))
}