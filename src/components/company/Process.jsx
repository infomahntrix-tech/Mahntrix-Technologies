'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const stepsRef = useRef([]);

  const processSteps = [
    {
      id: 1,
      title: 'Planning',
      icon: '📋',
      color: 'from-blue-600 to-blue-700',
      lightColor: 'from-blue-50 to-blue-100',
      description: 'We start by understanding your vision, goals, and requirements. Our team conducts thorough research and creates a detailed roadmap for your project success.',
      details: [
        'Requirements gathering',
        'Market research',
        'Technical architecture',
        'Project timeline',
        'Resource allocation'
      ],
      stats: { value: '2-3', label: 'Weeks Duration' }
    },
    {
      id: 2,
      title: 'Development',
      icon: '⚙️',
      color: 'from-purple-600 to-purple-700',
      lightColor: 'from-purple-50 to-purple-100',
      description: 'Our expert developers bring your project to life using cutting-edge technologies and best practices. We maintain transparent communication throughout.',
      details: [
        'Agile methodology',
        'Daily standups',
        'Code reviews',
        'Version control',
        'Continuous integration'
      ],
      stats: { value: '4-8', label: 'Weeks Duration' }
    },
    {
      id: 3,
      title: 'Review & Test',
      icon: '✓',
      color: 'from-green-600 to-green-700',
      lightColor: 'from-green-50 to-green-100',
      description: 'Rigorous testing ensures your product meets the highest quality standards. We conduct multiple rounds of reviews and refinements.',
      details: [
        'QA testing',
        'User acceptance',
        'Performance optimization',
        'Security audit',
        'Cross-browser testing'
      ],
      stats: { value: '1-2', label: 'Weeks Duration' }
    },
    {
      id: 4,
      title: 'Launch',
      icon: '▲',
      color: 'from-orange-600 to-orange-700',
      lightColor: 'from-orange-50 to-orange-100',
      description: 'Your project goes live with our full support. We ensure a smooth deployment and monitor everything closely during the launch phase.',
      details: [
        'Deployment setup',
        'DNS configuration',
        'Performance monitoring',
        'Launch checklist',
        'Emergency support'
      ],
      stats: { value: '1', label: 'Week Duration' }
    },
    {
      id: 5,
      title: 'Maintenance',
      icon: '⟳',
      color: 'from-teal-600 to-teal-700',
      lightColor: 'from-teal-50 to-teal-100',
      description: 'We provide ongoing support and updates to keep your project running smoothly. Regular maintenance ensures long-term success.',
      details: [
        '24/7 monitoring',
        'Regular updates',
        'Bug fixes',
        'Feature enhancements',
        'Performance reports'
      ],
      stats: { value: 'Ongoing', label: 'Support' }
    }
  ];

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !leftColumnRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const leftColumnRect = leftColumnRef.current.getBoundingClientRect();
      
      // Check if left column should be sticky
      setIsSticky(sectionRect.top <= 0 && sectionRect.bottom > leftColumnRect.height);
      
      // Update active step based on scroll position
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight / 2;
      
      stepsRef.current.forEach((step, index) => {
        if (step) {
          const stepRect = step.getBoundingClientRect();
          const stepAbsoluteTop = stepRect.top + window.scrollY;
          
          if (scrollPosition >= stepAbsoluteTop) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index) => {
    stepsRef.current[index]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="relative min-h-screen bg-white px-5"
    >
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Fixed */}
          <div 
            ref={leftColumnRef}
            className="relative lg:h-screen lg:sticky lg:top-0 flex items-center"
          >
            <div className="w-full py-12 lg:py-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-gray-800 rounded-full"
                  />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Our Process
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    A streamlined approach to transform your ideas into reality. 
                    We follow a proven methodology that ensures quality at every step.
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-semibold text-gray-600">
                      Step {activeStep + 1} of {processSteps.length}
                    </div>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gray-800"
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Quick Navigation */}
                  <div className="space-y-2">
                    {processSteps.map((step, index) => (
                      <motion.button
                        key={step.id}
                        onClick={() => scrollToStep(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-gray-50 border-l-4 border-gray-800 shadow-sm' 
                            : 'hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{step.icon}</span>
                          <div className="flex-1">
                            <div className={`font-semibold ${activeStep === index ? 'text-gray-900' : 'text-gray-700'}`}>
                              {step.title}
                            </div>
                            <div className="text-sm text-gray-500">{step.stats.value} {step.stats.label}</div>
                          </div>
                          {activeStep === index && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="w-1.5 h-1.5 bg-gray-800 rounded-full"
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                </motion.div>
            </div>
          </div>

          {/* Right Column - Scrollable */}
          <div className="relative py-12 lg:py-24">
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  ref={el => stepsRef.current[index] = el}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-gray-300 to-transparent" />
                  )}

                  <div className="relative">
                    {/* Step Number Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`absolute -left-5 -top-5 w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}
                    >
                      <span className="text-xl font-bold text-white">{index + 1}</span>
                    </motion.div>

                    {/* Main Card */}
                    <div className="ml-6 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl">{step.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className={`inline-block px-2 py-0.5 rounded bg-gradient-to-r ${step.lightColor} text-gray-700 text-xs font-medium mt-1`}>
                            {step.stats.value} {step.stats.label}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-gray-500">Progress</span>
                          <span className={`font-medium ${
                            index === activeStep ? 'text-gray-800' : 
                            index < activeStep ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {index === activeStep ? 'In Progress' : index < activeStep ? 'Completed' : 'Upcoming'}
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${step.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ 
                              width: index === activeStep ? '60%' : index < activeStep ? '100%' : '0%' 
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;