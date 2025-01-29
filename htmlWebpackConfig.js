'use strict'

let config = {
    registration_page_source: {
        template: './src/sub-pages/rdg-registration-list.html',
        chunks: ['iframe'],
        filename: 'rdg-registration-list.html',
        pseudo: 'registration_page_source',
        icon_pseudo: '.empty'
    },
    login_page_email: {
        template: './src/sub-pages/rdg-login-page.html',
        chunks: ['iframe'],
        filename: 'rdg-login-page.html',
        pseudo: 'login_page_email',
        icon_pseudo: '.login'
    },
    login_page_identity: {
        template: './src/sub-pages/rdg-login-page-identity.html',
        chunks: ['iframe'],
        filename: 'rdg-login-page-identity.html',
        pseudo: 'login_page_identity',
        icon_pseudo: '.login'
    },
    upload_page_first: {
        template: './src/sub-pages/rdg-upload-first.html',
        chunks: ['iframe'],
        filename: 'rdg-upload-first.html',
        pseudo: 'upload_page_first',
        icon_pseudo: '.service'
    }
}

module.exports = config['login_page_email']
