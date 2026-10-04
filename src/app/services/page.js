import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import RevealText from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = {
  title: "Software & Digital Engineering Services | Mahntrix Technologies",
  description: "Explore our specialized services: Websites, Web Applications, Mobile Applications, ERP Systems, CRM Platforms, Custom Software Engineering, and AI & LLM Solutions.",
};

const SERVICES_FULL = [
  {
    id: "websites",
    num: "01",
    title: "Websites",
    tagline: "Ultra-fast, responsive Next.js marketing websites and digital brand experiences.",
    description: "We engineer bespoke Next.js and React web applications that load in milliseconds, establish instant brand credibility, and convert traffic into qualified business leads. No bloated page builders, no slow plugins — only clean, high-performance code built for maximum speed, security, and scalability.",
    steps: [
      { name: "Discovery", desc: "User journey mapping, brand positioning, and technical architecture specifications." },
      { name: "UI/UX Design", desc: "High-fidelity Figma wireframes, design system tokens, and micro-interactions." },
      { name: "Development", desc: "Next.js 15, responsive Tailwind CSS, edge routing, and headless CMS integration." },
      { name: "Deployment", desc: "Global edge CDN launch, Core Web Vitals 99+ optimization, and analytics setup." }
    ],
    benefits: [
      "Sub-second page load times powered by Next.js global edge caching",
      "Tailored headless CMS for effortless non-technical content management",
      "Built-in on-page technical SEO & structured OpenGraph data schema",
      "Full intellectual property and private GitHub repository ownership"
    ]
  },
  {
    id: "web-applications",
    num: "02",
    title: "Web Applications",
    tagline: "Scalable full-stack SaaS platforms, client portals, and real-time dashboards.",
    description: "From initial concept to production-grade cloud SaaS platforms. We engineer resilient, multi-tenant web applications featuring secure authentication, complex relational database schemas, payment gateway integrations, and real-time WebSocket communications.",
    steps: [
      { name: "Architecture", desc: "Database entity modeling, API contract definition, and multi-tenant security design." },
      { name: "Frontend & UI", desc: "Optimistic UI state management, interactive data grids, and responsive views." },
      { name: "Backend APIs", desc: "High-throughput Node/Go microservices, background job queues, and webhooks." },
      { name: "Cloud Staging", desc: "Automated CI/CD pipelines, Docker container orchestration, and load testing." }
    ],
    benefits: [
      "Modular, maintainable architecture ready for venture-scale user growth",
      "Robust role-based access control (RBAC) and OAuth/JWT authentication",
      "Automated subscription billing with Stripe/Razorpay webhook handling",
      "Real-time data visualization with lightning-fast query response times"
    ]
  },
  {
    id: "mobile-applications",
    num: "03",
    title: "Mobile Applications",
    tagline: "High-performance iOS & Android applications built with Flutter and React Native.",
    description: "From MVP to market leadership, we ship cross-platform mobile applications with silky 60fps native feel in a fraction of traditional development timelines. Single codebase efficiency without compromising on native hardware access or platform conventions.",
    steps: [
      { name: "Product Scope", desc: "Feature prioritization, offline requirements, and native hardware API mapping." },
      { name: "Interactive Prototype", desc: "Figma clickable mobile prototypes and usability testing on real devices." },
      { name: "App Engineering", desc: "Cross-platform Flutter/React Native build with local SQLite/Hive caching." },
      { name: "Store Release", desc: "Apple App Store & Google Play Store submission, compliance, and launch." }
    ],
    benefits: [
      "Simultaneous iOS and Android release from a single unified codebase",
      "Offline-first synchronization and real-time push notification triggers",
      "Seamless biometric authentication (FaceID, Fingerprint recognition)",
      "Continuous post-launch OS compatibility updates and crash monitoring"
    ]
  },
  {
    id: "erps",
    num: "04",
    title: "Enterprise ERP Systems",
    tagline: "Centralized ERP platforms for schools, universities, hospitals, and manufacturing.",
    description: "Eliminate disconnected spreadsheets and legacy desktop software. We engineer scalable, secure ERP platforms that unify departmental workflows, student/patient records, inventory management, fee billing, and executive analytics.",
    steps: [
      { name: "Workflow Audit", desc: "Mapping multi-department operational hierarchies and custom approval flows." },
      { name: "Relational Schema", desc: "Architecting high-integrity PostgreSQL schemas and audit logs." },
      { name: "Module Build", desc: "Developing admissions, invoicing, inventory, HR, and telemetry suites." },
      { name: "Migration & Training", desc: "Safe legacy data migration, staff onboarding, and 24/7 SLA rollout." }
    ],
    benefits: [
      "Role-Based Access Control (RBAC) with granular department permissions",
      "Real-time invoicing, fee collection, and automated financial reconciliation",
      "Automated attendance, grading, and biometric hardware integration",
      "Seamless cross-device responsiveness for desktops, tablets, and phones"
    ]
  },
  {
    id: "crms",
    num: "05",
    title: "Custom CRM Platforms",
    tagline: "Omnichannel customer relationship management and automated sales pipelines.",
    description: "Empower your sales and support teams with bespoke CRM platforms featuring automated lead routing, WhatsApp Cloud API sync, multi-stage Kanban deal pipelines, interaction logs, and revenue forecasting without ongoing per-seat licensing penalties.",
    steps: [
      { name: "Funnel Mapping", desc: "Defining sales stages, lead scoring criteria, and qualification rules." },
      { name: "Kanban Pipeline", desc: "Interactive drag-and-drop deal boards, custom fields, and task triggers." },
      { name: "Omnichannel Sync", desc: "WhatsApp Cloud API, SendGrid email, VOIP calling, and SMS webhook sync." },
      { name: "Analytics Dashboard", desc: "Sales velocity dashboards, rep leaderboards, and revenue forecasting." }
    ],
    benefits: [
      "Instant WhatsApp & Email automated lead capture and follow-up sequences",
      "Zero per-seat recurring subscription fees — own your custom CRM system",
      "Automated lead assignment based on territory or rep availability",
      "Visual custom reporting tied directly to revenue and close rates"
    ]
  },
  {
    id: "custom-softwares",
    num: "06",
    title: "Custom Software Engineering",
    tagline: "Bespoke software systems, high-throughput backend APIs, and microservices.",
    description: "When off-the-shelf software falls short, we design and engineer bespoke software tailored to your company's proprietary workflows. Engineered on modern distributed architectures with strict security, high availability, and automated CI/CD deployment pipelines.",
    steps: [
      { name: "Technical Audit", desc: "System requirements, load projections, and data security threat modeling." },
      { name: "System Architecture", desc: "Microservices, event-driven queues, and containerized topology design." },
      { name: "Core Engineering", desc: "Clean, test-driven backend engineering with comprehensive API documentation." },
      { name: "DevOps & Scale", desc: "Automated testing, blue-green deployment pipelines, and 24/7 monitoring." }
    ],
    benefits: [
      "Software tailored 100% to your unique business operations and competitive advantage",
      "High-throughput REST and GraphQL APIs capable of handling millions of requests",
      "Docker & Kubernetes container orchestration with automatic scaling",
      "Thorough automated test coverage and comprehensive technical documentation"
    ]
  },
  {
    id: "ai-llm",
    num: "07",
    title: "AI & LLM Solutions",
    tagline: "Autonomous AI agents, custom RAG assistants, and intelligent workflow automation.",
    description: "We help forward-thinking companies integrate custom generative AI and machine learning. From autonomous AI agents and document parsing pipelines to intelligent conversational assistants grounded in your private enterprise data with zero hallucinations.",
    steps: [
      { name: "Use-Case Audit", desc: "Identifying high-friction manual workflows and calculating automation ROI." },
      { name: "RAG & Embeddings", desc: "Custom vector embeddings, semantic search, and prompt engineering." },
      { name: "Tool Integration", desc: "Connecting AI agents to your CRM, WhatsApp, database, and internal APIs." },
      { name: "Guardrails & Scale", desc: "Strict hallucination guardrails, rate limiting, and continuous fine-tuning." }
    ],
    benefits: [
      "24/7 intelligent customer inquiry qualification with zero response delay",
      "Automated PDF, contract, invoice, and unstructured document parsing",
      "Private knowledge base grounding with zero data leak to public models",
      "Massive reduction in operational overhead and manual data entry costs"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12">
        <FadeIn delay={0.05}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60" />
            <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
              SPECIALIZED SOFTWARE CAPABILITIES
            </span>
          </div>
        </FadeIn>
        
        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          <RevealText text="Engineering solutions that scale your enterprise." />
        </h1>
        
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-fog leading-relaxed font-sans">
            From bespoke websites and cross-platform mobile apps to enterprise ERPs, custom CRMs, custom software architectures, and AI/LLM solutions — we build complete technology systems.
          </p>
        </FadeIn>
      </section>

      {/* Services List Detail Sections */}
      <div className="divide-y divide-white/10 border-t border-white/10">
        {SERVICES_FULL.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 py-20 sm:py-28"
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
                {/* Left Column: Title & Description */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-lime">
                    {service.num} / SERVICE
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper mt-3">
                    <RevealText text={service.title} />
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-paper/80 font-medium">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-fog leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8">
                    <Link href={`/contact/?service=${encodeURIComponent(service.title)}`} className="inline-flex">
                      <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 bg-lime text-ink hover:bg-lime-bright h-12 px-6 text-sm font-display">
                        <span className="relative z-10 inline-flex items-center gap-2">
                          Start a project in {service.title}
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Steps & Key Benefits */}
                <div className="space-y-8">
                  {/* Phased Process */}
                  <FadeIn delay={0.1}>
                    <div className="rounded-3xl border border-white/10 bg-ink-soft p-6 sm:p-8">
                      <p className="eyebrow text-fog-dim mb-6">Our Process</p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {service.steps.map((step, sIdx) => (
                          <div key={sIdx} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:border-lime/20 transition-colors">
                            <span className="font-mono text-xs text-lime font-bold">0{sIdx + 1}.</span>
                            <h4 className="font-display text-base font-bold text-paper mt-1">
                              {step.name}
                            </h4>
                            <p className="mt-1 text-xs text-fog leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>

                  {/* Key Benefits */}
                  <FadeIn delay={0.2}>
                    <div className="rounded-3xl border border-white/10 bg-ink-soft p-6 sm:p-8">
                      <p className="eyebrow text-fog-dim mb-4">Key Benefits</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-paper/85">
                            <CheckCircle2 className="size-4 text-lime shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <CtaBanner
        eyebrow="Not sure where to start?"
        heading="Let's find your fastest path to growth."
        description="Tell us your goals and challenges, and we'll recommend exactly which technology and architecture will move the needle first."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="View case studies"
        secondaryButtonHref="/work/"
      />
    </main>
  );
}
