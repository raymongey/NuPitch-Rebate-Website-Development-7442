import React from 'react';
import {motion} from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ValuePropositionSection from '../components/sections/ValuePropositionSection';
import TransformSection from '../components/sections/TransformSection';
import PartnersSection from '../components/sections/PartnersSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import WhoUsesSection from '../components/sections/WhoUsesSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ResultsSection from '../components/sections/ResultsSection';
import CTASection from '../components/sections/CTASection';
import WaitlistSection from '../components/sections/WaitlistSection';
import FAQSection from '../components/sections/FAQSection';
import DemoSection from '../components/sections/DemoSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="overflow-hidden"
    >
      <HeroSection />
      <ValuePropositionSection />
      <TransformSection />
      <PartnersSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <WhoUsesSection />
      <FeaturesSection />
      <ResultsSection />
      <CTASection />
      <WaitlistSection />
      <FAQSection />
      <DemoSection />
      <AboutSection />
      <ContactSection />
    </motion.main>
  );
};

export default HomePage;