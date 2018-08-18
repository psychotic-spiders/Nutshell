// Handle delete button clicks
const taskManager = require("./dataManager/tasksManager")
const loadTasks = require("./tasksList")


function removeTasks () {
document.getElementById("container").addEventListener("click", event => {
    console.log("hi")
    if(event.target.id.split("--")[0] === "completed"){
        let id = event.target.id.split("--")[1]
        taskManager.deleteTask(id).then(()=> {
           loadTasks()
    })
}
    })
    
    //const id = parseInt(evt.target.id.split("--")[1])
       // taskManager.deleteTask(id).then(loadTasks)


}
module.exports = removeTasks

