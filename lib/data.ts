export const profile = {
  name: "Opeyemi Samuel Muhammed",
  title: "Junior Full-Stack Developer",
  subtitle: "DevOps Enthusiast · AI-Assisted Developer",
  tagline: "I build practical digital products, from idea to working MVP.",
  bio: "Full-stack developer building real, working products — web apps, APIs, and databases, shipped and deployed with a growing focus on DevOps and AI-assisted development.",
  location: "Arepo, Ogun State, Nigeria",
  email: "ope.cloudengr.@gmail.com",
  whatsapp: "+2347059877722",
  whatsappHref: "https://wa.me/2347059877722",
  linkedin: "https://www.linkedin.com/in/muhammed-opeyemi-7a814422b",
  github: "https://github.com/opecloudengr-lgtm",
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Flask", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Prisma", "SQLAlchemy", "SQLite", "Migrations"],
  },
  {
    title: "DevOps",
    skills: ["Linux", "Ubuntu", "WSL2", "Docker", "Git", "GitHub", "Railway", "Vercel", "CI/CD"],
  },
  {
    title: "AI Development",
    skills: ["Claude Code", "ChatGPT", "AI-assisted coding", "Debugging", "Codebase analysis"],
  },
  {
    title: "Product",
    skills: ["MVP development", "PRDs", "User flows", "API integration", "Feature planning"],
  },
  {
    title: "UI/UX",
    skills: ["Figma", "Google Stitch", "Design systems", "Dashboards"],
  },
  {
    title: "Engineering background",
    skills: ["Metallurgical engineering", "Technical drawing", "Welding & fabrication"],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "case-study" | "coming-soon";
  images?: { src: string; alt: string; label: string; frame?: "desktop" | "mobile" }[];
  highlights?: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "auto-export-marketplace",
    name: "Auto Export Marketplace Platform",
    tagline: "Full-stack used-car export marketplace",
    description:
      "A production-style marketplace for a China-to-Africa used vehicle export business — public catalog, quote requests, and a full admin back office.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Railway"],
    status: "case-study",
    images: [
      { src: "/projects/dajili/home.jpg", alt: "Marketplace homepage", label: "Homepage" },
      { src: "/projects/dajili/vehicles.jpg", alt: "Vehicle catalog with filters", label: "Vehicle catalog" },
      { src: "/projects/dajili/vehicle-detail.jpg", alt: "Vehicle detail page with quote form", label: "Vehicle detail" },
      { src: "/projects/dajili/admin-dashboard.jpg", alt: "Admin dashboard", label: "Admin dashboard" },
      { src: "/projects/dajili/admin-vehicles.jpg", alt: "Admin inventory management screen", label: "Admin — inventory" },
      { src: "/projects/dajili/mobile-home.jpg", alt: "Mobile view of homepage", label: "Mobile — homepage", frame: "mobile" },
      { src: "/projects/dajili/mobile-vehicles.jpg", alt: "Mobile view of vehicle catalog", label: "Mobile — catalog", frame: "mobile" },
    ],
    highlights: [
      "Role-based admin: vehicles, inquiries, wholesale, testimonials",
      "Diagnosed and fixed a build-vs-runtime env var bug on Railway",
      "Migrated from db push to versioned Prisma Migrate history",
    ],
  },
  {
    slug: "nexora",
    name: "Nexora",
    tagline: "Event ticketing & QR access control",
    description:
      "Organizers create events, sell tickets via Paystack, invite VIP guests, and verify entry at the door with secure, single-use QR codes.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Pytest"],
    status: "case-study",
    repoUrl: "https://github.com/opecloudengr-lgtm/Th",
    images: [
      { src: "/projects/nexora/home.jpg", alt: "Nexora homepage", label: "Homepage" },
      { src: "/projects/nexora/events.jpg", alt: "Browse public events page", label: "Explore events" },
      { src: "/projects/nexora/event-detail.jpg", alt: "Event detail page with ticket purchase", label: "Event & tickets" },
      { src: "/projects/nexora/organizer-dashboard.jpg", alt: "Organizer dashboard", label: "Organizer dashboard" },
      { src: "/projects/nexora/organizer-manage.jpg", alt: "Organizer event management screen with ticket types", label: "Manage event" },
      { src: "/projects/nexora/mobile-home.jpg", alt: "Mobile view of homepage", label: "Mobile — homepage", frame: "mobile" },
      { src: "/projects/nexora/mobile-events.jpg", alt: "Mobile view of events list", label: "Mobile — events", frame: "mobile" },
    ],
    highlights: [
      "Server-authoritative payments & atomic ticket check-in",
      "23 automated tests against a real database",
      "One relative API path — same build works everywhere",
    ],
  },
  {
    slug: "gatelist",
    name: "GateList",
    tagline: "Private event access control",
    description:
      "Replaces the paper guest list with a secure digital ticket per guest, VIP tagging, and a scan-and-verify door app.",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "React"],
    status: "case-study",
    repoUrl: "https://github.com/opecloudengr-lgtm/Gatelist-APP",
    images: [
      { src: "/projects/gatelist/login.jpg", alt: "GateList sign-in page", label: "Sign in" },
      { src: "/projects/gatelist/events.jpg", alt: "Organizer's events list", label: "Your events" },
      { src: "/projects/gatelist/event-dashboard.jpg", alt: "Event dashboard with live check-in stats by guest category", label: "Event dashboard" },
      { src: "/projects/gatelist/guests.jpg", alt: "Guest list with categories and check-in status", label: "Guest list" },
      { src: "/projects/gatelist/mobile-scan.jpg", alt: "Mobile door-scanner view", label: "Mobile — scanner", frame: "mobile" },
      { src: "/projects/gatelist/mobile-guests.jpg", alt: "Mobile view of the guest list", label: "Mobile — guest list", frame: "mobile" },
    ],
    highlights: [
      "Signed QR tickets — never any personal data in the code",
      "Duplicate check-ins prevented at the database layer",
      "Offline-first scanning with idempotent sync",
    ],
  },
  {
    slug: "campuschain",
    name: "CampusChain",
    tagline: "Student marketplace & help platform",
    description: "Connecting verified students to goods, handwork, and project help.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    status: "coming-soon",
  },
  {
    slug: "homemart",
    name: "HomeMart",
    tagline: "Flask e-commerce application",
    description: "A backend-focused e-commerce build — auth, database models, and migrations.",
    stack: ["Python", "Flask", "SQLAlchemy", "JWT"],
    status: "coming-soon",
  },
];
