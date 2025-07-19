import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft } = FiIcons;

const PrivacyPage = () => {
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
        <title>Privacy Policy | NuPitch Technologies</title>
        <meta name="description" content="Learn how NuPitch handles your data with full GDPR compliance and transparency." />
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

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Data Controller</h2>
              <p className="text-gray-300 leading-relaxed">
                NuPitch Technologies ("we," "our," or "us") is the data controller responsible for your personal information. We are committed to protecting and respecting your privacy in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Sign up for our waitlist or request information</li>
                <li>• Contact us through our website or email</li>
                <li>• Use our Rebate platform services</li>
                <li>• Subscribe to our communications</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                This may include your name, email address, company information, phone number, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send you technical notices, updates, and support messages</li>
                <li>• Respond to your comments, questions, and customer service requests</li>
                <li>• Communicate with you about products, services, and events</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Data Hosting and Security</h2>
              <p className="text-gray-300 leading-relaxed">
                Your data is hosted in Europe with GDPR-compliant security measures. We implement appropriate technical and organizational safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using industry-standard protocols.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or serving our users, provided they agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights Under GDPR</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Right to access your personal data</li>
                <li>• Right to rectification of inaccurate data</li>
                <li>• Right to erasure ("right to be forgotten")</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
                <li>• Right to withdraw consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information only for as long as necessary to provide you with our services and as described in this Privacy Policy. We will retain and use your information to comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our platform and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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

export default PrivacyPage;