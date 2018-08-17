// Handle delete button clicks
const taskManager = require("./dataManager/tasksManager")
const loadTasks = require("./tasksList")


function removeTasks () {
document.getElementById("removeIt").addEventListener("click", evt => {
        const id = parseInt(evt.target.id.split("--")[1])
        taskManager.deleteTask(id).then(loadTasks)
    })


}

module.exports = removeTasks