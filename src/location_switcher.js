'use strict'

let config = {
    registration: {
        template: './src/sub-pages/rdg-registration-list.html',
        chunks: ['main']
    },
    upload: {
        template: './src/sub-pages/rdg-upload-first.html',
        chunks: ['main']
    },
    login_mail: {
        template: './src/sub-pages/rdg-login-page.html',
        chunks: ['main']
    },
    login_identity: {
        template: './src/sub-pages/rdg-login-page-identity.html',
        chunks: ['main']
    }
}

module.exports = config['upload']
