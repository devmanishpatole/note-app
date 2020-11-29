const chalk = require('chalk')

// Logging themes
const log = console.log
const error_style = chalk.bold.red
const warning_style = chalk.keyword('orange')
const success_style = chalk.green.bold.inverse

const warning = (data) => log(warning_style(data))

const success = (data) => log(success_style(data))

const error = (data) => log(error_style(data))

const print = (data) => log(data)

module.exports = {
    warning: warning,
    success: success,
    error: error,
    print: print
}