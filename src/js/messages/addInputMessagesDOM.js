const messageManager = require("../dataManager/messagesManager")
const inputMessageDOM = require("./inputMessagesDOM");
const messageEntriesDOM = require("./messageEntriesDOM");
const session = require("../dataManager/sessionActiveUser");

// document.querySelector("#inputMessageDOM").innerHTML = inputMessageDOM.renderEntryForm();
const editMode = {
    "enable": false,
    "entryId": null
}

const populateMessageEntriesDOM = function () {

    // document.querySelector("body").addEventListener("click", () => {
    //     if(event.target.className === "saveEntryButton"){




    document.querySelector(".saveEntryButton").addEventListener("click", () => {
        //  let inputDOM = document.getElementById(".inputDOM")
            // inputDOM.scrollIntoView(false);
        // get form field values
        // creat object from them
        // add timestamp
        if (editMode.enable === false) {

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
                messageManager.getMessages().then(result => {
                    result.forEach(entry => {


                        document.querySelector("#messageEntriesDOM").innerHTML += messageEntriesDOM.renderMessageForm(entry)

                    })
                })

            })
        }
        else {
            const editEntry = {
                content: document.querySelector("#entryContent").value

            }
            messageManager.replaceEntry(editMode.entryId,editEntry).then(()=>{
                inputMessageDOM.clearForm()
                editMode.enable = false;
                editMode.entryId = null;
                document.querySelector("#messageEntriesDOM").innerHTML = ""
                messageManager.getMessages().then(result => {
                    result.forEach(entry => {


                        document.querySelector("#messageEntriesDOM").innerHTML += messageEntriesDOM.renderMessageForm(entry)

                    })
                })
            }
            )
        }

    })
    //       }

    // })
}

// edit button
document.querySelector("#messageEntriesDOM").addEventListener("click", (event) => {
    if (event.target.id.split("--")[0] === "edit") {
        let messageId = event.target.id.split("--")[1]
        messageManager.getSingleMessage(messageId)
            .then(messageObject => {
                document.querySelector("#entryContent").value = messageObject.content
                editMode.enable = true;
                editMode.entryId = messageId;
            }

            )



    }
})

module.exports = populateMessageEntriesDOM