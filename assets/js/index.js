
const menu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')
const html = document.documentElement
const progress = document.querySelector('.progress')
const form = document.querySelector('#form')

// Función de menú desplegable 

headerNav.addEventListener('click', function (e) {

    if (e.target.closest('.btn--open')) {

        menu.classList.toggle('show--menu')

    }

    if (e.target.closest('.btn--close')) {
        
        menu.classList.remove('show--menu')

    }

    if (e.target.closest('.list__item')) {

        menu.classList.remove('show--menu')

        const links  = document.querySelectorAll('.list__link')

        console.log(links)

        for (const link of links) {

            link.classList.remove('active')
            
        }

        e.target.classList.add('active')

    }

})

// Función de menú desplegable con tecla escape 

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape') {

        menu.classList.remove('show--menu')
        
    }

})

// Función de barra de carga con scroll

window.addEventListener('scroll', function (e) {
    
    const alturaPagina = html.scrollHeight - html.clientHeight

    const scrollActual = html.scrollTop

    const progreso = scrollActual / alturaPagina

    progress.style.width = Math.round(progreso * 100) + '%'

})

form.addEventListener('submit', function (e) {
    
    e.preventDefault()

})



