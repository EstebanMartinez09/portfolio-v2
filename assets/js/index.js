
const menu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')
const html = document.documentElement
const progress = document.querySelector('.progress')
const form = document.querySelector('#form')

headerNav.addEventListener('click', function (e) {

    if (e.target.closest('.btn--open')) {

        menu.classList.toggle('show--menu')

    }

    if (e.target.closest('.btn--close')) {
        
        menu.classList.remove('show--menu')

    }

    if (e.target.closest('.list__item')) {

        menu.classList.remove('show--menu')

    }

})

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape') {

        menu.classList.remove('show--menu')
        
    }

})

window.addEventListener('scroll', function (e) {
    
    const alturaPagina = html.scrollHeight - html.clientHeight

    const scrollActual = html.scrollTop

    const progreso = scrollActual / alturaPagina

    progress.style.width = Math.round(progreso * 100) + '%'

})

form.addEventListener('submit', function (e) {
    
    e.preventDefault()

})



