const userManager = require("./dataManager/userManager.js")
const sessionActiveUser = require("./dataManager/sessionActiveUser")
const registration = require("./registration/registration.js")
const activateForm = require("./registration/registrationManager")
const loadTasks = require("./tasks/tasksList.js")
const loadTaskForm = require("./tasks/taskForm.js")
//const populateMessageEntriesDOM = require("./messages/addMessageEntriesDOM")
const removeTasks = require("./tasks/taskDelete.js")
const $ = require("jquery")
const renderArticleForm = require("./articles/inputArticles")
const saveArticleToDatabase = require("./articles/addArticlesDom")
const inputArticles = require("./articles/inputArticles")
const listArticles = require("./articles/articleList")
const editTasks = require("./tasks/taskEdit")
const removeArticles = require("./articles/articleDelete")
const renderEventsForm = require("./events/eventsForm")
const saveEvents = require("./events/saveEvents")
const events = require("./events/eventsList")
const inputMessageDOM = require("./messages/inputMessagesDOM");
const saveMessageEntryToDatabase = require("./messages/addInputMessagesDOM");
const populateMessageEntriesDOMs = require("./messages/addMessageEntriesDOM");

//below is the DOM representation for the page:
function logInPage() {
    document.getElementById("container").innerHTML = `
<h2>Login</h2>

    <div class = "container">
        <label <label for="uname"><b>Username</b></label>
        <input id="usrNameInput" type="text" placeholder="Enter Username" name="uname" required/>

        <label for="email"><b>Email</b></label>
    <input id="emailInput" type="password" placeholder="Enter Email" name="email" required/>

    <button id="logInButton">Login</button>
    <br>
    <button id="registerButton" type="button">Register</button>

    </div>

`
//added event listeners:
    document.getElementById("logInButton").addEventListener("click", logInUser)
    document.getElementById("registerButton").addEventListener("click", regUser)

//below is specific for loginbutton action:
    function logInUser() {
        const userName = document.getElementById("usrNameInput").value
        const email = document.getElementById("emailInput").value
        userManager.getSingleUsers(userName, email).then(user => {
            //console.log(user);
            if (user.length === 0 || userName === "") {
                alert("please try again!")
            
            } else {
                sessionActiveUser.saveActiveUser(user)
                $("#container").empty();
                //loadTaskForm();
                loadTasks();

                document.querySelector("#inputMessageDOM").innerHTML = inputMessageDOM.renderEntryForm();
                // posts data put into text area on click to database
                saveMessageEntryToDatabase()
                populateMessageEntriesDOMs()
                removeTasks()
                //editTasks()
                document.getElementById("newTask").innerHTML = `
                <button id="addNewTask">Add New Task</button>
               `
                document.getElementById("addNewTask").addEventListener("click", loadTaskForm)
                //renderArticleForm()
                listArticles()
                removeArticles()
                document.querySelector("#inputArticleDOM").innerHTML = inputArticles.renderArticleForm();
                saveArticleToDatabase()
                
                
                
                //console.log(user)
                // Events - Mike
                const eventsForm = require("./events/eventsForm");
                const saveEvents = require("./events/saveEvents");
                const events = require("./events/events")
                document.querySelector("#eventsForm").innerHTML = eventsForm.renderEventsForm();
                const deleteEvents = require("./events/deleteEvents");
                saveEvents()
                events()
                deleteEvents()
            }


        })
    }
//below if user clicks register
    function regUser() {
        $("#container").empty()
        document.querySelector("#container").innerHTML = registration.renderForm();
        activateForm()

    }
    //window.sessionStorage.setItem("currentSession", response.id)
    //console.log(response.id)

}
module.exports = logInPage