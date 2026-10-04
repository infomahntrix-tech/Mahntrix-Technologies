import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Pricing & Plans — Transparent Software Engineering | Mahntrix Technologies",
  description: "Transparent software engineering and digital transformation plans. Starter, Growth, and Enterprise options with dedicated development, clear deliverables, and no lock-in.",
};

const TIERS = [
  {
    name: "Starter",
    tagline: "For businesses ready to establish a high-performance digital presence.",
    price: "$1,200",
    period: "/month",
    isPopular: false,
    features: [
      "Custom Next.js Web Development / Refactor",
      "Core Web Vitals 95+ Performance Guarantee",
      "Technical On-Page SEO Architecture",
      "Responsive Mobile & Tablet Optimization",
      "Headless CMS Content Management",
      "Monthly Maintenance & Security Patches",
      "Bi-Weekly Progress & Milestone Calls",
    ],
    ctaText: "Get started",
    ctaHref: "/contact/?plan=starter",
  },
  {
    name: "Growth",
    tagline: "For scaling companies looking to expand with web apps, mobile, and AI.",
    price: "$2,800",
    period: "/month",
    isPopular: true,
    features: [
      "Everything in Starter, plus:",
      "Full-Stack Web App or Mobile App (Flutter/React Native)",
      "Custom AI Chatbot or Workflow Automation",
      "Advanced API & CRM Webhook Integrations",
      "Conversion Rate Optimization (CRO) Funnels",
      "Automated CI/CD Deployment Pipeline",
      "Dedicated Senior Software Engineer & PM",
      "Weekly Sprint Demos & Priority Support",
    ],
    ctaText: "Start Growth Plan",
    ctaHref: "/contact/?plan=growth",
  },
  {
    name: "Enterprise",
    tagline: "For institutions requiring full ERP, CRM suites, and custom infrastructure.",
    price: "$5,500+",
    period: "/month or fixed milestone",
    isPopular: false,
    features: [
      "Custom Enterprise ERP / CRM System Architecture",
      "Multi-Module (Admissions, Invoicing, Inventory, HR)",
      "Cross-Platform Native iOS & Android Apps",
      "Fine-Tuned LLM Agents & Document Extraction",
      "AWS / Cloud Microservices & Auto-Scaling",
      "24/7 Guaranteed Uptime SLA & Rapid Response",
      "Complete Source Code & Architecture Handover",
      "On-Demand Training & Dedicated Tech Lead",
    ],
    ctaText: "Schedule Enterprise Call",
    ctaHref: "/contact/?plan=enterprise",
  },
];

const FAQS = [
  {
    question: "How long does a typical software or web development project take?",
    answer: "Standard high-performance Next.js marketing and business websites typically take 3 to 6 weeks. Cross-platform mobile applications (Flutter/React Native) range from 6 to 12 weeks for MVP delivery. Complex enterprise ERP and custom CRM platforms are delivered iteratively in agile sprints with functional modules ready within 4 to 8 weeks.",
  },
  {
    question: "Do you work with international clients across different time zones?",
    answer: "Yes. Over 70% of our clients are based globally in the United States, United Kingdom, Australia, New Zealand, and the Middle East. We maintain flexible working overlap hours and structured asynchronous communication (Slack, Loom, GitHub) so you're never delayed.",
  },
  {
    question: "Can I customize a hybrid plan combining different services?",
    answer: "Absolutely. Many of our clients start with a core ERP or Web rebuild, and later layer on custom AI assistants, mobile apps, or ongoing SEO funnels. We create tailored proposals structured around your exact technical milestones.",
  },
  {
    question: "Who owns the code, intellectual property, and database assets?",
    answer: "You own 100% of the intellectual property, source code, design assets, and database architecture from day one. We transfer everything to your private GitHub repository and cloud accounts upon delivery.",
  },
  {
    question: "Are there long-term contracts or lock-in requirements?",
    answer: "No long-term lock-in. Our retainer plans are month-to-month partnerships. You stay with us because our software delivers measurable ROI, not because of a rigid contractual lock.",
  },
];

export default function PricingPage() {
  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60" />
          <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
            TRANSPARENT VALUE
          </span>
        </div>
        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          Plans that scale with <span className="text-lime">your ambition.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-fog leading-relaxed font-sans">
          Clear scope, dedicated senior engineering, and zero hidden fees. Choose a monthly development partnership or custom milestone proposal.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="border-t border-white/10 bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                  tier.isPopular
                    ? "border-2 border-lime bg-ink-soft shadow-2xl shadow-lime/10 lg:-translate-y-4"
                    : "border border-white/10 bg-ink-soft/60 hover:border-white/20"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-xs font-mono font-bold uppercase tracking-wider text-ink shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-paper">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-xs text-fog leading-relaxed">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-paper">
                      {tier.price}
                    </span>
                    <span className="font-mono text-xs text-fog">{tier.period}</span>
                  </div>

                  <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-paper/85">
                        <Check className="size-4 text-lime shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5">
                  <Link href={tier.ctaHref} className="w-full inline-flex">
                    <span
                      className={`w-full group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 h-13 px-6 text-sm font-display ${
                        tier.isPopular
                          ? "bg-lime text-ink hover:bg-lime-bright"
                          : "border border-white/20 bg-white/5 text-paper hover:bg-white/10"
                      }`}
                    >
                      <span className="relative z-10 inline-flex items-center gap-2">
                        {tier.ctaText}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions Bar */}
      <section className="border-y border-white/10 bg-ink-soft py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-l border-white/10 pl-6">
              <h4 className="font-display text-xl font-bold text-paper">No Lock-in</h4>
              <p className="mt-2 text-sm text-fog leading-relaxed">
                Month-to-month partnerships. Stay because our systems deliver real results, not because you&apos;re trapped in a contract.
              </p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <h4 className="font-display text-xl font-bold text-paper">One Unified Team</h4>
              <p className="mt-2 text-sm text-fog leading-relaxed">
                Architecture, design, mobile/web code, AI, and DevOps all under one accountable roof.
              </p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <h4 className="font-display text-xl font-bold text-paper">Real Revenue Reporting</h4>
              <p className="mt-2 text-sm text-fog leading-relaxed">
                Clear telemetry dashboards tied to revenue, conversion rates, and leads — not vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="eyebrow text-lime">( FAQ )</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-paper mt-3">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-fog max-w-xl mx-auto text-sm sm:text-base">
              Everything you need to know about our engineering process, pricing, and project milestones.
            </p>
          </div>

          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        eyebrow="Custom scope?"
        heading="Need something tailored? Let's talk."
        description="Bigger enterprise system, specific legacy migration, or unique technology mix? We'll create a custom proposal engineered around your exact goals."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="View services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}
