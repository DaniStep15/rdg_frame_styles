'use strict'
import '/src/styles/styles.scss'
import { filename, pseudo, icon_pseudo } from '/htmlWebpackConfig'

document.addEventListener('DOMContentLoaded', () => {
    let iframe = document.querySelector('#contentframe')
    let popup_wrap = document.querySelector('.popup-wrapper')
    let popup_icon = document.querySelector(icon_pseudo)
    popup_wrap && popup_wrap.classList.add(pseudo)
    if (popup_icon) popup_icon.style.display = 'block'

    iframe.src = filename
})
