const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//Log Requests
app.use(morgan('tiny'));

//Parse Request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//Set Templating Engine
app.set('view engine', 'ejs')

// Load Assets
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


app.get('/', (req,res)=>{
    res.send("Crud Application")
})

app.listen(3000,()=>{console.log(`Server is running on https//localhost:${3000}`)})