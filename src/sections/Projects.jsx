import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
	return (
		<section id="projects" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center md:mb-16">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
						Projects
					</p>
					<h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
						My Recent Work
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
						Here are some of the projects I have built to improve my
						skills in full stack development, UI design, and
						real-world problem solving.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
