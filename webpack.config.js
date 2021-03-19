const { argv } = require('yargs')
console.log('🍌', argv)

const _mode = argv.mode || 'development';
const envConfig = require(`./build/webpack.${_mode}.js`)

module.exports = {
    entry:{},
    output:{},
    module:{},
    plugins:{}
}