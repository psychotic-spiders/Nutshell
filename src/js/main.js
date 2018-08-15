console.log("MEOW")
const $ = require("jquery")
const logInPage = require("./LoginPage.js")

//const sessionActiveUser = require("./dataManager/sessionActiveUser.js")

const registration = require("./registration/registration");
const activateForm = require("./registration/registrationManager");
const articleManager = require("./dataManager/articlesManager");

// Registration - Mike
//document.querySelector("#registrationForm").innerHTML = registration.renderForm();
//activateForm()



function articleList() {
    articleManager.getArticles()
    .then(r => {
        r.forEach(entry => {
            console.log(entry)})
    })
}

articleList()
logInPage()










