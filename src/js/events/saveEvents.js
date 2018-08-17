// Mike - Events
let eventsManager = require("../dataManager/eventsManager");
const session = require("../dataManager/sessionActiveUser");

const saveEvents = function(){

    document.querySelector("#saveEventsButton").addEventListener("click", () => {

        const userObject = session.getActiveUser()

        const newEvent = {
            title: document.querySelector("#eventTitle").value,
            location: document.querySelector("#eventLocation").value,
            eventDate: document.querySelector("#eventDate").value,
            content: document.querySelector("#eventContent").value,
            userID: userObject.id,
            userName: userObject.username,
            date: Date.now()
        }

        eventsManager.postEvents(newEvent).then(() => {
            // inputMessageDOM.clearForm()


        })
    })
}

module.exports = saveEvents