"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';
import { 
  FiMenu, FiX, FiArrowRight, FiCode, FiZap, 
  FiGlobe, FiChevronDown, FiSmartphone, FiCloud,
  FiDatabase, FiShield, FiTrendingUp, FiUsers,
  FiCheckCircle, FiBox, FiMail, FiPhone, FiUser
} from "react-icons/fi";
import { 
  IoMdRocket
} from "react-icons/io";
import { FaReact, FaNodeJs, FaPython, FaAws, FaBolt, FaBuilding } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiDocker, SiKubernetes,
  SiMongodb, SiPostgresql, SiRedis, SiGraphql
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GiCrystalShine } from "react-icons/gi";
import { sendContactEmail } from '@/utils/emailService';

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
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
  
  const navbarRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  
  const { scrollY } = useScroll();
  
  const navbarHeight = useTransform(scrollY, [0, 100], [85, 65]);
  const navbarWidth = useTransform(scrollY, [0, 100], ["100%", "calc(100% - 32px)"]);
  const navbarTop = useTransform(scrollY, [0, 100], [0, 8]);
  const navbarRadius = useTransform(scrollY, [0, 100], [0, 16]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  
  const navbarGradient = "linear-gradient(to right, #ffffff, #f8fafc, #f1f5f9)";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && 
          navbarRef.current && !navbarRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen, isModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownHover = (index) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavigation = (url) => {
    setActiveDropdown(null);
    router.push(url);
  };

  const servicesItems = {
    title: "Our Services",
    description: "Comprehensive software solutions tailored to your business needs",
    sections: [
      {
        title: "ERP Solutions",
        icon: <FiBox className="w-5 h-5" />,
        items: [
          { name: "School ERP", desc: "Complete school management system", url: "/school-erp", badge: "Popular" },
          { name: "University ERP", desc: "Higher education management", url: "/university-erp", badge: "" },
          { name: "Industry ERP", desc: "Manufacturing & industrial ERP", url: "/industry-erp", badge: "" },
          { name: "Hospital ERP", desc: "Healthcare management system", url: "/hospital-erp", badge: "New" },
        ]
      },
      {
        title: "Business Solutions",
        icon: <FiTrendingUp className="w-5 h-5" />,
        items: [
          { name: "Library Management", desc: "Digital library system", url: "/library-erp", badge: "" },
          { name: "HRMS", desc: "HR & payroll management", url: "/hrms", badge: "Hot" },
          { name: "CRM System", desc: "Customer relationship management", url: "/crm", badge: "" },
          { name: "E-Commerce", desc: "Online store platform", url: "/ecommerce", badge: "Popular" },
        ]
      },
      {
        title: "Development",
        icon: <FiCode className="w-5 h-5" />,
        items: [
          { name: "Web Development", desc: "Custom websites & web apps", url: "/web-development", badge: "" },
          { name: "Mobile Development", desc: "iOS & Android applications", url: "#", badge: "" },
          { name: "Cloud Solutions", desc: "AWS, Azure, Google Cloud", url: "#", badge: "" },
          { name: "AI & ML Solutions", desc: "Intelligent automation", url: "#", badge: "Hot" },
        ]
      }
    ]
  };

  const industriesItems = {
    title: "Industries",
    description: "Specialized solutions for diverse business sectors",
    sections: [
      {
        title: "Education",
        icon: <FiGlobe className="w-5 h-5" />,
        items: [
          { name: "Schools", desc: "K-12 management systems", url: "/school-erp" },
          { name: "Universities", desc: "Higher education ERP", url: "/university-erp" },
          { name: "Libraries", desc: "Digital library management", url: "/library-erp" },
        ]
      },
      {
        title: "Healthcare",
        icon: <FiShield className="w-5 h-5" />,
        items: [
          { name: "Hospitals", desc: "Complete hospital management", url: "/hospital-erp" },
          { name: "Clinics", desc: "Practice management", url: "/hospital-erp" },
          { name: "Diagnostic Centers", desc: "Lab management system", url: "/hospital-erp" },
        ]
      },
      {
        title: "Business",
        icon: <FiDatabase className="w-5 h-5" />,
        items: [
          { name: "Manufacturing", desc: "Industry ERP solutions", url: "/industry-erp" },
          { name: "Retail", desc: "E-commerce platforms", url: "/ecommerce" },
          { name: "Services", desc: "CRM & HRMS systems", url: "/crm" },
        ]
      },
      {
        title: "Technology",
        icon: <FiCode className="w-5 h-5" />,
        items: [
          { name: "SaaS Companies", desc: "Scalable web solutions", url: "/web-development" },
          { name: "Startups", desc: "MVP development", url: "/web-development" },
          { name: "Enterprises", desc: "Custom software", url: "/web-development" },
        ]
      }
    ]
  };

  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "Services", href: "#", hasDropdown: true, content: servicesItems },
    { name: "Industries", href: "#", hasDropdown: true, content: industriesItems },
    { name: "About", href: "#about", hasDropdown: false },
    { name: "Contact Us", href: "#contact", hasDropdown: false },
  ];

  const serviceOptions = [
    "School ERP",
    "University ERP",
    "Industry ERP",
    "Hospital ERP",
    "Library Management",
    "HRMS",
    "CRM",
    "E-Commerce",
    "Web Development",
    "Mobile Development",
    "Cloud Solutions",
    "AI & ML Solutions",
    "Other"
  ];

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (!isMounted) {
    return <header className="w-full fixed top-0 left-0 z-50 bg-white h-[85px]" />;
  }

  return (
    <>
      <motion.header
        ref={navbarRef}
        style={{ 
          height: navbarHeight,
          width: navbarWidth,
          top: navbarTop,
          borderRadius: navbarRadius,
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
        }}
        className="fixed z-50 transition-shadow duration-300 shadow-lg shadow-purple-900/5"
      >
        <motion.div 
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: navbarGradient,
            backdropFilter: `blur(${headerBlur}px)`,
          }}
        />

        <div className="h-full flex items-center justify-between relative z-10 px-5 md:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 group cursor-pointer flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <img
                src="/images/mahntrixlogo.png"
                alt="Mahntrix Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item, i) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleDropdownHover(i)}
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                {item.hasDropdown ? (
                  <button
                    className="relative px-4 py-2 flex items-center gap-1.5 text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-semibold">{item.name}</span>
                    <motion.div animate={{ rotate: activeDropdown === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <FiChevronDown className="text-xs" />
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 flex items-center gap-1.5 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    <span className="text-sm font-semibold">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:block bg-gradient-to-r from-[#0B3C8C] to-[#1DA1F2] text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-blue-500/30 transition-shadow flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Consultation
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-gray-700 p-2 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mega Dropdown */}
        <AnimatePresence>
          {activeDropdown !== null && navItems[activeDropdown]?.hasDropdown && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-0 hidden lg:block"
              style={{ maxHeight: "60vh" }}
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
              }}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl rounded-b-2xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 py-8">
                  {activeDropdown === 1 && <ServicesDropdownContent content={servicesItems} onNavigate={handleNavigation} />}
                  {activeDropdown === 2 && <IndustriesDropdownContent content={industriesItems} onNavigate={handleNavigation} />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
              
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30 }}
                className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl"
              >
                <div className="flex flex-col h-full">
                  <div className="p-5 border-b flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Menu</h3>
                    <button onClick={closeMenu} className="p-2"><FiX className="w-5 h-5" /></button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4">
                    {navItems.map((item, i) => (
                      <MobileMenuItem key={i} item={item} onClose={closeMenu} onNavigate={handleNavigation} />
                    ))}
                  </div>
                  
                  <div className="p-5 border-t">
                    <button 
                      onClick={() => {
                        closeMenu();
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold"
                    >
                      Get Free Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Get Free Consultation</h2>
                  <p className="text-gray-600 text-sm mt-1">We'll get back to you within 24 hours</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FiX className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your consultation request has been submitted. Our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="relative">
                          <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                        Failed to send. Please try again or contact us directly.
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Submit Request"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center pt-2">
                      We respect your privacy and never share your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> 
      
      {/* Spacer */}
      <div className="h-[85px]" />
    </>
  );
}

// Services Dropdown Content
function ServicesDropdownContent({ content, onNavigate }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{content.title}</h3>
        <p className="text-gray-600 mt-1">{content.description}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {content.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <span className="text-purple-600">{section.icon}</span>
              <h4 className="font-semibold text-gray-800">{section.title}</h4>
            </div>
            <div className="space-y-1">
              {section.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate(item.url)}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-purple-50 transition-all group"
                >
                  {item.icon && <span className="text-gray-500 mt-0.5">{item.icon}</span>}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800 text-sm">{item.name}</span>
                      {item.badge && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold text-white ${
                          item.badge === 'Hot' || item.badge === 'New' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                          item.badge === 'Popular' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          'bg-gradient-to-r from-green-500 to-emerald-500'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <FiArrowRight className="w-3.5 h-3.5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> 150+ Projects</div>
          <div className="flex items-center gap-2"><FiUsers className="text-blue-500" /> 50+ Experts</div>
          <div className="flex items-center gap-2"><IoMdRocket className="text-purple-500" /> 98% Success</div>
        </div>
        <button 
          onClick={() => onNavigate('/web-development')}
          className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All Services <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Industries Dropdown Content
function IndustriesDropdownContent({ content, onNavigate }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{content.title}</h3>
        <p className="text-gray-600 mt-1">{content.description}</p>
      </div>
      
      <div className="grid grid-cols-4 gap-5">
        {content.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <span className="text-purple-600">{section.icon}</span>
              <h4 className="font-semibold text-gray-800">{section.title}</h4>
            </div>
            <div className="space-y-1">
              {section.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate(item.url)}
                  className="w-full text-left block p-2.5 rounded-lg hover:bg-purple-50 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800 text-sm">{item.name}</span>
                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold text-white ${
                        item.badge === 'Hot' || item.badge === 'New' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                        item.badge === 'Enterprise' ? 'bg-gradient-to-r from-purple-500 to-blue-500' :
                        'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          🎯 Tailored solutions for <span className="font-semibold">Healthcare, Finance, Retail, Education</span> and more.
        </p>
      </div>
    </div>
  );
}

// Mobile Menu Item
function MobileMenuItem({ item, onClose, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex items-center justify-between p-4 text-gray-700 hover:bg-purple-50 rounded-xl transition-all"
      >
        <span className="font-medium">{item.name}</span>
      </Link>
    );
  }

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-gray-700 hover:bg-purple-50 rounded-xl transition-all"
      >
        <span className="font-medium">{item.name}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden ml-4 pl-4 border-l-2 border-purple-200"
          >
            {item.name === "Services" && <MobileServicesContent onClose={onClose} onNavigate={onNavigate} />}
            {item.name === "Industries" && <MobileIndustriesContent onClose={onClose} onNavigate={onNavigate} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileServicesContent({ onClose, onNavigate }) {
  const sections = [
    { 
      title: "ERP Solutions", 
      items: [
        { name: "School ERP", url: "/school-erp" },
        { name: "University ERP", url: "/university-erp" },
        { name: "Industry ERP", url: "/industry-erp" },
        { name: "Hospital ERP", url: "/hospital-erp" }
      ] 
    },
    { 
      title: "Business Solutions", 
      items: [
        { name: "Library Management", url: "/library-erp" },
        { name: "HRMS", url: "/hrms" },
        { name: "CRM System", url: "/crm" },
        { name: "E-Commerce", url: "/ecommerce" }
      ] 
    },
    { 
      title: "Development", 
      items: [
        { name: "Web Development", url: "/web-development" },
        { name: "Mobile Development", url: "#" },
        { name: "Cloud Solutions", url: "#" }
      ] 
    },
  ];

  return (
    <div className="py-2 space-y-2">
      {sections.map((section, idx) => (
        <div key={idx} className="py-1">
          <p className="text-xs font-semibold text-purple-600 mb-2">{section.title}</p>
          {section.items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                onNavigate(item.url);
                onClose();
              }}
              className="w-full text-left block py-2 px-2 text-sm text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function MobileIndustriesContent({ onClose, onNavigate }) {
  const sections = [
    { 
      title: "Education", 
      items: [
        { name: "Schools", url: "/school-erp" },
        { name: "Universities", url: "/university-erp" },
        { name: "Libraries", url: "/library-erp" }
      ] 
    },
    { 
      title: "Healthcare", 
      items: [
        { name: "Hospitals", url: "/hospital-erp" },
        { name: "Clinics", url: "/hospital-erp" },
        { name: "Diagnostic Centers", url: "/hospital-erp" }
      ] 
    },
    { 
      title: "Business", 
      items: [
        { name: "Manufacturing", url: "/industry-erp" },
        { name: "Retail", url: "/ecommerce" },
        { name: "Services", url: "/crm" }
      ] 
    },
    { 
      title: "Technology", 
      items: [
        { name: "SaaS Companies", url: "/web-development" },
        { name: "Startups", url: "/web-development" },
        { name: "Enterprises", url: "/web-development" }
      ] 
    },
  ];

  return (
    <div className="py-2 space-y-2">
      {sections.map((section, idx) => (
        <div key={idx} className="py-1">
          <p className="text-xs font-semibold text-purple-600 mb-2">{section.title}</p>
          {section.items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                onNavigate(item.url);
                onClose();
              }}
              className="w-full text-left block py-2 px-2 text-sm text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}