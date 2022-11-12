
// EFEITO HEADER
export function effectHeader () {
const header = document.querySelector(".menu2")
const logoImg = document.querySelector(".logo-img")

window.addEventListener("scroll", lowestHeader)

function lowestHeader() {
    if(window.pageYOffset > 100 && header.classList.contains("menu2")) {
        header.classList.add('min')
        logoImg.style.width = "150px"
    } else if (window.pageYOffset <= 60 && header.classList.contains("min")) {
        header.classList.remove('min')
    }
}
}
effectHeader()

export class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind(this)
    }
    animatedLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animatedLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick)
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu li",
)
mobileNavbar.init()