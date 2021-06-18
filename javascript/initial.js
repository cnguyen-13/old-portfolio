const initialTl = gsap.timeline()

const introTextPieces = gsap.utils.toArray(".intro__text-piece")

initialTl
	.from(".nav", {
		duration: 0.7,
		xPercent: -100,
	})
	.from(
		".main",
		{
			duration: 1,
			xPercent: -150,
		},
		"-=0.3"
	)
	.staggerFrom(
		introTextPieces,
		0.3,
		{
			x: "-0.5rem",
			opacity: 0,
			ease: "power3.out",
		},
		0.1
	)
	.from(
		".intro__half--light",
		{
			duration: 0.7,
			opacity: 0,
			yPercent: 100,
		},
		"-=0.3"
	)
