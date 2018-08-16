const taskManager = Object.create(null, {
    getAllTasks: {
        value: (id) => {
            return fetch(`http://localhost:8088/tasks?userID=${id}`).then(r => r.json())
        }
    },

    createTask: {
        value: () => {
            return fetch("http://localhost:8088/CreateUsers", {
                method: "POST"
            }).then(r => r.json)
        }
    },

    deleteTask: {
        value: (id) => {
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        },
        updateTask: {
            value: () => {
                return fetch("http://localhost:8088/update", {
                    method: "PUT"
                }).then(r => r.json)
            }
        },
    }
})

module.exports = taskManager