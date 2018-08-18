// Matt Promises
// ?_order=desc&_sort=id will sort in reverse


const articleManager = Object.create(null, {
    getArticles: {
        value: () => {
            return fetch("http://localhost:8088/articles?_order=desc&_sort=id").then(r => r.json())
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