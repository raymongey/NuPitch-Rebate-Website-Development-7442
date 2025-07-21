import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiVideo, FiMonitor, FiBookOpen, FiMapPin} = FiIcons;

const WhoUsesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, threshold: 0.1});

  const users = [
    {
      icon: FiVideo,
      title: 'Production Companies',
      description: 'Independent and major production houses maximizing their budgets'
    },
    {
      icon: FiMonitor,
      title: 'Studios & Streamers',
      description: 'Global entertainment companies streamlining incentive applications'
    },
    {
      icon: FiBookOpen,
      title: 'Legal, Tax & Audit Firms',
      description: 'Professional services firms ensuring compliance and accuracy'
    },
    {
      icon: FiMapPin,
      title: 'Film Commissions',
      description: 'Regional Agencies and International Film Commissions promoting local production incentives'
    }
  ];

  return (
    <section id="who-uses" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Who Uses <span className="gradient-text">NuPitch?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry professionals worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, scale: 0.9}}
              animate={isInView ? {opacity: 1, scale: 1} : {}}
              transition={{duration: 0.8, delay: index * 0.1}}
              whileHover={{scale: 1.05, y: -5}}
              className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-accent to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={user.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {user.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {user.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 0.5}}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300">
            Join the hundreds of industry professionals we've spoken with—who are actively shaping the future of NuPitch Rebate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoUsesSection;