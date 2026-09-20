import { ArrowRight, FileText, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-30"
        style={{
          background: "radial-gradient(650px circle at 50% -10%, var(--accent), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-3xl">
        <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
          <MapPin size={13} /> {profile.location}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl">
          {profile.name}
        </h1>

        <p className="mt-3 font-mono text-sm text-accent sm:text-base">
          {profile.title} · {profile.subtitle}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
          >
            See my work <ArrowRight size={16} />
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-white/30"
          >
            <FileText size={16} /> View CV
          </a>
          <a
            href={profile.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-white/30"
          >
            WhatsApp me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-white/30"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
