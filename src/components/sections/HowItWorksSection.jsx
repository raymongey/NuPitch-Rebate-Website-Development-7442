import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUserPlus, FiUpload, FiTarget, FiBarChart } = FiIcons;

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const steps = [
    {
      icon: FiUserPlus,
      title: 'Sign Up & Create Your Project',
      description: 'Get started in minutes with our streamlined onboarding process'
    },
    {
      icon: FiUpload,
      title: 'Upload Budgets & Documents',
      description: 'Securely upload your production materials with intelligent processing'
    },
    {
      icon: FiTarget,
      title: 'Match & Apply',
      description: 'AI automatically matches you with the best global incentive programs'
    },
    {
      icon: FiBarChart,
      title: 'Track Progress',
      description: 'Monitor applications in real-time with detailed analytics and alerts'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four simple steps to unlock global film and TV incentives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-accent text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-accent to-blue-500 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={step.icon} className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}

          {/* Connector Lines - positioned between steps */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={`line-${index}`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="hidden lg:block absolute top-10 h-0.5 bg-gradient-to-r from-blue-accent to-blue-500 origin-left"
              style={{
                left: `${25 + (index * 25)}%`,
                width: '25%',
                transform: 'translateX(-50%)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;