//importation du module express
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')

router.post('/signup',userCtrl.signup)
router.post('/login',userCtrl.login)
router.get('/:id',userCtrl.getUsers)
module.exports = router