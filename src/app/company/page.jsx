'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaUser, FaEnvelope, FaBuilding, FaPhone, FaClock } from 'react-icons/fa';
import { sendContactEmail } from '@/utils/emailService';
import Header from '@/components/company/Header';
import Services from '@/components/company/Services';
import Process from '@/components/company/Process'
// import ProjectsShowcase from '@/components/company/ProjectsShowcase'
import Marquee from '@/components/company/Marquee'
import Testimonial from '@/components/company/TestimonialsCarousel'
import ContactForm from '@/components/company/ContactForm';
import ImageMarquee from '@/components/company/ImageMarquee'
import About from '@/components/company/About';

// Project Inquiry Popup Component
const ProjectInquiryPopup = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-Commerce',
    'AI/ML Solution',
    'Cloud Services',
    'Cybersecurity',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not Sure Yet'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Please provide more details (min 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        message: `Project Details:\n${formData.message}\n\nPhone: ${formData.phone || 'Not provided'}`,
      });

      if (result.success) {
        setSubmitStatus('success');

        if (onSubmit) {
          onSubmit(formData);
        }

        setTimeout(() => {
          onClose('submit');
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Inquiry submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    onClose('skip');
  };

  const handleClose = () => {
    onClose('close');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-5 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Start Your Project</h2>
                <p className="text-blue-100 text-sm mt-1">
                  Get a free consultation within 24 hours
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <FaTimes className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your project inquiry has been submitted successfully!
                </p>
                <p className="text-sm text-gray-500">
                  Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-4 py-2.5 border ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                    placeholder="Tell us about your project, timeline, and requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    Failed to submit. Please try again.
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 px-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="px-5 py-2.5 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-all"
                  >
                    Maybe Later
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  <FaClock className="inline mr-1" />
                  Response within 24 hours guaranteed
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already submitted OR dismissed the popup
    const hasSubmittedInquiry = localStorage.getItem('hasSubmittedInquiry');
    const hasDismissedPopup = localStorage.getItem('hasDismissedPopup');

    // Only show popup if user hasn't submitted AND hasn't dismissed it
    if (!hasSubmittedInquiry && !hasDismissedPopup) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = (action) => {
    setShowPopup(false);
    
    // If user clicked "Maybe Later" or close (X) button, save to localStorage
    if (action === 'skip' || action === 'close') {
      localStorage.setItem('hasDismissedPopup', 'true');
    }
    // If user submitted the form, 'hasSubmittedInquiry' is already set in handleSubmitSuccess
  };

  const handleSubmitSuccess = (formData) => {
    console.log('Form submitted successfully:', formData);
    localStorage.setItem('hasSubmittedInquiry', 'true');
    // Clear dismissed flag if it exists
    localStorage.removeItem('hasDismissedPopup');
  };

  return (
    <>
      <Header />
      <ImageMarquee />
      <Services />
      <Process />
      <Marquee />
      <About />
      {/* <ProjectsShowcase /> */}
      <Testimonial />
      <ContactForm />
      {showPopup && (
        <ProjectInquiryPopup
          onClose={handleClosePopup}
          onSubmit={handleSubmitSuccess}
        />
      )}
    </>
  );
}