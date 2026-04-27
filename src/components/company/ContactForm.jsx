// src/components/ContactForm.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiClock, 
  FiUsers, 
  FiAward,
} from 'react-icons/fi';
import { 
  FaGraduationCap, 
  FaHospital, 
  FaBook, 
  FaStore, 
  FaCode, 
  FaChartLine, 
  FaSchool, 
  FaUniversity, 
  FaIndustry 
} from 'react-icons/fa';
import { sendContactEmail } from '@/utils/emailService';

const contactConfigs = {
  "/school-erp": {
    badge: "CONTACT SCHOOL ERP",
    title: "Transform Your School",
    subtitle: "Management",
    description: "Ready to modernize your school operations? Our team is here to help you implement the perfect School ERP solution for your institution.",
    contactInfo: [
      {
        icon: <FiMail className="text-xl sm:text-2xl" />,
        title: "Email Us",
        details: ["school@Mahntrixtechnologies.com", "support@schoolerp.com"],
        color: "from-blue-500 to-indigo-500",
        bgColor: "from-blue-50 to-indigo-50",
      },
      {
        icon: <FiPhone className="text-xl sm:text-2xl" />,
        title: "Call Us",
        details: ["+91 9575932050", "+91 6268939490"],
        color: "from-indigo-500 to-purple-500",
        bgColor: "from-indigo-50 to-purple-50",
      },
      {
        icon: <FiMapPin className="text-xl sm:text-2xl" />,
        title: "Visit Us",
        details: ["Ashok Vihar, Bhopal", "India, 462023"],
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50",
      }
    ],
    stats: [
      { icon: <FaSchool />, value: "1000+", label: "Schools" },
      { icon: <FaGraduationCap />, value: "500K+", label: "Students" },
      { icon: <FiAward />, value: "98%", label: "Satisfaction" }
    ],
    services: ['School ERP Implementation', 'Student Management System', 'Fee Management', 'Parent Portal', 'Attendance System', 'Other'],
    colorScheme: {
      primary: "from-blue-600 to-indigo-600",
      hover: "from-blue-700 to-indigo-700",
      badge: "from-blue-100 to-indigo-100",
      badgeText: "text-blue-700",
      headerGradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-500 via-blue-600 to-indigo-600",
    }
  },
};

// Default configuration
const defaultConfig = {
  badge: "GET IN TOUCH",
  title: "Let's Discuss Your",
  subtitle: "Next Project",
  description: "Have a vision in mind? We're here to turn it into reality. Our team of experts is ready to bring your ideas to life with cutting-edge technology and innovative solutions.",
  contactInfo: [
    {
      icon: <FiMail className="text-xl sm:text-2xl" />,
      title: "Email Us",
      details: ["Mahntrixtechnologies@company.com", "Mahntrixtechnologies@support.com"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <FiPhone className="text-xl sm:text-2xl" />,
      title: "Call Us",
      details: ["+91 9575932050", "+91 6268939490"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: <FiMapPin className="text-xl sm:text-2xl" />,
      title: "Visit Us",
      details: ["Ashok Vihar, Bhopal", "India, 462023"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    }
  ],
  stats: [
    { icon: <FiClock />, value: "24/7", label: "Support" },
    { icon: <FiUsers />, value: "50+", label: "Experts" },
    { icon: <FiAward />, value: "150+", label: "Projects" }
  ],
  services: ['Web Development', 'Mobile App Development', 'Cloud Solutions', 'AI & Machine Learning', 'Other'],
  colorScheme: {
    primary: "from-blue-600 to-cyan-600",
    hover: "from-blue-700 to-cyan-700",
    badge: "from-blue-100 to-cyan-100",
    badgeText: "text-blue-700",
    headerGradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-500 via-blue-600 to-indigo-600",
  }
};

const ContactForm = () => {
  const pathname = usePathname();
  const config = contactConfigs[pathname] || defaultConfig;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not Sure Yet'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    const result = await sendContactEmail(formData);
    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', newsletter: false });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative w-full py-10 overflow-hidden isolate">
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 place-items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${config.colorScheme.badge} rounded-lg mx-auto sm:mx-0`}
              >
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${config.colorScheme.badgeText.replace('text', 'bg')} rounded-full animate-pulse`}></div>
                <span className={`text-xs sm:text-sm font-semibold ${config.colorScheme.badgeText} tracking-wider`}>
                  {config.badge}
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                {config.title}{" "}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r text-white ${config.colorScheme.primary} whitespace-nowrap`}>
                  {config.subtitle}
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {config.description}
              </motion.p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {config.contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className={`group relative overflow-hidden bg-gradient-to-br ${item.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-white/50`}
                >
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                  
                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-700 text-xs sm:text-sm break-all sm:break-normal break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4"
            >
              {config.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-md"
                >
                  <div className={`${config.colorScheme.badgeText} text-base sm:text-xl mb-1 sm:mb-2 flex justify-center`}>{stat.icon}</div>
                  <div className="font-bold text-gray-900 text-base sm:text-xl">{stat.value}</div>
                  <div className="text-gray-500 text-[10px] sm:text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
              <div className={`bg-gradient-to-r ${config.colorScheme.headerGradient} px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6`}>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Send Us a Message</h3>
                <p className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1">We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle className="text-xs" />{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle className="text-xs" />{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">Company/Institution Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300" placeholder="Your Company" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">Service Interested In</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 bg-white cursor-pointer">
                      <option value="">Select a service</option>
                      {config.services.map(service => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">Estimated Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 bg-white cursor-pointer">
                      <option value="">Select budget range</option>
                      {budgets.map(budget => <option key={budget} value={budget}>{budget}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-xs sm:text-sm">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'} rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none`}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle className="text-xs" />{errors.message}</p>}
                </div>

                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                  <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer flex-shrink-0" />
                  <label htmlFor="newsletter" className="text-gray-600 text-[11px] sm:text-xs md:text-sm cursor-pointer leading-relaxed">
                    Subscribe to our newsletter for industry insights, company updates, and exclusive offers.
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-[#0B3C8C] to-[#1DA1F2] text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FiSend className="text-base sm:text-lg" />
                      Send Message
                    </span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"><FiCheckCircle className="text-white text-sm sm:text-base" /></div>
                        <div><p className="font-semibold text-sm sm:text-base">Thank you for reaching out!</p><p className="text-xs sm:text-sm text-green-600">We'll get back to you within 24 hours.</p></div>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"><FiAlertCircle className="text-white text-sm sm:text-base" /></div>
                        <div><p className="font-semibold text-sm sm:text-base">Something went wrong</p><p className="text-xs sm:text-sm text-red-600">Please try again later.</p></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;