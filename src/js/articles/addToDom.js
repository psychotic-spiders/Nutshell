//to populate in reverse order to DOM// Matt


const articleManager= require("../dataManager/articlesManager")
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
populateMessageEntriesDOM()