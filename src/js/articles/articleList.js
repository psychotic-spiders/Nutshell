//to populate in reverse order to DOM// Matt
const articleManager= require("../dataManager/articlesManager")
const messageArticlesDOM = require("./messageArticlesDom")


// GET ALL ENTRIES ONTO THE DOM
function populateArticleEntriesDOM() {
    document.querySelector("#articleEntriesDOM").innerHTML = "";
    articleManager.getArticles().then(result => {
        result.forEach(entry => {
            // puts existing messages onto DOM
            document.querySelector("#articleEntriesDOM").innerHTML += messageArticlesDOM.articleHTML(entry)
        })

})}

module.exports = populateArticleEntriesDOM