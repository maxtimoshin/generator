let scrollOff = window.pageYOffset
let fixedHeader = document.querySelector('.fixed-header')

scrollOff = 0
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        fixedHeader.classList.add('fixed-header-lock')
    } else {
        fixedHeader.classList.remove('fixed-header-lock')
    }
})