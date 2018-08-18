// console.log("MEOW")
const $ = require("jquery")
const logInPage = require("./LoginPage.js")
const loadScreen = require("./tasks/tasksList.js")
//const taskManager = require("./dataManager/tasksManager")

//const sessionActiveUser = require("./dataManager/sessionActiveUser.js")

// Articles
const activateForm = require("./registration/registrationManager");
const articleManager = require("./dataManager/articlesManager");
const addArticlesDom = require("./articles/addArticlesDom");
const saveArticleToDatabase = require("./articles/addArticlesDom")
const inputArticles = require("./articles/inputArticles");
const listArticles = require("./articles/articleList")


// Registration - Mike
/* const registration = require("./registration/registration");
document.querySelector("#registrationForm").innerHTML = registration.renderForm();
activateForm() */

// Events - Mike
const eventsForm = require("./events/eventsForm");
const saveEvents = require("./events/saveEvents");
const events = require("./events/events")
//document.querySelector("#eventsForm").innerHTML = eventsForm.renderEventsForm();
//saveEvents()
//events()

// Messages - Dejan
const inputMessageDOM = require("./messages/inputMessagesDOM");
const saveMessageEntryToDatabase = require("./messages/addInputMessagesDOM");
const messageEntriesDOM = require("./messages/messageEntriesDOM");
const populateMessageEntriesDOM = require("./messages/addMessageEntriesDOM");



logInPage()
//listArticles()











// Dejan
// text area and button on DOM

//document.querySelector("#inputMessageDOM").innerHTML = inputMessageDOM.renderEntryForm();
// posts data put into text area on click to database
//saveMessageEntryToDatabase()
//Matt add to main for now -
//document.querySelector("#inputArticleDOM").innerHTML = inputArticles.renderArticleForm();
//saveArticleToDatabase()



