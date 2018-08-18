//once user logs in will load tasks to DOM based on session storage ID
const taskManager = require("../dataManager/tasksManager")
const sessionUser = require("../dataManager/sessionActiveUser")
const loadTaskForm = require("./taskForm")
//getActiveUser.ID

//load tasks associated with userID in session storage
function loadTasks() {
  //console.log("Hi")
  //console.log(sessionUser.getActiveUser().id)
  let findUser = sessionUser.getActiveUser().id
  let findTasks = taskManager.getAllTasks(findUser)
  console.log(findUser)
  console.log(findTasks)

  findTasks.then(result => {
    console.log(result)
    document.getElementById("container")
            container.textContent = ""
    result.forEach(element => {
      document.getElementById("container").innerHTML += `
      
        <h4>Task: ${element.name}</h4>
        <h5>Date to complete: ${element.completeDate}</h5>
        <input type="checkbox" name="completed" value="completed" id="completed--${element.id}">Completed<br>
        <input type="checkbox" name="edit" value="edit" id="editIt--${element.id}">Edit<br>
        `

    })
  })

  

//will need to use split and will need to have unique id through add process
/*
let removeTasks = taskManager.deleteTask(name)
function removeTask () {
  if (target) {
}
document.getElementById("removeIt").addEventListener("click", removeTask())

*/

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