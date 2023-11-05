
const menu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

headerNav.addEventListener('click', function (e) {

    if (e.target.closest('.btn--open')) {

        menu.classList.toggle('show--menu')

    }

    if (e.target.closest('.btn--close')) {
        
        menu.classList.remove('show--menu')

    }

})




