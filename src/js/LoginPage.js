const userManager = require("./dataManager/userManager.js");
const sessionActiveUser = require(".sessionActiveUser.js")
const $ = require("jquery")

function logInPage () {
document.getElementById("logIn").innerHTML = `
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
    <input type="button" onclick="location.href='http://www.cnn.com';" value="Register" />

    </div>

`
//class for specific button/value and put in variable. Then below make that userNameImput

document.getElementById("logInButton").addEventListener("click", logInUser)



function logInUser () {
    userManager.getAllUsers(userName, email).then(user => {
        console.log(user);
        //const userName = document.getElementById("usrNameInput").value
        //const email = document.getElementById("emailInput").value
        // Setting flag variable to false
        //let userAuthenticated = false;
        // Loop over all users to see if input matches an existing user
        //allUsers.forEach(user => {
            //if (user.userName === userName && user.email === email) {



                // Matching user so set flag variable to true
               // userAuthenticated = true;
                //$("#logIn").hide();
               //$("#mainPage").show();
               //how to find the page tied to specific user?
                //dashboard()
                //session.saveActiveUser(users);
           // }



})
}

}
module.exports = logInPage