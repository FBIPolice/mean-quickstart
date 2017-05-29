const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// Server port
const port = 3000

// Route
const index = require('./routes/index')

// Init App
const app = express()

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

// Set static( Angular 2 ) folder
app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'client', 'src')));
app.use(express.static(path.join(__dirname, 'client', 'src', 'app')));

// Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)

app.listen(port, () => console.log('Server started on port ' + port))
