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
    },
    exist_service: {
        htmlfile: { template: './src/sub-pages/rdg-exist-service.html', chunks: ['main'] },
        key: 'exist_service'
    },
    order_description: {
        htmlfile: { template: './src/sub-pages/rdg-order-description.html', chunks: ['main'] },
        key: 'order_description'
    }
}

module.exports = config['order_description']
