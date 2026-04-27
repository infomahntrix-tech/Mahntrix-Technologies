'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";
import Link from 'next/link';

export default function SchoolERP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "School ERP",
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
        setFormData({ 
          name: "", 
          email: "", 
          phone: "",
          company: "", 
          service: "School ERP", 
          message: "" 
        });
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

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Mahntrix Technologies – School ERP
        </h2>

        {/* DESCRIPTION BOX */}
        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 mb-8 text-sm">
          Mahntrix Technologies is a flagship product designed to address the needs of
          educational institutions. It streamlines and automates school and
          college management processes.
        </div>

        {/* SECTION */}
        <SectionTitle title="Comprehensive Campus Management" />
        <p className="text-sm mb-6">
          A complete ecosystem supporting academic and administrative functions
          with modular flexibility.
        </p>

        {/* MODULES */}
        <SectionTitle title="Key Modules and Features" />
        <List items={[
          "Student Profile Management & Administration",
          "Mobile & Web-based MIS for Students, Teachers, Parents",
          "Online Fee Payment with Real-Time Updates",
          "SMS Alerts for Attendance, Fees, Events",
          "Homework, Projects & Notices Tracking",
          "CBCS Compliant",
          "Personalized Dashboards",
          "Academic Planning & Exam Management",
          "Accounting & Financial Tools",
          "Transport Management System",
          "Biometric Attendance",
          "Smart Library System",
          "Dynamic Website CMS",
          "Stores & Inventory Control"
        ]} />

        {/* SALIENT FEATURES */}
        <SectionTitle title="Salient Features" />
        <List items={[
          "User-Friendly Interface",
          "Secure & Reliable Software",
          "Dedicated Support Team",
          "Customizable System",
          "Cost Effective & Scalable"
        ]} />

        {/* MOBILE APP */}
        <SectionTitle title="Mobile App Integration" />
        <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-6 text-sm">
          Fully integrated mobile app providing real-time access for students,
          teachers, and parents.
        </div>

        <SectionTitle title="Mobile App Features" />
        <List items={[
          "Student Records & Attendance",
          "Parent Reports & Notifications",
          "Teacher Tools & Reports",
          "Online Payments",
          "Real-Time Bus Tracking",
          "Library Management",
          "Homework Submissions",
          "Push Notifications"
        ]} />

        {/* WHY CHOOSE */}
        <SectionTitle title="Why Choose Mahntrix Technologies?" />
        <p className="text-sm mb-6">
          A modern, scalable platform with real-time communication, modular
          design, and strong support system.
        </p>

        <div className="bg-indigo-100 text-indigo-700 p-4 text-sm rounded mb-8">
          Mahntrix Technologies is more than a product — it's a complete future-ready
          solution.
        </div>

        {/* Buttons */}
        <div className='flex flex-wrap justify-between items-center gap-2'>
          {/* Get Started Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started with School ERP →
            </button>
          </div>

          {/* Project Demo */}
          <div className="flex justify-center">
            <Link
              href="https://school-tan-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Project Demo →
            </Link>
          </div>
        </div>

      </main>

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
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get School ERP Solution
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your institution and we'll help you implement our School ERP system.
              </p>

              {submitStatus === "success" ? (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCheckCircle className="text-green-600" />
                    <span className="font-semibold">Request Sent!</span>
                  </div>
                  <p className="text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl">
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
                    className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Business Email *" 
                    className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                    required 
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone Number *" 
                    className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                    required 
                  />
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="School/Institution Name *" 
                    className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                    required 
                  />
                  <input 
                    type="hidden" 
                    name="service" 
                    value="School ERP" 
                  />
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your requirements... *" 
                    rows="4" 
                    className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                    required 
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  );
}

/* REUSABLE COMPONENTS */

function SectionTitle({ title }) {
  return (
    <h3 className="text-3xl font-semibold border-b pb-2 mb-4">
      {title}
    </h3>
  );
}

function List({ items }) {
  return (
    <ul className="mb-6 border rounded-md overflow-hidden text-sm text-gray-700">
      {items.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 border-b last:border-none bg-white hover:bg-gray-50"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}