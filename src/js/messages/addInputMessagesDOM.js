const messageManager= require("../dataManager/messagesManager");
const inputMessageDOM = require("./inputMessagesDOM");


const saveMessageEntryToDatabase = function(){

document.querySelector(".saveEntryButton").addEventListener("click", () => {

    // get form field values
    // creat object from them
    // add timestamp

    const newEntry = {
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }
    // post to api
    // clear form fields
    // put html representation to DOM
    messageManager.saveMessageEntry(newEntry).then(() => {
        inputMessageDOM.clearForm()


    })
})
}

module.exports = saveMessageEntryToDatabase