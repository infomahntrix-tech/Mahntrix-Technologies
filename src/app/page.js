import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import TechMarquee from "@/components/TechMarquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import WorkCard from "@/components/WorkCard";
import CtaBanner from "@/components/CtaBanner";
import ScrollBuildSection from "@/components/motion/ScrollBuildSection";
import RevealText from "@/components/motion/RevealText";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { PROJECTS } from "@/lib/projectsData";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const metadata = {
  title: "Mahntrix Technologies | Software & Digital Engineering Agency",
  description: "Mahntrix Technologies builds high-performance websites, web applications, mobile apps, enterprise ERPs, custom CRMs, custom software, and AI/LLM solutions.",
};

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <main className="relative flex flex-col bg-ink text-paper">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pt-32 pb-20">
        <HeroCanvas />

        <div className="relative mx-auto w-full max-w-6xl px-6 z-10">
          {/* Badge */}
          <FadeIn delay={0.05}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm shadow-inner">
              <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60 animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
                INNOVATIVE SOFTWARE &amp; AI ENGINEERING AGENCY
              </span>
            </div>
          </FadeIn>

          {/* Main Hero Headline with Word Mask Reveal */}
          <h1 className="font-display text-giant max-w-5xl tracking-tight text-paper font-bold">
            <RevealText text="Empowering your digital future" />
          </h1>

          {/* Subtitle */}
          <FadeIn delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-fog leading-relaxed font-sans">
              Mahntrix Technologies engineers high-performance websites, web applications, mobile apps, enterprise ERPs, custom CRMs, bespoke software, and autonomous AI &amp; LLM solutions that deliver measurable results.
            </p>
          </FadeIn>

          {/* CTA Action Buttons */}
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact/" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform bg-lime text-ink hover:bg-lime-bright h-14 px-8 text-base font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Book consultation
                    <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Link>

              <Link href="/services/" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform border border-white/20 text-paper hover:bg-white/5 backdrop-blur-sm h-14 px-8 text-base font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    View services
                  </span>
                </span>
              </Link>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={0.55}>
            <div className="mt-16 flex items-center gap-3 text-xs font-mono text-fog-dim">
              <div className="flex size-7 items-center justify-center rounded-full border border-white/10 text-lime animate-bounce">
                <ArrowDown className="size-3.5" />
              </div>
              <span className="tracking-widest uppercase">( Keep scrolling )</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE SCROLL-TRIGGERED "LET'S BUILD" SECTION */}
      {/* ========================================================================= */}
      <ScrollBuildSection />

      {/* ========================================================================= */}
      {/* 3. TECH STACK MARQUEE TICKER */}
      {/* ========================================================================= */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 4. INTRO STATEMENT & KEY METRICS (WHAT WE DO) */}
      {/* ========================================================================= */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-lime">( What we do )</p>
          <h2 className="font-display text-huge mt-6 max-w-4xl text-paper font-bold leading-tight">
            <RevealText text="We build the websites, software platforms, and scalable AI systems behind ambitious global brands." />
          </h2>

          {/* 4-column metric counters */}
          <Stagger className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
            <StaggerItem className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-lime">50+</p>
              <p className="mt-2 text-sm text-fog font-mono">Projects delivered</p>
            </StaggerItem>
            <StaggerItem className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-paper">99+</p>
              <p className="mt-2 text-sm text-fog font-mono">Avg. Lighthouse score</p>
            </StaggerItem>
            <StaggerItem className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-lime">4.9/5</p>
              <p className="mt-2 text-sm text-fog font-mono">Client satisfaction</p>
            </StaggerItem>
            <StaggerItem className="border-l border-white/10 pl-6">
              <p className="font-display text-4xl sm:text-5xl font-bold text-paper">5+ yrs</p>
              <p className="mt-2 text-sm text-fog font-mono">Engineering excellence</p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FULL-STACK SERVICES SECTION */}
      {/* ========================================================================= */}
      <ServicesAccordion />

      {/* ========================================================================= */}
      {/* 6. THE APPROACH (HIGH-CONTRAST LIGHT SECTION) */}
      {/* ========================================================================= */}
      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Sticky Left Column */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-ink/60">( The approach )</p>
              <h2 className="font-display text-giant mt-5 text-ink font-bold leading-tight">
                <RevealText text="How we drive growth" />
              </h2>
              <p className="mt-6 max-w-sm text-lg text-ink/70 leading-relaxed font-sans">
                A proven process that turns software engineering and AI automation into your most reliable competitive advantage.
              </p>
              <Link href="/about/" className="inline-flex mt-8">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform bg-lime text-ink hover:bg-lime-bright h-14 px-7 text-base font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    About the team
                    <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Link>
            </div>

            {/* Right Column Step Cards */}
            <div className="space-y-8 divide-y divide-ink/10">
              <FadeIn delay={0.1} className="pt-8 first:pt-0">
                <span className="font-mono text-sm font-semibold text-ink/40">01</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 text-ink">
                  Strategy first
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">
                  We start with your business goals, user journeys, and technical constraints — not a generic template. Every architectural decision maps directly to metrics that matter to your bottom line.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="pt-8">
                <span className="font-mono text-sm font-semibold text-ink/40">02</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 text-ink">
                  Designed to convert
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">
                  Beautiful is table stakes. We engineer seamless user experiences, intuitive navigation patterns, and psychological trigger points that turn passive visitors into engaged, paying customers.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="pt-8">
                <span className="font-mono text-sm font-semibold text-ink/40">03</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 text-ink">
                  Built to last
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">
                  Fast, accessible, maintainable code on modern stacks (Next.js 15, Flutter, React Native, PostgreSQL, Cloud CDNs) — so your digital investment continues performing flawlessly for years to come.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="pt-8">
                <span className="font-mono text-sm font-semibold text-ink/40">04</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 text-ink">
                  Optimised forever
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">
                  Launch day is just the starting line. We continuously monitor performance, run iterative A/B improvements, and refine your technical funnel so results compound month over month.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SELECTED WORK SECTION */}
      {/* ========================================================================= */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-lime">( Selected work )</p>
              <h2 className="font-display text-giant mt-5 text-paper font-bold">
                <RevealText text="Proof, not promises" />
              </h2>
            </div>
            <FadeIn delay={0.2}>
              <Link href="/work/" className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform border border-paper/30 hover:bg-paper/10 backdrop-blur-sm h-14 px-7 text-base text-paper font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    View all work
                    <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Link>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.08}>
                <WorkCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLIENT TESTIMONIAL QUOTE SECTION */}
      {/* ========================================================================= */}
      <section className="border-y border-white/10 bg-ink-soft py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="eyebrow text-lime">( What clients say )</p>
          <blockquote className="font-display mt-8 text-3xl leading-tight text-paper sm:text-5xl sm:leading-tight font-bold">
            <RevealText text="“Mahntrix Technologies didn't just build us an application — they engineered the core engine that powers our entire business operations.”" />
          </blockquote>
          <FadeIn delay={0.3} className="mt-10">
            <p className="text-paper font-display text-lg font-semibold">William Jones</p>
            <p className="text-sm text-fog font-mono mt-1">Director, Kiwiana Immigration Services</p>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. GIANT CTA BANNER */}
      {/* ========================================================================= */}
      <CtaBanner
        eyebrow="Start the conversation"
        heading="Let's build your digital future."
        description="Book a free, no-pressure consultation. We'll show you exactly where the biggest technology and revenue growth opportunities are."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="View services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}