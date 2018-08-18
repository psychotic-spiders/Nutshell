// Mike - Events
const eventsForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#eventsForm").value = ""
        }
    },

    renderEventsForm: {
        value: () => {
            return `
                <h3>New Events Form</h3>
                <div class="eventsInputDOM">
                    <input required type="text" name="title" class="eventsInput" id="eventTitle" placeholder="Title"> <br>
                    <input required type="text" name="date" class="eventsInput" id="eventDate" placeholder="Date"> <br>
                    <input required type="text" name="location" class="eventsInput" id="eventLocation" placeholder="Location"> <br>
                    <textarea class="eventsInput" id="eventContent" rows="10"></textarea>

                    <button id="saveEventsButton">Save</button>
                </div>
            `
        }
    },

})


module.exports = eventsForm