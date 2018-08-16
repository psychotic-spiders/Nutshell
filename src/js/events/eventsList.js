let eventCard = require("./eventCard");

function eventList(result) {
    let sortedData = result.sort(function(a, b){return b.date - a.date})
    sortedData.forEach(result => {
        writeEventToDOM(eventCard(result.title, result.location, result.date, result.content, result.username))
    });
}

function writeEventToDOM(result){
    console.log(result);
    document.querySelector("#eventsLog").innerHTML += result;
}

module.exports = eventList
