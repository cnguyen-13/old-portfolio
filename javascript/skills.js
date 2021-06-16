const logos = gsap.utils.toArray(".skills__logo")

const skillsTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".skills",
		start: "top 10%",
		toggleActions: "play none reverse none",
	},
})

skillsTl.from(".skills__text", {
	x: "-0.5rem",
	opacity: 0,
})

skillsTl.staggerFrom(
	logos,
	0.3,
	{
		x: "-0.5rem",
		rotate: -15,
		opacity: 0,
	},
	0.1
)
