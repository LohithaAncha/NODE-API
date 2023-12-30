const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler')
const getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
        //res.status(500).json(error.message)
    }
})
const getProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
        // res.status(500).json(error.message)
    }
})
const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
        // console.log(error.message)
        // res.status(500).json({ message: error.message })
    }
})
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        const updated = await Product.findById(id)
        if (!product) {
            res.status(404)
            throw new Error('Product not found with id' )
            //return res.status(404).json({ message: 'Product not found with id ' })
        }
        res.status(500).json(updated)
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
        //res.status(500).json(error.message)
    }
})
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id, req.body)
        if (!product) {
            return res.status(404).json({ message: 'Product not found with id ' })
        }
    }
    catch (error) {
        res.status(500)
        throw new Error(error.message)
        //res.status(500).json(error.message)
    }
})
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}