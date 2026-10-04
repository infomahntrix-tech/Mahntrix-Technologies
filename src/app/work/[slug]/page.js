import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink, CheckCircle2, ArrowLeft } from "lucide-react";
import WorkCard from "@/components/WorkCard";
import CtaBanner from "@/components/CtaBanner";
import RevealText from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { PROJECTS } from "@/lib/projectsData";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Case Study Not Found | Mahntrix Technologies" };
  }
  return {
    title: `${project.title} — ${project.category} Case Study | Mahntrix Technologies`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const targetLiveUrl = project.liveUrl || (project.url ? `https://${project.url}` : null);
  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Top Breadcrumb / Back Link */}
      <div className="mx-auto w-full max-w-6xl px-6 pt-6">
        <Link
          href="/work/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-fog hover:text-lime transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to all case studies
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-fog mb-4">
            <span className="rounded-full bg-lime/10 px-3 py-1 font-semibold text-lime">
              {project.category}
            </span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.client}</span>
          </div>
        </FadeIn>

        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          <RevealText text={project.title} />
        </h1>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-fog leading-relaxed">
            {project.description}
          </p>
        </FadeIn>

        {/* Live Link & Deliverables */}
        <FadeIn delay={0.3} className="mt-8 flex flex-wrap items-center gap-4">
          {targetLiveUrl && (
            <a
              href={targetLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-display font-medium text-ink hover:bg-lime-bright transition-colors"
            >
              Visit live project
              <ExternalLink className="size-4" />
            </a>
          )}

          {project.altUrl && (
            <a
              href={project.altUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-display font-medium text-paper hover:bg-white/10 transition-colors"
            >
              Alternate Demo
              <ExternalLink className="size-3.5" />
            </a>
          )}

          <div className="flex flex-wrap gap-2">
            {project.services.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-mono text-paper/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Large Screenshot Showcase Banner */}
        {project.image && (
          <FadeIn delay={0.35} className="mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="relative aspect-[16/9] w-full bg-ink-soft">
              <Image
                src={project.image}
                alt={`${project.title} Full Interface`}
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
        )}
      </section>

      {/* Metrics Counter Bar */}
      {project.results && (
        <section className="border-y border-white/10 bg-ink-soft py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="border-l border-white/10 pl-6">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-lime">
                    {res.number}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-fog font-mono">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Narrative Section: Challenge & Solution */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn delay={0.1}>
            <span className="eyebrow text-lime">01 / The Challenge</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-paper mt-3">
              The operational friction
            </h2>
            <p className="mt-6 text-base sm:text-lg text-fog leading-relaxed">
              {project.challenge}
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-ink-soft p-6">
              <p className="eyebrow text-fog-dim mb-4">Technology Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-white/10 bg-ink px-3 py-1.5 text-xs font-mono text-paper"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="eyebrow text-lime">02 / Our Engineering Solution</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-paper mt-3">
              Delivering the modern platform
            </h2>
            <p className="mt-6 text-base sm:text-lg text-fog leading-relaxed">
              {project.solution}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 flex items-start gap-4">
                <CheckCircle2 className="size-5 text-lime shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-paper">Decoupled Next.js Architecture</h4>
                  <p className="text-xs text-fog mt-1">Ultra-fast sub-second edge response times across mobile and desktop.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 flex items-start gap-4">
                <CheckCircle2 className="size-5 text-lime shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-paper">Automated Workflows</h4>
                  <p className="text-xs text-fog mt-1">Eliminated manual touchpoints with direct database and notification sync.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Testimonial Callout */}
      {project.testimonial && (
        <section className="border-y border-white/10 bg-lime py-24 text-ink sm:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="eyebrow text-ink/70">( Client Feedback )</p>
            <blockquote className="font-display mt-6 text-2xl sm:text-4xl font-bold leading-tight">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-display text-lg font-bold text-ink">{project.testimonial.author}</p>
              <p className="text-sm font-mono text-ink/80 mt-0.5">{project.testimonial.title}</p>
            </div>
          </div>
        </section>
      )}

      {/* More Work Showcase */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="eyebrow text-lime">( More work )</p>
              <h3 className="font-display text-3xl font-bold text-paper mt-2">
                Keep exploring
              </h3>
            </div>
            <Link href="/work/" className="text-sm font-display font-semibold text-lime hover:underline flex items-center gap-1">
              View all
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {otherProjects.map((p) => (
              <WorkCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        eyebrow="Let's talk"
        heading="Ready to build your next platform?"
        description="Book a free technical consultation and we'll architect the exact system needed for your business."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="Explore all services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}
