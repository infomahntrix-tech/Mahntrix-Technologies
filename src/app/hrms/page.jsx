// src/app/hrms/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";
import Link from 'next/link';

export default function HRMS() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "HRMS",
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
                    service: "HRMS",
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Employee Management with Payroll & Biometric Attendance
                </h2>
                <p className="text-xl text-gray-600 mb-6">Streamline HR. Secure Data. Empower Teams.</p>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-teal-500 bg-teal-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies's Employee Management System combines biometric attendance tracking and smart card integration with robust payroll processing. Built for organizations of all sizes, this solution automates key HR processes, ensuring accuracy, compliance, and employee satisfaction.
                </div>

                {/* CORE COMPONENTS */}
                <SectionTitle title="Core Components" />
                <p className="text-sm mb-6">
                    Comprehensive HR modules that streamline workforce management from hiring to payroll.
                </p>
                
                <div className="space-y-6 mb-8">
                    <FeatureGroup 
                        title="Employee Profile Management"
                        items={[
                            "Detailed Records: Personal data, roles, departments, contacts, and work history at a glance.",
                            "Document Storage: Securely store employee contracts, IDs, certificates, and more."
                        ]}
                    />
                    
                    <FeatureGroup 
                        title="Attendance & Leave Management"
                        items={[
                            "Biometric & Smart Card Attendance: Accurate, tamper-proof attendance via fingerprint, face recognition, or smart card.",
                            "Leave Tracking: End-to-end leave workflow support with balance tracking and approval flows."
                        ]}
                    />
                    
                    <FeatureGroup 
                        title="Payroll Management"
                        items={[
                            "Automated Payroll: Attendance-linked salary calculations with overtime, deductions, taxes, and bonuses.",
                            "Salary Slips & Certificates: Auto-generated, downloadable slips and income certificates.",
                            "Supplementary Bills: Seamlessly manage ad-hoc bonuses and reimbursements."
                        ]}
                    />
                    
                    <FeatureGroup 
                        title="Financial Integrations"
                        items={[
                            "Salary Register & Abstract: Full overview of payroll expenditures and financial summaries.",
                            "Bank Integration: One-click salary disbursement via connected bank APIs.",
                            "MIS Reports: Actionable payroll insights and HR analytics for informed decision-making."
                        ]}
                    />
                </div>

                {/* KEY BENEFITS */}
                <SectionTitle title="Key Benefits" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <BenefitCard 
                        title="Enhanced Accuracy"
                        description="Biometric security ensures data integrity and eliminates fraud."
                        color="from-teal-500 to-cyan-500"
                    />
                    <BenefitCard 
                        title="Improved Efficiency"
                        description="Reduces manual processing and HR overheads."
                        color="from-cyan-500 to-blue-500"
                    />
                    <BenefitCard 
                        title="Compliance Ready"
                        description="Meets local and global labor laws and auto-updates with changes."
                        color="from-blue-500 to-indigo-500"
                    />
                    <BenefitCard 
                        title="Employee Satisfaction"
                        description="Transparent systems improve trust and morale."
                        color="from-indigo-500 to-purple-500"
                    />
                    <BenefitCard 
                        title="Scalable"
                        description="Grows with your organization, from a few to thousands of employees."
                        color="from-purple-500 to-pink-500"
                    />
                </div>

                <div className="bg-teal-100 text-teal-800 p-6 text-sm rounded-lg mb-8 border border-teal-200">
                    <p className="font-semibold text-base mb-2">Empower Your HR Team</p>
                    <p>Mahntrix Technologies's Employee Management System is more than a digital attendance sheet—it's a powerful platform that empowers your HR team, enhances accountability, and simplifies workforce management. Whether you're running a startup or an enterprise, it's designed to scale with your goals and streamline your operations.</p>
                </div>

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
                            href="https://hrms-seven-wine.vercel.app/"
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
                                Get HRMS Solution
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your organization and we'll help you implement our HR Management System.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company/Organization Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="HRMS"
                                    />
                                    <select
                                        name="employeeCount"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    >
                                        <option value="">Select Number of Employees</option>
                                        <option value="1-50">1-50 employees</option>
                                        <option value="51-200">51-200 employees</option>
                                        <option value="201-500">201-500 employees</option>
                                        <option value="501-1000">501-1000 employees</option>
                                        <option value="1000+">1000+ employees</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your HR requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
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

function FeatureGroup({ title, items }) {
    return (
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                {title}
            </h4>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                        <svg className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BenefitCard({ title, description, color }) {
    return (
        <div className={`bg-gradient-to-br ${color} text-white rounded-lg p-5 shadow-md h-full`}>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-white/90">{description}</p>
        </div>
    );
}