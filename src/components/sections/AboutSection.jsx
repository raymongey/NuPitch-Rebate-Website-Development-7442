import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">NuPitch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              NuPitch is created by industry veterans and technology experts, designed to be the backbone of international production compliance and financing.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Our team combines decades of experience in film production, legal compliance, and cutting-edge AI technology to solve the most complex challenges in incentive applications.
            </p>

            <div className="bg-gradient-to-r from-blue-accent/20 to-purple-500/20 p-6 rounded-2xl border border-gray-700">
              <p className="text-xl font-semibold text-white mb-4">
                <em>"Don't leave money on the table."</em>
              </p>
              <p className="text-gray-300">
                Join producers worldwide and take control of your incentives today.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-navy/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To democratize access to global film and television incentives through intelligent automation, making complex compliance simple and accessible for productions of all sizes.
              </p>
            </div>

            <div className="bg-navy/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where every production can easily access the funding they deserve, regardless of size or location, powered by intelligent technology and human expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;