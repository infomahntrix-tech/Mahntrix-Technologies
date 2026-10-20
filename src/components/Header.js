"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "/services/" },
  { name: "Product", href: "/product/" },
  { name: "Work", href: "/work/" },
  { name: "About", href: "/about/" },
  { name: "Insights", href: "/insights/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || mobileMenuOpen
            ? "border-white/10 bg-ink-soft/90 backdrop-blur-md shadow-2xl shadow-black/40"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm tracking-tight transition-colors ${
                  isActive
                    ? "text-lime font-medium"
                    : "text-paper/70 hover:text-paper"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Link
              href="/contact/"
              data-analytics-cta="Book a call"
              data-analytics-location="header_desktop"
              className="inline-flex"
            >
              <span className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform bg-lime text-ink hover:bg-lime-bright h-11 px-5 text-sm font-display">
                <span className="relative z-10 inline-flex items-center gap-2">
                  Book a call
                  <ArrowUpRight className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-11 items-center justify-center rounded-full border border-white/10 text-paper lg:hidden hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-ink-soft/95 p-6 backdrop-blur-xl shadow-2xl lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col divide-y divide-white/5">
            <Link
              href="/"
              className={`py-3 text-lg font-display ${pathname === "/" ? "text-lime" : "text-paper/80 hover:text-paper"}`}
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 text-lg font-display ${
                  pathname?.startsWith(link.href) ? "text-lime" : "text-paper/80 hover:text-paper"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/contact/"
              data-analytics-cta="Book a consultation"
              data-analytics-location="header_mobile"
              className="w-full inline-flex"
            >
              <span className="w-full group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 bg-lime text-ink hover:bg-lime-bright h-12 px-6 text-base font-display">
                Book a consultation
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
