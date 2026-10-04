import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function InsightCard({ post }) {
  const { title, slug, category, readTime, date, excerpt, author } = post;

  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-ink-soft p-6 sm:p-8 transition-all duration-300 hover:border-lime/30 hover:shadow-2xl hover:shadow-lime/5">
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-fog-dim mb-4">
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-lime font-medium">
            {category}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {readTime}
            </span>
          </div>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-fog line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-mono text-fog">
          By {author?.name || "Mahntrix Team"}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-display font-semibold text-lime group-hover:underline">
          Read article
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <Link href={`/insights/${slug}/`} className="absolute inset-0 z-10" aria-label={title} />
    </article>
  );
}
