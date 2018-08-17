// Mike - Registration

let userManager = require("../dataManager/userManager");
let session = require("../dataManager/sessionActiveUser");
const logInPage =require("../LoginPage");
const $ = require("jquery");


const activateForm = function () {
    document.querySelector("#registrationSubmitButton").addEventListener("click", () => {
        const logInPage =require("../LoginPage");
        userManager.getAllUsers().then(allUsers => {
            let validFormInput = true;

            allUsers.forEach(users => {
                if (users.email === document.querySelector("#email").value || users.userName === document.querySelector("#userName").value) {
                    validFormInput = false;
                    alert("This username or email already exists. Please try again.")
                }
            })
            if (validFormInput) {
                userManager.createUsers({
                    firstName: document.querySelector("#firstName").value,
                    lastName: document.querySelector("#lastName").value,
                    userName: document.querySelector("#userName").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });

                //newUser.done(function () {
                    alert("You have successfully registered. Please log in")
                    $("#container").empty();
                    logInPage()
                    //$("#container").html(logInPage());
                    // $("#registrationPage").hide();
                    //logInPage();
                    //document.querySelector("#container").innerHTML = logInPage();
                    //$("#loginPage").show();
                    // session.saveActiveUser();
                //});
            }
        })
        //$("#container").empty()


        /* userManager.createUser(newUser).then(() => {
            registration.clearForm()
        }) */

    })
}

module.exports = activateForm