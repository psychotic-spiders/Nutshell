// Matt Promises
const messageManager = Object.create(null, {
    getMessages: {
        value: () => {
            return fetch("http://localhost:8088/messages").then(r => r.json())
        }
    },

    deleteMessages: {
        value: (id) => {
            return fetch(`http://localhost:8088/messages${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        }},
        saveMessageEntry: {
            value: (newEntry) => {
                return fetch("http://localhost:8088/messages", {
                    method: "POST",
                    headers: {

                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newEntry)
                }).then(r => r.json)
            }
        },

 })

 module.exports = messageManager