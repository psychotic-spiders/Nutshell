const messageArticlesDOM = Object.create(null, {
    articleHTML: {
        value: (data) => {
            return `
            <div class = "wrapper" >
                <div class = "inputArticleDOM" >
                <h3>${data.content}</h3>
                    <p>${data.Synopsis}</p>
                    <p>${data.URL}</p>
                        <button id="delete!${data.id}"type="button">Delete</button>
                </div>
            </div>`
        }
},
})


module.exports = messageArticlesDOM