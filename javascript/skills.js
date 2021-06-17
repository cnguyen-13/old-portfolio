const skillsTextPieces = gsap.utils.toArray(".skills__text-piece")
const logos = gsap.utils.toArray(".skills__logo")
const DURATION = 0.3
const DELAY = 0.1

const skillsTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".skills",
		start: "top 10%",
		toggleActions: "play none none none",
	},
})

skillsTl.staggerFrom(
	skillsTextPieces,
	DURATION,
	{
		x: "-0.5rem",
		opacity: 0,
	},
	DELAY
)

skillsTl.staggerFrom(
	logos,
	DURATION,
	{
		x: "-0.5rem",
		rotate: -15,
		opacity: 0,
	},
	DELAY,
	"-=1.5"
)
