import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronDown, FiChevronUp } = FiIcons;

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Who can use NuPitch?',
      answer: 'NuPitch is designed for studios, producers, agencies, and any organization applying for global rebates or film and television incentives. Whether you\'re an independent producer or a major studio, our platform scales to meet your needs.'
    },
    {
      question: 'Do you support local legal and language compliance?',
      answer: 'Yes, we support major languages and continuously update rules across 120+ countries. Our platform is designed to handle the complex compliance requirements of different jurisdictions, ensuring your applications meet local standards.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. NuPitch is hosted in Europe with GDPR-compliant security and encryption. We implement industry-leading security measures to protect your sensitive production data and ensure complete confidentiality.'
    },
    {
      question: 'How long does it take to get started?',
      answer: 'Most users can get started within minutes. Our streamlined onboarding process guides you through account setup, and our dedicated support team is available to help you maximize the platform\'s potential from day one.'
    },
    {
      question: 'What types of incentives can I apply for?',
      answer: 'NuPitch supports applications for tax credits, rebates, grants, and other financial incentives across film, television, streaming, and digital media production. Our database includes programs from over 120 countries and regions.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about NuPitch
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-accent/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <SafeIcon 
                  icon={openIndex === index ? FiChevronUp : FiChevronDown} 
                  className="w-6 h-6 text-blue-accent flex-shrink-0" 
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;