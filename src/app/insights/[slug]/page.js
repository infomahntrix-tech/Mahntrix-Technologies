import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Share2 } from "lucide-react";
import InsightCard from "@/components/InsightCard";
import CtaBanner from "@/components/CtaBanner";
import { INSIGHTS } from "@/lib/insightsData";

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found | Mahntrix Technologies" };
  }
  return {
    title: `${post.title} | Mahntrix Technologies Insights`,
    description: post.excerpt,
  };
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = INSIGHTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Back Link */}
      <div className="mx-auto w-full max-w-4xl px-6 pt-6">
        <Link
          href="/insights/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-fog hover:text-lime transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to all insights
        </Link>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-6 pb-20 pt-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-fog mb-6">
          <span className="rounded-full bg-lime/10 px-3 py-1 font-semibold text-lime">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {post.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-paper leading-[1.15]">
          {post.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-fog leading-relaxed border-l-2 border-lime pl-4 italic">
          {post.excerpt}
        </p>

        {/* Author info */}
        <div className="mt-8 flex items-center justify-between border-y border-white/10 py-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-lime/10 border border-lime flex items-center justify-center font-display font-bold text-lime text-sm">
              {post.author?.name ? post.author.name[0] : "M"}
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-paper">{post.author.name}</p>
              <p className="text-xs font-mono text-fog">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="mt-12 prose prose-invert max-w-none space-y-6 text-base sm:text-lg text-paper/85 leading-relaxed">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/## (.*)/g, '<h2 class="font-display text-2xl sm:text-3xl font-bold text-paper mt-10 mb-4">$1</h2>')
                .replace(/### (.*)/g, '<h3 class="font-display text-xl sm:text-2xl font-bold text-lime mt-8 mb-3">$1</h3>')
                .replace(/- \*\*(.*?)\*\*: (.*)/g, '<li class="ml-4 mb-2 list-disc"><strong class="text-paper font-semibold">$1:</strong> $2</li>')
                .replace(/\n\n/g, '<p class="mb-4 text-fog leading-relaxed">')
            }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t border-white/10 bg-ink-soft py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow text-lime">( Related articles )</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-paper mt-1">
                Continue reading
              </h3>
            </div>
            <Link href="/insights/" className="text-sm font-display font-semibold text-lime hover:underline flex items-center gap-1">
              View all
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((p) => (
              <InsightCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        eyebrow="Turn ideas into reality"
        heading="Let's build your software platform."
        description="Book a consultation with our senior engineers to discuss your architecture and roadmap."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="Explore our services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}
