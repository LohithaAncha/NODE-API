const express = require('express')
const router = express.Router();
const Product = require('../models/productModel')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct }=require('../controllers/productController')
// router.get('/page', (req, res) => {
//     res.send('This is the first route in my first node api')
// })
router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
module.exports=router