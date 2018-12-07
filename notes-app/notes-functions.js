//read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

//remove a note from the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
  renderTodos(todos, filter)
}

//generate DOM structure for note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('span')
  const button = document.createElement('button')

  //setup the remove note button
  button.textContent = 'x'
  noteEl.appendChild(button)
  button.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })
  
  //setup the note title text
    if (note.title.length > 0) {
      textEl.textContent = note.title
    } else {
      textEl.textContent = 'unnamed note'
    }

    noteEl.appendChild(textEl)

    return noteEl
}

//render notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
  
    document.querySelector('#notes').innerHTML = ''
  
    filteredNotes.forEach(function (note) {
      const noteEl = generateNoteDOM(note)
      document.querySelector('#notes').appendChild(noteEl)
    })
  }
