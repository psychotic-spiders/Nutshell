// console.log("messagesDOMjs")
// Author Dejan Stjepanovic


const inputMessageDOM = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryContent").value = " "
        }
    },

    renderEntryForm: {
        value: () => {
                return `
                <div class = "wrapperInputDOM">
                <div class = "inputDOM">
                <label for="entryormContent"></label>
                <textarea class= "entryForContent" id="entryContent" rows="12"></textarea>
            <button class="saveEntryButton">Post</button>
            </div>
            </div>`
            }
        },

    })

module.exports = inputMessageDOM