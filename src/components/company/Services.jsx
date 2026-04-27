// src/components/Services.js
'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";
import { useRouter } from 'next/navigation';

// Individual Service Card Component
const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (e) => {
    if (isMobile && !e.target.closest('button')) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  const handleGetStarted = (e) => {
    e.stopPropagation();
    if (service.url) {
      router.push(service.url);
    }
  };

  return (
    <div
      className="relative h-[320px] md:h-[360px] lg:h-[380px] cursor-pointer md:cursor-default"
      style={{ perspective: "1500px" }}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
            <div className="p-6 md:p-8 flex flex-col items-center text-center h-full">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {service.shortDesc}
              </p>
              <div className="mt-auto">
                <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  {isMobile ? 'Tap to explore' : 'Hover to explore'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className={`h-full rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br ${service.color} p-6 md:p-8 flex flex-col`}>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-white/90 text-xs md:text-sm">
                        <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleGetStarted}
              className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 text-sm md:text-base backdrop-blur-sm"
            >
              Get Started →
            </button>
            
            <div className="absolute top-4 right-4 text-white/60 text-xs">
              {isMobile ? 'Tap to flip back' : 'Hover away to flip back'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      id: 1,
      title: 'School ERP',
      shortDesc: 'Streamlining Academic and Administrative Operations for Schools',
      description: 'A comprehensive school management system that automates administrative tasks, manages student data, and enhances communication between teachers, parents, and students.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Student Management', 'Fee Collection', 'Attendance Tracking', 'Parent Portal'],
      url: '/school-erp'
    },
    {
      id: 2,
      title: 'University ERP',
      shortDesc: 'Complete university management solution',
      description: 'An integrated ERP system designed for universities and higher education institutions to manage admissions, academics, examinations, and campus operations efficiently.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 6h14" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Admission Management', 'Course Registration', 'Exam Management', 'Campus Life'],
      url: '/university-erp'
    },
    {
      id: 3,
      title: 'Industry ERP',
      shortDesc: 'Enterprise resource planning for industries',
      description: 'A robust ERP solution for manufacturing and industrial sectors to streamline production, inventory, supply chain, and workforce management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      benefits: ['Production Planning', 'Inventory Control', 'Quality Management', 'Supply Chain'],
      url: '/industry-erp'
    },
    {
      id: 4,
      title: 'Hospital Management',
      shortDesc: 'Complete healthcare management system',
      description: 'A comprehensive hospital management system that handles patient records, appointments, billing, pharmacy, and laboratory management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-red-500 to-orange-500',
      benefits: ['Patient Records', 'Appointment System', 'Billing & Insurance', 'Pharmacy Management'],
      url: '/hospital-erp'
    },
    {
      id: 5,
      title: "CRM System",
      shortDesc: 'Customer relationship management',
      description: 'A powerful CRM platform to manage customer interactions, track sales pipelines, automate marketing, and improve customer service.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      benefits: ['Lead Management', 'Sales Pipeline', 'Email Integration', 'Analytics Dashboard'],
      url: '/crm'
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      shortDesc: 'Complete online store solution',
      description: 'A feature-rich e-commerce platform with product management, secure payments, order processing, and customer engagement tools.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Product Catalog', 'Payment Gateway', 'Order Management', 'Customer Analytics'],
      url: '/ecommerce'
    },
    {
      id: 7,
      title: 'Library Management',
      shortDesc: 'Digital library system',
      description: 'A modern library management system with book cataloging, member management, digital lending, and automated notifications.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Book Cataloging', 'Member Management', 'Digital Lending', 'Auto Notifications'],
      url: '/library-erp'
    },
    {
      id: 8,
      title: 'HRMS',
      shortDesc: 'Human resource management system',
      description: 'A comprehensive HR management solution for employee lifecycle management, payroll, attendance, and performance tracking.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-teal-500 to-green-500',
      benefits: ['Employee Database', 'Payroll Processing', 'Leave Management', 'Performance Reviews'],
      url: '/hrms'
    },
    {
      id: 9,
      title: 'Web Development',
      shortDesc: 'Custom web development services',
      description: 'Professional web development services including custom websites, web applications, and progressive web apps with modern technologies.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-blue-600 to-indigo-600',
      benefits: ['Custom Websites', 'Web Applications', 'E-Commerce Sites', 'SEO Optimization'],
      url: '/web-development'
    },
  ];

  return (
    <>
      <section id="services" className="py-4 px-5 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
                >
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Services
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-gray-600 text-left max-w-2xl mx-auto"
                >
                  Comprehensive solutions tailored to meet your business needs
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B3C8C] to-[#1DA1F2] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group whitespace-nowrap"
                >
                  Get Custom Solution
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
          }
        `}</style>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <FiX className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Solution</h2>
              <p className="text-gray-600 mb-6">Tell us about your project and we'll create a tailored solution.</p>

              {submitStatus === "success" ? (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCheckCircle className="text-green-600" />
                    <span className="font-semibold">Request Sent!</span>
                  </div>
                  <p className="text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl">Failed to send. Please try again.</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Business Email *" className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name *" className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                    <option value="">Select a service *</option>
                    {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Project requirements... *" rows="4" className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;