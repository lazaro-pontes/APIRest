const express = require('express')
const bodyParser = require('body-parser')

//iniciando o APP
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//rotas
app.use('/', (req, res) => {
    res.send("hello world")
})

app.listen(3000)
console.log("servidor ouvindo")