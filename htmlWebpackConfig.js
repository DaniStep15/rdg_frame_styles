'use strict'

let config = {
    registration_page_source : {
        template: './src/sub-pages/rdg-registration-list.html',
        chunks: ['iframe'],
        filename: 'rdg-registration-list.html',
        pseudo: 'registration_page_source'
    },
    login_page_email : {
        template: './src/sub-pages/rdg-login-page.html',
        chunks: ['iframe'],
        filename: 'rdg-login-page.html',
        pseudo: 'login_page_email'
    },
    login_page_identity : {
        template: './src/sub-pages/rdg-login-page-identity.html',
        chunks: ['iframe'],
        filename: 'rdg-login-page-identity.html',
        pseudo: 'login_page_identity'
    }
}

module.exports = config['login_page_identity']


