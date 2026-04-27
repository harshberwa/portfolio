function Contact() {
	return (
		<section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl text-center">
				<h2 className="text-3xl font-bold text-white sm:text-4xl">
					Contact Me
				</h2>

				<p className="mt-4 text-slate-400">
					Feel free to reach out for collaborations or opportunities.
				</p>

				<div className="group relative mx-auto mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-cyan-500/20">
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

					<div className="relative space-y-6">
						<p className="text-lg text-slate-300">
							📧 Email:{" "}
							<a
								href="mailto:harshberwa2004@gmail.com"
								className="text-cyan-400 hover:underline"
							>
								harshberwa2004@gmail.com
							</a>
						</p>

						<p className="text-lg text-slate-300">
							💼 LinkedIn:{" "}
							<a
								href="https://www.linkedin.com/in/harsh-berwa"
								target="_blank"
								rel="noreferrer"
								className="text-cyan-400 hover:underline"
							>
								https://www.linkedin.com/in/harsh-berwa
							</a>
						</p>

						<p className="text-lg text-slate-300">
							💻 GitHub:{" "}
							<a
								href="https://github.com/harshberwa"
								target="_blank"
								rel="noreferrer"
								className="text-cyan-400 hover:underline"
							>
								github.com/harshberwa
							</a>
						</p>

						<a
							href="/resume.pdf"
							target="_blank"
							rel="noreferrer"
							className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
