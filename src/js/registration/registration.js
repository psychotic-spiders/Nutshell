// Mike - Registration

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
                    <form class="registrationInputDOM">

                        <label for="firstName">First Name: </label>
                        <input required type="text" name="firstName" class="registrationInput" id="firstName" value="First Name"> <br>

                        <label for="lastName">Last Name: </label>
                        <input required type="text" name="lastName" class="registrationInput" id="lastName" value="Last Name"> <br>

                        <label for="userName">Username: </label>
                        <input required type="text" name="userName" class="registrationInput" id="userName" value="Username"> <br>

                        <label for="email">Email: </label>
                        <input required type="text" name="email" class="registrationInput" id="email" value="Email"> <br>

                        <label for="password">Password: </label>
                        <input required type="text" name="password" class="registrationInput" id="password" value="Password"> <br>


                        <button id="registrationSubmitButton">Submit</button>
                    </form>
                </div>`
        }
    }
})

// Labels for renderForm
/*  <label for= "firstName" > First Name: </label>
    <label for="lastName">Last Name: </label>
    <label for="userName">Username: </label>
    <label for="email">Email: </label>
    <label for="password">Password: </label> */

module.exports = registration