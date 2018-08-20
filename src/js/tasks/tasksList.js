//once user logs in will load tasks to DOM based on session storage ID
const taskManager = require("../dataManager/tasksManager")
const sessionUser = require("../dataManager/sessionActiveUser")
const loadTaskForm = require("./taskForm")
const $ = require("jquery")

//load tasks associated with userID in session storage
function loadTasks() {
  document.getElementById("newTask").innerHTML = `
                <button id="addNewTask">Add New Task</button>
               `
                document.getElementById("newTask").addEventListener("click", loadTaskForm)
  //console.log("Hi")
  //console.log(sessionUser.getActiveUser().id)
  let findUser = sessionUser.getActiveUser().id
  let findTasks = taskManager.getAllTasks(findUser)
  //console.log(findUser)
  //console.log(findTasks)

  findTasks.then(result => {
    //console.log(result)
    document.getElementById("taskListInfo")
    taskListInfo.textContent = ""
    result.forEach(element => {
      document.getElementById("taskListInfo").innerHTML += `
      
        <h4>Task: ${element.name}</h4>
        <h5>Date to complete: ${element.completeDate}</h5>
        <input type="checkbox" name="completed" value="completed" id="completed--${element.id}">Completed<br>
        <input type="checkbox" name="edit" value="edit" id="editIt--${element.id}">Edit<br>
        `

    })
  })

  

}

/*
document.querySelector(".entryList").addEventListener("click", evt => {
    if (evt.target.classList.contains("entry__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deleteEntry(id).then(listEntries)
    }
})
*/




module.exports = loadTasks