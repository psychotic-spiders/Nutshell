let eventCard = require("./eventCard");

function eventList(result) {
    let sortedData = result.sort(function(a, b){return b.eventDate - a.eventDate})
    sortedData.forEach(item => {
        writeEventToDOM(eventCard(item.title, item.location, item.eventDate, item.content, item.userName))
    });
}

function writeEventToDOM(result){
    // console.log(result);
    document.querySelector(".eventsLog").innerHTML += result
}

module.exports = eventList
