const userManager = Object.create(null, {
    //get all users. etc. fetch's       MVH
    getAllUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },

    getSingleUsers: {
        value: () => {
            return fetch(`http://localhost:8080/users${id}`).then(r => r.json())
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
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        },
        updateUsers: {
            value: () => {
                return fetch(`http://localhost:8088/users${id}`, {
                    method: "PUT"
                }).then(r => r.json)
            }
        },
    }
})

module.exports = userManager