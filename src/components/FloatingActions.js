"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { trackContactClick, setupGlobalAnalyticsListeners } from "@/lib/analytics";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Top Progressive Scroll Bar with smooth physics interpolation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Initialize passive delegated listener for email, phone, and WhatsApp links site-wide
    setupGlobalAnalyticsListeners();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(Math.max((currentScrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      if (currentScrollY > 320) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsAppClick = () => {
    trackContactClick({
      contact_method: 'whatsapp',
      click_location: 'floating_action_button',
    });
  };

  // SVG circular progress calculation for Scroll-to-Top (radius = 20, circumference ≈ 125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* 1. Top Progressive Reading / Scroll Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none overflow-hidden">
        <motion.div
          className="h-full w-full bg-gradient-to-r from-lime via-lime-bright to-lime origin-left shadow-[0_0_12px_rgba(200,240,45,0.7)]"
          style={{ scaleX }}
        />
      </div>

      {/* 2. Scroll to Top Button - Left Side */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 z-40 select-none sm:bottom-7 sm:left-7"
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="group relative flex size-12 items-center justify-center rounded-full bg-ink-soft/90 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-lime/60 hover:shadow-[0_0_25px_rgba(200,240,45,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime cursor-pointer"
            >
              {/* Circular SVG Progress Ring */}
              <svg
                className="absolute inset-0 size-12 -rotate-90 pointer-events-none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                {/* Background track */}
                <circle
                  cx="24"
                  cy="24"
                  r={radius}
                  className="stroke-white/10"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Active progress */}
                <circle
                  cx="24"
                  cy="24"
                  r={radius}
                  className="stroke-lime transition-[stroke-dashoffset] duration-150 ease-out"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset,
                  }}
                />
              </svg>

              {/* Icon */}
              <ArrowUp className="size-5 text-paper transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-lime" />

              {/* Hover Tooltip */}
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden sm:block whitespace-nowrap rounded-md bg-ink-soft border border-white/10 px-2.5 py-1 text-[11px] font-mono text-paper opacity-0 shadow-xl backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                Top • {Math.round(scrollProgress)}%
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. WhatsApp Button (Icon Only with Ambient Motion) - Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 right-6 z-40 select-none sm:bottom-7 sm:right-7"
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex items-center justify-center"
        >
          {/* Animated Sonar Wave 1 */}
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/30 -z-10"
            animate={{
              scale: [1, 1.4, 1.7],
              opacity: [0.65, 0.3, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
            aria-hidden="true"
          />

          {/* Animated Sonar Wave 2 (Phase Offset) */}
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full border border-emerald-400/50 -z-10"
            animate={{
              scale: [1, 1.35, 1.6],
              opacity: [0.75, 0.35, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.3,
            }}
            aria-hidden="true"
          />

          <a
            href="https://wa.me/919575932050?text=Hello%20Mahntrix%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            data-analytics-tracked="true"
            aria-label="Chat with Mahntrix Technologies on WhatsApp"
            className="group relative flex size-12 sm:size-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#1ea952] to-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] border border-emerald-400/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <FaWhatsapp className="size-6 sm:size-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

            {/* Desktop Hover Tooltip */}
            <span className="pointer-events-none absolute bottom-full right-1/2 translate-x-1/2 mb-3 hidden sm:block whitespace-nowrap rounded-md bg-ink-soft/95 border border-white/10 px-3 py-1.5 text-xs font-medium text-paper opacity-0 shadow-2xl backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1">
              Chat on WhatsApp
            </span>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}
