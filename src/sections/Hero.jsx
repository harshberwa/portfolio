import { useState } from "react";

function Hero() {
	const [position, setPosition] = useState({ x: 50, y: 50 });

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		setPosition({ x, y });
	};

	return (
		<section
			id="home"
			className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8"
		>
			<div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
				<div className="order-2 text-center md:order-1 md:text-left">
					<p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm animate-fade-in-up">
						Full Stack Developer
					</p>

					<h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
						<span className="block animate-fade-in-up">
							Hi, I’m <span className="text-cyan-400">Harsh</span>
						</span>

						<span className="mt-2 block animate-fade-in-up delay-200">
							I build modern web experiences.
						</span>
					</h1>

					<p className="mx-auto mt-5 max-w-xl animate-fade-in-up text-sm leading-7 text-slate-300 delay-300 sm:text-base sm:leading-8 md:mx-0 lg:text-lg">
						I’m a passionate MERN stack developer focused on
						building responsive, user-friendly, and professional web
						applications with clean UI and strong backend
						functionality.
					</p>

					<div className="mt-8 flex flex-col items-center gap-4 animate-fade-in-up delay-500 sm:flex-row sm:justify-center md:justify-start">
						<a
							href="#projects"
							className="w-full rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300 sm:w-auto"
						>
							View Projects
						</a>

						<a
							href="/Harsh_Berwa_MERN_Stack_Resume.pdf"
							target="_blank"
							rel="noreferrer"
							className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/10 sm:w-auto"
						>
							Download Resume
						</a>
					</div>
				</div>

				<div className="order-1 flex justify-center md:order-2">
					<div
						className="group relative flex items-center justify-center animate-float-strong"
						onMouseMove={handleMouseMove}
					>
						<div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem]" />

						<div className="absolute h-72 w-72 rounded-full border border-cyan-400/20 animate-spin-slow sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem]" />

						<div className="absolute h-80 w-80 rounded-full border border-dashed border-blue-400/20 animate-spin-reverse sm:h-[22rem] sm:w-[22rem] md:h-[30rem] md:w-[30rem]" />

						<div className="relative h-60 w-60 overflow-hidden rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-blue-500/20 shadow-2xl shadow-cyan-500/20 transition duration-500 group-hover:scale-110 group-hover:shadow-cyan-400/40 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
							<div
								className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
								style={{
									background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(34,211,238,0.35), transparent 30%)`,
								}}
							/>

							<div className="absolute inset-3 flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 p-4 text-center backdrop-blur-md transition duration-500 group-hover:scale-105 group-hover:bg-slate-900/90 sm:inset-4 sm:p-6">
								<div className="animate-inner-float">
									<p className="text-base font-semibold text-white sm:text-lg md:text-xl">
										MERN Stack Developer
									</p>
									<p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
										React • Node.js • Express • MongoDB
									</p>
								</div>
							</div>
						</div>

						<span className="absolute left-2 top-10 h-3 w-3 rounded-full bg-cyan-400 animate-orbit-dot opacity-80" />
						<span className="absolute right-8 top-16 h-2.5 w-2.5 rounded-full bg-blue-400 animate-orbit-dot-delayed opacity-80" />
						<span className="absolute bottom-12 left-8 h-2.5 w-2.5 rounded-full bg-sky-300 animate-orbit-dot opacity-70" />
					</div>
				</div>
			</div>

			<div className="absolute left-0 top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl sm:h-40 sm:w-40" />
			<div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl sm:h-52 sm:w-52" />
		</section>
	);
}

export default Hero;
