"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiUsers, FiPieChart, FiTarget, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { sendContactEmail } from '@/utils/emailService';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Service-specific configurations
const serviceConfigs = {
  "/school-erp": {
    title: "Transform Your School",
    subtitle: "Management",
    typewriterWords: [
      "Student Management",
      "Fee Collection",
      "Attendance Tracking",
      "Parent Communication",
      "Exam Management",
    ],
    description: "Streamline academic and administrative operations with our comprehensive School ERP system. Empower teachers, engage parents, and enhance student success.",
    services: [
      "Student Information System",
      "Fee Management",
      "Attendance Tracking",
      "Parent Portal",
    ],
    badge: "Trusted by 1000+ Schools Worldwide",
    buttonText: "Get School ERP Demo",
    modalTitle: "Get School ERP Demo",
    modalDescription: "See how our School ERP can transform your institution.",
    colorScheme: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 via-white to-indigo-50",
    images: [
      "/images/school-erp-1.jpg",
      "/images/school-erp-2.jpg",
      "/images/school-erp-3.jpg",
    ],
  },
  "/university-erp": {
    title: "Empower Your University",
    subtitle: "with Smart Technology",
    typewriterWords: [
      "Campus Management",
      "Academic Planning",
      "Research Management",
      "Student Lifecycle",
      "Faculty Portal",
    ],
    description: "Adonai CampusPro delivers comprehensive university management solutions that streamline operations and enhance the educational experience for students and faculty.",
    services: [
      "Academic Management",
      "Admission & Enrollment",
      "Financial Management",
      "Research & Development",
    ],
    stats: [
      { value: "200+", label: "Universities", icon: <FiUsers /> },
      { value: "1M+", label: "Students", icon: <FiPieChart /> },
      { value: "24/7", label: "Support", icon: <FiTarget /> },
    ],
    badge: "Trusted by 200+ Higher Education Institutions",
    buttonText: "Get University ERP Demo",
    modalTitle: "Get University ERP Demo",
    modalDescription: "Discover how Adonai CampusPro can transform your university operations.",
    colorScheme: "from-indigo-600 to-purple-600",
    bgGradient: "from-indigo-50 via-white to-purple-50",
    images: [
      "/images/university-erp-1.jpg",
      "/images/university-erp-2.jpg",
      "/images/university-erp-3.jpg",
    ],
  },
  "/industry-erp": {
    title: "Optimize Your Industry",
    subtitle: "Operations",
    typewriterWords: [
      "Material Management",
      "Production Planning",
      "Supply Chain",
      "Quality Control",
      "Inventory Tracking",
    ],
    description: "Adonai's Industry ERP solutions automate operations, improve efficiency, and provide better control over your manufacturing and business processes.",
    services: [
      "Material Management",
      "Production Planning",
      "Quality Control",
      "Supply Chain",
    ],
    stats: [
      { value: "300+", label: "Industries Served", icon: <FiUsers /> },
      { value: "45%", label: "Efficiency Increase", icon: <FiPieChart /> },
      { value: "30%", label: "Cost Reduction", icon: <FiTarget /> },
    ],
    badge: "Trusted by 300+ Manufacturing Companies",
    buttonText: "Get Industry ERP Demo",
    modalTitle: "Get Industry ERP Demo",
    modalDescription: "See how our Industry ERP can optimize your manufacturing operations.",
    colorScheme: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 via-white to-pink-50",
    images: [
      "/images/industry-erp-1.jpg",
      "/images/industry-erp-2.jpg",
      "/images/industry-erp-3.jpg",
    ],
  },
  "/hospital-erp": {
    title: "Enhance Patient Care",
    subtitle: "with Smart Healthcare",
    typewriterWords: [
      "Patient Management",
      "EMR System",
      "Appointment Scheduling",
      "Pharmacy Management",
      "Lab Integration",
    ],
    description: "Adonai MedPro streamlines hospital operations, enhances patient care, and improves health data management across all medical facilities.",
    services: [
      "Patient Information System",
      "Electronic Medical Records",
      "Appointment Scheduling",
      "Pharmacy & Lab Management",
    ],
    stats: [
      { value: "150+", label: "Hospitals", icon: <FiUsers /> },
      { value: "2M+", label: "Patients Served", icon: <FiPieChart /> },
      { value: "100%", label: "HIPAA Compliant", icon: <FiTarget /> },
    ],
    badge: "Trusted by 150+ Healthcare Facilities",
    buttonText: "Get Hospital ERP Demo",
    modalTitle: "Get Hospital ERP Demo",
    modalDescription: "Discover how Adonai MedPro can enhance your healthcare services.",
    colorScheme: "from-red-600 to-pink-600",
    bgGradient: "from-red-50 via-white to-pink-50",
    images: [
      "/images/hospital-erp-1.jpg",
      "/images/hospital-erp-2.jpg",
      "/images/hospital-erp-3.jpg",
    ],
  },
  "/library-erp": {
    title: "Revolutionize Your Library",
    subtitle: "Management",
    typewriterWords: [
      "Catalog Management",
      "Digital Resources",
      "Member Portal",
      "Circulation",
      "Analytics",
    ],
    description: "Adonai LibraryPro integrates digital and physical resources into one platform, making operations smoother and discovery more meaningful.",
    services: [
      "Catalog Management",
      "Digital Resources",
      "Member Management",
      "Circulation System",
    ],
    stats: [
      { value: "500+", label: "Libraries", icon: <FiUsers /> },
      { value: "5M+", label: "Books Managed", icon: <FiPieChart /> },
      { value: "99.5%", label: "Accuracy Rate", icon: <FiTarget /> },
    ],
    badge: "Trusted by 500+ Libraries Worldwide",
    buttonText: "Get Library ERP Demo",
    modalTitle: "Get Library ERP Demo",
    modalDescription: "See how Adonai LibraryPro can modernize your library operations.",
    colorScheme: "from-amber-600 to-orange-600",
    bgGradient: "from-amber-50 via-white to-orange-50",
    images: [
      "/images/library-erp-1.jpg",
      "/images/library-erp-2.jpg",
      "/images/library-erp-3.jpg",
    ],
  },
  "/hrms": {
    title: "Streamline HR",
    subtitle: "Secure Data. Empower Teams.",
    typewriterWords: [
      "Employee Management",
      "Payroll Processing",
      "Attendance Tracking",
      "Performance Reviews",
      "Recruitment",
    ],
    description: "Adonai's Employee Management System combines biometric attendance and smart card integration with robust payroll processing for organizations of all sizes.",
    services: [
      "Employee Profiles",
      "Payroll Management",
      "Attendance System",
      "Performance Tracking",
    ],
    stats: [
      { value: "1000+", label: "Companies", icon: <FiUsers /> },
      { value: "500K+", label: "Employees Managed", icon: <FiPieChart /> },
      { value: "40%", label: "Time Saved", icon: <FiTarget /> },
    ],
    badge: "Trusted by 1000+ Organizations",
    buttonText: "Get HRMS Demo",
    modalTitle: "Get HRMS Demo",
    modalDescription: "Discover how our HRMS can streamline your workforce management.",
    colorScheme: "from-teal-600 to-cyan-600",
    bgGradient: "from-teal-50 via-white to-cyan-50",
    images: [
      "/images/hrms-1.jpg",
      "/images/hrms-2.jpg",
      "/images/hrms-3.jpg",
    ],
  },
  "/crm": {
    title: "Transform Your Sales",
    subtitle: "Pipeline Into Revenue",
    typewriterWords: [
      "Sales Automation",
      "Customer Analytics",
      "Lead Management",
      "Pipeline Tracking",
      "Revenue Intelligence",
    ],
    description: "Streamline your sales process, nurture leads effectively, and close deals faster with our intelligent CRM platform.",
    services: [
      "AI-Powered Lead Scoring",
      "Sales Pipeline Automation",
      "Customer 360° View",
      "Revenue Forecasting",
    ],
    stats: [
      { value: "500+", label: "Sales Teams", icon: <FiUsers /> },
      { value: "$2B+", label: "Revenue Tracked", icon: <FiPieChart /> },
      { value: "99.9%", label: "Uptime SLA", icon: <FiTarget /> },
    ],
    badge: "Trusted by 500+ Sales Teams Worldwide",
    buttonText: "Get CRM Demo",
    modalTitle: "Get CRM Demo",
    modalDescription: "See how our CRM can transform your sales process.",
    colorScheme: "from-green-600 to-emerald-600",
    bgGradient: "from-green-50 via-white to-emerald-50",
    images: [
      "/images/crm1.jpg",
      "/images/crm2.jpg",
      "/images/crm3.jpg",
    ],
  },
  "/ecommerce": {
    title: "Launch Your Online Store",
    subtitle: "Sell Smarter. Grow Faster.",
    typewriterWords: [
      "Product Management",
      "Order Processing",
      "Payment Gateway",
      "Inventory Control",
      "Customer Analytics",
    ],
    description: "Adonai's E-Commerce Platform empowers businesses to create, manage, and scale their digital retail operations with ease.",
    services: [
      "Product Catalog",
      "Secure Payments",
      "Order Management",
      "Analytics Dashboard",
    ],
    stats: [
      { value: "1000+", label: "Online Stores", icon: <FiUsers /> },
      { value: "$500M+", label: "Sales Processed", icon: <FiPieChart /> },
      { value: "99.9%", label: "Uptime", icon: <FiTarget /> },
    ],
    badge: "Trusted by 1000+ Online Businesses",
    buttonText: "Start Your Store",
    modalTitle: "Launch Your E-Commerce Store",
    modalDescription: "Get started with our complete e-commerce solution today.",
    colorScheme: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 via-white to-red-50",
    images: [
      "/images/ecommerce-1.jpg",
      "/images/ecommerce-2.jpg",
      "/images/ecommerce-3.jpg",
    ],
  },
  "/web-development": {
    title: "Build Your Digital Future",
    subtitle: "Custom Solutions. Modern Technology.",
    typewriterWords: [
      "Web Applications",
      "E-Commerce Sites",
      "Progressive Web Apps",
      "CMS Development",
      "API Integration",
    ],
    description: "Transform your digital presence with our comprehensive web development services using cutting-edge technologies.",
    services: [
      "Custom Web Development",
      "E-Commerce Solutions",
      "Progressive Web Apps",
      "CMS Development",
    ],
    stats: [
      { value: "500+", label: "Projects Delivered", icon: <FiUsers /> },
      { value: "98%", label: "Client Satisfaction", icon: <FiPieChart /> },
      { value: "50+", label: "Tech Experts", icon: <FiTarget /> },
    ],
    badge: "500+ Successful Projects Delivered",
    buttonText: "Start Your Project",
    modalTitle: "Start Your Web Project",
    modalDescription: "Tell us about your project and we'll build the perfect solution.",
    colorScheme: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 via-white to-indigo-50",
    images: [
      "/images/web-dev-1.jpg",
      "/images/web-dev-2.jpg",
      "/images/web-dev-3.jpg",
    ],
  },
};

// Default configuration (fallback)
const defaultConfig = {
  title: "Transform Your Business",
  subtitle: "with Smart Technology",
  typewriterWords: ["Innovation", "Efficiency", "Growth", "Success"],
  description: "Comprehensive software solutions tailored to meet your business needs.",
  services: ["Custom Solutions", "Expert Support", "Scalable Technology", "Proven Results"],
  stats: [
    { value: "500+", label: "Clients Worldwide", icon: <FiUsers /> },
    { value: "98%", label: "Success Rate", icon: <FiPieChart /> },
    { value: "24/7", label: "Support", icon: <FiTarget /> },
  ],
  badge: "Trusted by Businesses Worldwide",
  buttonText: "Get Free Demo",
  modalTitle: "Get Your Free Demo",
  modalDescription: "See how our solutions can transform your business.",
  colorScheme: "from-blue-600 to-indigo-600",
  bgGradient: "from-blue-50 via-white to-indigo-50",
  images: ["/images/crm1.jpg", "/images/crm2.jpg", "/images/crm3.jpg", "/images/crm4.jpg", "/images/crm5.jpg", "/images/crm6.jpg", "/images/crm7.jpg", "/images/crm8.png", "/images/crm9.png"],
};

const useCountUp = (targetValue, duration = 3000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const numericValue = parseInt(targetValue.toString().replace(/[^0-9]/g, ''));
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const progress = 1 - (remaining / duration);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * numericValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [targetValue, duration, shouldStart]);

  return count;
};

export default function HeadSection() {
  const pathname = usePathname();
  const config = serviceConfigs[pathname] || defaultConfig;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-50px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const currentTitle = config.typewriterWords[index];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % config.typewriterWords.length);
      setText("");
      setCharIndex(0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [charIndex, index, config.typewriterWords]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % config.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [config.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % config.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + config.images.length) % config.images.length);
  };

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
        service: config.modalTitle.replace("Get ", "").replace(" Demo", ""),
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => {
          setIsOpen(false);
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

  return (
    <section
      className={`px-4 sm:px-6 lg:px-10 xl:px-16 relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${config.bgGradient}`}
      id="head"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Blobs */}
      <div className="hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${config.colorScheme}`}></div>

      <div className="container mx-auto px-4 sm:px-5 lg:pl-12 xl:pl-20 relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200"
            >
              <FiCheckCircle className="text-blue-600 text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">
                {config.badge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {config.title}{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.colorScheme}`}>
                {config.subtitle}
              </span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              className="flex flex-wrap items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-600">Powering</span>
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
                <span className="text-blue-600">{text}</span>
                <span className="blinking-cursor text-blue-600 ml-0.5">|</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {config.description}
            </motion.p>

            {/* Services List */}
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              {config.services.map((service, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-row items-center gap-3 pt-3 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(true)}
                className={`group flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#0B3C8C] to-[#1DA1F2] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base`}
              >
                {config.buttonText}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <Link href="#Features">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center px-5 sm:px-8 py-3 sm:py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  Explore Features
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:mt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto lg:mr-8 xl:mr-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative z-20 group"
              >
                <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={config.images[currentImageIndex]}
                        alt={`${config.title} Dashboard ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    <FiChevronLeft className="text-xl" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    <FiChevronRight className="text-xl" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{config.modalTitle}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">{config.modalDescription}</p>

              {submitStatus === "success" ? (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCheckCircle className="text-green-600" />
                    <span className="font-semibold">Request Sent!</span>
                  </div>
                  <p className="text-sm">Our team will contact you within 24 hours to schedule your demo.</p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
                  Failed to send. Please try again.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Business Email *"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company/Institution Name *"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements... *"
                    rows="4"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 sm:py-3 bg-gradient-to-r ${config.colorScheme} text-white font-semibold rounded-xl transition-all disabled:opacity-50 text-sm sm:text-base`}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy and never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @media (max-width: 480px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}