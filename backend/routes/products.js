//importation du module express
const express = require('express')
const router =express.Router()
const prodCtrl =require('../controllers/products')

router.post('/',prodCtrl.createProducts)
router.get('/',prodCtrl.readProducts)
router.get('/:id',prodCtrl.readOneProduct)
router.put('/:id',prodCtrl.updateProduct)
router.delete('/:id',prodCtrl.deleteProducts)

module.exports = router