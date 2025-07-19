import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [counters, setCounters] = useState([0, 0, 0]);
  const targets = [40, 70, 75];
  const labels = [
    { value: '40%', description: 'of your production budget unlocked' },
    { value: '70%', description: 'reduction in compliance errors' },
    { value: '75%', description: 'faster approval cycles' }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = duration / steps;

      targets.forEach((target, index) => {
        let current = 0;
        const timer = setInterval(() => {
          current += target / steps;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, increment);
      });
    }
  }, [isInView]);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the impact NuPitch makes for production companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labels.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center bg-navy/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700"
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              >
                {counters[index]}%
              </motion.div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-accent/20 to-purple-500/20 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Success Stories
            </h3>
            <p className="text-gray-300 text-lg">
              "NuPitch transformed how we approach international incentives. What used to take months now happens in weeks, and we're recovering significantly more value from every production."
            </p>
            <div className="mt-4 text-blue-accent font-semibold">
              — Leading Production Company Executive
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;