// Handle delete button clicks
const taskManager = require("../dataManager/tasksManager")
const loadTasks = require("./tasksList")

const $ = require("jquery")


function removeTasks () {
document.getElementById("taskListInfo").addEventListener("click", event => {
    console.log("hi")
    if(event.target.id.split("--")[0] === "completed"){
        let id = event.target.id.split("--")[1]
        taskManager.deleteTask(id).then(()=> {
           loadTasks()
        
    })
} //had to put edit in here because removeTasks is linked with DOM info for all buttons via tasklist.
else if(event.target.id.split("--")[0] === "editIt"){
        let id = event.target.id.split("--")[1]
        taskManager.editTasks(id)
        .then(taskObject => {
            document.getElementById("taskForm").value = taskObject.entryContent
            console.log(id)
            
            $("#taskForm").show() //hides the form after save
           loadTasks() //show updated list.
    })
}



})
    
}   
    //const id = parseInt(evt.target.id.split("--")[1])
       // taskManager.deleteTask(id).then(loadTasks)



module.exports = removeTasks


/*
.then(messageObject => {
    document.querySelector("#entryContent").value = messageObject.content
    editMode.enable = true;
    editMode.entryId = messageId;
}

*/
