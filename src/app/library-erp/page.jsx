// src/app/library-erp/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function LibraryERP() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Library ERP",
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
                    service: "Library ERP",
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
                    Mahntrix Technologies LibraryPro
                </h2> 
                <p className="text-xl text-gray-600 mb-6">Revolutionizing Library Management</p>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-amber-500 bg-amber-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies LibraryPro is a sophisticated library management system tailored for educational institutions and public libraries. It integrates digital and physical resources into one platform—making operations smoother, users more engaged, and discovery more meaningful.
                </div>

                {/* KEY FEATURES */}
                <SectionTitle title="Key Features of Mahntrix Technologies LibraryPro" />
                <p className="text-sm mb-6">
                    Comprehensive features that transform library operations and user experience.
                </p>
                
                <div className="space-y-4 mb-8">
                    <ModuleCard 
                        title="Catalog Management"
                        description="Advanced cataloging with Dewey Decimal and Library of Congress support for books, journals, e-books, and media."
                    />
                    <ModuleCard 
                        title="Acquisition & Cataloging"
                        description="End-to-end support for purchasing, receiving, and cataloging new materials efficiently."
                    />
                    <ModuleCard 
                        title="Circulation Management"
                        description="Automated check-in/out, renewals, fines, and flexible circulation rules per patron/item types."
                    />
                    <ModuleCard 
                        title="Search & Discovery"
                        description="Powerful search engine with filters, plus integration with academic databases for expanded discovery."
                    />
                    <ModuleCard 
                        title="Member Management"
                        description="Full member profiles, borrowing history, fine tracking, and built-in communication tools."
                    />
                    <ModuleCard 
                        title="Barcode & RFID Integration"
                        description="Increase efficiency and security with barcode scanning and RFID tech for circulation and inventory."
                    />
                    <ModuleCard 
                        title="Digital Resource Management"
                        description="Manage access to e-books, journals, and databases with DRM-compliant controls."
                    />
                    <ModuleCard 
                        title="Reporting & Analytics"
                        description="Generate insights into acquisitions, circulation, and patron activity for data-driven management."
                    />
                    <ModuleCard 
                        title="Event Management"
                        description="Promote and manage events with online registrations, reminders, and attendance tracking."
                    />
                    <ModuleCard 
                        title="Mobile Access"
                        description="Responsive interface enabling patrons to search, reserve, renew, and stay notified via mobile."
                    />
                </div>

                {/* BENEFITS */}
                <SectionTitle title="Benefits of Mahntrix Technologies LibraryPro" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <BenefitCard 
                        title="Enhanced User Experience"
                        description="Easy-to-use interface encourages greater user interaction and satisfaction."
                        color="from-amber-500 to-orange-500"
                    />
                    <BenefitCard 
                        title="Increased Operational Efficiency"
                        description="Frees up library staff by automating routine workflows."
                        color="from-yellow-500 to-amber-500"
                    />
                    <BenefitCard 
                        title="Scalability"
                        description="Grows with your library—adding features and resources without compromising performance."
                        color="from-orange-500 to-red-500"
                    />
                    <BenefitCard 
                        title="Cost-Effective"
                        description="Reduces manual efforts and improves ROI through automation and better resource allocation."
                        color="from-amber-600 to-yellow-600"
                    />
                </div>

                <div className="bg-amber-100 text-amber-800 p-6 text-sm rounded-lg mb-8 border border-amber-200">
                    <p className="font-semibold text-base mb-2">A Gateway to Knowledge</p>
                    <p>Mahntrix Technologies LibraryPro is more than just a management tool—it's a knowledge gateway, blending traditional library strengths with modern digital capabilities. Designed to empower educational growth and community learning, it ensures your library remains relevant and resourceful in the digital age.</p>
                </div>

                {/* Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Started with Library ERP →
                    </button>
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
                                Get Library ERP Solution
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your library and we'll help you implement our Library ERP system.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Library/Institution Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="Library ERP"
                                    />
                                    <select
                                        name="libraryType"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    >
                                        <option value="">Select Library Type</option>
                                        <option value="Academic Library">Academic Library</option>
                                        <option value="Public Library">Public Library</option>
                                        <option value="School Library">School Library</option>
                                        <option value="Special Library">Special Library</option>
                                        <option value="Digital Library">Digital Library</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
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

function ModuleCard({ title, description }) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}

function BenefitCard({ title, description, color }) {
    return (
        <div className={`bg-gradient-to-br ${color} text-white rounded-lg p-5 shadow-md`}>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-white/90">{description}</p>
        </div>
    );
}