const contactTl = gsap.timeline({
	paused: true,
	scrollTrigger: {
		trigger: ".contact",
		start: "top 25%",
		end: "top 25%",
		toggleActions: "play none reverse none",
	},
})

contactTl
	.to(".contact__half--form", {
		width: "100%",
		backgroundColor: "lighten(#5661ea, 3%)",
	})
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
