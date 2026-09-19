export const profile = {
  name: "Opeyemi Samuel Muhammed",
  title: "Junior Full-Stack Developer",
  subtitle: "DevOps Enthusiast · AI-Assisted Developer",
  tagline:
    "I build practical digital products from idea to working MVP — modern web development, backend engineering, databases, deployment, and AI-assisted development.",
  bio: "A developing software engineer with hands-on experience building full-stack applications, REST APIs, authenticated systems, database-backed products, and cloud-deployed web projects. My current learning direction is full-stack development with a growing focus on Linux, DevOps, cloud deployment, and AI-powered workflows.",
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
  highlights?: { title: string; body: string }[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "auto-export-marketplace",
    name: "Auto Export Marketplace Platform",
    tagline: "Full-stack used-car export marketplace, built and shipped end-to-end",
    description:
      "A production-style marketplace for a China-to-Africa used vehicle export business: public vehicle catalog with search and filters, inquiry and quote-request flows, and a full admin back office for managing inventory, images, leads, and site content.",
    stack: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Prisma ORM + Prisma Migrate",
      "Zod validation",
      "JWT sessions (jose) + bcrypt",
      "Playwright (automation & QA)",
      "Railway",
    ],
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
      {
        title: "Full CRUD admin system",
        body: "Role-based admin (superadmin/admin/agent) covering vehicles, images, inquiries, wholesale and sourcing requests, testimonials, and site settings — all Zod-validated server-side, no secrets exposed to the client.",
      },
      {
        title: "Diagnosed a build-vs-runtime env var bug",
        body: "Railway's production build failed because Next.js was prerendering database-dependent pages at build time, before DATABASE_URL was available. Root-caused it to ISR/static-generation defaults on the homepage and sitemap route, fixed it by forcing those routes to render dynamically, and verified the fix with a clean build with the database intentionally disconnected before ever touching the deploy pipeline again.",
      },
      {
        title: "Tracked down an obscure image-optimizer bug",
        body: "A batch of uploaded product photos appeared mismatched to the wrong listings intermittently in screenshots. Isolated it to Next.js's dev-mode image optimizer serving stale bytes specifically on the WebP content-negotiation path — confirmed by comparing direct `sharp` output against the optimizer's output across explicit Accept headers, ruling out disk cache, Turbopack's persistent cache, and process staleness one at a time before finding the actual divergence.",
      },
      {
        title: "Migrated from db push to Prisma Migrate",
        body: "Replaced ad hoc schema pushes with a proper migration history: generated a baseline migration from the live schema and baselined it against the existing database with real data — verified with zero data loss against both the live database and a from-scratch test database — then wired `prisma migrate deploy` into the production start command.",
      },
    ],
  },
  {
    slug: "nexora",
    name: "Nexora",
    tagline: "Event ticketing, VIP guest management & QR access control",
    description:
      "A full-stack event registration, ticketing and access-control platform: organizers create and design events, sell free or paid tickets (Paystack), invite VIP guests to private events, assign seating, and verify entry at the door with cryptographically secure, single-use QR tickets.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "JWT auth",
      "Paystack",
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "TanStack Query",
      "Pytest",
    ],
    status: "case-study",
    repoUrl: "https://github.com/opecloudengr-lgtm/Th",
    highlights: [
      {
        title: "Server-authoritative payments & atomic check-in",
        body: "Paystack payment verification and ticket check-in are both handled server-side with atomic, race-condition-safe operations, verified by a real multi-threaded concurrency test that fires simultaneous scans of the same ticket.",
      },
      {
        title: "23 automated tests against a real database",
        body: "Pytest suite covering auth, IDOR (broken object-level authorization) checks, payment idempotency, and concurrency — run against a real PostgreSQL database rather than mocks.",
      },
      {
        title: "One relative API path works everywhere",
        body: "The browser only ever calls the Next.js server it loaded the page from; a server-side Route Handler proxies to the backend using an env var read fresh on every request, so the same build works unchanged on localhost, in Codespaces, or behind a real domain.",
      },
    ],
  },
  {
    slug: "gatelist",
    name: "GateList",
    tagline: "Private event access control — digital guest lists & door scanning",
    description:
      "Replaces the paper guest list and printed invitation cards at invite-only events (weddings, galas, private parties) with a single secure digital ticket per guest, VIP/importance tagging, and a scan-and-verify door app that makes duplicate or unauthorized entries impossible. No public ticketing, no guest-facing sign-up — every event is private by default.",
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "React",
      "Vite",
      "PWA",
      "Railway",
    ],
    status: "case-study",
    repoUrl: "https://github.com/opecloudengr-lgtm/Gatelist-APP",
    highlights: [
      {
        title: "Signed tickets, not data",
        body: "Each QR code encodes an HMAC-signed token (ticket, event and guest IDs plus a nonce) instead of any personal data — a copied or edited QR can't be pointed at a different event or guest, with the database row as the single source of truth for whether it's actually usable.",
      },
      {
        title: "Duplicate check-ins prevented at the database layer",
        body: "A scan transitions a ticket ISSUED → CHECKED_IN with a single conditional UPDATE, relying on Postgres to serialize concurrent writes so exactly one of two simultaneous scans of the same code succeeds.",
      },
      {
        title: "Offline-first door scanning",
        body: "The staff scanner queues scans in IndexedDB when offline and syncs them once connectivity returns, with an idempotent sync so a retried batch never double-checks-in a guest.",
      },
      {
        title: "PWA instead of a native app",
        body: "Ships as an installable, camera-capable web app instead of a Flutter/React Native app — no app store review cycle, same offline queueing and scanning jobs, and a native shell could still be swapped in later without changing the API.",
      },
    ],
  },
  {
    slug: "campuschain",
    name: "CampusChain",
    tagline: "Student marketplace & student-to-student help platform",
    description:
      "A product-focused marketplace concept for verified university and polytechnic students — connecting students to goods, handwork, assignment/project/design assistance, and opportunities.",
    stack: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "AI"],
    status: "coming-soon",
  },
  {
    slug: "homemart",
    name: "HomeMart",
    tagline: "Flask e-commerce application",
    description:
      "A backend-focused e-commerce project built while learning application architecture, databases, authentication, and API development — registration/login flows, JWT authentication, database models, migrations, and SQLite persistence.",
    stack: ["Python", "Flask", "SQLAlchemy", "Flask-Migrate", "Marshmallow", "JWT", "SQLite"],
    status: "coming-soon",
  },
];
