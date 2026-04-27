"use client";

import Image from "next/image";
import { useState } from "react";

export default function PartnersMarqueeLight() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Simply add your image paths here
    const partnerLogos = [
        "/images/crm1.jpg",
        "/images/crm2.jpg",
        "/images/crm3.jpg",
        "/images/crm4.jpg",
        "/images/crm5.jpg",
        "/images/crm6.jpg",
        "/images/crm7.jpg",
        "/images/crm8.png",
        "/images/crm9.png",
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
    };

    return (
        <>
            <div className="bg-white overflow-hidden py-10">
                <div className="relative w-full overflow-hidden">
                    {/* Scrolling marquee */}
                    <div className="flex gap-8 animate-marquee">
                        {/* Duplicate array for seamless loop */}
                        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 cursor-pointer"
                                onClick={() => openModal(logo)}
                            >
                                <div className="flex items-center justify-center w-[300px] h-[120px] hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={logo}
                                        alt={`Partner ${index + 1}`}
                                        width={300}
                                        height={120}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                        width: fit-content;
                    }
                    
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>

            {/* Modal with transparent blur background */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/30"
                    onClick={closeModal}
                >
                    <div 
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-gray-700 hover:text-gray-900 transition-colors text-4xl font-light bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                        >
                            &times;
                        </button>
                        
                        {/* Enlarged image with subtle shadow */}
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl">
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                width={1200}
                                height={800}
                                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}