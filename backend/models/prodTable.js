//importation du module mongoose
const mongoose =require('mongoose')

const Schema = mongoose.Schema({
    userId:{
        type:String,
        
    },
    image:{
        type:String,
        required:true
    },
    nom:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prix:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Products',Schema)