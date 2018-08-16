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
                    <form class="registrationInputDOM">

                        <input required type="text" name="firstName" class="registrationInput" id="firstName" placeholder="First Name"> <br>

                        <input required type="text" name="lastName" class="registrationInput" id="lastName" placeholder="Last Name"> <br>

                        <input required type="text" name="userName" class="registrationInput" id="userName" placeholder="Username"> <br>

                        <input required type="text" name="email" class="registrationInput" id="email" placeholder="Email"> <br>

                        <input required type="text" name="password" class="registrationInput" id="password" placeholder="Password"> <br>

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