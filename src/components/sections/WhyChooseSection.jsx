import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck, FiTarget, FiBrain, FiAlertCircle, FiTrendingUp, FiShield } = FiIcons;

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: FiCheck,
      title: 'Automated Compliance',
      description: 'Eliminate spreadsheets and manual errors with AI-powered automation'
    },
    {
      icon: FiTarget,
      title: 'Maximize Your Claims',
      description: 'Instantly match to the most valuable global programs available'
    },
    {
      icon: FiBrain,
      title: 'Document Intelligence',
      description: 'Upload once and let AI handle the rest with smart processing'
    },
    {
      icon: FiAlertCircle,
      title: 'Real-Time Alerts',
      description: 'Prevent errors before submission with intelligent monitoring'
    },
    {
      icon: FiTrendingUp,
      title: 'Turnaround Analytics',
      description: 'Track, forecast, and optimize incentives with detailed insights'
    },
    {
      icon: FiShield,
      title: 'Privacy & Security First',
      description: 'Enterprise-grade security with GDPR compliance. Your sensitive data is always protected.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">NuPitch?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="feature-card bg-navy/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-accent to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="h-1 bg-gradient-to-r from-blue-accent to-blue-500 rounded-full mt-6 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;