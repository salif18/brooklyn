//importation du module http
const http = require('http')
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config()
app.set(process.env.PORT || 3002)

const server = http.createServer(app)

server.listen(process.env.PORT,()=>console.log('ouverture du server'))