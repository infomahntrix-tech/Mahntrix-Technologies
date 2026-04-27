"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX, FiZap, FiShield, FiUsers, FiDatabase, FiCloud, FiHeadphones, FiBarChart2 } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const PricingPlans = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            description: "Perfect for small businesses getting started with CRM",
            monthlyPrice: 2499,
            annualPrice: 1999,
            icon: <FiZap className="text-2xl" />,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
            borderColor: "border-blue-200",
            buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
            features: [
                { name: "Up to 5 Users", included: true },
                { name: "1,000 Contacts", included: true },
                { name: "Basic Analytics", included: true },
                { name: "Email Integration", included: true },
                { name: "Lead Management", included: true },
                { name: "Mobile App Access", included: true },
                { name: "API Access", included: false },
                { name: "Advanced Automation", included: false },
                { name: "Custom Dashboards", included: false },
                { name: "Priority Support", included: false },
            ],
        },
        {
            name: "Professional",
            description: "Ideal for growing sales teams",
            monthlyPrice: 4999,
            annualPrice: 3999,
            icon: <FiUsers className="text-2xl" />,
            color: "from-indigo-600 to-purple-600",
            bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
            borderColor: "border-indigo-200",
            buttonStyle: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg",
            popular: true,
            features: [
                { name: "Up to 20 Users", included: true },
                { name: "10,000 Contacts", included: true },
                { name: "Advanced Analytics", included: true },
                { name: "Email & Calendar Sync", included: true },
                { name: "Lead & Deal Tracking", included: true },
                { name: "Mobile App with Offline Mode", included: true },
                { name: "API Access", included: true },
                { name: "Basic Automation", included: true },
                { name: "Custom Dashboards", included: true },
                { name: "Standard Support", included: true },
            ],
        },
        {
            name: "Enterprise",
            description: "For large organizations with custom needs",
            monthlyPrice: 9999,
            annualPrice: 7999,
            icon: <FiDatabase className="text-2xl" />,
            color: "from-purple-600 to-pink-600",
            bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
            borderColor: "border-purple-200",
            buttonStyle: "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
            features: [
                { name: "Unlimited Users", included: true },
                { name: "Unlimited Contacts", included: true },
                { name: "Enterprise Analytics", included: true },
                { name: "Full Suite Integration", included: true },
                { name: "Advanced Lead Scoring", included: true },
                { name: "Custom Mobile Solutions", included: true },
                { name: "Full API Access", included: true },
                { name: "Advanced Automation", included: true },
                { name: "Custom Development", included: true },
                { name: "24/7 Priority Support", included: true },
            ],
        },
    ];

    const comparisonFeatures = [
        { name: "Contact Management", starter: true, professional: true, enterprise: true },
        { name: "Lead Scoring", starter: false, professional: true, enterprise: true },
        { name: "Email Automation", starter: true, professional: true, enterprise: true },
        { name: "Sales Forecasting", starter: false, professional: true, enterprise: true },
        { name: "Custom Reports", starter: false, professional: true, enterprise: true },
        { name: "Team Collaboration", starter: true, professional: true, enterprise: true },
        { name: "Third-party Integrations", starter: 3, professional: 50, enterprise: "Unlimited" },
        { name: "Data Storage", starter: "5GB", professional: "50GB", enterprise: "500GB" },
        { name: "SLA Guarantee", starter: "99%", professional: "99.5%", enterprise: "99.9%" },
        { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
    ];

    // Format price to Indian Rupee format
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN').format(price);
    };

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 mb-6"
                    >
                        <FiShield className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">Simple, Transparent Pricing</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Perfect Plan</span>
                        <br />
                        for Your Business
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
                    >
                        Scale your sales operations with our flexible pricing. No hidden fees, cancel anytime.
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-center gap-3"
                    >
                        <span className={`text-sm font-medium transition-colors duration-300 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-14 h-7 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-1 transition-all hover:shadow-lg"
                        >
                            <motion.div
                                className="w-5 h-5 bg-white rounded-full shadow-md"
                                animate={{ x: isAnnual ? 28 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium transition-colors duration-300 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                            Annual <span className="text-green-600 font-semibold ml-1">Save 20%</span>
                        </span>
                    </motion.div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`relative rounded-2xl ${plan.bgColor} border-2 ${plan.borderColor} p-6 sm:p-8 ${plan.popular ? 'lg:scale-105 shadow-xl' : 'shadow-lg'} hover:shadow-2xl transition-all duration-300`}
                        >
                            {plan.popular && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                                >
                                    Most Popular
                                </motion.div>
                            )}

                            {/* Plan Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                                >
                                    {plan.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                    <p className="text-sm text-gray-600">{plan.description}</p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                                        ₹{formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                                    </span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                {isAnnual && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-sm text-green-600 mt-1"
                                    >
                                        Billed annually (₹{formatPrice(plan.annualPrice * 12)}/year)
                                    </motion.p>
                                )}
                            </div>

                            {/* CTA Button */}
                            <Link href="#contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${plan.buttonStyle}`}
                                >
                                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                                </motion.button>
                            </Link>

                            {/* Features List */}
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-gray-900 mb-3">What's included:</p>
                                {plan.features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-2"
                                    >
                                        {feature.included ? (
                                            <FiCheck className="text-green-500 flex-shrink-0" />
                                        ) : (
                                            <FiX className="text-gray-400 flex-shrink-0" />
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                                            {feature.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;