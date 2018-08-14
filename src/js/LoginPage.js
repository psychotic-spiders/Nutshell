const userManager = require("./dataManager/userManager");
const $ = require("jquery")

function logInPage () {
document.getElementById("logIn").innerHTML = `
<h2>Login Page</h2>
<form action = " /action_page.php">
    <div class = "container">
        <label <label for="uname"><b>Username</b></label>
        <input id="usrNameInput" type="text" placeholder="Enter Username" name="uname" required>

        <label for="psw"><b>Password</b></label>
    <input id="pwInput" type="password" placeholder="Enter Password" name="psw" required>

    <button id="logInButton" type="submit">Login</button>
    <br>
    <label> <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
    <br>
    <input type="button" onclick="location.href='http://www.cnn.com';" value="Register" />

    </div>
    </form>
`
//class for specific button/value and put in variable. Then below make that userNameImput
const userNameInput = document.getElementById("usrNameInput")
const passwordInput = document.getElementById("pwInput")
document.getElementById("logInButton").addEventListener("click", logInUser)



function logInUser () {
    userManager.getAllUsers().then(allUsers => {
        console.log(allUsers)
        // Setting flag variable to false
        let userAuthenticated = false;
        // Loop over all users to see if input matches an existing user
        allUsers.forEach(user => {
            if (user.userName === userNameInput.value && user.password === passwordInput.value) {

                // Matching user so set flag variable to true
                userAuthenticated = true;
                $("#logIn").hide();
               $("#mainPage").show();
                dashboard()
                session.saveActiveUser(user);
            }

})

})
}

}
module.exports = logInPage