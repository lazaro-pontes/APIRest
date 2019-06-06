const mongoose = require('mongoose')
const requireDir = require('require-dir')

requireDir("../models")
const Product = mongoose.model('Product')

module.exports = {
    async index(req, res){
        const products = await Product.find()

        return res.json(products)
    },
    async store(req, res){
        //criar produtos
        const products = await Product.create(req.body)
        return res.json(products)
    },
    async show(req, res){
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product)
    },
    async destroy(req, res){
        await Product.findByIdAndDelete(req.params.id)

        return res.send("arquivo deletado")
    }

}