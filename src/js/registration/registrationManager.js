// Mike - Registration

let userManager = require("../dataManager/userManager");

const activateForm = function () {
    document.querySelector("#registrationSubmitButton").addEventListener("click", () => {
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

                alert("You have successfully registered. Please log in.")
            }
        })
    })
}

module.exports = activateForm