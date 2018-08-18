//Matt copy form for posting articles to DOM.

const articleManager = require("../dataManager/articlesManager")
const inputArticles = require("./inputArticles");
const session = require("../dataManager/sessionActiveUser");
const messageArticlesDOM = require("./messageArticlesDom")

const saveArtcileToDatabase = function () {

    document.querySelector(".saveArticlebutton").addEventListener("click", () => {

        // get form field values, add timestamp, URL, Content

        const userObject = session.getActiveUser()
        // send data to session storage by category Matt
        const newArticle = {
            content: document.querySelector("#titleClass").value,
            // userID: userObject.id,
            // userName: userObject.username,
            URL: document.querySelector("#URLClass").value,
            date: Date.now(),
            Synopsis: document.querySelector("#symClass").value,
        }

        articleManager.saveArticleEntry(newArticle).then(() => {
            inputArticles.clearArticleForm()

            document.querySelector("#inputArticleDOM").innerHTML = "";
            artcileManager.getArticles().then(result =>{
                result.forEach(entry => {


            document.querySelector("#inputArticleDOM").innerHTML += messageArticlesDOM.articleHTML(entry)
        })

            })
        })
    })
}

module.exports = saveArtcileToDatabase


