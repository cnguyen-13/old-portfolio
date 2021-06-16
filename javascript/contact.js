gsap.registerPlugin(ScrollTrigger)

const contactTl = gsap.timeline({
	paused: true,
	scrollTrigger: {
		trigger: ".contact",
		start: "top 25%",
		end: "10% 25%",
		markers: true,
		toggleActions: "play none none none",
	},
})

contactTl
	.to(".contact__half--form", { width: "100%", backgroundColor: "#5661ea" })
	.fromTo(
		".contact__text-piece",
		{
			opacity: 0,
			y: "-1rem",
		},
		{
			opacity: 1,
			y: 0,
			stagger: 0.1,
		}
	)
