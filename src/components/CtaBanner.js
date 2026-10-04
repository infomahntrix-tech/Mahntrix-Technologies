import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner({
  eyebrow = "Start the conversation",
  heading = "Let's build your digital future.",
  description = "Book a free, no-pressure consultation. We'll show you exactly where the biggest growth and efficiency opportunities are for your business.",
  primaryButtonText = "Book consultation",
  primaryButtonHref = "/contact/",
  secondaryButtonText = "View services",
  secondaryButtonHref = "/services/",
  className = ""
}) {
  return (
    <section className={`relative overflow-hidden bg-lime text-ink ${className}`}>
      {/* Watermark Emblem */}
      <div className="pointer-events-none absolute -right-24 -top-24 opacity-[0.09]">
        <svg viewBox="0 0 100 100" className="h-[28rem] w-[28rem] animate-spin-slow" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 72 L24 28 L50 56 L76 28 L76 72" />
          </g>
          <circle cx="50" cy="56" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 relative z-10">
        <p className="eyebrow text-ink/70">({eyebrow})</p>
        <h2 className="font-display text-giant mt-5 max-w-4xl font-bold tracking-tight">
          {heading}
        </h2>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="max-w-md text-lg text-ink/80 leading-relaxed font-sans">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={primaryButtonHref} className="inline-flex">
              <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform bg-ink text-paper hover:bg-ink-soft border border-white/10 h-14 px-7 text-base font-display">
                <span className="relative z-10 inline-flex items-center gap-2">
                  {primaryButtonText}
                  <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </Link>
            {secondaryButtonText && (
              <Link href={secondaryButtonHref} className="inline-flex">
                <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform border border-ink/30 text-ink hover:bg-ink/10 backdrop-blur-sm h-14 px-7 text-base font-display">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    {secondaryButtonText}
                  </span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
