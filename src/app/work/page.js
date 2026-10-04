"use client";

import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import CtaBanner from "@/components/CtaBanner";
import RevealText from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { PROJECTS, WORK_CATEGORIES } from "@/lib/projectsData";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory || p.services.includes(selectedCategory));

  return (
    <main className="relative flex flex-col bg-ink text-paper pt-32">
      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12">
        <FadeIn delay={0.05}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px] shadow-lime/60" />
            <span className="font-mono text-xs tracking-widest text-paper/80 uppercase">
              FEATURED CLIENT PROJECTS &amp; LIVE DEMOS
            </span>
          </div>
        </FadeIn>
        
        <h1 className="font-display text-giant max-w-4xl text-paper font-bold tracking-tight">
          <RevealText text="Results we're proud to put our name on." />
        </h1>
        
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-fog leading-relaxed font-sans">
            Explore our delivered enterprise ERPs, HRMS suites, cloud dashboards, headless e-commerce platforms, and high-performance websites built for ambitious global clients.
          </p>
        </FadeIn>
      </section>

      {/* Projects Grid Section with Filter Tabs */}
      <section className="border-t border-white/10 bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 overflow-x-auto pb-2">
            {WORK_CATEGORIES.map((cat) => (
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

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.06}>
                <WorkCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        eyebrow="Your project next?"
        heading="Let's create your success story."
        description="The platforms above started with a strategic consultation. Let's explore what we can build for your business."
        primaryButtonText="Book consultation"
        primaryButtonHref="/contact/"
        secondaryButtonText="View all services"
        secondaryButtonHref="/services/"
      />
    </main>
  );
}
