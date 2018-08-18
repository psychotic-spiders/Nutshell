//delete page for my itme. remember to log! Matt

const articleManager = require("../dataManager/articlesManager")
const populateArticleEntriesDOM = require("./articleList")

function removeArticles () {
    document.querySelector("#articleEntriesDOM").addEventListener("click", (event) => {
        console.log("deleted")
        if(event.target.id.split("--")[0] === "deleteArticle")
        {console.log("buh_bye")
            let id = event.target.id.split("--")[1]
            articleManager.deleteArticles(id).then(()=> {
                populateArticleEntriesDOM()
        })
    }
        })}

module.exports = removeArticles