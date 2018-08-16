//once user logs in will load screen to DOM based on session storage ID
const taskManager = require("./dataManager/tasksManager")
const sessionUser = require("./dataManager/sessionActiveUser")
//getActiveUser.ID


function loadScreen() {
    //console.log("Hi")
    //console.log(sessionUser.getActiveUser().id)
    let findUser = sessionUser.getActiveUser().id
    let findTasks = taskManager.getAllTasks(findUser)
    console.log(findUser)
    console.log(findTasks)



    findTasks.then(result => {
      console.log(result)
      result.forEach(element => {
        document.getElementById("container").innerHTML += `
        <h3>${element.name}</h3>
        `
      })

    })
  }




module.exports = loadScreen