const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Product', ProductSchema)
