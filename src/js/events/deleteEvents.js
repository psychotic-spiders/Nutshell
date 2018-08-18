// Mike - Events
let eventsManager = require("../dataManager/eventsManager");

const deleteEvents = function () {

    document.querySelector("#deleteEventsButton").addEventListener("click", (event) => {
        console.log(event);
        if(event.target.id.split("--")[0] === "delete"){
            console.log("Hey!", event.target.id);
            let id = event.target.id.split("--")[1]
            console.log(id);
            //calls the deleteEntries function so that the entry is deleted on the Database.
            eventsManager.deleteEvents(id).then(()=> {
                eventList()
            })
     
        }
     
     })
}

module.exports = deleteEvents