"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { 
    FaQuoteLeft, 
    FaStar, 
    FaUser,
    FaBriefcase,
    FaGlobe,
    FaChartLine,
    FaCode,
    FaPlay,
    FaVideo,
    FaVolumeUp,
    FaVolumeMute,
    FaExpand,
    FaCompress,
    FaTimes,
    FaCheckCircle,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaGraduationCap,
    FaHospital,
    FaBook,
    FaUsers,
    FaStore,
    FaSchool,
    FaUniversity,
    FaIndustry
} from 'react-icons/fa';
import { sendContactEmail } from '@/utils/emailService';

// Service-specific testimonials configuration
const testimonialsConfig = {
    "/school-erp": {
        title: "Trusted by",
        subtitle: "Schools Worldwide",
        description: "Hear from educational institutions that have transformed their operations with our School ERP system.",
        stats: [
            { label: "Schools", value: "1000+", icon: FaSchool, color: "from-blue-500 to-cyan-500" },
            { label: "Students Managed", value: "500K+", icon: FaGraduationCap, color: "from-purple-500 to-pink-500" },
            { label: "Satisfaction Rate", value: "98%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
            { label: "Countries", value: "25+", icon: FaGlobe, color: "from-orange-500 to-red-500" },
        ],
        videoTestimonials: [
            {
                id: 'school-v1',
                name: "Dr. James Wilson",
                role: "Principal",
                company: "Springfield High School",
                rating: 5,
                text: "The School ERP system has revolutionized how we manage student data and communicate with parents. It's intuitive, comprehensive, and has saved us countless hours of administrative work.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:45",
                project: "School ERP Implementation",
                technologies: ["Student Management", "Parent Portal", "Attendance"],
                verified: true,
            },
            {
                id: 'school-v2',
                name: "Maria Garcia",
                role: "IT Director",
                company: "Riverside School District",
                rating: 5,
                text: "Implementing this ERP across our district was seamless. The support team was exceptional, and the platform has exceeded our expectations in every way.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:12",
                project: "District-Wide ERP Rollout",
                technologies: ["Fee Management", "Transport", "Library"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'school-t1',
                name: "Robert Thompson",
                role: "Administrator",
                company: "Oakridge Academy",
                rating: 5,
                text: "The fee management module alone has saved us hundreds of hours. Parents love the online payment options and real-time updates. Best investment we've made for our school.",
                project: "Fee Management System",
                technologies: ["Online Payments", "Financial Reports", "SMS Alerts"],
                verified: true,
            },
            {
                id: 'school-t2',
                name: "Priya Sharma",
                role: "Head Teacher",
                company: "Global Indian School",
                rating: 5,
                text: "Parent-teacher communication has never been easier. The mobile app keeps everyone connected, and the attendance tracking is incredibly accurate with the biometric integration.",
                project: "Communication & Attendance",
                technologies: ["Mobile App", "Biometric", "Push Notifications"],
                verified: true,
            },
        ],
        ctaTitle: "Ready to Transform Your School?",
        ctaDescription: "Join 1000+ schools that have modernized their operations with our School ERP.",
        ctaButton: "Get School ERP Demo",
        badge: "EDUCATION LEADERS",
    },
    "/university-erp": {
        title: "Trusted by",
        subtitle: "Higher Education Institutions",
        description: "Discover how universities and colleges are achieving academic excellence with Adonai CampusPro.",
        stats: [
            { label: "Universities", value: "200+", icon: FaUniversity, color: "from-indigo-500 to-purple-500" },
            { label: "Students", value: "1M+", icon: FaGraduationCap, color: "from-purple-500 to-pink-500" },
            { label: "Research Projects", value: "5000+", icon: FaChartLine, color: "from-blue-500 to-cyan-500" },
            { label: "Countries", value: "30+", icon: FaGlobe, color: "from-orange-500 to-red-500" },
        ],
        videoTestimonials: [
            {
                id: 'uni-v1',
                name: "Dr. Elizabeth Chen",
                role: "Vice Chancellor",
                company: "Metropolitan University",
                rating: 5,
                text: "Adonai CampusPro has transformed our campus operations. From admissions to graduation, every process is streamlined and efficient.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:15",
                project: "Campus Management System",
                technologies: ["Admissions", "Academic Planning", "Research"],
                verified: true,
            },
            {
                id: 'uni-v2',
                name: "Prof. David Kumar",
                role: "Dean of Research",
                company: "Global Tech University",
                rating: 5,
                text: "The research management module has been a game-changer for tracking projects, funding, and publications across departments.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:50",
                project: "Research Management Portal",
                technologies: ["Project Tracking", "Funding", "Collaboration"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'uni-t1',
                name: "Dr. Sarah Williams",
                role: "Registrar",
                company: "Northwest State University",
                rating: 5,
                text: "The course registration and scheduling system handles thousands of students seamlessly. The AI advisor has improved student success rates significantly.",
                project: "Academic Management",
                technologies: ["Course Scheduling", "AI Advisor", "Student Portal"],
                verified: true,
            },
            {
                id: 'uni-t2',
                name: "Michael Roberts",
                role: "CFO",
                company: "Pacific College",
                rating: 5,
                text: "Financial management across multiple campuses is now centralized and transparent. The budgeting tools have helped us optimize resource allocation.",
                project: "Financial Management",
                technologies: ["Budget Planning", "Fee Collection", "Analytics"],
                verified: true,
            },
        ],
        ctaTitle: "Elevate Your University Operations",
        ctaDescription: "Join 200+ higher education institutions using Adonai CampusPro.",
        ctaButton: "Get University ERP Demo",
        badge: "HIGHER EDUCATION",
    },
    "/industry-erp": {
        title: "Trusted by",
        subtitle: "Manufacturing Leaders",
        description: "See how industrial companies are optimizing operations with our Industry ERP solutions.",
        stats: [
            { label: "Manufacturing Clients", value: "300+", icon: FaIndustry, color: "from-orange-500 to-red-500" },
            { label: "Efficiency Increase", value: "45%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
            { label: "Cost Reduction", value: "30%", icon: FaChartLine, color: "from-blue-500 to-cyan-500" },
            { label: "Countries", value: "20+", icon: FaGlobe, color: "from-purple-500 to-pink-500" },
        ],
        videoTestimonials: [
            {
                id: 'ind-v1',
                name: "Rajesh Mehta",
                role: "Plant Manager",
                company: "Precision Manufacturing Ltd",
                rating: 5,
                text: "The real-time production tracking has given us unprecedented visibility into our operations. We've reduced downtime by 35% since implementation.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:40",
                project: "Manufacturing Execution System",
                technologies: ["IoT Sensors", "Real-time Tracking", "Analytics"],
                verified: true,
            },
            {
                id: 'ind-v2',
                name: "Jennifer Lee",
                role: "Supply Chain Director",
                company: "Global Parts Inc",
                rating: 5,
                text: "Supply chain visibility from raw materials to finished goods. The predictive analytics help us stay ahead of potential disruptions.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:05",
                project: "Supply Chain Dashboard",
                technologies: ["Inventory", "Logistics", "Forecasting"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'ind-t1',
                name: "Thomas Anderson",
                role: "Quality Manager",
                company: "Auto Components Co",
                rating: 5,
                text: "The AI-powered quality inspection has reduced defects by 42%. The system caught issues we were missing with manual inspection.",
                project: "Quality Control AI",
                technologies: ["Computer Vision", "AI Inspection", "Reporting"],
                verified: true,
            },
            {
                id: 'ind-t2',
                name: "Suresh Patel",
                role: "Operations Director",
                company: "Textile Industries Ltd",
                rating: 5,
                text: "Maintenance scheduling and work order management has streamlined our entire operation. Equipment uptime has improved dramatically.",
                project: "Maintenance Management",
                technologies: ["Preventive Maintenance", "Work Orders", "Spare Parts"],
                verified: true,
            },
        ],
        ctaTitle: "Optimize Your Manufacturing Operations",
        ctaDescription: "Join 300+ industrial clients achieving operational excellence.",
        ctaButton: "Get Industry ERP Demo",
        badge: "INDUSTRIAL SOLUTIONS",
    },
    "/hospital-erp": {
        title: "Trusted by",
        subtitle: "Healthcare Providers",
        description: "Hear from hospitals and clinics delivering better patient care with Adonai MedPro.",
        stats: [
            { label: "Hospitals", value: "150+", icon: FaHospital, color: "from-red-500 to-pink-500" },
            { label: "Patients Served", value: "2M+", icon: FaUser, color: "from-blue-500 to-cyan-500" },
            { label: "Satisfaction", value: "96%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
            { label: "Countries", value: "15+", icon: FaGlobe, color: "from-purple-500 to-indigo-500" },
        ],
        videoTestimonials: [
            {
                id: 'hosp-v1',
                name: "Dr. Sanjay Gupta",
                role: "Medical Director",
                company: "City General Hospital",
                rating: 5,
                text: "Adonai MedPro has transformed patient care at our hospital. The EMR system gives doctors instant access to patient history, improving diagnosis and treatment.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:55",
                project: "EMR Implementation",
                technologies: ["Electronic Records", "Patient Portal", "Clinical Workflows"],
                verified: true,
            },
            {
                id: 'hosp-v2',
                name: "Nurse Rebecca Wong",
                role: "Chief Nursing Officer",
                company: "Memorial Healthcare",
                rating: 5,
                text: "The bed management and patient tracking systems have improved our workflow efficiency dramatically. Nurses can focus more on patient care.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:20",
                project: "Patient Management",
                technologies: ["Bed Tracking", "Nurse Dashboard", "Alerts"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'hosp-t1',
                name: "Dr. Lisa Chen",
                role: "Radiology Head",
                company: "Advanced Diagnostic Center",
                rating: 5,
                text: "The AI radiology assistant has been invaluable. It helps prioritize urgent cases and provides excellent second opinions on complex scans.",
                project: "AI Radiology Assistant",
                technologies: ["Deep Learning", "Image Analysis", "Reporting"],
                verified: true,
            },
            {
                id: 'hosp-t2',
                name: "Mark Johnson",
                role: "Pharmacy Manager",
                company: "Community Health Hospital",
                rating: 5,
                text: "Pharmacy inventory management with drug interaction checking has improved patient safety and reduced waste significantly.",
                project: "Pharmacy Management",
                technologies: ["Inventory Control", "Prescription Tracking", "Safety Checks"],
                verified: true,
            },
        ],
        ctaTitle: "Enhance Patient Care with Adonai MedPro",
        ctaDescription: "Join 150+ healthcare facilities delivering exceptional care.",
        ctaButton: "Get Hospital ERP Demo",
        badge: "HEALTHCARE INNOVATION",
    },
    "/library-erp": {
        title: "Trusted by",
        subtitle: "Libraries Worldwide",
        description: "Discover how libraries are modernizing with Adonai LibraryPro digital solutions.",
        stats: [
            { label: "Libraries", value: "500+", icon: FaBook, color: "from-amber-500 to-orange-500" },
            { label: "Resources Managed", value: "5M+", icon: FaBook, color: "from-yellow-500 to-amber-500" },
            { label: "Digital Access", value: "99.9%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
            { label: "Countries", value: "30+", icon: FaGlobe, color: "from-orange-500 to-red-500" },
        ],
        videoTestimonials: [
            {
                id: 'lib-v1',
                name: "Dr. Margaret Smith",
                role: "Head Librarian",
                company: "Central Public Library",
                rating: 5,
                text: "Adonai LibraryPro has transformed our library operations. Patrons love the mobile app for searching and reserving books.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:35",
                project: "Digital Library Platform",
                technologies: ["Catalog Management", "Mobile App", "Digital Resources"],
                verified: true,
            },
            {
                id: 'lib-v2',
                name: "Prof. Alan Brown",
                role: "University Librarian",
                company: "State University Library",
                rating: 5,
                text: "The RFID integration has automated our check-in/out process. What used to take hours now takes minutes.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:50",
                project: "RFID Management System",
                technologies: ["RFID", "Automation", "Inventory"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'lib-t1',
                name: "Catherine Lee",
                role: "Digital Services Librarian",
                company: "Metro Library Network",
                rating: 5,
                text: "The AI recommendation engine has increased patron engagement significantly. Users discover books they would have never found otherwise.",
                project: "AI Recommendation Engine",
                technologies: ["Machine Learning", "Personalization", "Analytics"],
                verified: true,
            },
            {
                id: 'lib-t2',
                name: "Robert Martinez",
                role: "Library Director",
                company: "Community College Library",
                rating: 5,
                text: "E-resource management and analytics have given us insights into collection usage. We've optimized our acquisitions based on real data.",
                project: "Analytics Dashboard",
                technologies: ["Usage Analytics", "Collection Management", "Reporting"],
                verified: true,
            },
        ],
        ctaTitle: "Modernize Your Library Today",
        ctaDescription: "Join 500+ libraries embracing digital transformation.",
        ctaButton: "Get Library ERP Demo",
        badge: "LIBRARY INNOVATION",
    },
    "/hrms": {
        title: "Trusted by",
        subtitle: "HR Leaders",
        description: "See how organizations are streamlining HR operations with our comprehensive HRMS.",
        stats: [
            { label: "Organizations", value: "1000+", icon: FaBuilding, color: "from-teal-500 to-cyan-500" },
            { label: "Employees Managed", value: "500K+", icon: FaUsers, color: "from-cyan-500 to-blue-500" },
            { label: "Time Saved", value: "40%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
            { label: "Countries", value: "25+", icon: FaGlobe, color: "from-blue-500 to-indigo-500" },
        ],
        videoTestimonials: [
            {
                id: 'hr-v1',
                name: "Amanda Foster",
                role: "HR Director",
                company: "TechCorp Solutions",
                rating: 5,
                text: "The HRMS has automated our entire HR workflow. From recruitment to retirement, everything is streamlined and efficient.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:10",
                project: "HR Management Suite",
                technologies: ["Employee Management", "Payroll", "Performance"],
                verified: true,
            },
            {
                id: 'hr-v2',
                name: "Vikram Singh",
                role: "VP of People",
                company: "Global Services Inc",
                rating: 5,
                text: "The biometric attendance system has eliminated time theft completely. Payroll processing that took days now takes hours.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:45",
                project: "Attendance & Payroll",
                technologies: ["Biometric", "Automated Payroll", "Compliance"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'hr-t1',
                name: "Jennifer Walsh",
                role: "Talent Acquisition Head",
                company: "Innovate Solutions",
                rating: 5,
                text: "The AI resume parser has cut our screening time by 70%. We're finding better candidates faster than ever before.",
                project: "AI Recruitment",
                technologies: ["Resume Parsing", "Candidate Matching", "Analytics"],
                verified: true,
            },
            {
                id: 'hr-t2',
                name: "Carlos Mendez",
                role: "HR Operations Manager",
                company: "Manufacturing Corp",
                rating: 5,
                text: "Employee self-service has empowered our workforce. Leave requests, attendance tracking, and payslips are all at their fingertips.",
                project: "Employee Self-Service",
                technologies: ["Mobile App", "Leave Management", "Documents"],
                verified: true,
            },
        ],
        ctaTitle: "Transform Your HR Operations",
        ctaDescription: "Join 1000+ organizations streamlining workforce management.",
        ctaButton: "Get HRMS Demo",
        badge: "HR EXCELLENCE",
    },
    "/crm": {
        title: "Trusted by",
        subtitle: "Sales Leaders",
        description: "Hear from sales teams driving growth with our intelligent CRM platform.",
        stats: [
            { label: "Sales Teams", value: "500+", icon: FaUsers, color: "from-green-500 to-emerald-500" },
            { label: "Revenue Tracked", value: "$2B+", icon: FaChartLine, color: "from-emerald-500 to-teal-500" },
            { label: "Retention Rate", value: "98%", icon: FaChartLine, color: "from-blue-500 to-cyan-500" },
            { label: "Countries", value: "45+", icon: FaGlobe, color: "from-teal-500 to-cyan-500" },
        ],
        videoTestimonials: [
            {
                id: 'crm-v1',
                name: "Michael Chen",
                role: "VP of Sales",
                company: "StartupFlow",
                rating: 5,
                text: "This CRM has transformed our sales pipeline management. Forecasting is now accurate, and our close rates have improved by 35%.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:45",
                project: "Sales Pipeline Manager",
                technologies: ["Pipeline Tracking", "Forecasting", "Automation"],
                verified: true,
            },
            {
                id: 'crm-v2',
                name: "Sarah Johnson",
                role: "Sales Director",
                company: "Enterprise Solutions",
                rating: 5,
                text: "The mobile CRM has been a game-changer for our field sales team. They can access everything on the go and update deals in real-time.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:05",
                project: "Mobile Sales Assistant",
                technologies: ["Mobile Access", "Offline Mode", "GPS Check-ins"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'crm-t1',
                name: "David Kim",
                role: "Head of Revenue Operations",
                company: "SaaS Company",
                rating: 5,
                text: "The AI lead scoring has revolutionized how we prioritize leads. Our sales team focuses on the highest probability opportunities.",
                project: "AI Lead Scoring",
                technologies: ["Machine Learning", "Lead Prioritization", "Analytics"],
                verified: true,
            },
            {
                id: 'crm-t2',
                name: "Emily Rodriguez",
                role: "Customer Success Director",
                company: "Cloud Services Ltd",
                rating: 5,
                text: "Customer 360 view gives us complete visibility into customer health. We've reduced churn by 25% since implementation.",
                project: "Customer Success Platform",
                technologies: ["Customer Analytics", "Health Scoring", "Engagement"],
                verified: true,
            },
        ],
        ctaTitle: "Accelerate Your Sales Growth",
        ctaDescription: "Join 500+ sales teams closing more deals with our CRM.",
        ctaButton: "Get CRM Demo",
        badge: "SALES EXCELLENCE",
    },
    "/ecommerce": {
        title: "Trusted by",
        subtitle: "Online Retailers",
        description: "Discover how businesses are scaling their online sales with our e-commerce platform.",
        stats: [
            { label: "Online Stores", value: "1000+", icon: FaStore, color: "from-orange-500 to-red-500" },
            { label: "Sales Processed", value: "$500M+", icon: FaChartLine, color: "from-red-500 to-pink-500" },
            { label: "Uptime", value: "99.9%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
            { label: "Countries", value: "35+", icon: FaGlobe, color: "from-orange-600 to-amber-500" },
        ],
        videoTestimonials: [
            {
                id: 'ecom-v1',
                name: "Lisa Thompson",
                role: "Founder",
                company: "Fashion Forward",
                rating: 5,
                text: "This platform has been instrumental in scaling our online business. The multi-vendor marketplace feature opened new revenue streams.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:50",
                project: "Multi-Vendor Marketplace",
                technologies: ["Vendor Management", "Commission Tracking", "Payments"],
                verified: true,
            },
            {
                id: 'ecom-v2',
                name: "James Wilson",
                role: "E-Commerce Director",
                company: "Home Essentials",
                rating: 5,
                text: "The mobile shopping app with AR preview has increased our conversion rates significantly. Customers love seeing products in their space.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:15",
                project: "Mobile Shopping App",
                technologies: ["AR Preview", "Mobile Checkout", "Push Notifications"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'ecom-t1',
                name: "Maria Gonzalez",
                role: "Marketing Director",
                company: "Beauty Brand Co",
                rating: 5,
                text: "The AI product recommendations have increased average order value by 28%. Customers discover products they actually want.",
                project: "AI Product Recommendations",
                technologies: ["Personalization", "Upselling", "Analytics"],
                verified: true,
            },
            {
                id: 'ecom-t2',
                name: "Robert Chang",
                role: "Operations Manager",
                company: "Electronics Retailer",
                rating: 5,
                text: "Inventory management across multiple warehouses is now seamless. The forecasting helps us maintain optimal stock levels.",
                project: "Inventory Management",
                technologies: ["Multi-warehouse", "Forecasting", "Auto-reorder"],
                verified: true,
            },
        ],
        ctaTitle: "Launch Your Online Store Today",
        ctaDescription: "Join 1000+ businesses growing their online sales.",
        ctaButton: "Start Selling",
        badge: "E-COMMERCE SUCCESS",
    },
    "/web-development": {
        title: "Trusted by",
        subtitle: "Innovative Businesses",
        description: "Hear from clients who have transformed their digital presence with our web development services.",
        stats: [
            { label: "Projects Delivered", value: "500+", icon: FaCode, color: "from-blue-500 to-indigo-500" },
            { label: "Client Satisfaction", value: "98%", icon: FaChartLine, color: "from-indigo-500 to-purple-500" },
            { label: "Tech Experts", value: "50+", icon: FaUsers, color: "from-purple-500 to-pink-500" },
            { label: "Countries", value: "30+", icon: FaGlobe, color: "from-blue-600 to-cyan-500" },
        ],
        videoTestimonials: [
            {
                id: 'web-v1',
                name: "Alex Rivera",
                role: "CTO",
                company: "TechScale Solutions",
                rating: 5,
                text: "The enterprise web application they built for us handles millions of users seamlessly. The microservices architecture is exactly what we needed.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "3:20",
                project: "Enterprise Web Application",
                technologies: ["React", "Node.js", "Kubernetes", "GraphQL"],
                verified: true,
            },
            {
                id: 'web-v2',
                name: "Nina Patel",
                role: "Product Manager",
                company: "MobileFirst Inc",
                rating: 5,
                text: "The PWA they developed has native app-like performance with web accessibility. Our users love the offline capabilities.",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                videoDuration: "2:40",
                project: "Progressive Web App",
                technologies: ["Next.js", "Service Workers", "Offline Mode"],
                verified: true,
            },
        ],
        textTestimonials: [
            {
                id: 'web-t1',
                name: "Chris O'Brien",
                role: "Founder",
                company: "SaaS Startup",
                rating: 5,
                text: "They built our entire platform from scratch in just 3 months. The code quality is exceptional, and the team was a joy to work with.",
                project: "SaaS Platform Development",
                technologies: ["Next.js", "Prisma", "Stripe", "TailwindCSS"],
                verified: true,
            },
            {
                id: 'web-t2',
                name: "Sophie Laurent",
                role: "Digital Director",
                company: "Global Brand Agency",
                rating: 5,
                text: "The headless CMS solution they implemented gives us complete flexibility. Content updates are now lightning fast across all channels.",
                project: "Headless CMS Platform",
                technologies: ["React", "GraphQL", "Strapi", "Vercel"],
                verified: true,
            },
        ],
        ctaTitle: "Build Your Digital Future",
        ctaDescription: "Join 500+ successful projects delivered with excellence.",
        ctaButton: "Start Your Project",
        badge: "WEB EXCELLENCE",
    },
};

// Default configuration
const defaultConfig = {
    title: "Trusted by",
    subtitle: "Industry Leaders",
    description: "Don't just take our word for it—hear what our clients have to say about their experience working with us.",
    stats: [
        { label: "Happy Clients", value: "150+", icon: FaUser, color: "from-blue-500 to-cyan-500" },
        { label: "Projects Delivered", value: "200+", icon: FaCode, color: "from-purple-500 to-pink-500" },
        { label: "Client Retention", value: "98%", icon: FaChartLine, color: "from-green-500 to-emerald-500" },
        { label: "Countries Served", value: "25+", icon: FaGlobe, color: "from-orange-500 to-red-500" },
    ],
    videoTestimonials: [
        {
            id: 'def-v1',
            name: "Michael Chen",
            role: "Founder & CEO",
            company: "StartupFlow",
            rating: 5,
            text: "As a startup, we needed a partner who could move fast without compromising quality. They built our MVP in record time and have been instrumental in our growth.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            videoDuration: "2:45",
            project: "SaaS Platform MVP",
            technologies: ["Next.js", "Supabase", "TailwindCSS"],
            verified: true,
        },
        {
            id: 'def-v2',
            name: "Emily Rodriguez",
            role: "Product Director",
            company: "InnovateLabs",
            rating: 5,
            text: "We've worked with many development agencies, but this team stands out for their strategic thinking and technical excellence.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            videoDuration: "3:12",
            project: "AI-Powered Analytics Platform",
            technologies: ["Python", "TensorFlow", "AWS"],
            verified: true,
        },
        {
            id: 'def-v3',
            name: "Lisa Thompson",
            role: "Head of Digital",
            company: "RetailNext",
            rating: 5,
            text: "They developed a custom e-commerce solution that perfectly aligned with our unique business requirements.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            videoDuration: "4:05",
            project: "Custom E-Commerce Platform",
            technologies: ["Next.js", "Stripe", "Redis"],
            verified: true,
        },
        {
            id: 'def-v4',
            name: "Anna Martinez",
            role: "Startup Founder",
            company: "HealthTech Innovations",
            rating: 5,
            text: "From idea to launch in just 8 weeks! The team's expertise in healthcare compliance and rapid development was crucial for our success.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            videoDuration: "2:30",
            project: "Telemedicine Platform",
            technologies: ["React Native", "Node.js", "MongoDB"],
            verified: true,
        },
    ],
    textTestimonials: [
        {
            id: 'def-t1',
            name: "Sarah Johnson",
            role: "CTO",
            company: "TechCorp Solutions",
            rating: 5,
            text: "Working with this team has been transformative for our business. They delivered a complex enterprise solution on time and exceeded our expectations in every way.",
            project: "Enterprise ERP System",
            technologies: ["React", "Node.js", "PostgreSQL"],
            verified: true,
        },
        {
            id: 'def-t2',
            name: "David Kim",
            role: "VP of Engineering",
            company: "GlobalTech Industries",
            rating: 5,
            text: "The team's expertise in cloud architecture and microservices helped us modernize our legacy systems. Their solution scaled seamlessly.",
            project: "Cloud Migration & Modernization",
            technologies: ["AWS", "Kubernetes", "Microservices"],
            verified: true,
        },
    ],
    ctaTitle: "Ready to Be Our Next Success Story?",
    ctaDescription: "Join 150+ satisfied clients who have transformed their businesses with our software solutions.",
    ctaButton: "Start Your Project",
    badge: "CLIENT TESTIMONIALS",
};

// Counter Component for Animated Numbers
const Counter = ({ targetValue, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;
            
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                if (typeof targetValue === 'string' && targetValue.includes('+')) {
                    const numValue = parseInt(targetValue);
                    setCount(Math.floor(easeOutQuart * numValue));
                } else if (typeof targetValue === 'string' && targetValue.includes('%')) {
                    const numValue = parseInt(targetValue);
                    setCount(Math.floor(easeOutQuart * numValue));
                } else if (typeof targetValue === 'string' && targetValue.includes('$')) {
                    const numValue = parseInt(targetValue.replace(/[^0-9]/g, ''));
                    setCount(Math.floor(easeOutQuart * numValue));
                } else if (typeof targetValue === 'string' && targetValue.includes('M')) {
                    const numValue = parseInt(targetValue);
                    setCount(Math.floor(easeOutQuart * numValue));
                } else {
                    const numValue = parseInt(targetValue) || 0;
                    setCount(Math.floor(easeOutQuart * numValue));
                }
                
                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            
            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, targetValue, duration]);
    
    const formatValue = () => {
        if (typeof targetValue === 'string') {
            if (targetValue.includes('+')) {
                return `${prefix}${count}${suffix}+`;
            } else if (targetValue.includes('%')) {
                return `${prefix}${count}${suffix}%`;
            } else if (targetValue.includes('$')) {
                return `$${count}${targetValue.includes('B') ? 'B' : 'M'}${targetValue.includes('+') ? '+' : ''}`;
            } else if (targetValue.includes('M')) {
                return `${count}M${targetValue.includes('+') ? '+' : ''}`;
            } else if (targetValue.includes('K')) {
                return `${count}K${targetValue.includes('+') ? '+' : ''}`;
            }
        }
        return `${prefix}${count}${suffix}`;
    };
    
    return <span ref={ref}>{formatValue()}</span>;
};

const Testimonials = () => {
    const pathname = usePathname();
    const config = testimonialsConfig[pathname] || defaultConfig;
    
    const [activeVideo, setActiveVideo] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);

    const projectTypes = [
        "School ERP",
        "University ERP",
        "Industry ERP",
        "Hospital ERP",
        "Library ERP",
        "HRMS",
        "CRM",
        "E-Commerce",
        "Web Development",
        "Mobile App Development",
        "Cloud Solutions",
        "AI & Machine Learning",
        "Other"
    ];

    const budgetRanges = [
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "$100,000+"
    ];

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const openVideo = (testimonial) => {
        setActiveVideo(testimonial);
    };

    const closeVideo = () => {
        setActiveVideo(null);
        if (videoRef.current) {
            videoRef.current.src = '';
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            videoContainerRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
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
                service: formData.projectType,
                budget: formData.budget,
                message: formData.message,
                projectType: formData.projectType
            });

            if (result.success) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    projectType: "",
                    budget: "",
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

    return (
        <>
            <section className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-lg inline-block mb-4">
                                {config.badge}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {config.title}{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                    {config.subtitle}
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                                {config.description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16"
                    >
                        {config.stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md`}>
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                                        <Counter targetValue={stat.value} />
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Video Testimonials Section */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                <FaVideo className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                Video Testimonials
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {config.videoTestimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-pink-600 cursor-pointer group" onClick={() => openVideo(testimonial)}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                                                    <FaPlay className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                                                </div>
                                                <p className="text-sm sm:font-semibold">Watch Testimonial</p>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/60 backdrop-blur-sm text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs flex items-center gap-1">
                                            <FaVideo className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                            <span>{testimonial.videoDuration}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 sm:p-5">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md">
                                                {getInitials(testimonial.name)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm flex items-center gap-1 truncate">
                                                    {testimonial.name}
                                                    {testimonial.verified && (
                                                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </h4>
                                                <p className="text-gray-500 text-[10px] sm:text-xs truncate">{testimonial.role}</p>
                                                <p className="text-gray-400 text-[10px] sm:text-xs truncate">{testimonial.company}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-0.5 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
                                            ))}
                                        </div>
                                        
                                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-3">
                                            "{testimonial.text}"
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                            {testimonial.technologies.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-purple-50 text-purple-700 text-[10px] sm:text-xs rounded-full font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Text Testimonials Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                                <FaQuoteLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                Client Stories
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            {config.textTestimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md flex-shrink-0">
                                            {getInitials(testimonial.name)}
                                        </div>
                                        
                                        <div className="flex-1 min-w-0 w-full">
                                            <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
                                                ))}
                                            </div>
                                            
                                            <p className="text-gray-700 text-sm leading-relaxed mb-3 sm:mb-4">
                                                "{testimonial.text}"
                                            </p>
                                            
                                            <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-1">
                                                        {testimonial.name}
                                                        {testimonial.verified && (
                                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </h4>
                                                    <p className="text-gray-500 text-xs sm:text-sm">
                                                        {testimonial.role} at {testimonial.company}
                                                    </p>
                                                </div>
                                                <div className="text-left xs:text-right">
                                                    <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                                                        <FaBriefcase className="w-3 h-3 flex-shrink-0" />
                                                        <span className="truncate">{testimonial.project}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-3">
                                                {testimonial.technologies.map((tech, i) => (
                                                    <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] sm:text-xs rounded-full font-medium">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section with Modal Trigger */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {config.ctaTitle}
                            </h3>
                            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                                {config.ctaDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    {config.ctaButton}
                                </button>
                                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                                    View Case Studies
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={closeVideo}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            ref={videoContainerRef}
                        >
                            <div className="relative aspect-video">
                                <iframe
                                    ref={videoRef}
                                    src={`${activeVideo.videoUrl}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-4">
                                        <button onClick={toggleMute} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                            {isMuted ? <FaVolumeMute className="w-5 h-5" /> : <FaVolumeUp className="w-5 h-5" />}
                                        </button>
                                        <div>
                                            <p className="font-semibold">{activeVideo.name}</p>
                                            <p className="text-sm text-gray-300">{activeVideo.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={toggleFullscreen} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                            {isFullscreen ? <FaCompress className="w-5 h-5" /> : <FaExpand className="w-5 h-5" />}
                                        </button>
                                        <button onClick={closeVideo} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                            <FaTimes className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
                            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between z-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{config.ctaButton}</h2>
                                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Get a free consultation within 24 hours</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <FaTimes className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="p-4 sm:p-6">
                                {submitStatus === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8 sm:py-12"
                                    >
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                            <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                                            Your request has been submitted successfully. Our team will contact you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                                        placeholder="+1 (555) 000-0000"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                    Company/Institution *
                                                </label>
                                                <div className="relative">
                                                    <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                                        placeholder="Your Company"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                    Project Type *
                                                </label>
                                                <select
                                                    name="projectType"
                                                    value={formData.projectType}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                                                >
                                                    <option value="">Select project type</option>
                                                    {projectTypes.map((type) => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                    Budget Range
                                                </label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                                                >
                                                    <option value="">Select budget</option>
                                                    {budgetRanges.map((range) => (
                                                        <option key={range} value={range}>{range}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                                Project Details *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows="4"
                                                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                                                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                            />
                                        </div>

                                        {submitStatus === "error" && (
                                            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                                Failed to send. Please try again or contact us directly.
                                            </div>
                                        )}

                                        <div className="flex flex-col xs:flex-row gap-3 pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-50 text-sm sm:text-base"
                                            >
                                                {isSubmitting ? "Sending..." : "Submit Request"}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsModalOpen(false)}
                                                className="px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base"
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
        </>
    );
};

export default Testimonials;