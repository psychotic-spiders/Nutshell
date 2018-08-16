console.log("MEOW")
const $ = require("jquery")
const logInPage = require("./LoginPage.js")

//const sessionActiveUser = require("./dataManager/sessionActiveUser.js")

const registration = require("./registration/registration");
const eventsForm = require("./events/eventsForm");
const saveEvents = require("./events/saveEvents");
const events = require("./events/events")
const activateForm = require("./registration/registrationManager");
const articleManager = require("./dataManager/articlesManager");

// Registration - Mike
document.querySelector("#registrationForm").innerHTML = registration.renderForm();
activateForm()

// Events - Mike
document.querySelector("#events").innerHTML = eventsForm.renderEventsForm();
saveEvents()

// Messages - Dejan
const inputMessageDOM = require("./messages/inputMessagesDOM");
const saveMessageEntryToDatabase = require("./messages/addInputMessagesDOM");
const messageEntriesDOM = require("./messages/messageEntriesDOM");
const populateMessageEntriesDOM = require("./messages/addMessageEntriesDOM");


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



