//importation du module express
const express = require('express')
const router =express.Router()
const prodCtrl =require('../controllers/products')
const auth =require('../middleware/auth')

router.post('/',auth,prodCtrl.createProducts)
router.get('/',auth,prodCtrl.readProducts)
router.get('/:id',auth,prodCtrl.readOneProduct)
router.put('/:id',auth,prodCtrl.updateProduct)
router.delete('/:id',auth,prodCtrl.deleteProducts)

module.exports = router