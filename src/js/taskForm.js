const loadTasks = require("./tasksList")
const taskManager = require("./dataManager/tasksManager")


function loadTaskForm() {
    const addForm = document.getElementById("taskForm");
    addForm.innerHTML = `
<fieldset>
    <label for="entryTitle">New Task:</label>
    <input required type="text" id="entryTitle">
</fieldset>
<fieldset>
    <label for="entryDate">Date to complete:</label>
    <input required type="text" id ="completionDate">
</fieldset>

<button id="SaveEntryButton">Save Entry</button>
`


function clearForm () {
document.getElementById("entryTitle").value = "";
document.getElementById("completionDate").value = ""
    }

    document.getElementById("SaveEntryButton").addEventListener("click", () => {
        const loadTasks = require("./tasksList")
        const newTaskEntry = {
            name: document.getElementById("entryTitle").value,
            completeDate: document.getElementById("completionDate").value,
        }
        //POST to api
        taskManager.createTask(newTaskEntry).then(() => {
            clearForm()})
            .then(() => {
            //console.log(loadTasks())
            loadTasks()
        })

    })

}
module.exports = loadTaskForm