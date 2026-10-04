import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { Mail, Phone, MapPin } from "lucide-react";

const MARQUEE_ITEMS = [
  "Websites",
  "Web Applications",
  "Mobile Applications",
  "Enterprise ERPs",
  "Custom CRMs",
  "Custom Software",
  "AI & LLM Solutions",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink text-paper mt-auto">
      {/* Top Marquee Ticker */}
      <div className="border-b border-white/10 py-6 overflow-hidden">
        <div className="flex overflow-hidden font-display text-2xl text-paper/30">
          <div className="flex animate-marquee" style={{ "--marquee-duration": "36s" }}>
            <div className="flex shrink-0 items-center gap-8 pr-8">
              {MARQUEE_ITEMS.map((item, idx) => (
                <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
                  {item}
                  <span className="text-lime/70" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-8 pr-8">
              {MARQUEE_ITEMS.map((item, idx) => (
                <span key={`dup-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
                  {item}
                  <span className="text-lime/70" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand Info */}
          <div>
            <BrandLogo isFooter={true} />
            <p className="mt-5 max-w-xs text-sm text-fog leading-relaxed">
              Engineering high-performance websites, web applications, cross-platform mobile apps, enterprise ERPs, custom CRMs, and autonomous AI &amp; LLM solutions.
            </p>
          </div>

          {/* Pages Nav */}
          <nav className="flex flex-col gap-3">
            <p className="eyebrow text-fog-dim">Pages</p>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/">
              Home
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/">
              Services
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/work/">
              Work
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/about/">
              About
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/pricing/">
              Pricing
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/insights/">
              Insights
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/contact/">
              Contact
            </Link>
          </nav>

          {/* Services Nav */}
          <nav className="flex flex-col gap-3">
            <p className="eyebrow text-fog-dim">Services</p>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#websites">
              Websites
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#web-applications">
              Web Applications
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#mobile-applications">
              Mobile Applications
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#erps">
              Enterprise ERP Systems
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#crms">
              Custom CRM Platforms
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#custom-softwares">
              Custom Software
            </Link>
            <Link className="text-sm text-paper/80 transition-colors hover:text-lime" href="/services/#ai-llm">
              AI &amp; LLM Solutions
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-fog-dim">Get in touch</p>
            <a
              href="mailto:infomahntrix@gmail.com"
              className="flex items-center gap-2 text-sm text-paper/80 transition-colors hover:text-lime group"
            >
              <Mail className="size-4 text-lime shrink-0" />
              <span className="truncate">infomahntrix@gmail.com</span>
            </a>
            <a
              href="tel:+919575932050"
              className="flex items-center gap-2 text-sm text-paper/80 transition-colors hover:text-lime"
            >
              <Phone className="size-4 text-lime shrink-0" />
              <span>+91 95759 32050</span>
            </a>
            <div className="flex items-start gap-2 text-sm text-paper/80">
              <MapPin className="size-4 text-lime shrink-0 mt-0.5" />
              <span>India<br /><span className="text-fog text-xs">Global Software Operations</span></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-fog sm:flex-row">
          <p>© 2026 Mahntrix Technologies. All rights reserved.</p>
          <p className="font-mono tracking-wide text-paper/60">
            Intelligent engineering — measurable results.
          </p>
        </div>
      </div>
    </footer>
  );
}
