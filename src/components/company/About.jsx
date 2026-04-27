"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FiUsers, FiAward, FiTrendingUp, FiTarget, FiGlobe, FiClock, FiShield, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Service-specific configurations for About page
const aboutConfigs = {
  "/school-erp": {
    title: "Transforming School",
    subtitle: "Management",
    description: "We're on a mission to revolutionize how educational institutions manage their operations, empowering teachers, engaging parents, and enhancing student success through innovative technology.",
    stats: [
      { value: "1000+", label: "Schools Trust Us", icon: <FiUsers /> },
      { value: "25+", label: "Countries Served", icon: <FiGlobe /> },
      { value: "98%", label: "Client Retention", icon: <FiTrendingUp /> },
      { value: "24/7", label: "Expert Support", icon: <FiClock /> },
    ],
    values: [
      { title: "Education First", description: "We prioritize educational outcomes and student success above all else.", icon: <FiTarget className="text-xl" />, color: "from-blue-500 to-cyan-500" },
      { title: "Innovation Driven", description: "Constantly evolving our platform with the latest educational technology.", icon: <FiTrendingUp className="text-xl" />, color: "from-indigo-500 to-purple-500" },
      { title: "Data Security", description: "Enterprise-grade security protecting sensitive student and school data.", icon: <FiShield className="text-xl" />, color: "from-green-500 to-emerald-500" },
      { title: "Excellence in Support", description: "Dedicated support team ensuring smooth school operations.", icon: <FiAward className="text-xl" />, color: "from-orange-500 to-red-500" },
    ],
    milestones: [
      { year: "2020", title: "Company Founded", description: "Started with a vision to modernize school management" },
      { year: "2022", title: "First 100 Schools", description: "Reached milestone of 100 schools using our platform" },
      { year: "2024", title: "Mobile App Launch", description: "Launched comprehensive mobile app for parents and teachers" },
      { year: "2026", title: "Global Expansion", description: "Expanded to 25+ cities serving 1000+ schools" },
    ],
    badge: "About School ERP",
    buttonText: "Join Our Mission",
    ctaText: "Contact Us",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Education Technology, 15+ years in EdTech" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Google, Education Software Specialist" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-Pearson, Product Visionary" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Microsoft, Scale Expert" },
    ],
    heroImage: "/images/school-erp-about.jpg",
  },
  "/university-erp": {
    title: "Empowering Higher",
    subtitle: "Education",
    description: "Adonai CampusPro is dedicated to transforming university operations through comprehensive digital solutions that enhance academic excellence and operational efficiency.",
    stats: [
      { value: "200+", label: "Universities", icon: <FiUsers /> },
      { value: "30+", label: "Countries", icon: <FiGlobe /> },
      { value: "96%", label: "Satisfaction Rate", icon: <FiTrendingUp /> },
      { value: "24/7", label: "Technical Support", icon: <FiClock /> },
    ],
    values: [
      { title: "Academic Excellence", description: "Empowering institutions to deliver world-class education.", icon: <FiTarget className="text-xl" />, color: "from-indigo-500 to-purple-500" },
      { title: "Research Innovation", description: "Supporting groundbreaking research with advanced tools.", icon: <FiTrendingUp className="text-xl" />, color: "from-purple-500 to-pink-500" },
      { title: "Student Success", description: "Focused on improving student outcomes and experience.", icon: <FiShield className="text-xl" />, color: "from-blue-500 to-indigo-500" },
      { title: "Operational Excellence", description: "Streamlining university operations for maximum efficiency.", icon: <FiAward className="text-xl" />, color: "from-green-500 to-emerald-500" },
    ],
    milestones: [
      { year: "2016", title: "CampusPro Launch", description: "Launched comprehensive university management solution" },
      { year: "2018", title: "50 Universities", description: "Partnered with 50 higher education institutions" },
      { year: "2021", title: "Research Module", description: "Introduced advanced research management capabilities" },
      { year: "2024", title: "AI Integration", description: "Integrated AI-powered analytics and insights" },
    ],
    badge: "About Adonai CampusPro",
    buttonText: "Partner With Us",
    ctaText: "Get In Touch",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Oracle, 20+ years in Higher Ed Tech" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Google, AI & Cloud Architecture" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-Blackboard, Product Strategy" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Amazon, Enterprise Systems" },
    ],
    heroImage: "/images/university-erp-about.jpg",
  },
  "/industry-erp": {
    title: "Optimizing Industrial",
    subtitle: "Operations",
    description: "We're dedicated to transforming manufacturing and industrial operations through intelligent ERP solutions that drive efficiency, reduce costs, and accelerate growth.",
    stats: [
      { value: "300+", label: "Manufacturing Clients", icon: <FiUsers /> },
      { value: "20+", label: "Countries", icon: <FiGlobe /> },
      { value: "45%", label: "Efficiency Increase", icon: <FiTrendingUp /> },
      { value: "24/7", label: "Production Support", icon: <FiClock /> },
    ],
    values: [
      { title: "Operational Excellence", description: "Driving maximum efficiency in manufacturing processes.", icon: <FiTarget className="text-xl" />, color: "from-purple-500 to-pink-500" },
      { title: "Quality First", description: "Ensuring highest quality standards in everything we do.", icon: <FiAward className="text-xl" />, color: "from-blue-500 to-cyan-500" },
      { title: "Innovation Led", description: "Bringing cutting-edge technology to industrial operations.", icon: <FiTrendingUp className="text-xl" />, color: "from-pink-500 to-red-500" },
      { title: "Reliability", description: "Building systems that manufacturers can depend on.", icon: <FiShield className="text-xl" />, color: "from-orange-500 to-yellow-500" },
    ],
    milestones: [
      { year: "2017", title: "Industry ERP Launch", description: "Launched specialized ERP for manufacturing sector" },
      { year: "2019", title: "100+ Factories", description: "Deployed across 100 manufacturing facilities" },
      { year: "2022", title: "IoT Integration", description: "Introduced IoT-enabled production tracking" },
      { year: "2024", title: "AI Quality Control", description: "Launched AI-powered quality inspection system" },
    ],
    badge: "About Industry ERP",
    buttonText: "Transform Operations",
    ctaText: "Contact Sales",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Siemens, 18+ years in Industrial Tech" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Bosch, IoT & Automation Expert" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-GE, Manufacturing Solutions" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Honeywell, Industrial Systems" },
    ],
    heroImage: "/images/industry-erp-about.jpg",
  },
  "/hospital-erp": {
    title: "Advancing Healthcare",
    subtitle: "Management",
    description: "Adonai MedPro is committed to revolutionizing healthcare delivery through intelligent hospital management systems that enhance patient care and operational efficiency.",
    stats: [
      { value: "150+", label: "Hospitals Served", icon: <FiUsers /> },
      { value: "15+", label: "Countries", icon: <FiGlobe /> },
      { value: "2M+", label: "Patients Managed", icon: <FiTrendingUp /> },
      { value: "24/7", label: "Clinical Support", icon: <FiClock /> },
    ],
    values: [
      { title: "Patient First", description: "Every decision we make prioritizes patient care and safety.", icon: <FiTarget className="text-xl" />, color: "from-red-500 to-pink-500" },
      { title: "Data Security", description: "HIPAA compliant systems protecting sensitive health data.", icon: <FiShield className="text-xl" />, color: "from-blue-500 to-indigo-500" },
      { title: "Clinical Excellence", description: "Supporting healthcare providers with best-in-class tools.", icon: <FiAward className="text-xl" />, color: "from-green-500 to-emerald-500" },
      { title: "Innovation", description: "Bringing cutting-edge technology to healthcare delivery.", icon: <FiTrendingUp className="text-xl" />, color: "from-purple-500 to-pink-500" },
    ],
    milestones: [
      { year: "2016", title: "MedPro Launch", description: "Launched comprehensive hospital management system" },
      { year: "2019", title: "EMR Integration", description: "Introduced electronic medical records system" },
      { year: "2022", title: "Telemedicine", description: "Launched integrated telemedicine platform" },
      { year: "2024", title: "AI Diagnostics", description: "Introduced AI-powered diagnostic assistance" },
    ],
    badge: "About Adonai MedPro",
    buttonText: "Improve Healthcare",
    ctaText: "Schedule Demo",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Cerner, 20+ years in Healthcare IT" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Epic Systems, Health Tech Expert" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-Athenahealth, Clinical Solutions" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Philips, Medical Systems" },
    ],
    heroImage: "/images/hospital-erp-about.jpg",
  },
  "/library-erp": {
    title: "Modernizing Library",
    subtitle: "Management",
    description: "Adonai LibraryPro is dedicated to transforming libraries into digital-age knowledge hubs, making information accessible and management effortless.",
    stats: [
      { value: "500+", label: "Libraries", icon: <FiUsers /> },
      { value: "30+", label: "Countries", icon: <FiGlobe /> },
      { value: "5M+", label: "Resources Managed", icon: <FiTrendingUp /> },
      { value: "24/7", label: "Digital Access", icon: <FiClock /> },
    ],
    values: [
      { title: "Knowledge Access", description: "Making information freely accessible to all.", icon: <FiTarget className="text-xl" />, color: "from-amber-500 to-orange-500" },
      { title: "Digital Innovation", description: "Bringing modern technology to traditional libraries.", icon: <FiTrendingUp className="text-xl" />, color: "from-yellow-500 to-amber-500" },
      { title: "User Experience", description: "Creating seamless experiences for librarians and patrons.", icon: <FiAward className="text-xl" />, color: "from-orange-500 to-red-500" },
      { title: "Preservation", description: "Protecting and preserving knowledge for future generations.", icon: <FiShield className="text-xl" />, color: "from-amber-600 to-yellow-600" },
    ],
    milestones: [
      { year: "2018", title: "LibraryPro Launch", description: "Launched digital library management platform" },
      { year: "2020", title: "Digital Resources", description: "Introduced comprehensive e-resource management" },
      { year: "2022", title: "Mobile Access", description: "Launched mobile app for library patrons" },
      { year: "2024", title: "AI Recommendations", description: "Introduced AI-powered book recommendations" },
    ],
    badge: "About Adonai LibraryPro",
    buttonText: "Modernize Your Library",
    ctaText: "Get Started",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-OCLC, 15+ years in Library Systems" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Google Books, Digital Libraries" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-ProQuest, Information Science" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-EBSCO, Library Tech" },
    ],
    heroImage: "/images/library-erp-about.jpg",
  },
  "/hrms": {
    title: "Empowering HR",
    subtitle: "Transformation",
    description: "We're revolutionizing workforce management through intelligent HRMS solutions that streamline operations and enhance employee experience.",
    stats: [
      { value: "1000+", label: "Organizations", icon: <FiUsers /> },
      { value: "25+", label: "Countries", icon: <FiGlobe /> },
      { value: "500K+", label: "Employees Managed", icon: <FiTrendingUp /> },
      { value: "40%", label: "Time Saved", icon: <FiClock /> },
    ],
    values: [
      { title: "Employee First", description: "Creating tools that enhance employee experience.", icon: <FiTarget className="text-xl" />, color: "from-teal-500 to-cyan-500" },
      { title: "Data-Driven HR", description: "Empowering decisions with actionable insights.", icon: <FiTrendingUp className="text-xl" />, color: "from-cyan-500 to-blue-500" },
      { title: "Compliance", description: "Ensuring adherence to global labor regulations.", icon: <FiShield className="text-xl" />, color: "from-blue-500 to-indigo-500" },
      { title: "Automation", description: "Eliminating manual processes for HR efficiency.", icon: <FiAward className="text-xl" />, color: "from-teal-600 to-green-500" },
    ],
    milestones: [
      { year: "2017", title: "HRMS Launch", description: "Launched comprehensive HR management platform" },
      { year: "2019", title: "Payroll Integration", description: "Introduced automated payroll processing" },
      { year: "2022", title: "Biometric Attendance", description: "Launched biometric attendance system" },
      { year: "2024", title: "AI Recruitment", description: "Introduced AI-powered recruitment module" },
    ],
    badge: "About HRMS",
    buttonText: "Transform HR",
    ctaText: "Request Demo",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Workday, 18+ years in HR Tech" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-ADP, Payroll Systems Expert" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-SAP SuccessFactors" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Oracle HCM, Enterprise HR" },
    ],
    heroImage: "/images/hrms-about.jpg",
  },
  "/crm": {
    title: "Transforming How",
    subtitle: "Sales Teams Work",
    description: "We're on a mission to empower sales teams with intelligent automation and actionable insights, helping businesses build stronger relationships and drive unprecedented growth.",
    stats: [
      { value: "500+", label: "Enterprise Clients", icon: <FiUsers /> },
      { value: "45+", label: "Countries Served", icon: <FiGlobe /> },
      { value: "98%", label: "Client Retention", icon: <FiTrendingUp /> },
      { value: "24/7", label: "Expert Support", icon: <FiClock /> },
    ],
    values: [
      { title: "Customer First", description: "We put our clients at the heart of everything we do.", icon: <FiTarget className="text-xl" />, color: "from-green-500 to-emerald-500" },
      { title: "Innovation Driven", description: "Constantly pushing boundaries in CRM technology.", icon: <FiTrendingUp className="text-xl" />, color: "from-emerald-500 to-teal-500" },
      { title: "Trust & Security", description: "Enterprise-grade security protecting your data.", icon: <FiShield className="text-xl" />, color: "from-teal-500 to-cyan-500" },
      { title: "Excellence", description: "Delivering exceptional quality in everything we do.", icon: <FiAward className="text-xl" />, color: "from-green-600 to-emerald-600" },
    ],
    milestones: [
      { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize sales automation" },
      { year: "2022", title: "100+ Clients", description: "Reached milestone of 100 enterprise customers" },
      { year: "2024", title: "Series A Funding", description: "Raised $25M to accelerate product development" },
      { year: "2026", title: "National Expansion", description: "Expanded operations to 45+ cities" },
    ],
    badge: "About CRM",
    buttonText: "Join Our Team",
    ctaText: "Contact Us",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Salesforce, 15+ years in SaaS" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Google, AI & ML Specialist" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-Microsoft, Product Visionary" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Amazon, Scale Expert" },
    ],
    heroImage: "/images/crm2.jpg",
  },
  "/ecommerce": {
    title: "Powering Digital",
    subtitle: "Commerce",
    description: "We're dedicated to empowering businesses with comprehensive e-commerce solutions that drive sales, enhance customer experience, and accelerate growth.",
    stats: [
      { value: "1000+", label: "Online Stores", icon: <FiUsers /> },
      { value: "35+", label: "Countries", icon: <FiGlobe /> },
      { value: "$500M+", label: "Sales Processed", icon: <FiTrendingUp /> },
      { value: "99.9%", label: "Uptime", icon: <FiClock /> },
    ],
    values: [
      { title: "Merchant Success", description: "Your growth is our number one priority.", icon: <FiTarget className="text-xl" />, color: "from-orange-500 to-red-500" },
      { title: "Innovation", description: "Bringing cutting-edge e-commerce technology to businesses.", icon: <FiTrendingUp className="text-xl" />, color: "from-red-500 to-pink-500" },
      { title: "Security", description: "PCI compliant systems protecting every transaction.", icon: <FiShield className="text-xl" />, color: "from-pink-500 to-rose-500" },
      { title: "Scalability", description: "Platforms that grow with your business.", icon: <FiAward className="text-xl" />, color: "from-orange-600 to-amber-500" },
    ],
    milestones: [
      { year: "2019", title: "Platform Launch", description: "Launched comprehensive e-commerce platform" },
      { year: "2021", title: "500+ Stores", description: "Powered 500+ online stores worldwide" },
      { year: "2023", title: "Multi-Vendor", description: "Introduced marketplace capabilities" },
      { year: "2024", title: "AI Personalization", description: "Launched AI-powered shopping experiences" },
    ],
    badge: "About E-Commerce",
    buttonText: "Start Selling",
    ctaText: "Contact Sales",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Shopify, 15+ years in E-Commerce" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Amazon, E-Commerce Architecture" },
      { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-BigCommerce, Product Strategy" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-eBay, Marketplace Systems" },
    ],
    heroImage: "/images/ecommerce-about.jpg",
  },
  "/web-development": {
    title: "Building Digital",
    subtitle: "Excellence",
    description: "We're passionate about creating exceptional web solutions that transform businesses, combining cutting-edge technology with creative innovation.",
    stats: [
      { value: "500+", label: "Projects Delivered", icon: <FiUsers /> },
      { value: "30+", label: "Countries", icon: <FiGlobe /> },
      { value: "98%", label: "Client Satisfaction", icon: <FiTrendingUp /> },
      { value: "50+", label: "Tech Experts", icon: <FiClock /> },
    ],
    values: [
      { title: "Quality Code", description: "Clean, maintainable, and scalable code is our standard.", icon: <FiTarget className="text-xl" />, color: "from-blue-500 to-indigo-500" },
      { title: "Innovation", description: "Embracing latest technologies for best solutions.", icon: <FiTrendingUp className="text-xl" />, color: "from-indigo-500 to-purple-500" },
      { title: "User-Centric", description: "Creating exceptional user experiences that delight.", icon: <FiAward className="text-xl" />, color: "from-purple-500 to-pink-500" },
      { title: "Reliability", description: "Building systems that perform consistently.", icon: <FiShield className="text-xl" />, color: "from-blue-600 to-cyan-500" },
    ],
    milestones: [
      { year: "2016", title: "Agency Founded", description: "Started with a mission to build exceptional web solutions" },
      { year: "2019", title: "200+ Projects", description: "Successfully delivered 200+ web projects" },
      { year: "2022", title: "Enterprise Focus", description: "Expanded into enterprise web applications" },
      { year: "2024", title: "AI Integration", description: "Integrated AI capabilities into web solutions" },
    ],
    badge: "About Web Development",
    buttonText: "Start Your Project",
    ctaText: "Get In Touch",
    team: [
      { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Microsoft, 20+ years in Web Tech" },
      { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Google, Full-Stack Expert" },
      { name: "Priya Patel", role: "Head of Design", image: "/images/p2.jpg", bio: "Ex-Apple, UX/UI Specialist" },
      { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Netflix, Web Performance" },
    ],
    heroImage: "/images/web-dev-about.jpg",
  },
};

// Default configuration (fallback)
const defaultConfig = {
  title: "Transforming How",
  subtitle: "Businesses Work",
  description: "We're on a mission to empower businesses with intelligent solutions that drive growth and innovation.",
  stats: [
    { value: "500+", label: "Enterprise Clients", icon: <FiUsers /> },
    { value: "45+", label: "Countries Served", icon: <FiGlobe /> },
    { value: "98%", label: "Client Retention", icon: <FiTrendingUp /> },
    { value: "24/7", label: "Expert Support", icon: <FiClock /> },
  ],
  values: [
    { title: "Customer First", description: "We put our clients at the heart of everything we do.", icon: <FiTarget className="text-xl" />, color: "from-blue-500 to-cyan-500" },
    { title: "Innovation Driven", description: "Constantly pushing boundaries to deliver cutting-edge solutions.", icon: <FiTrendingUp className="text-xl" />, color: "from-indigo-500 to-purple-500" },
    { title: "Trust & Security", description: "Enterprise-grade security ensuring your data is always protected.", icon: <FiShield className="text-xl" />, color: "from-green-500 to-emerald-500" },
    { title: "Excellence", description: "Delivering exceptional quality and results.", icon: <FiAward className="text-xl" />, color: "from-orange-500 to-red-500" },
  ],
  milestones: [
    { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize technology" },
    { year: "2022", title: "100+ Clients", description: "Reached milestone of 100 enterprise customers" },
    { year: "2024", title: "Series A Funding", description: "Raised $25M to accelerate product development" },
    { year: "2026", title: "Global Expansion", description: "Expanded operations to 45+ countries" },
  ],
  badge: "About Us",
  buttonText: "Join Our Team",
  ctaText: "Contact Us",
  team: [
    { name: "Rajesh Kumar", role: "CEO & Co-founder", image: "/images/p3.jpg", bio: "Ex-Salesforce, 15+ years in SaaS" },
    { name: "Aman Qureshi", role: "CTO & Co-founder", image: "/images/AMANPP.jpeg", bio: "Ex-Google, AI & ML Specialist" },
    { name: "Priya Patel", role: "Head of Product", image: "/images/p2.jpg", bio: "Ex-Microsoft, Product Visionary" },
    { name: "Anju Kushwaha", role: "VP of Engineering", image: "/images/p4.jpg", bio: "Ex-Amazon, Scale Expert" },
  ],
  heroImage: "/images/crm2.jpg",
};

// Custom hook for count-up animation
const useCountUp = (targetValue, duration = 2000, shouldStart = false) => {
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

// Stat Item Component with CountUp
const StatItem = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const countValue = useCountUp(stat.value, 2000, isInView);
  const suffix = stat.value.toString().replace(/[0-9]/g, '');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200"
    >
      <div className="text-blue-600 mb-1">{stat.icon}</div>
      <div className="text-lg font-bold text-gray-900">
        {isInView ? countValue : 0}{suffix}
      </div>
      <div className="text-xs text-gray-500">{stat.label}</div>
    </motion.div>
  );
};

export default function AboutPage() {
  const pathname = usePathname();
  const config = aboutConfigs[pathname] || defaultConfig;
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <main id="about" className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 px-8">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="absolute top-20 left-10 w-64 sm:w-72 h-64 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-72 h-64 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 mb-4">
                <FiAward className="text-blue-600 text-sm" />
                <span className="text-xs font-medium text-blue-700">{config.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {config.title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> {config.subtitle}</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                {config.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0B3C8C] to-[#1DA1F2] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    {config.buttonText}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                  >
                    {config.ctaText}
                  </motion.button>
                </Link>
              </div>

              {/* Stats Grid with CountUp Animation */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                {config.stats.map((stat, index) => (
                  <StatItem key={index} stat={stat} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={config.heroImage}
                  alt="Our Story"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FiTrendingUp className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">342%</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              The Values That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Drive Us</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Our core values shape everything we do, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {config.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group p-5 sm:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-10 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Journey</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Key milestones that shaped our growth and success.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"
            />

            <div className="space-y-4">
              {config.milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-[calc(50%+2rem)]' : 'sm:pl-[calc(50%+2rem)]'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-lg p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {milestone.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{milestone.description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="absolute left-0 sm:left-1/2 top-6 sm:-translate-x-1/2 z-10"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-400 rounded-full blur-sm"
                      />
                      <div className="relative w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-2 sm:border-3 border-white shadow-md" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Leadership</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Passionate experts dedicated to revolutionizing technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {config.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3">
                  <div className="w-full h-full rounded-full overflow-hidden border-3 border-white shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <h3 className="text-base font-bold text-gray-900 text-center">{member.name}</h3>
                <p className="text-xs text-blue-600 font-medium text-center mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 text-center">{member.bio}</p>

                <div className="flex justify-center gap-3 mt-3">
                  <a href='https://www.linkedin.com/in/aman-qureshi-86bb15197/' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href='https://www.instagram.com/amanwebsolutions/' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}