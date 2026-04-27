"use client";

import {
    SiReact, SiNextdotjs, SiNodedotjs, SiPython,
    SiAmazonaws, SiMongodb, SiPostgresql,
    SiDocker, SiKubernetes, SiGithub, SiVercel,
    SiStripe, SiTailwindcss, SiTypescript, SiVuedotjs,
    SiFlutter, SiFirebase, SiGraphql
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export default function PartnersMarqueeLight() {
    const partners = [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
        { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-600" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Python", icon: SiPython, color: "text-blue-600" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "React Native", icon: TbBrandReactNative, color: "text-blue-500" },
        { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-800" },
        { name: "Stripe", icon: SiStripe, color: "text-indigo-600" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white border-gray-200 overflow-hidden">
            <div className="max-w-7xl mx-auto py-10">
                <div className="relative w-full overflow-hidden mb-4">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-4 animate-marquee-right">
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={`row1-${index}`} className="flex-shrink-0">
                                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200 hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
                                    <div className="flex items-center gap-3">
                                        <partner.icon className={`w-5 h-5 ${partner.color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{partner.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row */}
                <div className="relative w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-4 animate-marquee-left">
                        {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
                            <div key={`row2-${index}`} className="flex-shrink-0">
                                <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200 hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
                                    <div className="flex items-center gap-3">
                                        <partner.icon className={`w-5 h-5 ${partner.color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{partner.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-right {
          animation: marquee-right 100s linear infinite;
          width: fit-content;
        }
        
        .animate-marquee-left {
          animation: marquee-left 100s linear infinite;
          width: fit-content;
        }
        
        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}