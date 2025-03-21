const TaskModels = require("../models/TaskModels")

module.exports.getTasks = async(req, res) => {
    // for mongodb
    const tasks = await TaskModels.find()
    res.send(tasks);
}

// for save function
module.exports.saveTasks = async(req,res) => {
 const {task} = req.body
 TaskModels.create({task})
 .then((data) => {
    console.log("data saved successfully")
     res.send(data)
 })
 .catch((error) => {
     console.log("Something went wrong", error)
     res.send(error)
 })
}

// for update function
module.exports.updateTasks = async(req, res) => {
    const {id} = req.params
    const {task} = req.body
    TaskModels.findByIdAndUpdate(id , {task})
    .then( ()=> {
        res.send("updated successfully")
    })
    .catch((error) => {
        console.log("Something went wrong", error)
        res.send(error)
    })
}

// for delete function

module.exports.deletetask = async(req, res) => {
    const id = req.params

    TaskModels.findByIdAndDelete(id)
    .then(() => {
        console.log("Data deleted")
        res.send("Data deleted")
    })
.catch((err) => {
    console.log("Something went wrong" , err)
    res.send(err)
})
}