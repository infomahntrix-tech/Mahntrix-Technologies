"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Experienced Professionals",
    desc: "",
    type: "image",
  },
  {
    id: 2,
    title: "Free After Sale Support",
    desc: "With each of our website design and development package, we offer free technical support up-to a period of 1 year.",
    type: "card",
  },
  { id: 3, title: "Affordable Pricing", type: "vertical" },
  { id: 4, title: "Quality First", type: "vertical" },
  { id: 5, title: "More Into Conversion", type: "vertical" },
];

export default function ServicesSection() {
  const [active, setActive] = useState(2);

  return (
    <section className="w-full bg-gray-100 py-10 px-4 md:px-10">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
            SERVICES
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            We Are A Creative Web <br /> Solutions Agency
          </h1>
        </div>

        <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
          EXPLORE MORE
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Big Card */}
        <div className="flex-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-6 text-white min-h-[250px] flex items-end justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">
            Experienced Professionals
          </h2>
          <span className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
            01
          </span>
        </div>

        {/* Middle Dynamic Card */}
        <div
          className="flex-1 rounded-3xl p-6 transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setActive(2)}
          style={{
            background:
              active === 2
                ? "linear-gradient(to right, #ef4444, #7f1d1d)"
                : "#eee",
            color: active === 2 ? "white" : "black",
          }}
        >
          <div className="flex justify-between items-start">
            <span className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
              02
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-6">
            Free After Sale Support
          </h2>

          {active === 2 && (
            <p className="mt-4 text-sm md:text-base opacity-90">
              With each of our website design and development package, we
              offer free technical support up-to a period of 1 year.
            </p>
          )}
        </div>

        {/* Right Vertical Cards */}
        <div className="flex gap-3 overflow-x-auto lg:overflow-visible">
          {[3, 4, 5].map((id) => {
            const item = services.find((s) => s.id === id);
            return (
              <div
                key={id}
                onMouseEnter={() => setActive(id)}
                className={`flex flex-col justify-between items-center rounded-3xl px-4 py-6 min-w-[80px] md:min-w-[100px] cursor-pointer transition-all duration-500 ${
                  active === id
                    ? "bg-red-700 text-white scale-105"
                    : "bg-red-600 text-white opacity-80"
                }`}
              >
                <p className="rotate-[-90deg] whitespace-nowrap text-sm md:text-base">
                  {item.title}
                </p>

                <span className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full mt-6">
                  {id.toString().padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// ================= CTA SECTION =================
export function MeetingCTA() {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="meeting"
          className="w-full h-[220px] md:h-[320px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 py-6 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Want to schedule a meeting with our experts?
            </h2>
            <p className="mt-3 text-sm md:text-lg opacity-90">
              Let’s talk Clear. Concise. Compelling ideas for your brand!
            </p>
          </div>

          <button className="mt-6 md:mt-0 bg-green-300 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}
