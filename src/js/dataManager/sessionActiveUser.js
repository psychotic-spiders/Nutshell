//Purpose: Manage active user in session storage
//Author:  Dejan Stjepanovic

const sessionActiveUser = Object.create(null, {

    //get user from session storage
    "getActiveUser": {
        value: () =>
            //note the need below to JSON.parse the item we get from session storage.
           JSON.parse(sessionStorage.getItem("ActiveUser"))
        },
    //save user to session storage
    "saveActiveUser": {
        value: (users) => {
             //note the need below to JSON.stringify the item we get from session storage.
            sessionStorage.setItem("ActiveUser", JSON.stringify({
                    "id": users.id,
                    "username": users.userName,
                    "email": users.email
                }))
        }
    },
    //remove user from session storage
    "clearActiveUser": {
        value: () => {
            sessionStorage.removeItem("ActiveUser")
        }
    }

})


module.exports = sessionActiveUser


