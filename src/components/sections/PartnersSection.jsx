import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, threshold: 0.1});

  // Partner logos with proper URLs
  const partnerLogos = [
    {
      url: "https://raw.githubusercontent.com/raymongey/NuPitch-Rebate-Website-Development-7442/26402e47ae9e56f33dd493f64e0e554290c8ae72/public/NuPitch-Ideate-Ireland.png",
      alt: "Ideate Ireland"
    },
    {
      url: "https://raw.githubusercontent.com/raymongey/NuPitch-Rebate-Website-Development-7442/26402e47ae9e56f33dd493f64e0e554290c8ae72/public/NuPitch-The-Amp_Growth-Incubator.png",
      alt: "The Amp Growth Incubator"
    },
    {
      url: "https://raw.githubusercontent.com/raymongey/NuPitch-Rebate-Website-Development-7442/26402e47ae9e56f33dd493f64e0e554290c8ae72/public/NuPitch-Supported-by-techstartni.png",
      alt: "Supported by techstartni"
    },
    {
      url: "https://raw.githubusercontent.com/raymongey/NuPitch-Rebate-Website-Development-7442/26402e47ae9e56f33dd493f64e0e554290c8ae72/public/NuPitch-Supported-by-LAB.png",
      alt: "Supported by LAB"
    },
    {
      url: "https://raw.githubusercontent.com/raymongey/NuPitch-Rebate-Website-Development-7442/26402e47ae9e56f33dd493f64e0e554290c8ae72/public/NuPitch-Supported-by-Catalyst.png",
      alt: "Supported by Catalyst"
    },
    {
      url: "https://raw.githubusercontent.com/raymongey/NuPitch-Rebate-Website-Development-7442/58d02063c9a5cd6d0ccd48188e349821ff5a3e88/public/NuPitch-Invest-Northern-Ireland.png",
      alt: "Invest Northern Ireland"
    }
  ];

  return (
    <section className="py-20 bg-navy/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            NuPitch is proudly <span className="gradient-text">supported by</span>
          </h2>
        </motion.div>

        {/* Partner logos grid with responsive design */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 0.2}}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center"
        >
          {partnerLogos.map((logo, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.6, delay: 0.2 + (i * 0.1)}}
              className="flex items-center justify-center h-28 w-full"
            >
              <img 
                src={logo.url} 
                alt={logo.alt}
                className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;