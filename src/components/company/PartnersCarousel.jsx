// src/components/PartnerMarqueeSimple.js
'use client';

import { useEffect, useState } from 'react';

const partners = [
  { id: 1, name: 'Microsoft', icon: '💻', color: 'from-blue-600 to-blue-400' },
  { id: 2, name: 'Google', icon: '🔍', color: 'from-green-600 to-green-400' },
  { id: 3, name: 'Amazon', icon: '📦', color: 'from-orange-600 to-orange-400' },
  { id: 4, name: 'Meta', icon: '📱', color: 'from-indigo-600 to-indigo-400' },
  { id: 5, name: 'Apple', icon: '🍎', color: 'from-gray-700 to-gray-500' },
  { id: 6, name: 'Netflix', icon: '🎬', color: 'from-red-700 to-red-500' },
  { id: 7, name: 'Adobe', icon: '🎨', color: 'from-red-600 to-red-400' },
  { id: 8, name: 'Salesforce', icon: '☁️', color: 'from-blue-500 to-cyan-400' },
];

const PartnerMarqueeSimple = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationId;
    let lastTimestamp = 0;
    const speed = 0.5;

    const animate = (timestamp) => {
      if (!isHovered) {
        if (lastTimestamp === 0) {
          lastTimestamp = timestamp;
          animationId = requestAnimationFrame(animate);
          return;
        }

        const delta = timestamp - lastTimestamp;
        if (delta > 16) { // 60fps
          setScrollPosition(prev => {
            let newPos = prev + speed;
            if (newPos >= 100) {
              newPos = 0;
            }
            return newPos;
          });
          lastTimestamp = timestamp;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the growing list of companies that trust our software solutions
          </p>
        </div>

        {/* Marquee */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            className="flex gap-6 md:gap-8"
            style={{
              transform: `translateX(-${scrollPosition}%)`,
              transition: isHovered ? 'none' : 'transform 0.1s linear',
              width: '200%',
            }}
          >
            {/* First set */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className={`group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200`}
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {partner.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-800 text-sm md:text-base">
                  {partner.name}
                </h3>
                <p className="text-center text-gray-500 text-xs mt-1">
                  Partner
                </p>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`dup-${partner.id}`}
                className={`group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200`}
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {partner.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-800 text-sm md:text-base">
                  {partner.name}
                </h3>
                <p className="text-center text-gray-500 text-xs mt-1">
                  Partner
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Become a Partner
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerMarqueeSimple;