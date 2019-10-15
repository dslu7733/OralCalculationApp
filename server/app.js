let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let userRoute = require('./routes/user_route')
let praRangeRoute = require('./routes/praRange')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(praRangeRoute)
app.use(userRoute)


module.exports = app
