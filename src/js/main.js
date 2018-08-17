console.log("MEOW")
const $ = require("jquery")
const logInPage = require("./LoginPage.js")
const loadScreen = require("./tasksList.js")
//const taskManager = require("./dataManager/tasksManager")

//const sessionActiveUser = require("./dataManager/sessionActiveUser.js")

const registration = require("./registration/registration");
const activateForm = require("./registration/registrationManager");
const articleManager = require("./dataManager/articlesManager");
const addArtcilesDom = require("./articles/addArticlesDom");


// Registration - Mike
//document.querySelector("#registrationForm").innerHTML = registration.renderForm();
//activateForm()
// Messages - Dejan
const inputMessageDOM = require("./messages/inputMessagesDOM");
const saveMessageEntryToDatabase = require("./messages/addInputMessagesDOM");
const saveArticleToDatabase = require("./articles/addArticlesDom")
const inputArticles = require("./articles/inputArticles");
const messageEntriesDOM = require("./messages/messageEntriesDOM");
const populateMessageEntriesDOM = require("./messages/addMessageEntriesDOM");

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
// text area and button on DOM

document.querySelector("#inputMessageDOM").innerHTML = inputMessageDOM.renderEntryForm();
// posts data put into text area on click to database
saveMessageEntryToDatabase()
//Matt add to main for now -
document.querySelector("#inputArticleDOM").innerHTML = inputArticles.renderArticleForm();
saveArticleToDatabase()



