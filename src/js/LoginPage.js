const userManager = require("./dataManager/userManager.js");
const sessionActiveUser = require("./dataManager/sessionActiveUser")
const registration = require("./registration/registration.js")
const activateForm = require("./registration/registrationManager")
const loadScreen = require("./LoadUserScreen")
const $ = require("jquery")

//below is the DOM representation with filler for register
function logInPage() {
    document.getElementById("container").innerHTML = `
<h2>Login Page</h2>

    <div class = "container">
        <label <label for="uname"><b>Username</b></label>
        <input id="usrNameInput" type="text" placeholder="Enter Username" name="uname" required>

        <label for="email"><b>Email</b></label>
    <input id="emailInput" type="password" placeholder="Enter Email" name="email" required>

    <button id="logInButton" type="submit">Login</button>
    <br>
    <label> <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
    <br>
    <button id="registerButton" type="button">Register</ value="Register">

    </div>

`

    document.getElementById("logInButton").addEventListener("click", logInUser)
    document.getElementById("registerButton").addEventListener("click", regUser)


    function logInUser() {
        const userName = document.getElementById("usrNameInput").value
        const email = document.getElementById("emailInput").value
        userManager.getSingleUsers(userName, email).then(user => {
            //console.log(user);
            if (user.length === 0) {
                alert("please try again!")
            }
            else {
                //$("#mainPage").show();
                sessionActiveUser.saveActiveUser(user)
                $("#container").empty();
                loadScreen();
                //console.log(user)
            }
            // Setting flag variable to false
            //let userAuthenticated = false;
            // Loop over all users to see if input matches an existing user
            //allUsers.forEach(user => {
            //if (user.userName === userName && user.email === email) {


        })
    }

    function regUser() {
        $("#container").empty()
        document.querySelector("#container").innerHTML = registration.renderForm();
        activateForm()

    }
//loadScreen()
//once log in is pressed need to add "main page"?

//whatever userID is loaded will match up with the different tables. So if task.userID = userID then load

}
module.exports = logInPage