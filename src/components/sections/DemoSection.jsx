import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  useEffect(() => {
    // Create script element for TidyCal
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    
    // Append script to document body
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Book a <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule a personalized demo to see how NuPitch can transform your production financing process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-navy/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700"
        >
          <div className="tidycal-embed" data-path="nupitch/rebate"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;