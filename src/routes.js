const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

routes.get('/produtos', ProductController.index)
routes.post('/produtos', ProductController.store)

module.exports = routes