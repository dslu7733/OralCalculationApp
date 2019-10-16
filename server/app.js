let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let userRoute = require('./routes/user_route')
let praRangeRoute = require('./routes/praRange')
let prodPracRoute = require('./routes/prodPrac')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(praRangeRoute)
app.use(userRoute)
app.use(prodPracRoute)


module.exports = app
