import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMail, FiUser, FiBriefcase, FiMessageCircle, FiCheck } = FiIcons;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the email content
      const emailData = {
        to: 'info@usenupitch.com',
        subject: `New Contact Form Submission - ${formData.name}`,
        body: `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
        `.trim()
      };

      // For now, we'll use a simple fetch to a serverless function or email service
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to mailto as backup
      const emailBody = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Message: ${formData.message}
      `.trim();

      const mailtoLink = `mailto:info@usenupitch.com?subject=New Contact Form Submission - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/20 border border-green-500 rounded-2xl p-12"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Message sent successfully!</h2>
            <p className="text-gray-300 text-lg">
              Thank you for contacting us. We'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about NuPitch? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-navy/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Company Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-navy/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                  placeholder="your@company.com"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Company Name</label>
            <div className="relative">
              <SafeIcon icon={FiBriefcase} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-navy/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-white font-medium mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <SafeIcon icon={FiMessageCircle} className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-3 bg-navy/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none resize-none"
                placeholder="Tell us about your project and how we can help..."
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;