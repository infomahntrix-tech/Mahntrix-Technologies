import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, LineChart, Users, Cpu, Award } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "About Us — Software & Digital Engineering Agency | Mahntrix Technologies",
  description: "Meet Mahntrix Technologies: an engineering and digital agency building high-performance websites, mobile apps, enterprise ERP & CRM systems, and AI growth solutions.",
};

const VALUES = [
  {
    num: "01",
    title: "Engineering Innovation",
    description: "We build with tomorrow's tools, today (Next.js 15, Flutter, AI agents, Edge Cloud) — so your business stays ahead of the curve, not playing catch-up.",
    icon: Zap,
  },
  {
    num: "02",
    title: "Radical Transparency",
    description: "Clear sprint milestones, honest timelines, zero confusing jargon. You have 24/7 visibility into repository commits, staging previews, and deliverables.",
    icon: ShieldCheck,
  },
  {
    num: "03",
    title: "Measurable ROI",
    description: "Aesthetics are table stakes. We engineer experiences and architectures specifically calibrated to maximize lead conversion, user retention, and operating efficiency.",
    icon: LineChart,
  },
  {
    num: "04",
    title: "Long-Term Partnership",
    description: "We don't act as passive contractors; we partner as your dedicated technical co-founders and architects, offering strategic guidance at every growth inflection point.",
    icon: Users,
  },
  {
    num: "05",
    title: "Continuous Optimization",
    description: "Launch is only the starting line. We rigorously monitor performance telemetry, resolve edge-case friction, and refine funnels so your returns compound month over month.",
    icon: Award,
  }
];

const TIMELINE = [
  {
    year: "2021",
    title: "The Journey Begins",
    description: "Mahntrix Technologies was founded with a clear mission: provide ambitious startups and businesses with enterprise-grade software and high-speed web platforms."
  },
  {
    year: "2023",
    title: "Mobile & Cloud Expansion",
    description: "Expanded into high-performance cross-platform Flutter and React Native mobile development, shipping apps for fintech and service industries."
  },
  {
    year: "2024",
    title: "Enterprise ERP & Custom CRM",
    description: "Built and deployed comprehensive management ecosystems for universities, schools, hospital networks, and manufacturing operations."
  },
  {
    year: "2026",
    title: "AI Automation & Global Scale",
    description: "Integrated custom LLM agents, intelligent workflow automation, and edge-native web architecture, serving clients across the US, UK, Australia, New Zealand, and India."
  }
];

export default function AboutPage() {
  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60" />
          <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
            EST. 2021 · GLOBAL ENGINEERING
          </span>
        </div>
        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          Building digital solutions that <span className="text-lime">drive real growth.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-fog leading-relaxed font-sans">
          We&apos;re a software engineering and digital transformation agency obsessed with one thing: turning technology into measurable business growth for the ambitious brands we partner with.
        </p>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-white/10 bg-ink-soft py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-lime">50+</p>
              <p className="mt-2 text-sm text-fog font-mono">Projects delivered</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-paper">99+</p>
              <p className="mt-2 text-sm text-fog font-mono">Avg. Lighthouse score</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-lime">4.9/5</p>
              <p className="mt-2 text-sm text-fog font-mono">Client satisfaction</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-paper">5+ yrs</p>
              <p className="mt-2 text-sm text-fog font-mono">Global track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Cream Paper Contrast Section) */}
      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink/60">( Core values )</p>
            <h2 className="font-display text-giant mt-4 text-ink font-bold leading-tight">
              What we stand for
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Our principles determine every technical choice, client communication, and line of code we ship.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-sm backdrop-blur-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-ink/40">
                        {val.num}
                      </span>
                      <Icon className="size-5 text-ink/70" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink mt-6">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-xl">
            <p className="eyebrow text-lime">( Our journey )</p>
            <h2 className="font-display text-huge mt-4 text-paper font-bold">
              The road so far
            </h2>
          </div>

          <div className="mt-16 space-y-12 border-l border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-4 rounded-full border-2 border-ink bg-lime shadow-[0_0_10px_rgba(200,240,45,0.6)]" />
                <span className="font-mono text-sm font-bold text-lime">
                  {item.year}
                </span>
                <h3 className="font-display text-2xl font-bold text-paper mt-1">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-fog leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBanner
        eyebrow="Work with us"
        heading="Let's write the next chapter together."
        description="We take on a limited number of partner projects each quarter so every build gets our full architectural focus. Let's see if we're a fit."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="View services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}
