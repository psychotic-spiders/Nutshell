console.log("MEOW")
const $ = require("jquery")
const logInPage = require("./LoginPage.js")

//const sessionActiveUser = require("./dataManager/sessionActiveUser.js")
const articleManager = require("./dataManager/articlesManager.js")


function articleList() {
    articleManager.getArticles()
    .then(r => {
        r.forEach(entry => {
            console.log(entry)})
    })
}

articleList()
logInPage()










