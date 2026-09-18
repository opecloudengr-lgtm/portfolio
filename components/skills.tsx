import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-widest text-accent">
          Skills
        </h2>
        <p className="mt-2 text-2xl font-semibold text-neutral-50 sm:text-3xl">
          What I work with
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-sm font-semibold text-neutral-200">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
