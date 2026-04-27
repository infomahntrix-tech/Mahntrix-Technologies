"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
    FaGlobe,
    FaMobile,
    FaCloud,
    FaBrain,
    FaShoppingCart,
    FaExternalLinkAlt,
    FaStar,
    FaSpinner,
    FaChevronLeft,
    FaChevronRight,
    FaCalculator,
    FaHotel,
    FaBriefcase,
    FaUser,
    FaFileContract,
    FaTasks,
    FaStore,
    FaCloudSun,
    FaCode,
    FaComments,
    FaBlog,
    FaLink,
    FaWallet,
    FaGithub,
    FaDatabase,
} from 'react-icons/fa';
import {
    FaGraduationCap,
    FaHospital,
    FaBook,
    FaUsers,
    FaChartLine,
    FaBox,
    FaSchool,
    FaUniversity,
    FaIndustry,
} from 'react-icons/fa';

// Custom SVG Icons
const FaTools = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
);

const FaCalendarAlt = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
    </svg>
);

const FaPills = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
);

const FaFlask = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 3v2.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5V3H5v2.5c0 1.4 1.1 2.5 2.5 2.5h1c1.4 0 2.5-1.1 2.5-2.5V3H9zm4 0v2.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V3h2v2.5c0 1.4-1.1 2.5-2.5 2.5h-1c-1.4 0-2.5-1.1-2.5-2.5V3h-2zm6 16H5v-2h14v2z" />
    </svg>
);

const FaBed = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 9.56V8c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1.56c-1.2.41-2 1.54-2 2.84v3c0 .83.67 1.5 1.5 1.5S11 16.23 11 15.4V15h8v.4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3c0-1.3-.8-2.43-2-2.84zM13 9h6v1h-6V9z" />
    </svg>
);

const FaRss = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18zM4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
    </svg>
);

const FaFingerprint = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
    </svg>
);

const FaMailBulk = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const FaHeadset = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
    </svg>
);

const FaChartBar = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
);

const FaTruck = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
);

const FaRocket = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

// Generate gradient background based on language
const getLanguageGradient = (language) => {
    const gradients = {
        'JavaScript': 'from-yellow-400 to-orange-500',
        'TypeScript': 'from-blue-500 to-indigo-600',
        'Python': 'from-blue-400 to-green-500',
        'Java': 'from-red-500 to-orange-600',
        'Go': 'from-cyan-400 to-blue-500',
        'PHP': 'from-indigo-500 to-purple-600',
        'HTML': 'from-orange-500 to-red-500',
        'CSS': 'from-blue-400 to-cyan-500',
        'SCSS': 'from-pink-400 to-purple-500',
        'Dart': 'from-cyan-500 to-blue-600',
    };
    return gradients[language] || 'from-blue-600 to-indigo-600';
};

// Service-specific configurations
const serviceConfigs = {
    "/school-erp": {
        title: "School Management",
        subtitle: "Solutions",
        description: "Comprehensive school management systems that transform educational administration.",
        projects: [
            {
                id: 'school-1',
                title: "Student Information System",
                description: "Complete student lifecycle management with parent portal and real-time analytics dashboard.",
                technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
                demoUrl: "#",
                stats: { stars: 15, forks: 3, language: "TypeScript" },
                icon: FaGraduationCap,
                bgColor: "from-blue-600 to-indigo-600",
            },
            {
                id: 'school-2',
                title: "Fee Management System",
                description: "Automated fee collection with multiple payment gateways and financial reporting.",
                technologies: ["Next.js", "Stripe", "MongoDB", "TailwindCSS"],
                demoUrl: "#",
                stats: { stars: 12, forks: 2, language: "JavaScript" },
                icon: FaWallet,
                bgColor: "from-green-600 to-emerald-600",
            },
            {
                id: 'school-3',
                title: "School Mobile App",
                description: "Native mobile app for parents and teachers with push notifications and real-time updates.",
                technologies: ["React Native", "Firebase", "Redux", "Node.js"],
                demoUrl: "#",
                stats: { stars: 8, forks: 1, language: "TypeScript" },
                icon: FaMobile,
                bgColor: "from-purple-600 to-pink-600",
            },
            {
                id: 'school-4',
                title: "Attendance Tracking System",
                description: "Biometric and RFID-based attendance system with automated reporting.",
                technologies: ["Python", "Django", "PostgreSQL", "Raspberry Pi"],
                demoUrl: "#",
                stats: { stars: 10, forks: 2, language: "Python" },
                icon: FaUsers,
                bgColor: "from-cyan-600 to-blue-600",
            },
            {
                id: 'school-5',
                title: "Exam Management Portal",
                description: "Online examination system with automated grading and result publication.",
                technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
                demoUrl: "#",
                stats: { stars: 14, forks: 3, language: "PHP" },
                icon: FaFileContract,
                bgColor: "from-orange-600 to-red-600",
            },
            {
                id: 'school-6',
                title: "Library Management Module",
                description: "Integrated library system with barcode scanning and digital resource management.",
                technologies: ["React", "Express", "MongoDB", "Barcode API"],
                demoUrl: "#",
                stats: { stars: 9, forks: 2, language: "JavaScript" },
                icon: FaBook,
                bgColor: "from-amber-600 to-orange-600",
            },
        ],
    },
    "/university-erp": {
        title: "Higher Education",
        subtitle: "Solutions",
        description: "Advanced university management systems for academic excellence and research innovation.",
        projects: [
            {
                id: 'uni-1',
                title: "Campus Management System",
                description: "Integrated platform for managing courses, faculty, and student life.",
                technologies: ["React", "Django", "PostgreSQL", "AWS"],
                demoUrl: "#",
                stats: { stars: 20, forks: 5, language: "Python" },
                icon: FaUniversity,
                bgColor: "from-indigo-600 to-purple-600",
            },
        ],
    },
    "/industry-erp": {
        title: "Industrial",
        subtitle: "Solutions",
        description: "Enterprise-grade ERP solutions for manufacturing and industrial operations.",
        projects: [
            {
                id: 'ind-1',
                title: "Manufacturing Execution System",
                description: "Real-time production tracking with IoT sensor integration.",
                technologies: ["React", "Node.js", "InfluxDB", "MQTT"],
                demoUrl: "#",
                stats: { stars: 14, forks: 3, language: "TypeScript" },
                icon: FaIndustry,
                bgColor: "from-orange-600 to-red-600",
            },
        ],
    },
    "/hospital-erp": {
        title: "Healthcare",
        subtitle: "Solutions",
        description: "Comprehensive hospital management systems that enhance patient care.",
        projects: [
            {
                id: 'hosp-1',
                title: "Electronic Medical Records",
                description: "HIPAA-compliant EMR system with integrated patient portal.",
                technologies: ["React", "Node.js", "PostgreSQL", "HL7"],
                demoUrl: "#",
                stats: { stars: 22, forks: 6, language: "TypeScript" },
                icon: FaHospital,
                bgColor: "from-red-600 to-pink-600",
            },
        ],
    },
    "/library-erp": {
        title: "Library",
        subtitle: "Solutions",
        description: "Modern library management systems for the digital age.",
        projects: [
            {
                id: 'lib-1',
                title: "Digital Library Platform",
                description: "Comprehensive library management with e-resource integration.",
                technologies: ["Next.js", "Node.js", "MongoDB", "Elasticsearch"],
                demoUrl: "#",
                stats: { stars: 9, forks: 2, language: "TypeScript" },
                icon: FaBook,
                bgColor: "from-amber-600 to-orange-600",
            },
        ],
    },
    "/hrms": {
        title: "HR",
        subtitle: "Solutions",
        description: "Complete workforce management with payroll and biometric integration.",
        projects: [
            {
                id: 'hr-1',
                title: "HR Management Suite",
                description: "Complete HRMS with payroll, attendance, and performance management.",
                technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
                demoUrl: "#",
                stats: { stars: 17, forks: 4, language: "TypeScript" },
                icon: FaUsers,
                bgColor: "from-teal-600 to-cyan-600",
            },
        ],
    },
    "/crm": {
        title: "CRM",
        subtitle: "Solutions",
        description: "Powerful CRM systems that drive sales and customer relationships.",
        projects: [
            {
                id: 'crm-1',
                title: "Sales Pipeline Manager",
                description: "Visual sales pipeline with forecasting and automation.",
                technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
                demoUrl: "#",
                stats: { stars: 21, forks: 5, language: "TypeScript" },
                icon: FaChartLine,
                bgColor: "from-green-600 to-emerald-600",
            },
        ],
    },
    "/ecommerce": {
        title: "E-Commerce",
        subtitle: "Solutions",
        description: "Complete online store solutions for modern retail businesses.",
        projects: [
            {
                id: 'ecom-1',
                title: "Multi-Vendor Marketplace",
                description: "Scalable marketplace platform with vendor management.",
                technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                demoUrl: "#",
                stats: { stars: 25, forks: 7, language: "TypeScript" },
                icon: FaStore,
                bgColor: "from-orange-600 to-red-600",
            },
        ],
    },
    "/web-development": {
        title: "Web Development",
        subtitle: "Portfolio",
        description: "Custom web applications and solutions for diverse business needs.",
        projects: [
            {
                id: 'web-1',
                title: "Enterprise Web Application",
                description: "Scalable enterprise solution with microservices architecture.",
                technologies: ["React", "Node.js", "Kubernetes", "GraphQL"],
                demoUrl: "#",
                stats: { stars: 30, forks: 8, language: "TypeScript" },
                icon: FaCode,
                bgColor: "from-blue-600 to-indigo-600",
            },
        ],
    },
};

// Default configuration
const defaultConfig = {
    title: "Our",
    subtitle: "Works",
    description: "Transforming ideas into powerful software solutions.",
    projects: [],
};

// Fallback projects data
const fallbackProjects = [
    {
        id: 1,
        title: "Chartered Accountant Web",
        description: "Professional website for chartered accountant services.",
        technologies: ["CSS", "HTML", "JavaScript"],
        demoUrl: "https://github.com/amanq3944/CharteredAccountantWeb",
        githubUrl: "https://github.com/amanq3944/CharteredAccountantWeb",
        stats: { stars: 1, forks: 0, language: "CSS" },
        icon: FaCalculator,
        bgColor: "from-blue-600 to-indigo-600",
    },
    {
        id: 2,
        title: "Guesthouse Web",
        description: "Guesthouse booking and management website.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://github.com/amanq3944/GuesthouseWeb",
        githubUrl: "https://github.com/amanq3944/GuesthouseWeb",
        stats: { stars: 1, forks: 0, language: "HTML" },
        icon: FaHotel,
        bgColor: "from-emerald-600 to-teal-600",
    },
    {
        id: 3,
        title: "Job Consultancy FSWA",
        description: "Full-stack job consultancy web application.",
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://github.com/amanq3944/JobConsultancyFSWA",
        githubUrl: "https://github.com/amanq3944/JobConsultancyFSWA",
        stats: { stars: 1, forks: 0, language: "JavaScript" },
        icon: FaBriefcase,
        bgColor: "from-purple-600 to-pink-600",
    },
    {
        id: 4,
        title: "Next Portfolio",
        description: "Modern portfolio website built with Next.js.",
        technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
        demoUrl: "https://portfolioo-phi-two.vercel.app/",
        githubUrl: "https://github.com/amanq3944/NextPortfolio",
        stats: { stars: 1, forks: 0, language: "JavaScript" },
        icon: FaUser,
        bgColor: "from-cyan-600 to-blue-600",
    },
    {
        id: 5,
        title: "Policy Website Two",
        description: "Policy and documentation website template.",
        technologies: ["SCSS", "HTML", "JavaScript"],
        demoUrl: "https://github.com/amanq3944/PolicyWebsiteTwo",
        githubUrl: "https://github.com/amanq3944/PolicyWebsiteTwo",
        stats: { stars: 1, forks: 0, language: "SCSS" },
        icon: FaFileContract,
        bgColor: "from-orange-600 to-red-600",
    },
    {
        id: 6,
        title: "Todo List",
        description: "Feature-rich todo list application.",
        technologies: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://github.com/amanq3944/TodoList",
        githubUrl: "https://github.com/amanq3944/TodoList",
        stats: { stars: 1, forks: 0, language: "JavaScript" },
        icon: FaTasks,
        bgColor: "from-green-600 to-emerald-600",
    },
];

const ProjectsShowcase = () => {
    const pathname = usePathname();
    const config = serviceConfigs[pathname] || defaultConfig;

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const projectsPerPage = 6;

    useEffect(() => {
        if (config.projects && config.projects.length > 0) {
            setProjects(config.projects);
            setLoading(false);
        } else {
            const fetchGitHubRepos = async () => {
                try {
                    setLoading(true);
                    setError(null);

                    const username = 'amanq3944';

                    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`);

                    if (!response.ok) {
                        throw new Error(`API returned ${response.status}`);
                    }

                    const repos = await response.json();

                    if (repos && repos.length > 0) {
                        const formattedProjects = repos
                            .filter(repo => !repo.fork && !repo.private)
                            .map((repo, index) => {
                                let IconComponent = FaGlobe;
                                let bgGradient = "from-blue-600 to-indigo-600";

                                const repoName = repo.name.toLowerCase();
                                const language = repo.language || 'Web';

                                bgGradient = getLanguageGradient(language);

                                if (repoName.includes('account') || repoName.includes('calc')) IconComponent = FaCalculator;
                                else if (repoName.includes('hotel') || repoName.includes('guest')) IconComponent = FaHotel;
                                else if (repoName.includes('job') || repoName.includes('consult')) IconComponent = FaBriefcase;
                                else if (repoName.includes('portfolio')) IconComponent = FaUser;
                                else if (repoName.includes('policy')) IconComponent = FaFileContract;
                                else if (repoName.includes('todo') || repoName.includes('task')) IconComponent = FaTasks;
                                else if (repoName.includes('store') || repoName.includes('ecom')) IconComponent = FaStore;
                                else if (repoName.includes('mobile') || repoName.includes('app')) IconComponent = FaMobile;

                                return {
                                    id: repo.id || index + 100,
                                    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
                                    description: repo.description || 'A software development project',
                                    technologies: repo.topics?.slice(0, 4).length ? repo.topics.slice(0, 4) : [repo.language].filter(Boolean),
                                    demoUrl: repo.homepage || repo.html_url,
                                    githubUrl: repo.html_url,
                                    stats: {
                                        stars: repo.stargazers_count || 0,
                                        forks: repo.forks_count || 0,
                                        language: repo.language || 'Web',
                                    },
                                    icon: IconComponent,
                                    bgColor: bgGradient,
                                };
                            });

                        setProjects(formattedProjects.length > 0 ? formattedProjects : fallbackProjects);
                    } else {
                        setProjects(fallbackProjects);
                    }
                } catch (error) {
                    console.error('Error fetching GitHub repos:', error);
                    setError(error.message);
                    setProjects(fallbackProjects);
                } finally {
                    setLoading(false);
                }
            };

            fetchGitHubRepos();
        }
    }, [config.projects]);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const element = document.getElementById('portfolio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Also update the pagination buttons to use the same function
    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    if (loading) {
        return (
            <section className="py-8 md:py-16 min-h-[400px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
                <div className="text-center">
                    <FaSpinner className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-xl text-gray-600">Loading projects...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-10 overflow-hidden" id="portfolio">
            {/* Blue Background Layer */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-gray-50" />
            </div>
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: `linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4f46e5 100%)`,
                    clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%)'
                }}
            />

            <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl z-10">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        {config.title} <span className="text-gray-100">{config.subtitle}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
                        {config.description}
                    </p>
                    {error && (
                        <p className="text-sm text-yellow-600 mt-2">
                            Note: Using demo data.
                        </p>
                    )}
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-600">No projects found.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8">
                            {currentProjects.map((project) => {
                                const ProjectIcon = project.icon || FaGlobe;
                                return (
                                    <div
                                        key={project.id}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
                                    >
                                        {/* Card Header with Blue Gradient */}
                                        <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.bgColor || 'from-blue-600 to-indigo-600'}`}>
                                            {/* Decorative Pattern */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                                            </div>
                                            <div className="absolute inset-0" style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                            }}></div>

                                            {/* Center Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                                <div className="text-center">
                                                    <div className="text-5xl sm:text-6xl mb-3 drop-shadow-lg">
                                                        <ProjectIcon className="inline" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Language Badge */}
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700 shadow-md">
                                                {project.stats.language}
                                            </div>

                                            {/* Stars Badge */}
                                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-yellow-600 shadow-md flex items-center gap-1">
                                                <FaStar className="w-3 h-3" />
                                                {project.stats.stars || 0}
                                            </div>
                                        </div>

                                        <div className="p-5 sm:p-6">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 capitalize">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.technologies.slice(0, 4).map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 4 && (
                                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                                        +{project.technologies.length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Stats */}
                                            <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                                                <div className="text-center">
                                                    <div className="text-lg font-bold text-gray-900">
                                                        {project.stats.forks || 110}
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Forks</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-lg font-bold text-gray-900">
                                                        {project.stats.language || 'Web'}
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Language</div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.demoUrl || project.githubUrl || '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                                >
                                                    <FaExternalLinkAlt className="w-3 h-3" />
                                                    View Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-8 pt-4">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className={`p-2.5 rounded-lg border transition-all ${currentPage === 1
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                                            : 'bg-white text-blue-600 hover:bg-blue-50 border-gray-300 hover:border-blue-300 shadow-sm hover:shadow'
                                        }`}
                                    aria-label="Previous page"
                                >
                                    <FaChevronLeft className="w-4 h-4" />
                                </button>

                                <div className="flex gap-1.5">
                                    {[...Array(totalPages)].map((_, index) => {
                                        const pageNumber = index + 1;

                                        // Show first, last, current, and neighbors
                                        if (
                                            pageNumber === 1 ||
                                            pageNumber === totalPages ||
                                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                        ) {
                                            return (
                                                <button
                                                    key={pageNumber}
                                                    onClick={() => handlePageChange(pageNumber)}
                                                    className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === pageNumber
                                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-blue-300'
                                                        }`}
                                                    aria-label={`Go to page ${pageNumber}`}
                                                    aria-current={currentPage === pageNumber ? 'page' : undefined}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        } else if (
                                            pageNumber === currentPage - 2 ||
                                            pageNumber === currentPage + 2
                                        ) {
                                            return (
                                                <span
                                                    key={pageNumber}
                                                    className="w-10 h-10 flex items-center justify-center text-gray-400"
                                                >
                                                    •••
                                                </span>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>

                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-2.5 rounded-lg border transition-all ${currentPage === totalPages
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                                            : 'bg-white text-blue-600 hover:bg-blue-50 border-gray-300 hover:border-blue-300 shadow-sm hover:shadow'
                                        }`}
                                    aria-label="Next page"
                                >
                                    <FaChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default ProjectsShowcase;