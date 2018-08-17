// Mike - Events
let eventsManager = require("../dataManager/eventsManager");

const editEvents = function(){

    document.querySelector("#editEventsButton").addEventListener("click", () => {

        const editEvent = {
            title: document.querySelector("#eventTitle").value,
            location: document.querySelector("#eventLocation").value,
            eventDate: document.querySelector("#eventDate").value,
            content: document.querySelector("#eventContent").value,
        }

        eventsManager.postEvents(editEvent).then(() => {
            // inputMessageDOM.clearForm()
        })
    })
}

module.exports = editEvents