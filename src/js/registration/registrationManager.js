console.log("registrationManger.js")
let userManager = require("../dataManager/userManager");
const $ = require("jquery");


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
            let newUser = userManager.createUser({
                firstName: document.querySelector("#firstName").value,
                lastName: document.querySelector("#lastName").value,
                userName: document.querySelector("#userName").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
                // date: Date.now()
            });
            newUser.done(function (msg) {
                alert("You have successfully registered. Please log in");
                $("#registrationPage").hide();
                $("#loginPage").show();
                // session.saveActiveUser();
            });
        }
    })

    dataManager.createUser(newUser).then(() => {
        registration.clearForm()
    })

})

module.exports = registrationManager