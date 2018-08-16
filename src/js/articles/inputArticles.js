//Matts form

const inputArticles= Object.create(null, {
    clearArticleForm: {
        value: () => {
            document.querySelectorAll("#URLClass, symClass, titleClass").value = " "
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
                <br>
                <br>
                <input id="deleteField" type="text" placeholder="Delete this artcile" required>
                <button id="delete" type="delete">Delete Article by Title</button>
                <br>
            </div>`
            }
        },

    })

module.exports = inputArticles