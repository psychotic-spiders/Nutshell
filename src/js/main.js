console.log("MEOW")

const sessionActiveUser = require("./dataManager/sessionActiveUser");
const registration = require("./registration/registration");
// const registrationManager = require("./registration/registrationManager");
const articleManager = require("./dataManager/articlesManager");

document.querySelector("#registrationForm").innerHTML = registration.renderForm();


function articleList() { articleManager.getArticles().then(r =>{
    r.forEach(entry => { console.log(entry)})
})
}
articleList()

