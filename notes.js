const fs = require('fs')

const FILE_NAME = 'notes.txt'

const addNote = function(data) {
    fs.appendFileSync(FILE_NAME, data)
}

module.exports = {
    'addNote': addNote
}