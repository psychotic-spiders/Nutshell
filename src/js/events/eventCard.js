function eventCard(title, location, eventDate, content, userName) {
    return `
        <div class="card text-center">
            <div class="card-header">
                <h4>${title}</h4>
                <h3>${eventDate} | ${location}</h3>
            </div>
            <div class="card-body">
                <p class="card-text">${content}</p>
            </div>
            <div class="card-footer">
                <p class="card-text">Created by: ${userName}</p>
            </div>
            <button id="editEventsButton">Edit</button>
            <button id="deleteEventsButton">Delete</button>
            </div>
    `;
}

module.exports = eventCard