const articleManager = Object.create(null, {
getArticles: {
    value: () => {
        return fetch("http://localhost:8088/articles").then(r => r.json())
    }
},

deleteUser: {
    value: (id) => {
        return fetch("http://localhost:8088/entries/${id}", {
            method: "DELETE"
        }).then(r => r.json)
    },

    getSingleUsers: {
        value: () => {
            return fetch("http://localhost:8080/GetSingleUsers").then(r => r.json())
        }
    }
}})

module.exports = articleManager