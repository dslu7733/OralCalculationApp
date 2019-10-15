let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let userRoute = require('./routes/user_route')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(userRoute)

module.exports = app
