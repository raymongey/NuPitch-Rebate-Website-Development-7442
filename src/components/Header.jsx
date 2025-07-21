import React, {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiMenu, FiX} = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Correct menu order as requested
  const menuItems = [
    {name: 'How It Works', href: '#how-it-works'},
    {name: 'Who Uses It', href: '#who-uses'},
    {name: 'Features', href: '#features'},
    {name: 'FAQs', href: '#faqs'},
    {name: 'About', href: '#about'},
    {name: 'Contact', href: '#contact'},
  ];

  const scrollToSection = (href) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Handle navigation and scrolling
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({behavior: 'smooth'});
        }, 100);
      }
    }
  };

  const handleLogoClick = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // If not on homepage, navigate to homepage
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, 100);
    } else {
      // If already on homepage, scroll to top
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="https://github.com/raymongey/NuPitch-Rebate-Website-Development-7442/blob/a5301c25e15c169611beca5b90b7d228dcd329f0/public/nupitch_logo_ol-Centered_001.png?raw=true"
              alt="NuPitch"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-white">NuPitch</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#waitlist')}
              className="btn-primary px-6 py-2 rounded-full font-semibold text-white"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{height: isMenuOpen ? 'auto' : 0}}
          className="md:hidden overflow-hidden mobile-nav"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#waitlist')}
              className="btn-primary w-full px-3 py-2 rounded-lg font-semibold text-white mt-4"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;