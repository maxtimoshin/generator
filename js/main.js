

// Header Scrolling Position
let scrollOff = window.pageYOffset
let fixedHeader = document.querySelector('.fixed-header')

// Burger Items

const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')

// Buttons 

const mainBtn = document.querySelectorAll('.logo')
const aboutBtn = document.querySelectorAll('.about-btn')
const officesBtn = document.querySelectorAll('.offices-btn')
const eventsBtn = document.querySelectorAll('.events-btn')
const bistroBtn = document.querySelectorAll('.bistro-btn')
const contactsBtn = document.querySelectorAll('.contacts-btn')

// Blocks

const headerBlock = document.querySelector('.header')
const aboutBlock = document.querySelector('.about-us-container')
const officesBlock = document.querySelector('.offices-container')
const eventsBlock = document.querySelector('.events-container')
const bistroBlock = document.querySelector('.bistro-container')
const contactsBlock = document.querySelector('.contact-us-container')

// Scroll To

function scrollingToBlock(btn, block) {
    btn.forEach(e => {
        e.addEventListener('click', () => {
            block.scrollIntoView({ block: "center", behavior: "smooth" })
            document.body.classList.remove('lock')
            iconMenu.classList.remove('activem')
            menuBody.classList.remove('activem')
        })
    })
}

// ScrollTo listeners

scrollingToBlock(mainBtn, headerBlock)
scrollingToBlock(aboutBtn, aboutBlock)
scrollingToBlock(officesBtn, officesBlock)
scrollingToBlock(eventsBtn, eventsBlock)
scrollingToBlock(bistroBtn, bistroBlock)
scrollingToBlock(contactsBtn, contactsBlock)

// Header Scrolling Handler
scrollOff = 0
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        fixedHeader.classList.add('fixed-header-lock')
    } else {
        fixedHeader.classList.remove('fixed-header-lock')
    }
})

// Burger logic toggler 

if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('activem')
        menuBody.classList.toggle('activem')
    })
}