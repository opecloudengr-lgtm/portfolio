import { Mail, MessageCircle, MapPin, FileDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { profile } from "@/lib/data";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: profile.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "muhammed-opeyemi-7a814422b",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "opecloudengr-lgtm",
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: "Download CV",
    value: "PDF",
    href: profile.cvUrl,
    icon: FileDown,
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mt-2 text-2xl font-semibold text-neutral-50 sm:text-3xl">
          Let&apos;s build something
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-neutral-500">
          <MapPin size={14} /> {profile.location}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent">
                <link.icon size={17} />
              </span>
              <span>
                <span className="block text-xs text-neutral-500">{link.label}</span>
                <span className="block text-sm font-medium text-neutral-200">{link.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
