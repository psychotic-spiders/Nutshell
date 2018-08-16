console.log("MEOW")
const $ = require("jquery")
const logInPage = require("./LoginPage.js")
const loadScreen = require("./LoadUserScreen")
//const taskManager = require("./dataManager/tasksManager")

//const sessionActiveUser = require("./dataManager/sessionActiveUser.js")

const registration = require("./registration/registration");
const activateForm = require("./registration/registrationManager");
const articleManager = require("./dataManager/articlesManager");

// Registration - Mike
//document.querySelector("#registrationForm").innerHTML = registration.renderForm();
//activateForm()
// Messages - Dejan
const inputMessageDOM = require("./messages/inputMessagesDOM");
const saveMessageEntryToDatabase = require("./messages/addInputMessagesDOM");

//wtf is this?
function articleList() {
    articleManager.getArticles()
    .then(r => {
        r.forEach(entry => {
            console.log(entry)})
    })
}

articleList()
logInPage()









// Dejan
document.querySelector("#inputMessageDOM").innerHTML = inputMessageDOM.renderEntryForm();
saveMessageEntryToDatabase()

