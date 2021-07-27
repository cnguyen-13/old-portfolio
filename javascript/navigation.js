const body = document.querySelector(".body")
const hamburger = document.querySelector(".nav__hamburger")
const navLinks = document.querySelector(".nav__links")

const changeIcon = () => {
	const fullSource = hamburger.src.split("/")
	const source = fullSource.pop()

	if (source === "hamburger.svg") {
		hamburger.alt = "hamburger menu button"
		fullSource.push("close.svg")
	} else {
		hamburger.alt = "close menu button"
		fullSource.push("hamburger.svg")
	}

	hamburger.src = fullSource.join("/")
}

const removeClasses = () => {
	navLinks.classList.remove("nav__links--active")
	body.classList.remove("body--unscrollable")
}

const onClickHamburger = () => {
	navLinks.classList.toggle("nav__links--active")
	body.classList.toggle("body--unscrollable")
	changeIcon()
}

window.addEventListener("resize", removeClasses)
hamburger.addEventListener("click", onClickHamburger)
