const express = require('express')
const bodyParser = require('body-parser')
const PORT  = '3000'

const app = module.exports = express()

app.listen(PORT)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*')
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
    next()
})