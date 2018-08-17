// Mike - Events
let eventsManager = require("../dataManager/eventsManager");
const session = require("../dataManager/sessionActiveUser");

const deleteEvents = function(){

    document.querySelector("#deleteEventsButton").addEventListener("click", () => {

        const userObject = session.getActiveUser()

        const id = userObject.id
            

        eventsManager.deleteEvents(id)
    })
}

module.exports = deleteEvents