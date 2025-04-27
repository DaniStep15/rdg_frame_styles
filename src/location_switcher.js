'use strict'
const path = require('path')
let config = {
    registration: {
        htmlfile: { template: './src/sub-pages/rdg-registration-list.html', chunks: ['main'] },
        key: 'registration'
    },
    upload: {
        htmlfile: { template: './src/sub-pages/rdg-upload-first.html', chunks: ['main'] },
        key: 'upload'
    },
    login_mail: {
        htmlfile: { template: './src/sub-pages/rdg-login-page.html', chunks: ['main'] },
        key: 'login_mail'
    },
    login_identity: {
        htmlfile: { template: './src/sub-pages/rdg-login-page-identity.html', chunks: ['main'] },
        key: 'login_identity'
    }
}

module.exports = config['login_identity']
