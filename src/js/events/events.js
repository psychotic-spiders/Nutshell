// Mike - Events
let db = require("../dataManager/eventsManager");

const events = Object.create(null, {
    renderEvents: {
        value: () => {
            return `
                <div id="wrapperEventsDOM">
                    <div class="titleBlock">
                        <h2>EVENTS</h2>
                    </div>
                    <div class="eventsDOM">
                        <card>
                        </card>
                    </div>
                </div>
            `
        }
    },

    eventsForm: {
        value: () => {
            return `
                <div id="wrapperEventsFormDOM">
                    <div class="titleBlock">
                        <h2>New Event</h2>
                    </div>
                    <div class="eventsForm">
                        <input required type="text" class="eventsInput" id="eventsTitle" placeholder="Title"> <br>
                        <textarea required id="eventsContent" placeholder="Describe your event..." rows="10">
                    </div>
                </div>
            `
        }
    },

    saveEvent: {
        value: () => {

        }
    }
})

module.exports = events