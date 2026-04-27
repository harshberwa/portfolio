import { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "Home", path: "#home" },
		{ name: "About", path: "#about" },
		{ name: "Projects", path: "#projects" },
		{ name: "Skills", path: "#skills" },
		{ name: "Resume", path: "/resume.pdf" },
		{ name: "Contact", path: "#contact" },
	];

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<a
					href="#home"
					onClick={() => setIsOpen(false)}
					className="text-2xl font-bold tracking-wide text-white transition duration-300 hover:text-cyan-400"
				>
					Harsh<span className="text-cyan-400">Dev</span>
				</a>

				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.path}
							target={link.name === "Resume" ? "_blank" : "_self"}
							rel="noreferrer"
							className="group relative text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
						>
							{link.name}
							<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
						</a>
					))}
				</nav>

				<button
					className="flex flex-col gap-1 md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="h-0.5 w-6 bg-white"></span>
					<span className="h-0.5 w-6 bg-white"></span>
					<span className="h-0.5 w-6 bg-white"></span>
				</button>
			</div>

			{isOpen && (
				<div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
					<nav className="flex flex-col gap-4">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.path}
								target={
									link.name === "Resume" ? "_blank" : "_self"
								}
								rel="noreferrer"
								onClick={() => setIsOpen(false)}
								className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
							>
								{link.name}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}

export default Navbar;
