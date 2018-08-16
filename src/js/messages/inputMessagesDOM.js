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
                <label for="entryContent">Content:</label>
                <textarea class= "entryContent" id="entryContent" rows="12"></textarea>
            <button class="saveEntryButton">Save </button>
            </div>
            </div>`
            }
        },

    })

module.exports = inputMessageDOM