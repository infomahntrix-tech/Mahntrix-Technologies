// src/app/career/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Navbar from '@/components/company/Navbar';
import Footer from '@/components/company/Footer';
import { sendContactEmail } from '@/utils/emailService';
import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiAward,
  FiHeart,
  FiCoffee,
  FiMonitor,
  FiTarget,
  FiTrendingUp,
  FiGlobe,
  FiSearch,
  FiX,
  FiCheckCircle,
  FiAlertCircle,
  FiMail,
  FiPhone,
  FiUser,
  FiSend,
  FiChevronRight,
  FiChevronLeft,
  FiCalendar,
  FiBookOpen,
  FiCode,
  FiZap
} from 'react-icons/fi';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFigma
} from 'react-icons/si';
import Image from 'next/image';

// Job categories
const jobCategories = [
  { id: 'all', name: 'All Positions', icon: FiBriefcase },
  { id: 'engineering', name: 'Engineering', icon: FiCode },
  { id: 'design', name: 'Design', icon: FiMonitor },
  { id: 'product', name: 'Product', icon: FiTarget },
  { id: 'marketing', name: 'Marketing', icon: FiTrendingUp },
];

// Job locations
const locations = [
  'All Locations',
  'Bhopal, India',
  'Remote',
  'Hybrid',
  'Bangalore, India',
];

// Job listings data
const jobListings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    category: 'engineering',
    location: 'Bhopal, India',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '₹18L - ₹30L',
    posted: '2 days ago',
    description: 'We are looking for a Senior Frontend Developer to join our team and help build exceptional user experiences.',
    requirements: [
      '4+ years of experience with React and modern JavaScript',
      'Expert knowledge of Next.js and Server Components',
      'Strong understanding of TailwindCSS and responsive design',
      'Experience with state management (Redux, Zustand, or Context API)',
      'Knowledge of performance optimization and SEO best practices',
    ],
    niceToHave: [
      'Experience with TypeScript',
      'Knowledge of GraphQL',
      'Contributions to open source',
      'Experience with testing frameworks (Jest, Cypress)',
    ],
    benefits: [
      'Competitive salary and equity',
      'Health insurance coverage',
      'Flexible work hours',
      'Learning and development budget',
      'Home office setup allowance',
    ],
    icon: FaReact,
    color: 'from-cyan-500 to-blue-500',
    urgent: true,
  },
  {
    id: 2,
    title: 'Backend Developer',
    department: 'Engineering',
    category: 'engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹15L - ₹25L',
    posted: '5 days ago',
    description: 'Join our backend team to build scalable and secure APIs and microservices.',
    requirements: [
      '3+ years of experience with Node.js or Python',
      'Strong knowledge of RESTful APIs and microservices architecture',
      'Experience with PostgreSQL or MongoDB',
      'Understanding of authentication and authorization protocols',
      'Knowledge of Docker and container orchestration',
    ],
    niceToHave: [
      'Experience with AWS or Google Cloud',
      'Knowledge of GraphQL',
      'Experience with message queues (RabbitMQ, Kafka)',
      'Understanding of CI/CD pipelines',
    ],
    benefits: [
      'Competitive salary and equity',
      'Health insurance coverage',
      'Flexible work hours',
      'Learning and development budget',
      'Remote-first culture',
    ],
    icon: FaNodeJs,
    color: 'from-green-500 to-emerald-500',
    urgent: false,
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    category: 'design',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '₹12L - ₹22L',
    posted: '1 week ago',
    description: 'We are seeking a talented UI/UX Designer to create beautiful and intuitive user interfaces.',
    requirements: [
      '3+ years of experience in UI/UX design',
      'Proficiency in Figma and design systems',
      'Strong portfolio showcasing web and mobile designs',
      'Understanding of user-centered design principles',
      'Experience conducting user research and testing',
    ],
    niceToHave: [
      'Knowledge of HTML/CSS',
      'Experience with animation tools',
      'Understanding of accessibility standards',
      'Experience in B2B SaaS design',
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Flexible hours',
      'Design tool subscriptions',
      'Conference attendance budget',
    ],
    icon: SiFigma,
    color: 'from-purple-500 to-pink-500',
    urgent: true,
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    category: 'engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '4-7 years',
    salary: '₹20L - ₹35L',
    posted: '3 days ago',
    description: 'Looking for a DevOps Engineer to manage our cloud infrastructure and deployment pipelines.',
    requirements: [
      '4+ years of experience in DevOps or SRE roles',
      'Strong knowledge of AWS services (EC2, ECS, RDS, S3)',
      'Experience with Docker and Kubernetes',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Knowledge of CI/CD tools (GitHub Actions, Jenkins)',
    ],
    niceToHave: [
      'Experience with monitoring tools (Prometheus, Grafana)',
      'Knowledge of security best practices',
      'Scripting skills (Python, Bash)',
      'Experience with multi-cloud environments',
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health coverage',
      'Remote work setup allowance',
      'Certification reimbursement',
      'Annual team retreats',
    ],
    icon: FaAws,
    color: 'from-orange-500 to-red-500',
    urgent: false,
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Product',
    category: 'product',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '5-8 years',
    salary: '₹25L - ₹40L',
    posted: '1 week ago',
    description: 'We are looking for an experienced Product Manager to lead our product strategy and execution.',
    requirements: [
      '5+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with Agile methodologies',
      'Excellent communication and stakeholder management',
      'Data-driven decision making approach',
    ],
    niceToHave: [
      'Technical background or CS degree',
      'Experience in B2B SaaS products',
      'Knowledge of product analytics tools',
      'MBA from top-tier institution',
    ],
    benefits: [
      'Competitive salary and significant equity',
      'Executive health coverage',
      'Leadership development programs',
      'International travel opportunities',
      'Performance bonuses',
    ],
    icon: FiTarget,
    color: 'from-blue-500 to-indigo-500',
    urgent: true,
  },
  {
    id: 6,
    title: 'Technical Content Writer',
    department: 'Marketing',
    category: 'marketing',
    location: 'Remote',
    type: 'Contract',
    experience: '2-4 years',
    salary: '₹8L - ₹15L',
    posted: '4 days ago',
    description: 'Create engaging technical content that helps developers understand and use our products.',
    requirements: [
      '2+ years of technical writing experience',
      'Strong understanding of web technologies',
      'Excellent written and verbal communication',
      'Experience with SEO best practices',
      'Portfolio of published technical content',
    ],
    niceToHave: [
      'Software development background',
      'Experience with developer marketing',
      'Knowledge of content management systems',
      'Social media management experience',
    ],
    benefits: [
      'Flexible contract terms',
      'Remote work',
      'Content creation tools',
      'Performance bonuses',
      'Potential for full-time conversion',
    ],
    icon: FiBookOpen,
    color: 'from-teal-500 to-cyan-500',
    urgent: false,
  },
  {
    id: 7,
    title: 'Full Stack Developer',
    department: 'Engineering',
    category: 'engineering',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '₹16L - ₹28L',
    posted: '6 days ago',
    description: 'Join our team as a Full Stack Developer to build end-to-end features for our products.',
    requirements: [
      '3+ years of full stack development experience',
      'Proficiency in React and Node.js',
      'Experience with MongoDB or PostgreSQL',
      'Knowledge of RESTful APIs and GraphQL',
      'Understanding of modern build tools and workflows',
    ],
    niceToHave: [
      'Experience with Next.js',
      'Knowledge of Docker',
      'Understanding of cloud platforms (AWS/GCP)',
      'Experience with testing frameworks',
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Flexible hours',
      'Learning budget',
      'Team events and outings',
    ],
    icon: FiCode,
    color: 'from-indigo-500 to-purple-500',
    urgent: false,
  },
  {
    id: 8,
    title: 'Database Administrator',
    department: 'Engineering',
    category: 'engineering',
    location: 'Bhopal, India',
    type: 'Full-time',
    experience: '4-8 years',
    salary: '₹15L - ₹25L',
    posted: '1 week ago',
    description: 'Manage and optimize our database systems for performance, reliability, and scalability.',
    requirements: [
      '4+ years of database administration experience',
      'Expert knowledge of PostgreSQL and MongoDB',
      'Experience with database performance tuning',
      'Knowledge of backup and recovery strategies',
      'Understanding of database security best practices',
    ],
    niceToHave: [
      'Experience with Redis or Elasticsearch',
      'Knowledge of cloud database services',
      'Scripting skills (Python, Shell)',
      'Experience with data warehousing',
    ],
    benefits: [
      'Competitive salary',
      'Health coverage',
      'Flexible schedule',
      'Certification support',
      'Home office setup',
    ],
    icon: SiPostgresql,
    color: 'from-blue-600 to-sky-500',
    urgent: false,
  },
  {
    id: 9,
    title: 'Mobile Developer (React Native)',
    department: 'Engineering',
    category: 'engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹14L - ₹24L',
    posted: '5 days ago',
    description: 'Build and maintain cross-platform mobile applications using React Native.',
    requirements: [
      '3+ years of mobile development experience',
      'Strong proficiency in React Native',
      'Experience with mobile app deployment (App Store, Google Play)',
      'Knowledge of mobile UI/UX best practices',
      'Understanding of native modules integration',
    ],
    niceToHave: [
      'Experience with native iOS/Android development',
      'Knowledge of Expo',
      'Experience with mobile analytics',
      'Understanding of mobile security',
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Remote work',
      'Device allowance',
      'Learning stipend',
    ],
    icon: FaReact,
    color: 'from-cyan-400 to-blue-500',
    urgent: true,
  },
];

// Company perks
const perks = [
  {
    icon: FiHeart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: FiCoffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote options, and generous PTO to recharge.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: FiMonitor,
    title: 'Latest Tech',
    description: 'Top-of-the-line equipment and tools to do your best work.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth & Development',
    description: 'Learning budget, mentorship programs, and career progression.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiUsers,
    title: 'Amazing Culture',
    description: 'Collaborative, inclusive environment with regular team events.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiGlobe,
    title: 'Global Impact',
    description: 'Work on products used by millions of users worldwide.',
    color: 'from-indigo-500 to-blue-500',
  },
];

// Company stats
const stats = [
  { value: '150+', label: 'Team Members', icon: FiUsers },
  { value: '25+', label: 'Countries', icon: FiGlobe },
  { value: '4.8★', label: 'Glassdoor Rating', icon: FiAward },
  { value: '98%', label: 'Retention Rate', icon: FiHeart },
];

// Scroll Animation Component
const ScrollAnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Job Card Component
const JobCard = ({ job, onApply }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = job.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 ${job.urgent ? 'ring-2 ring-red-400 ring-offset-2' : ''}`}
    >
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{job.title}</h3>
              {job.urgent && (
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full animate-pulse">
                  Urgent
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{job.department}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FiMapPin className="w-4 h-4 text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FiClock className="w-4 h-4 text-gray-400" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FiBriefcase className="w-4 h-4 text-gray-400" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FiDollarSign className="w-4 h-4 text-gray-400" />
            <span>{job.salary}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {job.description}
        </p>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 space-y-4">
                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nice to Have */}
                {job.niceToHave && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nice to Have</h4>
                    <ul className="space-y-1">
                      {job.niceToHave.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <FiCheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Posted Date */}
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <FiCalendar className="w-3 h-3" />
                  Posted {job.posted}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          <button
            onClick={() => onApply(job)}
            className={`ml-auto px-5 py-2 bg-gradient-to-r ${job.color} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Career Page Component
export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Filter jobs
  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, resume: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
        service: `Job Application: ${selectedJob?.title}`,
        message: `
          Cover Letter: ${formData.coverLetter}
          Portfolio: ${formData.portfolio}
          LinkedIn: ${formData.linkedin}
          Resume: ${formData.resume?.name || 'Not uploaded'}
        `,
      });

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          coverLetter: '',
          portfolio: '',
          linkedin: '',
        });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error) {
      console.error("Application submission failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLocation, searchQuery]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Animated Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                  <FiZap className="w-4 h-4" />
                  Join Our Team
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Build the Future
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    With Us
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join a team of passionate innovators building technology that makes a difference.
                  We're looking for talented individuals to help us shape the future.
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mahntrix Technologies</span>?
                Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mahntrix Technologies</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where talented people can do their best work.
              </p>
            </ScrollAnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <ScrollAnimatedSection key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${perk.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
                    </motion.div>
                  </ScrollAnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Positions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find your next opportunity and join our growing team.
              </p>
            </ScrollAnimatedSection>

            {/* Filters */}
            <div className="mb-8">
              {/* Category Filters */}
              <div className="flex overflow-x-auto pb-3 md:flex-wrap md:justify-center gap-2 md:gap-3 mb-4 hide-scrollbar">
                {jobCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Location Filters */}
              <div className="flex overflow-x-auto pb-3 md:flex-wrap md:justify-center gap-2 hide-scrollbar">
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedLocation === location
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4 sm:space-y-6">
              <AnimatePresence mode="wait">
                {currentJobs.length > 0 ? (
                  currentJobs.map((job) => (
                    <JobCard key={job.id} job={job} onApply={handleApply} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <FiBriefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                    <p className="text-gray-600">Try adjusting your filters or search query.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition-all ${currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-blue-50 border-gray-300'
                    }`}
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
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
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return <span key={pageNumber} className="px-1 text-gray-400">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition-all ${currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-blue-50 border-gray-300'
                    }`}
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Don't See a Perfect Fit?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button
                onClick={() => {
                  setSelectedJob({ title: 'General Application', department: 'Various' });
                  setIsModalOpen(true);
                }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Submit General Application
              </button>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Application Modal */}
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
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Apply for {selectedJob?.title || 'Position'}
                    </h2>
                    {selectedJob?.department && (
                      <p className="text-gray-600 text-sm mt-1">{selectedJob.department}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FiX className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-6">
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for your interest. We'll review your application and get back to you soon.
                      </p>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email Address *
                          </label>
                          <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number
                          </label>
                          <div className="relative">
                            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Portfolio URL
                          </label>
                          <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://yourportfolio.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Resume/CV *
                        </label>
                        <input
                          type="file"
                          name="resume"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx"
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 5MB</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Cover Letter
                        </label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="Tell us why you're a great fit for this role..."
                        />
                      </div>

                      {submitStatus === 'error' && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center gap-2">
                          <FiAlertCircle className="w-4 h-4" />
                          Failed to submit application. Please try again.
                        </div>
                      )}

                      <div className="flex gap-3 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <FiSend className="w-4 h-4" />
                              Submit Application
                            </span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

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
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}