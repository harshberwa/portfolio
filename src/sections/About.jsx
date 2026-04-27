function About() {
	const highlights = [
		{
			title: "Frontend Development",
			description:
				"Responsive and modern user interfaces using React.js and Tailwind CSS.",
		},
		{
			title: "Backend Development",
			description:
				"REST APIs and server-side logic using Node.js, Express.js, and MongoDB.",
		},
		{
			title: "Problem Solving",
			description:
				"Focused on building practical projects with clean structure and smooth user experience.",
		},
		{
			title: "Continuous Learning",
			description:
				"Always improving through real-world projects, debugging, and better UI/UX implementation.",
		},
	];

	return (
		<section id="about" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center md:mb-16">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
						About Me
					</p>
					<h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
						Know More About Me
					</h2>
				</div>

				<div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
					<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-cyan-400/40 hover:shadow-cyan-500/20 sm:p-8">
						<div
							className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
							style={{
								background:
									"linear-gradient(120deg, rgba(34,211,238,0.15), transparent 40%, rgba(59,130,246,0.15))",
							}}
						/>

						<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
							<span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-xl transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
						</div>

						<div className="relative">
							<h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300 sm:text-3xl">
								Who I Am
							</h3>

							<p className="mt-5 text-sm leading-7 text-slate-300 transition duration-300 group-hover:text-slate-200 sm:text-base sm:leading-8">
								I am a BTech student and a passionate full stack
								web developer who enjoys building modern,
								responsive, and user-friendly web applications.
								I like transforming ideas into real digital
								products that not only work well but also look
								professional.
							</p>

							<p className="mt-4 text-sm leading-7 text-slate-300 transition duration-300 group-hover:text-slate-200 sm:text-base sm:leading-8">
								My main focus is on the MERN stack, where I work
								on both frontend and backend development. I
								enjoy creating clean interfaces, writing
								structured code, and solving real-world problems
								through practical projects.
							</p>

							<p className="mt-4 text-sm leading-7 text-slate-300 transition duration-300 group-hover:text-slate-200 sm:text-base sm:leading-8">
								I am also continuously learning and improving my
								skills by working on projects that challenge me
								in design, development, and problem-solving.
							</p>
						</div>
					</div>

					<div className="grid gap-5 sm:grid-cols-2">
						{highlights.map((item) => (
							<div
								key={item.title}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-cyan-400/40 hover:shadow-cyan-500/20"
							>
								<div
									className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
									style={{
										background:
											"linear-gradient(120deg, rgba(34,211,238,0.15), transparent 40%, rgba(59,130,246,0.15))",
									}}
								/>

								<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
									<span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-xl transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
								</div>

								<div className="relative">
									<h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-cyan-300 sm:text-xl">
										{item.title}
									</h3>
									<p className="mt-3 text-sm leading-7 text-slate-300 transition duration-300 group-hover:text-slate-200 sm:text-base">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
