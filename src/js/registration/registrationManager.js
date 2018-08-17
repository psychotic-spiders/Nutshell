// Mike - Registration

let userManager = require("../dataManager/userManager");
let session = require("../dataManager/sessionActiveUser");
const logInPage =require("../LoginPage.js");
const $ = require("jquery");


const activateForm = function () {
    document.querySelector("#registrationSubmitButton").addEventListener("click", () => {

        userManager.getAllUsers().then(allUsers => {
            let validFormInput = true;

            allUsers.forEach(users => {
                if (users.email === document.querySelector("#email").value) {
                    validFormInput = false;
                    alert("This email already exists. Please try again.")
                }
            })
            if (validFormInput) {
                userManager.createUsers({
                    firstName: document.querySelector("#firstName").value,
                    lastName: document.querySelector("#lastName").value,
                    userName: document.querySelector("#userName").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                    // date: Date.now()
                });

                //newUser.done(function () {
                    alert("You have successfully registered. Please log in")
                    $("#container").empty();
                    //$("#container").html(logInPage());
                    // $("#registrationPage").hide();
                    logInPage()
                    //document.querySelector("#container").innerHTML = logInPage();
                    //$("#loginPage").show();
                    // session.saveActiveUser();
                //});
            }
        })
        //$("#container").empty()
        //logInPage()

        /* userManager.createUser(newUser).then(() => {
            registration.clearForm()
        }) */

    })
}

module.exports = activateForm