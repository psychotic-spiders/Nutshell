const session = require("../dataManager/sessionActiveUser");
let eventCard = require("./eventCard");

function eventList(result) {
    /* let filteredData = function (id) {
        return id === session.getActiveUser() 
    } */
    result.forEach(item => {
        writeEventToDOM(eventCard(item.title, item.location, item.eventDate, item.content, item.userName))
    });
}

function writeEventToDOM(result){
    // console.log(result);
    document.querySelector(".eventsLog").innerHTML += result
}

module.exports = eventList
