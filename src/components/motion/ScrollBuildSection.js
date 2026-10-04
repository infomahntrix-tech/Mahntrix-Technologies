"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollBuildSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Particle explosion layout
  const particles = useMemo(() => {
    const arr = [];
    const count = 28;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const dist = 140 + Math.random() * 200;
      arr.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        r: Math.random() * 360,
        s: 0.8 + Math.random() * 0.8,
      });
    }
    return arr;
  }, []);

  // Transforms driven by scrollYProgress
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.7, 0.9], [0, 1, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0.1, 0.45, 0.85], [0.85, 1, 1.15]);
  const subtextOpacity = useTransform(scrollYProgress, [0.2, 0.45, 0.75], [0, 1, 0]);
  const subtextY = useTransform(scrollYProgress, [0.2, 0.45, 0.75], [30, 0, -20]);

  // Flash & Ring trigger
  const ringScale = useTransform(scrollYProgress, [0.4, 0.65], [0.2, 8]);
  const ringOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.65], [0, 0.9, 0]);
  const flashOpacity = useTransform(scrollYProgress, [0.43, 0.48, 0.55], [0, 0.25, 0]);

  // Shake effect around peak
  const shakeX = useTransform(scrollYProgress, [0.44, 0.46, 0.48, 0.5, 0.52], [0, -8, 6, -3, 0]);
  const shakeY = useTransform(scrollYProgress, [0.44, 0.46, 0.48, 0.5, 0.52], [0, 5, -4, 2, 0]);

  return (
    <section
      ref={containerRef}
      aria-label="Let's build"
      className="relative h-[280vh] bg-ink"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Concentric Expanding Shockwave Ring */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime shadow-[0_0_50px_rgba(200,240,45,0.4)]"
          style={{
            scale: ringScale,
            opacity: ringOpacity,
          }}
        />

        {/* Ambient Lime Flash Overlay */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-lime mix-blend-screen"
          style={{
            opacity: flashOpacity,
          }}
        />

        {/* Particle Debris Burst */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2">
          {particles.map((p, i) => {
            return (
              <motion.span
                key={i}
                className="absolute block h-2 w-5 bg-lime shadow-[0_0_12px_rgba(200,240,45,0.8)]"
                style={{
                  borderRadius: 2,
                  x: useTransform(scrollYProgress, [0.4, 0.65], [0, p.x]),
                  y: useTransform(scrollYProgress, [0.4, 0.65], [0, p.y]),
                  rotate: useTransform(scrollYProgress, [0.4, 0.65], [0, p.r]),
                  scale: useTransform(scrollYProgress, [0.4, 0.45, 0.65], [0, p.s, 0]),
                  opacity: useTransform(scrollYProgress, [0.4, 0.45, 0.65], [0, 1, 0]),
                }}
              />
            );
          })}
        </div>

        {/* Center Content with Shake */}
        <motion.div
          className="relative z-10 px-6 text-center max-w-5xl"
          style={{
            x: shakeX,
            y: shakeY,
          }}
        >
          <motion.div style={{ opacity: titleOpacity, scale: titleScale }}>
            <p className="eyebrow text-lime mb-4 tracking-widest uppercase">
              ( Where Ambition Meets Execution )
            </p>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-paper">
              Let&apos;s <span className="text-lime">build.</span>
            </h2>
          </motion.div>

          <motion.p
            className="mt-6 text-lg sm:text-2xl text-fog max-w-xl mx-auto font-sans leading-relaxed"
            style={{ opacity: subtextOpacity, y: subtextY }}
          >
            Engineering scalable websites, mobile apps, ERPs, CRMs, and custom AI systems designed to outperform.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
