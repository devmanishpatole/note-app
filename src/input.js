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
        notes.addNote(argv.title, argv.body)
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
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'List notes',
    handler: function(argv) {
        log.print(notes.listNotes())
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
        log.print(notes.readNote(argv.title))
    }
})

yargs.parse()