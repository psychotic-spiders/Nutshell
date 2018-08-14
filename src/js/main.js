console.log("MEOW")

const sessionActiveUser = require("./dataManager/sessionActiveUser");
const registration = require("./registration/registration");
const registrationManager = require("./registration/registrationManager");

document.querySelector("#registrationForm").innerHTML = registration.renderForm()