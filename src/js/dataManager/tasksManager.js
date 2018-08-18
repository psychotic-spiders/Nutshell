const taskManager = Object.create(null, {
    getAllTasks: {
        value: (id) => {
            return fetch(`http://localhost:8088/tasks?userID=${id}`).then(r => r.json())
        }
    },

    createTask: {
        value: (newTaskEntry) => {
            return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTaskEntry)
            }).then(r => r.json)
        }
    },

    deleteTask: {
        value: (id) => {
            return fetch(`http://localhost:8088/tasks/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        },
        updateTask: {
            value: (id) => {
                return fetch(`http://localhost:8088/tasks/${id}`, {
                    method: "PATCH"
                }).then(r => r.json)
            }
        },
    }
})

module.exports = taskManager