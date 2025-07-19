import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck, FiX } = FiIcons;

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const features = [
    {
      feature: 'Automated Rebate Submission',
      benefit: 'No more manual forms or errors'
    },
    {
      feature: 'Dynamic Incentive Search',
      benefit: 'Find the best funding, anywhere'
    },
    {
      feature: 'Multi-Jurisdiction Support',
      benefit: 'One platform for all countries'
    },
    {
      feature: 'Secure & Compliant',
      benefit: 'Robust privacy and data protection'
    },
    {
      feature: 'Modular Add-Ons',
      benefit: 'Sustainability, legal, and tax modules'
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Features <span className="gradient-text">Table</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to streamline your incentive applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-navy/50 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-accent/20 border-b border-gray-700">
                    <th className="text-left p-6 text-lg font-semibold text-white">Feature</th>
                    <th className="text-left p-6 text-lg font-semibold text-white">Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="border-b border-gray-700 hover:bg-blue-accent/10 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-400" />
                          <span className="text-white font-medium">{item.feature}</span>
                        </div>
                      </td>
                      <td className="p-6 text-gray-300">
                        {item.benefit}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;