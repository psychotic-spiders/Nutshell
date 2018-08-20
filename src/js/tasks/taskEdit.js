/*
const taskManager = require("../dataManager/tasksManager")
const loadTasks = require("./tasksList")
const $ = require("jquery")


function editTasks () {
document.getElementById("taskListInfo").addEventListener("click", event => {
    console.log("yo")
    if(event.target.id.split("--")[0] === "editIt"){
        let id = event.target.id.split("--")[1]
        taskManager.editTasks(id).then(()=> {
            $("#taskForm").show() //hides the form after save
           loadTasks() //show updated list.
    })
}
    })
    
    //const id = parseInt(evt.target.id.split("--")[1])
       // taskManager.deleteTask(id).then(loadTasks)


}
module.exports = editTasks
*/