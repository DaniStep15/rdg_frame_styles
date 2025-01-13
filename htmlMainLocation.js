'use strict'

let config = {
    index : {
        template: './src/index.html',
        chunks: ['main'],
    },
    mediwho : {
        template: './src/mediwho.html',
        chunks: ['main'],
    },
}

module.exports = config['mediwho']