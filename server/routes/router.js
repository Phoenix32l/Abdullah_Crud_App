const express = require('express');
const route = express.Router();

route.get('/', (req,res)=>{
    res.render("index");
})

route.get('/add-tasks', (req,res)=>{
    res.render("add_tasks");
})

route.get('/update-tasks', (req,res)=>{
    res.render("update_tasks");
})

module.exports = route