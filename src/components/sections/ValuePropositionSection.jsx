import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {
  FiAlertTriangle,
  FiClock,
  FiTrendingUp,
  FiDollarSign,
  FiUploadCloud,
  FiShield,
  FiFileText,
  FiCheckCircle
} = FiIcons;

const ValuePropositionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  const painPoints = [
    {
      icon: FiAlertTriangle,
      title: 'Stop Leaving Money on the Table',
      text:
        'Every month you wait, you risk losing six or seven figures in unclaimed film incentive funding.'
    },
    {
      icon: FiClock,
      title: 'Manual Compliance Drains Time',
      text:
        'Manual processes cost your team time, money, and a competitive edge.'
    },
    {
      icon: FiTrendingUp,
      title: 'Instant Rebate Roadmap',
      text:
        'NuPitch turns your budget into a rebate roadmap, surfacing eligible spend and compliance risks in minutes—not months.'
    }
  ];

  const proofPoints = [
    {
      icon: FiUploadCloud,
      title: "No Workflow Changes",
      text:
        "Simply upload your finances securely. You're set—no training required."
    },
    {
      icon: FiShield,
      title: 'Audit-Ready Output',
      text:
        'Results are validated, formatted for your commission, and ready for audits immediately.'
    },
    {
      icon: FiCheckCircle,
      title: 'Risk-Free Pilot',
      text:
        "Try NuPitch on your next project with a single pilot. If it doesn't deliver measurable savings, you pay nothing."
    }
  ];

  return (
    <section className="py-16 bg-navy/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A simplified overview of how NuPitch helps productions unlock incentives faster with less effort.
          </p>
        </motion.div>

        {/* Pain / Value Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-navy/60 border border-gray-700 p-6 hover:bg-navy/70 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 text-blue-accent">
                  <SafeIcon icon={item.icon} className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Proof / How it Works Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {proofPoints.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-navy/60 border border-gray-700 p-6 hover:bg-navy/70 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 text-green-400">
                  <SafeIcon icon={item.icon} className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Subtle reassurance strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-xl border border-gray-700 bg-gradient-to-r from-blue-accent/10 to-transparent p-5"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-blue-accent" />
              <span className="font-medium">See eligible spend and risks in minutes</span>
            </div>
            <div className="hidden md:block h-5 w-px bg-gray-700" />
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <SafeIcon icon={FiFileText} className="w-5 h-5 text-blue-accent" />
              <span className="font-medium">Commission-formatted, audit-ready outputs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;


