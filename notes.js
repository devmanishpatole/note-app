// Dependencies
const fs = require('fs')
const constants = require('./constants')
const validator = require('validator')
const chalk = require('chalk')

// Logging themes
const log = console.log
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const success = chalk.green.bold.inverse

// Adding note to file
const addNote = function(data) {
    if (!validator.isEmpty(data)) {
        fs.appendFileSync(constants.file_name, data)
        log(success('Note added successfully'))
    } else {
        log(error('Note data is empty, please enter valid note data'))
    }
}

// Exporting methods
module.exports = {
    'addNote': addNote
}