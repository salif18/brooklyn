//importation du module express
const express = require('express')
const app = express()
const cors = require('cors')
const MongoDB = require('./connection/connection')
const userRter = require('./routes/users')
const prodRter = require('./routes/products')

app.use(express.json())
app.use(cors())

app.use('/authentification',userRter)
app.use('/products',prodRter)

module.exports = app