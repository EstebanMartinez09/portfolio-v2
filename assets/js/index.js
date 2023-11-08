
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

// swiper

const swiper = new Swiper('.comentarios .swiper', {
    
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });

const SR = ScrollReveal()

SR.reveal('.hero__img', {
    duration: 1200,
    origin: 'left',
    distance: '250px',
    reset: true
})

SR.reveal('.hero__info', {
    duration: 1350,
    origin: 'left',
    distance: '250px',
    reset: true
})

SR.reveal('.title__section', {
    duration: 1100,
    origin: 'left',
    distance: '250px',
    reset: true
})

// SR.reveal('.swiper', {
//     duration: 1100,
//     origin: 'right',
//     distance: '250px',
//     reset: true
// })

SR.reveal('.formulario', {
    duration: 1100,
    origin: 'left',
    distance: '250px',
    reset: true
})

