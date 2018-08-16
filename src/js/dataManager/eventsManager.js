// Matt Promises
const eventManager = Object.create(null, {
    getEvent: {
        value: () => {
            return fetch("http://localhost:8088/events").then(r => r.json())
        }
    },

    deleteEvents: {
        value: (id) => {
            return fetch(`http://localhost:8088/events${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        }
    },

    postEvents: {
        value: (newEvent) => {
            return fetch("http://localhost:8088/events", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEvent)
            }).then(r => r.json)
        }
    }
})

 module.exports = eventManager