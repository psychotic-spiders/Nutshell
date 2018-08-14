console.log("MEOW")

const sessionActiveUser = require("./dataManager/sessionActiveUser")
const articleManager = require("./dataManager/articlesManager")
const eventManager = require("./dataManager/eventsManager")
const taskManager = require("./dataManager/tasksManager")
const userMangager = require("./dataManager/userManager")
const messageManager = require("./dataManager/messagesManager")
const friendshipManager = require("./dataManager/friendshipsManager")

//MVH and Dejan envoke artcileList onto console.log

function articleList() {
    articleManager.getArticles().then(r => {
        r.forEach(entry => { console.log(entry) })
    })
}
articleList()


function articleDelete() {
    articleManager.deleteArticles().then(r => {
        r.forEach(entry => { console.log(entry) })
    })
}
articleDelete()

function articlePost() {
    articleManager.postArticles().then(r => {
        r.forEach(entry => { console.log(entry) })
    })
}

articlePost("taco");