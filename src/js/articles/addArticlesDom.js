//Matt copy form for posting articles to DOM.

const articleManager = require("../dataManager/articlesManager")
const inputArticles = require("./inputArticles");
const session = require("../dataManager/sessionActiveUser");

const saveArtcileToDatabase = function(){

document.querySelector(".saveArticlebutton").addEventListener("click", () => {

    // get form field values, add timestamp

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
    // post to api
    // clear form fields
    // put html representation to DOM
    articleManager.saveArticleEntry(newArticle).then(() => {
        inputArticles.clearArticleForm()

    })
})
}

module.exports = saveArtcileToDatabase