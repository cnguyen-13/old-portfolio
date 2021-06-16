gsap.registerPlugin(ScrollTrigger)

const cards = gsap.utils.toArray(".projects__card")

const projectsTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".projects",
		start: "top 10%",
		toggleActions: "play none none none",
	},
	paused: true,
})

projectsTl.from(".projects__text", {
	x: "-0.5rem",
	opacity: 0,
})
// .staggerFrom(
// 	cards,
// 	0.3,
// 	{
// 		opacity: 0,
// 	},
// 	0.3
// )

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
