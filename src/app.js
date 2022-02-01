//// Hamburger menu

const hamburgerOpen = document.querySelector('.hamburger__open')
const hamburgerClose = document.querySelector('.hamburger__close')
const navLinks = document.querySelector('.nav__links')
console.log(navLinks)
hamburgerOpen.addEventListener('click',function(e){
    console.log('open')
    hamburgerClose.classList.remove('invisible');
    hamburgerOpen.classList.remove('visible');
    hamburgerOpen.classList.add('invisible');
})

hamburgerClose.addEventListener('click',function(e){
    console.log('close')
    hamburgerClose.classList.add('invisible')
    hamburgerOpen.classList.remove('invisible');
    hamburgerOpen.classList.add('visible');
})