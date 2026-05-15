function Skills() {
	const skills = [
		"JavaScript",
		"React",
		"Node.js",
		"Express.js",
		"MongoDB",
		"MYSQL",
		"Tailwind CSS",
		"JavaScript",
		"JWT",
		"Git & GitHub",
		"REST APIs",
		"MERN Stack",
		"Bootstrap",
		"HTML & CSS",
		"bcrypt",
		"Postman API Testing",
		"Resend Email API",
		"Vercel Deployment",
		"Render Deployment",
		"MongoDB Atlas",
	];

	return (
		<section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="text-3xl font-bold text-white sm:text-4xl">
					Skills
				</h2>

				<p className="mt-4 text-slate-400">
					Technologies and tools I work with.
				</p>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition duration-500 hover:-translate-y-2 hover:scale-[1.05] hover:border-cyan-400/40 hover:shadow-cyan-500/20"
						>
							{/* Gradient overlay */}
							<div
								className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
								style={{
									background:
										"linear-gradient(120deg, rgba(34,211,238,0.15), transparent 40%, rgba(59,130,246,0.15))",
								}}
							/>

							{/* Shine */}
							<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
								<span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-xl transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
							</div>

							<p className="relative text-lg font-semibold text-white group-hover:text-cyan-300">
								{skill}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
