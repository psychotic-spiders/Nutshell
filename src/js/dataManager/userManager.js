const userManager = Object.create(null, {
    //get all users. etc. fetch's       MVH
    getAllUsers: {
        value: (userName, email) => {
            return fetch(`http://localhost:8088/users?userName=${userName}&email=${email}`).then(r => r.json())
        }
    },

    /*
    value: (email, username) => {
        return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
        .then(r => r.json())
}
},*/

    getSingleUsers: {
        value: () => {
            return fetch("http://localhost:8080/GetSingleUsers").then(r => r.json())
        }
    },

    createUser: {
        value: () => {
            return fetch("http://localhost:8088/CreateUsers", {
                method: "POST"
            }).then(r => r.json)
        }
    },

    deleteUser: {
        value: (id) => {
            return fetch("http://localhost:8088/entries/${id}", {
                method: "DELETE"
            }).then(r => r.json)
        },
        updateUsers: {
            value: () => {
                return fetch("http://localhost:8088/update", {
                    method: "PUT"
                }).then(r => r.json)
            }
        },
    }
})

module.exports = userManager