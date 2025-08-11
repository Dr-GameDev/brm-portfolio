'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  services: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: '📧',
    label: 'Email',
    value: 'hello@bababalo-majiyezi.com',
    link: 'mailto:hello@bababalo-majiyezi.com'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+27 123 456 789',
    link: 'tel:+27123456789'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Cape Town, South Africa',
    link: 'https://maps.google.com/?q=Cape+Town,+South+Africa'
  },
  {
    icon: '💼',
    label: 'Instagram',
    value: 'instagram.com/babalomajiyezi',
    link: 'https://instagram.com/babalomajiyezi'
  }
];

const serviceOptions = [
  'Web Development',
  'Network Engineering',
  'Graphic Design',
  'UI/UX Design',
  'System Architecture',
  'Consultation'
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    services: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you'd send the data to your backend API
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
        services: []
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 px-6 overflow-hidden opacity-0 transform translate-y-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-16 w-32 h-32 border border-green-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 border border-cyan-400/20 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rotate-45 animate-spin-slow"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you need a full-stack web application, network infrastructure design, or compelling graphic design,
                I'm here to help turn your vision into reality. Let's discuss your project requirements and explore how
                my multidisciplinary expertise can benefit your business.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">{info.label}</div>
                    <div className="text-white group-hover:text-green-400 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-green-400 hover:to-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    {platform.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Services Needed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all duration-300 ${formData.services.includes(service)
                          ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-black border-transparent'
                          : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600'
                        }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-300"
                  >
                    <option value="">Select Budget</option>
                    <option value="under-5k">Under R5,000</option>
                    <option value="5k-10k">R5,000 - R10,000</option>
                    <option value="10k-25k">R10,000 - R25,000</option>
                    <option value="25k-plus">R25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-300"
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold rounded-lg hover:from-green-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-400/10 border border-green-400/20 rounded-lg text-green-400">
                  ✅ Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-400/10 border border-red-400/20 rounded-lg text-red-400">
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;