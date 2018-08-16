//once user logs in will load screen to DOM based on session storage ID
const taskManager = require("./dataManager/tasksManager")
const sessionUser = require("./dataManager/sessionActiveUser")
//getActiveUser.ID

//loop through-
function loadScreen() {
    console.log("Hi")
    console.log(sessionUser.getActiveUser().id)
  if (sessionUser.getActiveUser().id === taskManager.getAllTasks().id) {
    getAllTasks.tasks.forEach(element => {
      document.getElementById("container").innerHTML= `
      <h3>${element}</h3>
      `
    });
  }
    //if (getAllTask${id} === getActiveUser.id) {
        //console.log(userID)
//document.getElementById("container").innerHTML =`
//<h2>Something</h2>`//loop over for DOM write tasks

  //  }








}




module.exports = loadScreen