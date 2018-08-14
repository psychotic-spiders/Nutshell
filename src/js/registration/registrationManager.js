console.log("registrationManger.js")

document.querySelector("#registrationSubmitButton").addEventListener("click",() => {

    PuserManager.PgetAllUsers().then(allUsers => {
        let validFormInput = true;

        allUsers.forEach(user => {
            if(users.email === document.querySelector("#email").value) {
                validFormInput = false;
                alert("This email already exists. Please try again.")
            }
        })
        if(validFormInput) {
            let request = userManager.saveNewUser({
                
            })
        }
    })

    const newUser = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        userName: document.querySelector("#userName").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        // date: Date.now()
    }

    dataManager.saveNewUser(newUser).then(() => {
        registration.clearForm()
    })

})

module.exports = registrationManager

register.onclick = function () {
    userManager.getAllusers().then(allUsers => {
        // Setting flag variable to false
        let validUserInput = true;
        // Loop over all users to see if input matches an existing user
        allUsers.forEach(user => {
            if ( user.email === userEmailInput.value) {
                validUserInput = false;
                alert("This Email already exists. Please try again.");
            }
        })
        if (validUserInput) {
            let request = userManager.createusers({
                "firstName": userFirstNameInput.value,
                "lastName": userLastNameInput.value,
                "password": userPasswordInput.value,
                "email": userEmailInput.value
            });
            request.done(function (msg) {
                alert("You have successfully registered. Please log in");
                $("#registrationPage").hide();
                $("#loginPage").show();
                // session.saveActiveUser();
            });
        }
    })
};