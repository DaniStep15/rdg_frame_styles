'use strict'
import '/src/styles/styles.scss'
import { filename, pseudo } from '/htmlWebpackConfig'

document.addEventListener('DOMContentLoaded', () => {
    let iframe = document.querySelector('#contentframe')
    let popup_wrap = document.querySelector('.popup-wrapper')
    popup_wrap && popup_wrap.classList.add(pseudo)
    iframe.src = filename
})
