// Dependencies
const fs = require('fs')
const constants = require('./utility/constants')
const validator = require('validator')
const log = require('./utility/logging.js')

// Adding note to file
const addNote = (title, body) => {

    if (validator.isEmpty(title) || validator.isEmpty(body)) {
        log.error('Please enter valid title and body!')
        return
    }

    const notes = loadNotes()
    if (notes.find(note => note.title === title)) {
        log.error('Title already exist')
        return
    }
    notes.push({
        'title': title,
        'body': body
    })
    saveNote(notes)
    log.success('Note added successfully!')
}

const removeNote = title => {
    const notes = loadNotes()

    for (let note of notes) {
        if (note.title === title) {
            notes.splice(notes.indexOf(note), 1)
            saveNote(notes)
            log.success('Note removed!')
            return
        }
    }
    log.error('Note not found!')

    // Remove note using filter
    // saveNote(notes.filter(note => note.title !== title))
}

const listNotes = () => loadNotes()

const saveNote = notes => fs.writeFileSync(constants.FILE_NAME, JSON.stringify(notes))

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync(constants.FILE_NAME).toString())
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
    const note = loadNotes().find(note => note.title === title)
    return note ? note.body : false
}


// Exporting methods
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}