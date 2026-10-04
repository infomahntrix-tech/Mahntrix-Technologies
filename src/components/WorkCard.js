import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function WorkCard({ project }) {
  const {
    title,
    slug,
    category,
    year,
    url,
    liveUrl,
    altUrl,
    image,
    description,
    services = [],
    color = "#c8f02d",
  } = project;

  const targetLiveUrl = liveUrl || (url ? `https://${url}` : null);

  return (
    <div
      style={{ "--a": color }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink-soft p-6 sm:p-7 transition-all duration-500 hover:border-[var(--a)]/40 hover:shadow-2xl hover:shadow-[var(--a)]/10"
    >
      {/* Top Meta Bar & Header */}
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-fog-dim">
          <span className="uppercase tracking-wider text-fog group-hover:text-[var(--a)] transition-colors">
            {category}
          </span>
          <span>{year}</span>
        </div>

        {/* Title & Arrow */}
        <div className="mt-3">
          <h3 className="font-display text-2xl font-bold tracking-tight text-paper group-hover:text-[var(--a)] transition-colors flex items-start justify-between gap-2">
            <Link href={`/work/${slug}/`} className="hover:underline line-clamp-1">
              {title}
            </Link>
            <Link
              href={`/work/${slug}/`}
              aria-label={`View ${title} case study`}
              className="text-fog transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--a)] shrink-0 mt-1"
            >
              <ArrowUpRight className="size-5" />
            </Link>
          </h3>

          {targetLiveUrl && (
            <div className="mt-1.5 flex items-center gap-3">
              <a
                href={targetLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-lime/90 hover:text-lime-bright hover:underline transition-colors z-20"
              >
                <span className="truncate max-w-[220px]">{url || "Live Preview"}</span>
                <ExternalLink className="size-3 shrink-0" />
              </a>
              {altUrl && (
                <a
                  href={altUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-fog hover:text-paper hover:underline transition-colors z-20 shrink-0"
                >
                  <span>(Alt)</span>
                  <ExternalLink className="size-2.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {description && (
          <p className="mt-3 text-xs sm:text-sm text-fog line-clamp-2 leading-relaxed min-h-[2.5rem]">
            {description}
          </p>
        )}
      </div>

      {/* Real Project Image Preview Container (Uniform 16:10 aspect ratio) */}
      <div className="my-5">
        <Link
          href={`/work/${slug}/`}
          className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink/90 group-hover:border-[var(--a)]/30 transition-all duration-300"
        >
          {/* Top Browser Dots Bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink/80 px-3 py-1.5 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-white/20" />
              <div className="size-2 rounded-full bg-white/20" />
              <div className="size-2 rounded-full bg-white/20" />
            </div>
            <span className="font-mono text-[9px] text-white/40 truncate max-w-[150px]">
              {url || title}
            </span>
            <div className="size-2" />
          </div>

          {/* Project Screenshot Image */}
          {image ? (
            <div className="relative h-full w-full pt-6">
              <Image
                src={image}
                alt={`${title} Interface Preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-ink text-xs font-mono text-fog">
              No Preview
            </div>
          )}

          {/* Hover Glow Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      </div>

      {/* Services Tags & Live Button Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {services.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-mono text-fog group-hover:text-paper transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {targetLiveUrl && (
          <a
            href={targetLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="z-20 inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono font-medium text-lime hover:bg-lime hover:text-ink transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="size-3" />
          </a>
        )}
      </div>
    </div>
  );
}
