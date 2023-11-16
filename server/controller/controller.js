var Taskdb = require('../model/model');

//Create & Save Task
exports.create=(req,res)=>{
   
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    const tasks = new Taskdb({
        task:req.body.task, 
        notes:req.body.notes
    })


    tasks
        .save(tasks)
        .then(data=>{
            res.redirect("/add-tasks")
        })

}

//Get all tasks
exports.find=(req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;

        Taskdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found tasks with id "+ id})
                }else{
                    res.send(data)
                }
            })
            

    }
    
    else{
        Taskdb.find()
            .then(tasks => {
                res.send(tasks)
            })

    }

}

//Update a new task
exports.update=(req,res)=>{
    
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Taskdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update task with ${id}`})
            }else{
                res.send(data)
            }
        })
}

//Delete a task
exports.delete=(req,res)=>{
    
    const id = req.params.id;

    Taskdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Can't delete task with id ${id}`})
            }else{
                res.send({
                    message : "Task deleted"
                })
            }
        })
}
