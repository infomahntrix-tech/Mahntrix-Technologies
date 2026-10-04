export default function TechMarquee({ items, speed = "32s", className = "" }) {
  const defaultItems = [
    "Next.js 15",
    "Flutter & React Native",
    "Web Applications",
    "Enterprise ERP Systems",
    "Custom CRM Platforms",
    "AI & LLM Solutions",
    "Custom Software",
    "PostgreSQL & Cloud APIs",
    "High-Performance SaaS",
    "Docker & DevOps"
  ];

  const displayItems = items || defaultItems;

  return (
    <div className={`border-y border-white/10 bg-ink py-5 overflow-hidden ${className}`}>
      <div className="flex overflow-hidden font-mono text-sm uppercase tracking-widest text-paper/50">
        <div className="flex animate-marquee" style={{ "--marquee-duration": speed }}>
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {displayItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
                {item}
                <span className="text-lime/70" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {displayItems.map((item, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
                {item}
                <span className="text-lime/70" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
