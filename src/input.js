const yargs = require('yargs')
const notes = require('./notes.js')
const log = require('./utility/logging.js')

yargs.command({
    command: 'add',
    description: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log.success('Adding new note')
    }
})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log.success('Removing a note: ' + argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'List notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log.success('Notes list')
    }
})

yargs.command({
    command: 'read',
    description: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log.success('Reading a note')
    }
})

yargs.parse()