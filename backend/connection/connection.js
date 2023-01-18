//importation du module mongoose
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const MongoDb = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('MongoDB connecter'))
.catch(()=>console.log('Echec de connection'))

module.exports =mongoose