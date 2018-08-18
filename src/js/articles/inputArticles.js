//MH
const inputArticles= Object.create(null, {
    clearArticleForm: {
        value: () => {
            document.querySelector("#URLClass").value = " ",
            document.querySelector("#symClass").value = " ",
            document.querySelector("#titleClass").value = " ",
            alert("article submitted!");
        }
    },

    renderArticleForm: {
        value: () => {
                return `
                <div class = "wrapperArticlesInput">
                    <h3>Your Articles Feed</h3>
                        <input type="text" placeholder="Enter Your Title" id ="titleClass" class="titleClass" required>
                        <input type="text" placeholder="Enter Synoposis info" id = "symClass" class="symClass"  required>
                        <input type="text" placeholder="Enter URL" class="URLClass" id="URLClass"required>
                            <button id=save class="saveArticlebutton" type="submit">Submit Article</button>
            </div>`
            }
        },

    })

module.exports = inputArticles