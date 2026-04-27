"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Experienced Professionals",
    desc: "Our team brings years of expertise in web development, ensuring your project is in capable hands.",
    type: "image",
  },
  {
    id: 2,
    title: "Free After Sale Support",
    desc: "With each of our website design and development package, we offer free technical support up-to a period of 1 year.",
    type: "card",
  },
  { id: 3, title: "Affordable Pricing", desc: "Competitive pricing without compromising on quality.", type: "vertical" },
  { id: 4, title: "Quality First", desc: "We prioritize quality in every project we deliver.", type: "vertical" },
  { id: 5, title: "More Into Conversion", desc: "Optimized designs that drive conversions and growth.", type: "vertical" },
];

export default function ServicesSection() {
  const [active, setActive] = useState(2);
  const [hoveredVertical, setHoveredVertical] = useState(null);

  const getCardWidth = (id) => {
    if (id === 1) return "flex-1";
    if (id === 2) {
      if (hoveredVertical) return "w-[120px] md:w-[150px]";
      return "flex-1";
    }
    if (hoveredVertical === id) return "w-[200px] md:w-[280px]";
    return "w-[80px] md:w-[100px]";
  };

  const getCardContent = (id) => {
    if (id === 1) return { showTitle: true, showDesc: false, showNumber: true };
    if (id === 2) return { showTitle: true, showDesc: active === 2 && !hoveredVertical, showNumber: true };
    const isExpanded = hoveredVertical === id;
    return { showTitle: isExpanded, showDesc: isExpanded, showNumber: true };
  };

  const handleVerticalHover = (id) => {
    setHoveredVertical(id);
    if (id) setActive(id);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-4 md:px-10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <span className="bg-[#0F172A] text-white px-4 py-2 rounded-lg text-xs font-bold tracking-widest">
            SERVICES
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-[#0F172A]">
            We Are A Creative Web <br />
            <span className="text-[#0B3C8C]">Solutions Agency</span>
          </h1>
        </div>

        <button className="btn-primary">
          EXPLORE MORE
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 min-h-[320px]">

        <div className={`${getCardWidth(1)} bg-gradient-to-br from-[#0B3C8C] to-[#1DA1F2] rounded-2xl p-6 text-white min-h-[220px] flex items-end justify-between transition-all duration-500 shadow-lg shadow-blue-900/10`}>
          <h2 className="text-lg md:text-xl font-bold max-w-[150px]">
            {services[0].title}
          </h2>
          <span className="bg-white text-[#0B3C8C] w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold shadow-sm">
            01
          </span>
        </div>

        <div
          onMouseEnter={() => { setActive(2); setHoveredVertical(null); }}
          className={`${getCardWidth(2)} rounded-2xl p-6 transition-all duration-500 cursor-pointer overflow-hidden min-h-[220px] shadow-sm border border-blue-50
            ${active === 2 && !hoveredVertical ? 'bg-gradient-to-br from-[#0B3C8C] to-[#0F172A] text-white' : 'bg-white text-[#0F172A]'}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start">
              <span className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold shadow-sm 
                ${active === 2 && !hoveredVertical ? 'bg-white text-[#0B3C8C]' : 'bg-[#F1F5F9] text-gray-500'}`}>
                02
              </span>
            </div>

            <div className="mt-6">
              <h2 className="text-lg md:text-xl font-bold">
                {services[1].title}
              </h2>

              {getCardContent(2).showDesc && (
                <p className="mt-3 text-xs md:text-sm opacity-80 leading-relaxed max-w-xs">
                  {services[1].desc}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          {[3, 4, 5].map((id) => {
            const item = services.find((s) => s.id === id);
            const isExpanded = hoveredVertical === id;

            return (
              <div
                key={id}
                onMouseEnter={() => handleVerticalHover(id)}
                onMouseLeave={() => setHoveredVertical(null)}
                className={`${getCardWidth(id)} rounded-2xl px-4 py-6 cursor-pointer transition-all duration-500 overflow-hidden min-h-[220px] flex flex-col relative
                  ${isExpanded ? "bg-[#1DA1F2] text-white shadow-xl shadow-blue-400/20" : "bg-[#0B3C8C] text-white opacity-95"}`}
              >
                {!isExpanded && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                    <p className="whitespace-nowrap text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                      {item.title}
                    </p>
                  </div>
                )}

                {isExpanded && (
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-bold mb-3 uppercase tracking-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] md:text-xs opacity-90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}

                <div className={`flex justify-end mt-4 ${isExpanded ? '' : 'absolute bottom-4 right-4'}`}>
                  <span className="bg-white text-[#0B3C8C] w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs shadow-md">
                    {id.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}