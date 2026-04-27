// src/app/ecommerce/page.jsx
'use client'

import Navbar from '@/components/company/Navbar'
import Footer from '@/components/company/Footer'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from '@/utils/emailService';
import { FiCheckCircle, FiX } from "react-icons/fi";
import Link from 'next/link';

export default function Ecommerce() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "E-Commerce",
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
                    service: "E-Commerce",
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
                    Mahntrix Technologies E-Commerce Platform
                </h2>
                <p className="text-xl text-gray-600 mb-6">Sell Smarter. Grow Faster.</p>

                {/* DESCRIPTION BOX */}
                <div className="border-l-4 border-orange-500 bg-orange-50 p-4 mb-8 text-sm">
                    Mahntrix Technologies's E-Commerce Platform is a complete online store solution that empowers businesses to create, manage, and scale their digital retail operations. From product catalog management to secure payments and order fulfillment, our platform provides everything you need to succeed in the digital marketplace.
                </div>

                {/* CORE FEATURES */}
                <SectionTitle title="Core E-Commerce Features" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <FeatureCard
                        icon="🛍️"
                        title="Product Management"
                        description="Easy product catalog management with variants, categories, and bulk import/export."
                    />
                    <FeatureCard
                        icon="🛒"
                        title="Shopping Cart"
                        description="Seamless shopping experience with persistent cart, wishlists, and abandoned cart recovery."
                    />
                    <FeatureCard
                        icon="💳"
                        title="Payment Gateway"
                        description="Multiple payment options including cards, UPI, net banking, and digital wallets."
                    />
                    <FeatureCard
                        icon="📦"
                        title="Order Management"
                        description="Complete order lifecycle management from placement to delivery and returns."
                    />
                    <FeatureCard
                        icon="🏷️"
                        title="Discounts & Coupons"
                        description="Flexible promotion engine for discounts, coupon codes, and special offers."
                    />
                    <FeatureCard
                        icon="📊"
                        title="Analytics Dashboard"
                        description="Real-time insights into sales, customer behavior, and store performance."
                    />
                </div>

                {/* ADVANCED FEATURES */}
                <SectionTitle title="Advanced Capabilities" />
                <div className="space-y-4 mb-8">
                    <ModuleCard
                        title="Multi-Vendor Marketplace"
                        description="Support for multiple sellers with individual dashboards and commission management."
                    />
                    <ModuleCard
                        title="Inventory Management"
                        description="Real-time stock tracking, low stock alerts, and automated reordering."
                    />
                    <ModuleCard
                        title="Shipping Integration"
                        description="Integration with major shipping carriers for real-time rates and label printing."
                    />
                    <ModuleCard
                        title="Customer Accounts"
                        description="Customer portals with order history, saved addresses, and loyalty programs."
                    />
                    <ModuleCard
                        title="SEO Optimization"
                        description="Built-in SEO tools for product pages, categories, and content marketing."
                    />
                    <ModuleCard
                        title="Mobile-First Design"
                        description="Fully responsive design optimized for mobile shopping experiences."
                    />
                </div>

                {/* MARKETING TOOLS */}
                <SectionTitle title="Marketing & Growth Tools" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <MarketingCard
                        title="Email Marketing"
                        description="Automated email campaigns for welcome series, abandoned carts, and promotions."
                    />
                    <MarketingCard
                        title="Social Commerce"
                        description="Sell directly on social media platforms with integrated shopping features."
                    />
                    <MarketingCard
                        title="Customer Reviews"
                        description="Collect and display product reviews to build trust and drive conversions."
                    />
                </div>

                {/* BENEFITS */}
                <SectionTitle title="Why Choose Mahntrix Technologies E-Commerce?" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <BenefitCard
                        title="Quick Setup"
                        description="Launch your online store in days with our intuitive setup process."
                        color="from-orange-500 to-red-500"
                    />
                    <BenefitCard
                        title="Scalable Platform"
                        description="Handle thousands of products and orders without performance issues."
                        color="from-red-500 to-pink-500"
                    />
                    <BenefitCard
                        title="Secure Transactions"
                        description="PCI DSS compliant with SSL encryption for secure payments."
                        color="from-pink-500 to-rose-500"
                    />
                    <BenefitCard
                        title="24/7 Support"
                        description="Round-the-clock technical support to keep your store running smoothly."
                        color="from-rose-500 to-orange-500"
                    />
                </div>

                <div className="bg-orange-100 text-orange-800 p-6 text-sm rounded-lg mb-8 border border-orange-200">
                    <p className="font-semibold text-base mb-2">Your Complete E-Commerce Solution</p>
                    <p>Mahntrix Technologies's E-Commerce Platform combines powerful features with ease of use, enabling businesses of all sizes to establish a strong online presence. Whether you're launching your first online store or scaling an existing operation, our platform provides the tools and flexibility you need to succeed in today's competitive digital marketplace.</p>
                </div>

                {/* Get Started Button */}
                <div className="flex flex-wrap justify-between items-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Launch Your Store →
                    </button>
                    {/* Project Demo */}
                    <div className="flex justify-center">
                        <Link
                            href="https://school-tan-eight.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
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
                                Start Your E-Commerce Journey
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tell us about your business and we'll help you launch your online store.
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
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Business Email *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Business/Brand Name *"
                                        className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="hidden"
                                        name="service"
                                        value="E-Commerce"
                                    />
                                    <select
                                        name="storeType"
                                        className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Select Store Type</option>
                                        <option value="New Store">New Online Store</option>
                                        <option value="Existing Migration">Migrate Existing Store</option>
                                        <option value="Multi-Vendor">Multi-Vendor Marketplace</option>
                                        <option value="B2B">B2B Wholesale</option>
                                    </select>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your products and requirements... *"
                                        rows="4"
                                        className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl disabled:opacity-50 hover:from-orange-700 hover:to-red-700 transition-all duration-300"
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

function MarketingCard({ title, description }) {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-5 border border-orange-200">
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