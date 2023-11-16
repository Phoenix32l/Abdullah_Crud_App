const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//Log Requests
app.use(morgan('tiny'));

//MongoDB Connection
connectDB();

//Parse Request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//Set Templating Engine
app.set('view engine', 'ejs')

// Load Assets
app.use('/public', express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Load Routes

app.use('/',require('./server/routes/router'))

app.listen(3000,()=>{console.log(`Server is running on https//localhost:${3000}`)})