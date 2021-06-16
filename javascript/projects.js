gsap.registerPlugin(ScrollTrigger)

const projectTextPieces = gsap.utils.toArray(".projects__text-piece")
const cards = gsap.utils.toArray(".projects__card")

const projectsTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".projects",
		start: "top 10%",
		toggleActions: "play none none none",
	},
	paused: true,
})

projectsTl.staggerFrom(
	projectTextPieces,
	0.3,
	{
		x: "-0.5rem",
		opacity: 0,
	},
	0.1
)

cards.forEach(card => {
	gsap.to(card, {
		scrollTrigger: {
			trigger: card,
			start: `-25% 25%`,
			end: "-15% 25%",
			scrub: 1,
			//markers: true,
		},
		opacity: 1,
	})

	gsap.from(card, {
		scrollTrigger: {
			trigger: card,
			start: "75% 15%",
			end: "bottom 15%",
			scrub: 1,
			//markers: { startColor: "blue", endColor: "orange" },
		},
		opacity: 1,
	})
})
