import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
	return (
		<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:rotate-[0.5deg] hover:border-cyan-400/30 hover:shadow-cyan-500/10 [transform-style:preserve-3d]">
			<div className="flex h-full flex-col">
				<h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
					{project.title}
				</h3>

				<p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
					{project.description}
				</p>

				<div className="mt-5 mb-6 flex flex-wrap gap-3">
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/15 sm:text-sm"
						>
							{tech}
						</span>
					))}
				</div>

				<div className="flex flex-col gap-4 sm:mt-auto sm:flex-row sm:items-center sm:gap-6">
					{project.liveLink && (
						<a
							href={project.liveLink}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
						>
							<span className="flex items-center gap-2">
								Live Demo <FaExternalLinkAlt size={14} />
							</span>
						</a>
					)}

					<a
						href={project.githubLink}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/10"
					>
						<span className="flex items-center gap-2">
							GitHub <FaGithub size={16} />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
