// Mike - Registration

const registration = Object.create(null, {
    renderForm: {
        value: () => {
            return `
                <h3>New User Form</h3>
                <form class="registrationInputDOM">

                    <input required type="text" name="firstName" class="registrationInput" id="firstName" placeholder="First Name"> <br>

                    <input required type="text" name="lastName" class="registrationInput" id="lastName" placeholder="Last Name"> <br>

                    <input required type="text" name="userName" class="registrationInput" id="userName" placeholder="Username"> <br>

                    <input required type="text" name="email" class="registrationInput" id="email" placeholder="Email"> <br>

                    <input required type="text" name="password" class="registrationInput" id="password" placeholder="Password"> <br>

                    <button id="registrationSubmitButton">Submit</button>
                </form>
            `
        }
    }
})

module.exports = registration