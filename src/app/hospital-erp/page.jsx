// src/app/hospital-erp/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function HospitalERP() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Hospital ERP",
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
                    service: "Hospital ERP",
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
                    Mahntrix Technologies MedPro
                </h2> 
                <p className="text-xl text-gray-600 mb-6">All-in-One Hospital Management Solution</p>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-red-500 bg-red-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies MedPro is a comprehensive hospital management system designed to streamline hospital operations, enhance patient care, and improve the management of health data across medical facilities. It integrates all departments into one secure, intuitive platform for staff, healthcare providers, and administrators.
                </div>

                {/* CORE FEATURES */}
                <SectionTitle title="Core Features of Mahntrix Technologies MedPro" />
                <p className="text-sm mb-6">
                    Comprehensive modules that transform hospital operations and patient care.
                </p>
                
                <div className="space-y-4 mb-8">
                    <ModuleCard 
                        title="Patient Information Management"
                        description="Centralized digital records including demographics, history, lab results, and treatments."
                    />
                    <ModuleCard 
                        title="Appointment Scheduling"
                        description="Automated scheduling for outpatients/inpatients with online booking, rescheduling, and cancellations."
                    />
                    <ModuleCard 
                        title="Electronic Medical Records (EMR)"
                        description="Regulatory-compliant EMR system for secure, shared patient data across departments."
                    />
                    <ModuleCard 
                        title="Billing and Invoicing"
                        description="Integrated billing with insurance processing and multiple payment method support."
                    />
                    <ModuleCard 
                        title="Pharmacy Management"
                        description="Medication inventory, prescription tracking, and seamless hospital system integration."
                    />
                    <ModuleCard 
                        title="Laboratory Information Management"
                        description="Automated lab processing and secure results delivery with device integration."
                    />
                    <ModuleCard 
                        title="Operation Theatre Management"
                        description="Efficient scheduling of surgeries, resources, and staff."
                    />
                    <ModuleCard 
                        title="Inventory Management"
                        description="Real-time stock tracking, auto-reordering, and low-stock alerts."
                    />
                    <ModuleCard 
                        title="Staff & HR Management"
                        description="From hiring to payroll, evaluations, and staff training management."
                    />
                    <ModuleCard 
                        title="Reporting & Analytics"
                        description="Insightful reports for performance, finance, and patient care improvement."
                    />
                    <ModuleCard 
                        title="Compliance & Security"
                        description="Data encryption and adherence to health regulations and privacy laws."
                    />
                </div>

                {/* MOBILE INTEGRATION */}
                <SectionTitle title="Mobile Integration" />
                <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-6 text-sm">
                    Seamless mobile access for staff and patients, keeping everyone connected and informed.
                </div>
                <List items={[
                    "Mobile App for Staff & Patients: Remote access to schedules, records, appointments, and messaging.",
                    "Real-Time Notifications: Instant alerts for appointments, admissions, discharges, and system updates."
                ]} />

                {/* BENEFITS */}
                <SectionTitle title="Benefits of Mahntrix Technologies MedPro" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <BenefitCard 
                        title="Improved Patient Care"
                        description="Timely and informed medical decisions with complete records."
                        color="from-red-500 to-pink-500"
                    />
                    <BenefitCard 
                        title="Operational Efficiency"
                        description="Streamlined processes, reduced admin load, better resource usage."
                        color="from-blue-500 to-cyan-500"
                    />
                    <BenefitCard 
                        title="Data-Driven Decisions"
                        description="Real-time analytics to guide clinical and administrative actions."
                        color="from-purple-500 to-indigo-500"
                    />
                    <BenefitCard 
                        title="Cost Management"
                        description="Controlled spending with efficient stock and finance tools."
                        color="from-green-500 to-emerald-500"
                    />
                    <BenefitCard 
                        title="Regulatory Compliance"
                        description="Meets healthcare standards, protecting you from legal risks and ensuring patient trust."
                        color="from-orange-500 to-yellow-500"
                    />
                </div>

                <div className="bg-red-100 text-red-700 p-6 text-sm rounded-lg mb-8 border border-red-200">
                    <p className="font-semibold text-base mb-2">Transform Your Hospital Operations</p>
                    <p>Mahntrix Technologies MedPro is more than software—it's a transformational tool unifying hospital departments into a smart, integrated, and patient-centered system. It empowers hospitals to modernize operations and deliver exceptional healthcare services efficiently and securely.</p>
                </div>

                {/* Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Started with Hospital ERP →
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
                                Get Hospital ERP Solution
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your healthcare facility and we'll help you implement our Hospital ERP system.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Hospital/Clinic Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="Hospital ERP"
                                    />
                                    <select
                                        name="facilityType"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    >
                                        <option value="">Select Facility Type</option>
                                        <option value="Multi-Specialty Hospital">Multi-Specialty Hospital</option>
                                        <option value="Clinic">Clinic</option>
                                        <option value="Nursing Home">Nursing Home</option>
                                        <option value="Diagnostic Center">Diagnostic Center</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-red-700 hover:to-pink-700 transition-all duration-300"
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