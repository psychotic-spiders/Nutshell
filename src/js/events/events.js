let eventManager = require("../dataManager/eventsManager")
let eventList = require("./eventsList")

// let events = {};

function getEvents (){
    eventManager.getEvent()
    .then((result) => {
        // events = result;
        eventList(result);
    });
} 
    
module.exports = getEvents;