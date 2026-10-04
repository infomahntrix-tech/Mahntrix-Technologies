"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Send } from "lucide-react";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS, CATEGORIES } from "@/lib/insightsData";
import toast from "react-hot-toast";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const featuredPost = INSIGHTS.find((p) => p.featured) || INSIGHTS[0];

  const filteredPosts = selectedCategory === "All"
    ? INSIGHTS
    : INSIGHTS.filter((p) => p.category === selectedCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubscribed(true);
    toast.success("Subscribed! Thank you for joining our engineering newsletter.");
  };

  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60" />
          <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
            ENGINEERING &amp; GROWTH INSIGHTS
          </span>
        </div>
        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          Ideas that move <span className="text-lime">businesses forward.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fog leading-relaxed font-sans">
          Practical guides, architectural deep-dives, AI automation strategies, and growth systems from the Mahntrix Technologies engineering team.
        </p>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="group relative overflow-hidden rounded-3xl border border-lime/30 bg-ink-soft p-8 sm:p-12 transition-all duration-300 hover:border-lime/60 hover:shadow-2xl hover:shadow-lime/5">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-fog mb-4">
                <span className="rounded-full bg-lime px-3 py-1 font-bold text-ink uppercase tracking-wider">
                  FEATURED
                </span>
                <span className="text-lime">{featuredPost.category}</span>
                <span>·</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-paper group-hover:text-lime transition-colors">
                {featuredPost.title}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-fog leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-display font-semibold text-lime">
                <span>Read full guide</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            <Link
              href={`/insights/${featuredPost.slug}/`}
              className="absolute inset-0 z-10"
              aria-label={featuredPost.title}
            />
          </div>
        </section>
      )}

      {/* Category Filter Tabs & Grid */}
      <section className="border-t border-white/10 bg-ink py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-lime text-ink font-bold shadow-md"
                    : "border border-white/10 bg-white/5 text-fog hover:border-white/20 hover:text-paper"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section (High-Contrast Lime Accent) */}
      <section className="border-y border-white/10 bg-lime py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow text-ink/70">( Newsletter )</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4">
            Get engineering &amp; growth ideas in your inbox
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink/80 max-w-lg mx-auto">
            One practical breakdown every fortnight. No spam, unsubscribe anytime.
          </p>

          {isSubscribed ? (
            <div className="mt-8 rounded-full bg-ink text-paper py-4 px-8 max-w-md mx-auto font-display font-medium text-sm">
              ✓ You&apos;re on the list! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full sm:w-auto flex-1 rounded-full border border-ink/20 bg-white px-5 py-3.5 text-sm text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-ink"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-display font-medium text-paper hover:bg-ink-soft transition-colors cursor-pointer"
              >
                Subscribe
                <Send className="size-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
