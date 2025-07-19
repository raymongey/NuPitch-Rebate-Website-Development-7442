import React, {useState, useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiMail, FiUser, FiBriefcase, FiGlobe, FiLink, FiMessageCircle, FiCheck} = FiIcons;

const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, threshold: 0.1});
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    website: '',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.consent) {
      setError('Please fill in all required fields and agree to be contacted.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://formspree.io/f/mjkogkle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          website: formData.website,
          message: formData.message,
          consent: formData.consent ? 'Yes' : 'No',
          _subject: `New Waitlist Signup - ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          country: '',
          website: '',
          message: '',
          consent: false
        });
      } else {
        throw new Error('Failed to submit waitlist request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit your waitlist request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            className="bg-green-500/20 border border-green-500 rounded-2xl p-12"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thanks! We'll be in touch shortly.</h2>
            <p className="text-gray-300 text-lg">
              Your waitlist signup has been sent to our team. We'll reach out to you soon with more information about NuPitch.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the <span className="gradient-text">Waitlist</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be among the first to access NuPitch and transform your production financing
          </p>
        </motion.div>

        <motion.form
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 0.2}}
          action="https://formspree.io/f/mjkogkle"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-navy/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200">
              {error}
            </div>
          )}
          
          {/* Hidden fields for Formspree */}
          <input type="hidden" name="_subject" value={`New Waitlist Signup - ${formData.name}`} />
          <input type="hidden" name="_replyto" value={formData.email} />
          <input type="hidden" name="form_type" value="waitlist" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <SafeIcon
                  icon={FiUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Company</label>
              <div className="relative">
                <SafeIcon
                  icon={FiBriefcase}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                  placeholder="Company name"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <SafeIcon
                  icon={FiMail}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Country</label>
              <div className="relative">
                <SafeIcon
                  icon={FiGlobe}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                  placeholder="Your country"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Website</label>
            <div className="relative">
              <SafeIcon
                icon={FiLink}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none"
                placeholder="https://your-website.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Message / Questions</label>
            <div className="relative">
              <SafeIcon
                icon={FiMessageCircle}
                className="absolute left-3 top-4 text-gray-400 w-5 h-5"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-accent focus:outline-none resize-none"
                placeholder="Tell us about your needs or ask any questions..."
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 text-blue-accent bg-black/50 border border-gray-600 rounded focus:ring-blue-accent focus:ring-2"
              />
              <span className="text-gray-300 text-sm leading-relaxed">
                I agree to be contacted by NuPitch Technologies regarding their services and updates.
                <span className="text-red-400">*</span>
              </span>
            </label>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className="w-full btn-primary py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default WaitlistSection;