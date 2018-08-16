const messageManager= require("../dataManager/messagesManager")
const inputMessageDOM = require("./inputMessagesDOM");
const messageEntriesDOM = require("./messageEntriesDOM");
const session = require("../dataManager/sessionActiveUser");


const populateMessageEntriesDOM = function(){

document.querySelector(".saveEntryButton").addEventListener("click", () => {
//  let inputDOM = document.getElementById(".inputDOM")
//     inputDOM.scrollIntoView(false);
    // get form field values
    // creat object from them
    // add timestamp
const userObject = session.getActiveUser()
// console.log("bloop", userObject)
    const newEntry = {
        content: document.querySelector("#entryContent").value,
        userID: userObject.id,
        userName: userObject.username,
        date: Date.now()
    }
    // post to api
    // clear form fields
    // put html representation to DOM
    messageManager.saveMessageEntry(newEntry).then(() => {
        inputMessageDOM.clearForm()

        document.querySelector("#messageEntriesDOM").innerHTML = "";
        messageManager.getMessages().then(result =>{
            result.forEach(entry => {


                document.querySelector("#messageEntriesDOM").innerHTML += messageEntriesDOM.renderMessageForm(entry)
            })
        })

    })
})
}

module.exports = populateMessageEntriesDOM