import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-neutral-600 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with Next.js, Tailwind CSS &amp; Claude Code</p>
      </div>
    </footer>
  );
}
