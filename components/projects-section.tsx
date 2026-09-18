import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section id="work" className="border-b border-white/10 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-widest text-accent">
          Work
        </h2>
        <p className="mt-2 text-2xl font-semibold text-neutral-50 sm:text-3xl">
          Selected projects
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
