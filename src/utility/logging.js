const chalk = require('chalk')

// Logging themes
const log = console.log
const error_style = chalk.bold.red
const warning_style = chalk.keyword('orange')
const success_style = chalk.green.bold.inverse

const warning = function(data) {
    log(warning_style(data))
}

const success = function(data) {
    log(success_style(data))
}

const error = function(data) {
    log(error_style(data))
}

module.exports = {
    'warning': warning,
    'success': success,
    'error': error
}