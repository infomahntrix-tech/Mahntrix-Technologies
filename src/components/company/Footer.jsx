'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about', icon: '🏢' },
      { name: 'Career', href: '/career', icon: '💼', badge: 'We\'re hiring!' },
      { name: 'Press', href: '/press', icon: '📰' },
      { name: 'Blog', href: '#blog', icon: '✍️' }
    ],
    Services: [
      { name: "ERP's", href: '/school-erp', icon: '🔄' },
      { name: "CRM's", href: '/crm', icon: '☁️' },
      { name: 'AI & ML', href: '/hrms', icon: '🤖' },
      { name: 'Web Development', href: '/web-development', icon: '🔒' }
    ],
    Resources: [
      { name: 'Documentation', href: '/docs', icon: '📚' },
      { name: 'Help Center', href: '/help', icon: '❓' },
      { name: 'Community', href: '/community', icon: '👥' },
      { name: 'Webinars', href: '/webinars', icon: '🎥' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy', icon: '🔐' },
      { name: 'Terms of Service', href: '/terms', icon: '📜' },
      { name: 'Cookie Policy', href: '/cookies', icon: '🍪' },
      { name: 'GDPR', href: '/gdpr', icon: '🇪🇺' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/aman-qureshi-86bb15197/', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', href: 'https://www.linkedin.com/in/aman-qureshi-86bb15197/', color: 'hover:bg-sky-500' },
    { name: 'GitHub', icon: '💻', href: 'https://www.instagram.com/amanwebsolutions/', color: 'hover:bg-gray-700' },
    { name: 'YouTube', icon: '📺', href: 'https://www.instagram.com/amanwebsolutions/', color: 'hover:bg-red-600' },
    { name: 'Instagram', icon: '📸', href: 'https://www.instagram.com/amanwebsolutions/', color: 'hover:bg-pink-600' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6 sm:flex sm:items-start sm:text-left flex flex-col items-center justify-center"
          >
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex rounded-lg px-2 gap-2.5 group cursor-pointer flex-shrink-0 bg-white w-fit"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/images/mahntrixlogo.png"
                  alt="Mahntrix Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </motion.a>

            <p className="text-gray-300 leading-relaxed max-w-md mx-auto sm:mx-0 text-sm sm:text-base text-center sm:text-left">
              Transforming businesses through innovative technology solutions since 2022.
              We're committed to delivering excellence and driving digital innovation.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 pt-2 sm:pt-4">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                <span className="text-green-400 text-xs sm:text-sm">✓</span>
                <span className="text-xs text-gray-300 whitespace-nowrap">ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                <span className="text-blue-400 text-xs sm:text-sm">★</span>
                <span className="text-xs text-gray-300 whitespace-nowrap">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                <span className="text-purple-400 text-xs sm:text-sm">🏆</span>
                <span className="text-xs text-gray-300 whitespace-nowrap">Award Winning</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <span className="text-2xl sm:text-3xl">📧</span>
              <h3 className="text-lg sm:text-xl font-semibold">Stay Updated</h3>
            </div>
            <p className="text-gray-300 text-sm text-center sm:text-left mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 sm:px-6 py-2.5 bg-gradient-to-r from-[#0B3C8C] to-[#1DA1F2] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm sm:text-base"
                >
                  Subscribe
                </motion.button>
              </div>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center sm:text-left"
                >
                  ✓ Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-start gap-6 sm:gap-8 mb-10 sm:mb-12">
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-left sm:text-left"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {category}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                        {link.icon}
                      </span>
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className="text-xs px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ml-1 sm:ml-2 whitespace-nowrap">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col-reverse sm:flex-row lg:flex-row justify-between items-center gap-5 sm:gap-6">
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 order-2 sm:order-1">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 bg-white/5 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <span className="text-base sm:text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            <div className="text-center order-3 sm:order-2 px-2">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} Mahntrix Technologies. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                <a href="#" className="hover:text-white transition-colors">Privacy</a> |
                <a href="#" className="hover:text-white transition-colors ml-1"> Terms</a>
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ y: -3 }}
              className="order-1 sm:order-3 group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
                Back to Top
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors group-hover:-translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-l from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="sm:hidden absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="sm:hidden absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-cyan-600/15 to-blue-600/15 rounded-full blur-2xl pointer-events-none"></div>
      </div>
    </footer>
  );
};

export default Footer;