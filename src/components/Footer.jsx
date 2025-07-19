import React from 'react';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiLinkedin, FiMail, FiInstagram, FiTwitter, FiFacebook} = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://github.com/raymongey/NuPitch-Rebate-Website-Development-7442/blob/a5301c25e15c169611beca5b90b7d228dcd329f0/public/nupitch_logo_ol-Centered_001.png?raw=true"
                alt="NuPitch"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">NuPitch Technologies</span>
            </div>
            <p className="text-gray-400 text-lg mb-4">
              Powering Production. Enabling Incentives.
            </p>
            <p className="text-gray-500 text-sm max-w-md">
              Don't leave money on the table. Join producers worldwide and take control of your incentives today.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@usenupitch.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span>info@usenupitch.com</span>
              </a>
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/nupitch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/usenupitch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiInstagram} className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/usenupitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/usenupitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiFacebook} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 NuPitch Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;