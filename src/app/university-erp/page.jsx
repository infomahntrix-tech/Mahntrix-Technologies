// src/app/university-erp/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function UniversityERP() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "University ERP",
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
                    service: "University ERP",
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
                    Mahntrix Technologies CampusPro – University & College ERP
                </h2>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies CampusPro is a comprehensive university and college management software designed to streamline operations, enhance communication, and improve administrative efficiency across higher education institutions. Our robust solution combines both web and mobile applications, ensuring that administrators, faculty, and students can access critical information and functionalities on-the-go, fostering a connected and efficient educational environment.
                </div>

                {/* ACADEMIC MANAGEMENT */}
                <SectionTitle title="Academic Management" />
                <p className="text-sm mb-6">
                    Comprehensive tools for managing courses, curricula, and schedules efficiently.
                </p>
                <List items={[
                    "Course and Curriculum Management: Create and update course curricula, including prerequisites, corequisites, and electives. Map academic pathways and ensure compliance with standards.",
                    "Schedule Management: Automate class schedules, room assignments, and faculty availability with conflict detection."
                ]} />

                {/* ADMISSION & ENROLLMENT */}
                <SectionTitle title="Admission & Enrollment" />
                <List items={[
                    "Application Processing: Online portal for application submission, tracking, document uploads, and real-time status updates.",
                    "Enrollment Analytics: Analyze admissions trends and demographics for strategic planning."
                ]} />

                {/* FINANCIAL MANAGEMENT */}
                <SectionTitle title="Financial Management" />
                <List items={[
                    "Fee and Billing Management: Automate billing, track payments, and manage scholarships and financial aid.",
                    "Budget Management: Departmental budget creation, tracking, and alerts for overruns."
                ]} />

                {/* STUDENT INFORMATION SYSTEM */}
                <SectionTitle title="Student Information System (SIS)" />
                <List items={[
                    "Comprehensive Student Profiles: Secure, centralized management of academic, personal, and activity records."
                ]} />

                {/* FACULTY MANAGEMENT */}
                <SectionTitle title="Faculty Management" />
                <List items={[
                    "Professional Development Tracking: Monitor workshops, training, and development milestones.",
                    "Performance Evaluation: Automate evaluations using feedback, peer reviews, and self-assessments."
                ]} />

                {/* LIBRARY MANAGEMENT */}
                <SectionTitle title="Library Management System" />
                <List items={[
                    "Digital Resource Management: Access to e-books, journals, and databases.",
                    "Automated Circulation Processes: Manage checkouts, renewals, returns, and reservations."
                ]} />

                {/* RESEARCH AND DEVELOPMENT */}
                <SectionTitle title="Research and Development" />
                <List items={[
                    "Project Tracking: Manage research progress, budgets, and outcomes.",
                    "Collaboration Tools: Support internal and external research collaboration."
                ]} />

                {/* MOBILE APP */}
                <SectionTitle title="Mobile App Features" />
                <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-6 text-sm">
                    Fully integrated mobile application providing real-time access for students, faculty, and administrators.
                </div>
                <List items={[
                    "Customizable Dashboards: Role-based personalized views for students, faculty, and administrators.",
                    "Instant Updates: Real-time notifications for changes, alerts, and news.",
                    "Online Fee Payment: Secure gateway supporting cards, transfers, and wallets.",
                    "Attendance Tracking: Geolocation-based verification for class attendance.",
                    "Assignment Grading: Mobile grading with audio/video feedback options.",
                    "Event Notifications: Calendar sync and reminders for academic events.",
                    "Feedback & Surveys: Collect real-time feedback via interactive polls."
                ]} />

                {/* INTEGRATED FEATURES */}
                <SectionTitle title="Integrated Features" />
                <List items={[
                    "Data Encryption: Ensure security for all data in transit and at rest.",
                    "Regulatory Compliance: Adherence to local and global data protection laws.",
                    "Modular Design: Customize and scale features as per institutional needs.",
                    "Advanced Analytics: Visual dashboards for academic, financial, and operational insights."
                ]} />

                <p className="text-sm mb-6">
                    By enhancing these features, Mahntrix Technologies CampusPro offers a robust, intuitive solution tailored to the complex needs of universities and colleges.
                </p>

                {/* WHY CHOOSE */}
                <SectionTitle title="Why Choose Mahntrix Technologies CampusPro?" />
                <p className="text-sm mb-4">
                    Mahntrix Technologies CampusPro is designed to meet the dynamic needs of modern universities and colleges, offering a blend of flexibility, power, and ease of use that is unmatched in the industry. Whether you're looking to improve administrative workflows, enhance student engagement, or streamline financial operations, Mahntrix Technologies CampusPro provides the tools you need to succeed.
                </p>
                <p className="text-sm mb-6">
                    With our dedicated support team and continuous updates, we ensure that your institution remains at the forefront of educational technology.
                </p>

                <div className="bg-indigo-100 text-indigo-700 p-4 text-sm rounded mb-8">
                    Opt for Mahntrix Technologies CampusPro and transform your university or college into a more productive, connected, and technologically advanced institution.
                </div>

                {/* Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Started with University ERP →
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
                                Get University ERP Solution
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your institution and we'll help you implement our University ERP system.
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
                                        placeholder="University/College Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="University ERP"
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