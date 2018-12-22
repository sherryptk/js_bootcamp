const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const noteID = location.hash.substring(1)
const timeSection = document.querySelector('#time-section')
const timestamp = document.createElement('p')

let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteID
})

if (!note) {
    location.assign('/index.html')
}

//add title to title element
titleEl.value = note.title

//add the last edited time
const renderLastEditedTime = function () {
    const timeAgo = moment(note.updatedAt).startOf('minute').fromNow()
    timestamp.textContent = `Last edited ${timeAgo}`
    timeSection.appendChild(timestamp)
}

renderLastEditedTime()
//add body to body element
bodyEl.value = note.body

titleEl.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    renderLastEditedTime()
    saveNotes(notes)
})

bodyEl.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    renderLastEditedTime()
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteID
        })

    if (!note) {
        location.assign('/index.html')
    }

    titleEl.value = note.title
    bodyEl.value = note.body 
    note.updatedAt = moment().valueOf()   
    renderLastEditedTime()
    }
})