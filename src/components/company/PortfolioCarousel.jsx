// components/PortfolioCarousel.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time financial analytics platform with AI-powered insights",
    image: "/images/project1.jpg",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "/portfolio/fintech-dashboard",
    stats: { value: "150%", label: "ROI Increase" },
  },
  {
    id: 2,
    title: "Healthcare Management",
    category: "Enterprise Software",
    description: "Complete hospital management system with patient portals",
    image: "/images/project2.jpg",
    tech: ["Next.js", "Express", "MongoDB"],
    link: "/portfolio/healthcare-system",
    stats: { value: "10k+", label: "Patients Served" },
  },
  {
    id: 3,
    title: "E-Learning Platform",
    category: "EdTech",
    description: "Interactive learning platform with video streaming and assessments",
    image: "/images/project3.jpg",
    tech: ["Vue.js", "Django", "AWS"],
    link: "/portfolio/elearning",
    stats: { value: "50k+", label: "Active Users" },
  },
  {
    id: 4,
    title: "E-Commerce Solution",
    category: "Retail Tech",
    description: "Scalable e-commerce platform with AI recommendations",
    image: "/images/project4.jpg",
    tech: ["React", "Python", "Redis"],
    link: "/portfolio/ecommerce",
    stats: { value: "$2M+", label: "Revenue Generated" },
  },
  {
    id: 5,
    title: "IoT Management",
    category: "IoT Platform",
    description: "Centralized IoT device management and monitoring system",
    image: "/images/project5.jpg",
    tech: ["Angular", "Node.js", "InfluxDB"],
    link: "/portfolio/iot-platform",
    stats: { value: "100k+", label: "Devices Connected" },
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const itemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(itemsPerView());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projects.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (e, info) => {
    setIsDragging(false);
    const swipe = info.offset.x;
    if (Math.abs(swipe) > 100) {
      if (swipe > 0 && currentIndex > 0) {
        prevSlide();
      } else if (swipe < 0 && currentIndex < maxIndex) {
        nextSlide();
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            Successful Projects We've Delivered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our diverse portfolio of successful software solutions across various industries
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 hover:text-white"
            }`}
            aria-label="Previous projects"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 hover:text-white"
            }`}
            aria-label="Next projects"
          >
            <FiChevronRight className="text-xl" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                          <div className="text-lg font-bold text-gray-900">{project.stats.value}</div>
                          <div className="text-xs text-gray-600">{project.stats.label}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                      >
                        View Case Study
                        <FiExternalLink />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}