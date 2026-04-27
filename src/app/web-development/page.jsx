// src/app/web-development/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function WebDevelopment() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Web Development",
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
                    service: "Web Development",
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
                    Web Development Services
                </h2>
                <p className="text-xl text-gray-600 mb-6">Custom Solutions. Modern Technology. Exceptional Results.</p>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-8 text-sm">
                    Transform your digital presence with our comprehensive web development services. We specialize in creating custom websites, web applications, and progressive web apps using cutting-edge technologies. From simple business websites to complex enterprise solutions, we deliver high-performance, scalable, and user-friendly web experiences.
                </div>

                {/* SERVICES */}
                <SectionTitle title="Our Web Development Services" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <ServiceCard 
                        icon="🌐"
                        title="Custom Website Development"
                        description="Tailored websites designed to reflect your brand and meet your specific business requirements."
                        technologies={["HTML5", "CSS3", "JavaScript", "React", "Next.js"]}
                    />
                    <ServiceCard 
                        icon="📱"
                        title="Responsive Web Design"
                        description="Mobile-first designs that provide optimal viewing experience across all devices and screen sizes."
                        technologies={["Bootstrap", "Tailwind CSS", "Flexbox", "Grid"]}
                    />
                    <ServiceCard 
                        icon="🛒"
                        title="E-Commerce Development"
                        description="Full-featured online stores with secure payment integration and inventory management."
                        technologies={["Shopify", "WooCommerce", "Magento", "Custom Solutions"]}
                    />
                    <ServiceCard 
                        icon="⚡"
                        title="Progressive Web Apps (PWA)"
                        description="Web applications that offer native app-like experience with offline capabilities."
                        technologies={["Service Workers", "Web App Manifest", "IndexedDB"]}
                    />
                    <ServiceCard 
                        icon="🔧"
                        title="Web Application Development"
                        description="Complex web applications with robust backend systems and intuitive frontends."
                        technologies={["React", "Node.js", "Python", "PHP", "Laravel"]}
                    />
                    <ServiceCard 
                        icon="📊"
                        title="CMS Development"
                        description="Content management systems that give you full control over your website content."
                        technologies={["WordPress", "Custom CMS", "Headless CMS"]}
                    />
                </div>

                {/* TECHNOLOGIES */}
                <SectionTitle title="Technologies We Use" />
                <div className="mb-8">
                    <TechCategory 
                        title="Frontend Technologies"
                        items={["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Bootstrap"]}
                    />
                    <TechCategory 
                        title="Backend Technologies"
                        items={["Node.js", "Python", "PHP", "Laravel", "Java", ".NET", "Ruby on Rails"]}
                    />
                    <TechCategory 
                        title="Databases"
                        items={["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]}
                    />
                    <TechCategory 
                        title="DevOps & Cloud"
                        items={["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Vercel", "Netlify"]}
                    />
                </div>

                {/* PROCESS */}
                <SectionTitle title="Our Development Process" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    <ProcessStep 
                        number="01"
                        title="Discovery"
                        description="Understanding your requirements, goals, and target audience."
                    />
                    <ProcessStep 
                        number="02"
                        title="Planning"
                        description="Creating project roadmap, architecture, and technology stack."
                    />
                    <ProcessStep 
                        number="03"
                        title="Design"
                        description="Crafting user-friendly interfaces and engaging user experiences."
                    />
                    <ProcessStep 
                        number="04"
                        title="Development"
                        description="Building robust, scalable, and high-performance web solutions."
                    />
                    <ProcessStep 
                        number="05"
                        title="Launch"
                        description="Testing, deployment, and ongoing maintenance and support."
                    />
                </div>

                {/* BENEFITS */}
                <SectionTitle title="Why Choose Our Web Development Services?" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <BenefitCard 
                        title="Custom Solutions"
                        description="Every project is tailored to your specific business needs and goals."
                        color="from-blue-500 to-indigo-500"
                    />
                    <BenefitCard 
                        title="Modern Technology"
                        description="We use the latest technologies and best practices for optimal results."
                        color="from-indigo-500 to-purple-500"
                    />
                    <BenefitCard 
                        title="SEO Optimized"
                        description="Built with search engine optimization in mind from the ground up."
                        color="from-purple-500 to-pink-500"
                    />
                    <BenefitCard 
                        title="Performance Focused"
                        description="Fast-loading, efficient websites that provide excellent user experience."
                        color="from-blue-600 to-cyan-500"
                    />
                    <BenefitCard 
                        title="Scalable Architecture"
                        description="Solutions designed to grow with your business and handle increased traffic."
                        color="from-cyan-500 to-teal-500"
                    />
                    <BenefitCard 
                        title="Ongoing Support"
                        description="Continuous maintenance and updates to keep your website running smoothly."
                        color="from-teal-500 to-green-500"
                    />
                </div>

                <div className="bg-blue-100 text-blue-800 p-6 text-sm rounded-lg mb-8 border border-blue-200">
                    <p className="font-semibold text-base mb-2">Let's Build Something Amazing Together</p>
                    <p>Whether you need a simple business website, a complex web application, or anything in between, our team of experienced developers is ready to bring your vision to life. We combine technical expertise with creative problem-solving to deliver web solutions that drive results and exceed expectations.</p>
                </div>

                {/* Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Start Your Project →
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
                                Start Your Web Project
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your project and we'll help you build the perfect web solution.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="Web Development"
                                    />
                                    <select
                                        name="projectType"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Project Type</option>
                                        <option value="Business Website">Business Website</option>
                                        <option value="E-Commerce">E-Commerce Website</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="CMS">CMS Development</option>
                                        <option value="PWA">Progressive Web App</option>
                                        <option value="Custom">Custom Solution</option>
                                    </select>
                                    <select
                                        name="budget"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Budget Range</option>
                                        <option value="Under $5,000">Under $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                        <option value="$25,000+">$25,000+</option>
                                        <option value="Not Sure">Not Sure Yet</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Describe your project requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
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

function ServiceCard({ icon, title, description, technologies }) {
    return (
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

function TechCategory({ title, items }) {
    return (
        <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                    <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProcessStep({ number, title, description }) {
    return (
        <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                {number}
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
            <p className="text-xs text-gray-600">{description}</p>
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