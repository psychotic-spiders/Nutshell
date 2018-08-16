
    const messageEntriesDOM = Object.create(null, {
        renderMessageForm: {
            value: (data) => {
                console.log("mmmmmoooooooooo", data)
return `
    <div class = "wrapper" >
        <div class = "entriesDOM">
            <p class = "entryUserName">${data.userName}</p>
            <p class = "entryContent">${data.content}</p>
            <p><footer>
            <time class="entry__timestamp">Date: ${new Date(data.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                month: "long",
                day: "numeric"
            })}</time>
        </footer></p>
            <button class = "deleteButton" id = "delete--${data.id}">Delete </Button>
            <button class = "editButton" id = "edit--">Edit </Button>
        </div>
    </div>`
        }
    },
})
// console.log(${data.content})
module.exports = messageEntriesDOM