const initialTl = gsap.timeline()

initialTl
	.from(".nav", {
		duration: 0.7,
		xPercent: -100,
	})
	.from(".intro__half--dark", {
		duration: 0.7,
		xPercent: -150,
	})
	.from(
		".intro__text",
		{
			x: "-0.5rem",
			opacity: 0,
		},
		"+=0.2"
	)
	.from(".intro__half--light", {
		duration: 0.7,
		xPercent: -200,
	})
