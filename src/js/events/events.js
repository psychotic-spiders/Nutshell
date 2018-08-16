let eventManager = require("../dataManager/eventsManager")
let eventList = require("./eventsList")

let events = {};

eventManager.getEvent()
.then((result) => {
    events = result;
    eventList(events);
});

module.exports = events;