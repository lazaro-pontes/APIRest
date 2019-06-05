const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

//iniciando o APP
const app = express()

//iniciando o banco de dados
mongoose.connect('mongodb+srv://lazaro:AMORes@cluster0-wtocj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//rotas
app.use('/api', routes)

app.listen(3000)
console.log("servidor ouvindo")