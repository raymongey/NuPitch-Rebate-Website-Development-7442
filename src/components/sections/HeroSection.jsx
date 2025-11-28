import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiPlay, FiUsers, FiDollarSign, FiFileText, FiTrendingUp} = FiIcons;

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  const scrollToDemo = () => {
    const element = document.querySelector('#demo');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  const floatingIcons = [
    {icon: FiDollarSign, delay: 0, x: '10%', y: '20%'},
    {icon: FiFileText, delay: 2, x: '80%', y: '30%'},
    {icon: FiTrendingUp, delay: 4, x: '15%', y: '70%'},
    {icon: FiUsers, delay: 1, x: '85%', y: '75%'},
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-pattern overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 text-blue-accent"
          style={{left: item.x, top: item.y}}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          <SafeIcon icon={item.icon} className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Section - Will appear above text in mobile view */}
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.3}}
            className="relative aspect-video w-full max-w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700 lg:order-2 order-1"
          >
            <div className="aspect-video relative w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/QCaQ2BrjEnU?si=SwbhcIPaFUZY95y_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Content Section - Will appear below video in mobile view */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-left lg:order-1 order-2"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              <span className="text-white">Unlock Global Film & TV <br />Incentives with </span>
              <span className="gradient-text">NuPitch Rebate</span>
            </h1>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Seamless Rebate Automation. Faster Funding. Zero Compliance Headaches.
            </motion.p>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <button
                onClick={scrollToWaitlist}
                className="btn-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2"
              >
                <span>Join Waitlist</span>
              </button>
              <button
                onClick={scrollToDemo}
                className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2"
              >
                <SafeIcon icon={FiPlay} className="w-5 h-5" />
                <span>Book a Demo</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.6}}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {value: '50%', label: 'Faster Funding'},
            {value: '40%', label: 'More Recovery'},
            {value: '100+', label: 'Countries Supported'},
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{scale: 1.05}}
              className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{y: [0, 10, 0]}}
        transition={{duration: 2, repeat: Infinity}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
