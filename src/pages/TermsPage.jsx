import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiX } = FiIcons;

const TermsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | NuPitch Technologies</title>
        <meta name="description" content="Review the legal terms governing the use of NuPitch's Rebate platform." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="min-h-screen bg-navy text-white pt-24 pb-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={handleBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-blue-accent hover:text-white transition-colors mb-8"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using NuPitch Technologies' Rebate platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily access and use the materials on NuPitch Technologies' platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• modify or copy the materials</li>
                <li>• use the materials for any commercial purpose or for any public display</li>
                <li>• attempt to reverse engineer any software contained on the platform</li>
                <li>• remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Service Usage</h2>
              <p className="text-gray-300 leading-relaxed">
                The Rebate platform is designed for legitimate business use by production companies, studios, and related entities seeking to apply for film and television incentives. Users must provide accurate information and comply with all applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Privacy and Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials on NuPitch Technologies' platform are provided on an 'as is' basis. NuPitch Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall NuPitch Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NuPitch Technologies' platform, even if NuPitch Technologies or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Revisions and Errata</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials appearing on NuPitch Technologies' platform could include technical, typographical, or photographic errors. NuPitch Technologies does not warrant that any of the materials on its platform are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the European Union and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <a href="mailto:info@usenupitch.com" className="text-blue-accent hover:underline">
                  info@usenupitch.com
                </a>
              </p>
            </div>

            <div className="text-sm text-gray-400 pt-8 border-t border-gray-700">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermsPage;