import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TransformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-navy to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Transform Your <span className="gradient-text">Production Financing</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              NuPitch is the only <strong className="text-white">secure AI-powered platform</strong> built for studios, producers, and agencies who want to maximize their budgets by streamlining global rebate and tax incentive applications.
            </p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-blue-accent mt-6"
            >
              Join the growing community of media professionals who access funding up to <strong>50% quicker</strong> and recover <strong>40% more</strong> production value.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;