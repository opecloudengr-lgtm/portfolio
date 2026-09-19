import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  if (project.status === "coming-soon") {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-200">{project.name}</h3>
          <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-neutral-500">
            Case study coming soon
          </span>
        </div>
        <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-500">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-neutral-50 sm:text-2xl">{project.name}</h3>
            <p className="mt-1 text-sm text-accent">{project.tagline}</p>
          </div>
          <div className="flex gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:border-white/30"
              >
                <GithubIcon size={14} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-neutral-950"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-400">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.images && project.images.some((img) => img.frame !== "mobile") && (
        <div className="grid grid-cols-2 gap-1 border-t border-white/10 bg-black/20 p-1 sm:grid-cols-3">
          {project.images
            .filter((img) => img.frame !== "mobile")
            .map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/10] overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-1.5 pt-4 text-[11px] font-medium text-neutral-200">
                  {img.label}
                </span>
              </a>
            ))}
        </div>
      )}

      {project.images && project.images.some((img) => img.frame === "mobile") && (
        <div className="flex flex-wrap gap-4 border-t border-white/10 bg-black/20 p-4">
          {project.images
            .filter((img) => img.frame === "mobile")
            .map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[9/19.5] w-28 overflow-hidden rounded-xl border-2 border-white/15 shadow-lg transition-transform duration-300 group-hover:scale-[1.03] sm:w-32">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="140px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="mt-1.5 block text-center text-[11px] font-medium text-neutral-400">
                  {img.label}
                </span>
              </a>
            ))}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 p-6 sm:p-8">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="size-1 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
