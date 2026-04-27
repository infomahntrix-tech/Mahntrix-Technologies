// src/app/crm/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function CRM() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "CRM",
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
                    service: "CRM",
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
                    Mahntrix Technologies CRM
                </h2> 
                <p className="text-xl text-gray-600 mb-6">Build Stronger Relationships. Drive Growth.</p>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies CRM is a powerful customer relationship management platform designed to help businesses manage interactions, streamline sales processes, and deliver exceptional customer experiences. From lead tracking to customer retention, our solution provides the tools you need to grow your business.
                </div>

                {/* CORE FEATURES */}
                <SectionTitle title="Core Features" />
                <p className="text-sm mb-6">
                    Everything you need to manage customer relationships effectively.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <FeatureCard 
                        icon="👥"
                        title="Contact Management"
                        description="Centralized database for all customer information, interaction history, and communication preferences."
                    />
                    <FeatureCard 
                        icon="📊"
                        title="Lead Management"
                        description="Track leads from initial contact through conversion with automated follow-ups and scoring."
                    />
                    <FeatureCard 
                        icon="💰"
                        title="Sales Pipeline"
                        description="Visual pipeline management to track deals, forecast revenue, and optimize sales processes."
                    />
                    <FeatureCard 
                        icon="📧"
                        title="Email Integration"
                        description="Seamless email integration with tracking, templates, and automated campaigns."
                    />
                    <FeatureCard 
                        icon="📈"
                        title="Analytics & Reporting"
                        description="Comprehensive dashboards and reports to measure performance and identify opportunities."
                    />
                    <FeatureCard 
                        icon="🤖"
                        title="Marketing Automation"
                        description="Automated email campaigns, lead nurturing, and customer engagement workflows."
                    />
                    <FeatureCard 
                        icon="📱"
                        title="Mobile CRM"
                        description="Access customer data, update records, and manage tasks from anywhere with mobile apps."
                    />
                    <FeatureCard 
                        icon="🔗"
                        title="Integration Hub"
                        description="Connect with popular tools like email, calendar, accounting software, and more."
                    />
                </div>

                {/* ADVANCED CAPABILITIES */}
                <SectionTitle title="Advanced Capabilities" />
                <div className="space-y-4 mb-8">
                    <ModuleCard 
                        title="Customer Segmentation"
                        description="Group customers based on behavior, demographics, and purchase history for targeted marketing."
                    />
                    <ModuleCard 
                        title="Task & Activity Management"
                        description="Schedule follow-ups, set reminders, and track all customer-related activities."
                    />
                    <ModuleCard 
                        title="Document Management"
                        description="Store and manage contracts, proposals, and customer documents securely."
                    />
                    <ModuleCard 
                        title="Customer Portal"
                        description="Self-service portal for customers to view history, make payments, and submit requests."
                    />
                </div>

                {/* BENEFITS */}
                <SectionTitle title="Why Choose Mahntrix Technologies CRM?" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <BenefitCard 
                        title="Increased Sales"
                        description="Convert more leads and close deals faster with streamlined processes."
                        color="from-green-500 to-emerald-500"
                    />
                    <BenefitCard 
                        title="Better Customer Service"
                        description="Provide personalized experiences with complete customer history at your fingertips."
                        color="from-emerald-500 to-teal-500"
                    />
                    <BenefitCard 
                        title="Improved Team Collaboration"
                        description="Share information and coordinate efforts across sales, marketing, and support teams."
                        color="from-teal-500 to-cyan-500"
                    />
                    <BenefitCard 
                        title="Data-Driven Decisions"
                        description="Make informed business decisions with real-time insights and analytics."
                        color="from-cyan-500 to-blue-500"
                    />
                    <BenefitCard 
                        title="Higher ROI"
                        description="Maximize marketing spend and sales efficiency with automated workflows."
                        color="from-blue-500 to-indigo-500"
                    />
                    <BenefitCard 
                        title="Scalable Growth"
                        description="Grow your business without outgrowing your CRM system."
                        color="from-indigo-500 to-purple-500"
                    />
                </div>

                <div className="bg-green-100 text-green-800 p-6 text-sm rounded-lg mb-8 border border-green-200">
                    <p className="font-semibold text-base mb-2">Transform Your Customer Relationships</p>
                    <p>Mahntrix Technologies CRM is more than just a database—it's a comprehensive platform that helps you understand your customers better, engage them more effectively, and build lasting relationships that drive business growth. Whether you're a small business or a large enterprise, our CRM adapts to your needs.</p>
                </div>

                {/* Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Started with CRM →
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
                                Get CRM Solution
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your business and we'll help you implement our CRM system.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="CRM"
                                    />
                                    <select
                                        name="teamSize"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    >
                                        <option value="">Select Team Size</option>
                                        <option value="1-10">1-10 users</option>
                                        <option value="11-50">11-50 users</option>
                                        <option value="51-200">51-200 users</option>
                                        <option value="200+">200+ users</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
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

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
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
        <div className={`bg-gradient-to-br ${color} text-white rounded-lg p-5 shadow-md h-full`}>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-white/90">{description}</p>
        </div>
    );
}