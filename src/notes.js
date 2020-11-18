// Dependencies
const fs = require('fs')
const constants = require('./utility/constants')
const validator = require('validator')
const log = require('./utility/logging.js')

// Adding note to file
const addNote = function(data) {
    if (!validator.isEmpty(data)) {
        fs.appendFileSync(constants.FILE_NAME, data)
        log.success('Note added successfully')
    } else {
        log.error('Note data is empty, please enter valid note data')
    }
}

// Exporting methods
module.exports = {
    'addNote': addNote
}