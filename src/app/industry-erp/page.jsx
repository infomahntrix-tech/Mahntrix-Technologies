// src/app/industry-erp/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function IndustryERP() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Industry ERP",
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
                    service: "Industry ERP",
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
                    ERP Solutions for Industries
                </h2>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-purple-500 bg-purple-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies's Enterprise Resource Planning (ERP) solutions are designed to meet the unique needs of small and medium-sized enterprises (SMEs) across various industries. These solutions help businesses automate their operations, improve efficiency, and gain better control over their processes.
                </div> 

                {/* KEY MODULES */}
                <SectionTitle title="Key Modules" />
                <p className="text-sm mb-6">
                    Comprehensive modules designed to streamline every aspect of your business operations.
                </p>
                
                <div className="space-y-6 mb-8">
                    <ModuleCard 
                        title="Material Management"
                        description="Efficiently manage the procurement, storage, and distribution of materials. Track inventory levels in real-time and optimize your supply chain to reduce costs."
                    />
                    <ModuleCard 
                        title="Invoicing"
                        description="Simplify the billing process with automated invoicing that ensures accuracy and timely payment. Customize invoices to align with your branding and client requirements."
                    />
                    <ModuleCard 
                        title="Stock Management"
                        description="Monitor stock levels, track inventory movements, and automate reordering processes to prevent stockouts or overstock situations."
                    />
                    <ModuleCard 
                        title="Employee Management and Payroll"
                        description="Comprehensive employee management including time tracking, payroll processing, and benefits. Integrates with biometric systems for accurate attendance."
                    />
                    <ModuleCard 
                        title="Accounting & Finance Management"
                        description="Robust tools for ledger management, cash flow analysis, and budget tracking to give you a clear picture of financial health."
                    />
                    <ModuleCard 
                        title="Time & Attendance System"
                        description="Tracks attendance via biometric or smart card systems, calculates working hours, and connects with payroll for salary processing."
                    />
                    <ModuleCard 
                        title="Web Site Development & Promotions"
                        description="Build your digital presence and engage your audience with integrated web development and promotion tools."
                    />
                    <ModuleCard 
                        title="SMS Management for Promotional Campaigns"
                        description="Run SMS campaigns, send reminders, and keep your clients informed with automated message scheduling."
                    />
                </div>

                {/* SPECIAL FEATURES */}
                <SectionTitle title="Special Features" />
                <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-6 text-sm">
                    Advanced features that set our ERP solution apart from the competition.
                </div>
                <List items={[
                    "Secured System: Ensures data protection through user authentication and role-based access control.",
                    "Customizable Reports: Generate reports in Excel, PDF, and other formats to support decision-making and performance review.",
                    "Project Management Integration: Manage ongoing projects, allocate resources, and track material status from production to delivery.",
                    "Graphical Reporting: Understand trends and performance better with visual tools like charts and graphs.",
                    "Web-Based Accessibility: Access the ERP system remotely with internet access. Integrated SMS and email keep communication seamless."
                ]} />

                {/* BENEFITS SUMMARY */}
                <SectionTitle title="Why Choose Our Industry ERP?" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <BenefitCard 
                        title="Automated Operations"
                        description="Streamline workflows and reduce manual intervention across all departments."
                        color="from-blue-500 to-cyan-500"
                    />
                    <BenefitCard 
                        title="Improved Efficiency"
                        description="Optimize resource utilization and boost productivity with integrated tools."
                        color="from-purple-500 to-pink-500"
                    />
                    <BenefitCard 
                        title="Better Control"
                        description="Gain complete visibility and control over your business processes."
                        color="from-green-500 to-emerald-500"
                    />
                    <BenefitCard 
                        title="Cost Reduction"
                        description="Minimize operational costs through automation and efficient management."
                        color="from-orange-500 to-red-500"
                    />
                </div>

                <div className="bg-purple-100 text-purple-700 p-4 text-sm rounded mb-8">
                    Transform your business operations with Mahntrix Technologies's Industry ERP solutions. Designed for SMEs, our system grows with your business and adapts to your unique requirements.
                </div>

                {/* Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Started with Industry ERP →
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
                                Get Industry ERP Solution
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your business and we'll help you implement our Industry ERP system.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company/Industry Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="Industry ERP"
                                    />
                                    <select
                                        name="industry"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Industry Type</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Distribution">Distribution</option>
                                        <option value="Services">Services</option>
                                        <option value="Construction">Construction</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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