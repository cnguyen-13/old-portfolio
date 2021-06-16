const skillsTextPieces = gsap.utils.toArray(".skills__text-piece")
const logos = gsap.utils.toArray(".skills__logo")

const skillsTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".skills",
		start: "top 10%",
		toggleActions: "play none none none",
	},
})

skillsTl.staggerFrom(
	skillsTextPieces,
	0.3,
	{
		x: "-0.5rem",
		opacity: 0,
	},
	0.1
)

skillsTl.staggerFrom(
	logos,
	0.3,
	{
		x: "-0.5rem",
		rotate: -15,
		opacity: 0,
	},
	0.1,
	"-=1.5"
)
