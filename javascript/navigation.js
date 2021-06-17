const body = document.querySelector(".body")
const hamburger = document.querySelector(".nav__hamburger")
const navLinks = document.querySelector(".nav__links")

const removeClasses = () => {
	navLinks.classList.remove("nav__links--active")
}

const onClickHamburger = () => {
	navLinks.classList.toggle("nav__links--active")
}

window.addEventListener("resize", removeClasses)
hamburger.addEventListener("click", onClickHamburger)
