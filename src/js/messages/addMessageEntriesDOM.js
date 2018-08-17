const messageManager= require("../dataManager/messagesManager")
const messageDOMManager= require("./messageEntriesDOM")
// GET ALL ENTRIES ONTO THE DOM
function populateMessageEntriesDOM() {
    document.querySelector("#messageEntriesDOM").innerHTML = "";
    messageManager.getMessages().then(result => {
        console.log(result.length)
        result.forEach(entry => {
            // puts existing messages onto DOM
            document.querySelector("#messageEntriesDOM").innerHTML += messageDOMManager.renderMessageForm(entry)
        })

    })
}


//populateMessageEntriesDOM()
document.querySelector("#messageEntriesDOM").addEventListener("click", (event) => {
    console.log(event);
    if(event.target.id.split("--")[0] === "delete"){
        console.log("Hey!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
        //calls the deleteEntries function so that the entry is deleted on the Database.
        messageManager.deleteMessages(id).then(()=> {
            //populateMessageEntriesDOM()
        })

    }

})


module.exports = populateMessageEntriesDOM;