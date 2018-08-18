// Matt Promises
const articleManager = Object.create(null, {
    getArticles: {
        value: () => {
            return fetch("http://localhost:8088/articles").then(r => r.json())
        }
    },

    deleteArticles: {
        value: (id) => {
            return fetch(`http://localhost:8088/articles/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        },
    },
    saveArticleEntry: {
        value: (newEntry) => {
            return fetch("http://localhost:8088/articles", {
                method: "POST",
                headers: {

                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            }).then(r => r.json)
        }
    },
})

module.exports = articleManager