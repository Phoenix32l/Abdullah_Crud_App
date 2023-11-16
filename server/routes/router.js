const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const axios = require('axios')

route.get('/', (req,res)=>{
    axios.get('http://localhost:3000/api/tasks')
        .then(function(response){
            res.render("index", {info:response.data});
            console.log(response)
        })
    
})

route.get('/add-tasks', (req,res)=>{
    res.render("add_tasks");
})

route.get('/update-tasks', (req,res)=>{
    axios.get('http://localhost:3000/api/tasks',{params:{id:req.query.id}})
    .then(function(tasksdata){
        res.render("update_tasks", {update_data:tasksdata.data});
    })
})

//API
route.post('/api/tasks', controller.create);
route.get('/api/tasks', controller.find);
route.put('/api/tasks/:id', controller.update);
route.delete('/api/tasks/:id', controller.delete);

module.exports = route