console.log("registration.js")


const registration = Object.create(null, {
    /* clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = " ",
            document.querySelector("#entryContent").value = " "
        }
    }, */

    renderForm: {
        value: () => {
            return `
                <div class="wrapperRegistrationInputDOM">
                    <div id="logIn">
                        <h2>PLACE HOLDER FOR LOGO</h2>
                    </div>
                    <div class="registrationInputDOM">

                        <label for="firstName">First Name: </label>
                        <input required type="text" name="First Name" class="registrationInput" id="firstName"> <br>

                        <label for="lastName">Last Name: </label>
                        <input required type="text" name="Last Name" class="registrationInput" id="lastName"> <br>

                        <label for="userName">Username: </label>
                        <input required type="text" name="username" class="registrationInput" id="username"> <br>

                        <label for="email">Email: </label>
                        <input required type="text" name="email" class="registrationInput" id="email"> <br>

                        <label for="password">Password: </label>
                        <input required type="text" name="password" class="registrationInput" id="password"> <br>


                        <button id="registrationSubmitButton">Submit</button>
                    </div>
                </div>`
        }
    }
})



module.exports = registration