import React, { useState, useEffect, useRef } from 'react'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiMessageCircle,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const contactInfo = [
    { 
      icon: FiMail, 
      label: 'Email', 
      value: 'belnaskevin04@gmail.com', 
      href: 'mailto:belnaskevin04@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      action: 'Send an email'
    },
    { 
      icon: FaWhatsapp, 
      label: 'WhatsApp', 
      value: '+63 992 483 7052', 
      href: 'https://wa.me/639924837052?text=Hi%20Kevin%2C%20I%27m%20interested%20in%20working%20with%20you!',
      color: 'from-green-500 to-emerald-500',
      action: 'Chat on WhatsApp'
    },
    { 
      icon: FiMapPin, 
      label: 'Location', 
      value: 'Cebu City, Philippines', 
      href: 'https://maps.google.com/?q=Cebu+City+Philippines',
      color: 'from-purple-500 to-pink-500',
      action: 'View on map'
    },
  ]

  const availabilityHours = [
    'Monday - Friday: 9:00 AM - 6:00 PM (PHT)',
    'Saturday: 10:00 AM - 4:00 PM (PHT)',
    'Sunday: Closed'
  ]

  // Format phone number for different regions
  const formatPhoneNumber = () => {
    // Returns formatted version for display
    return '+63 992 483 7052'
  }

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Modern background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Contact Info & Availability */}
          <div 
            className={`lg:col-span-1 space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === 'Location' || info.label === 'WhatsApp' ? '_blank' : undefined}
                rel={info.label === 'Location' || info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-6 
                         bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl 
                         shadow-lg hover:shadow-2xl transition-all duration-500
                         hover:-translate-y-1 border border-gray-100 
                         dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 
                              group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative p-2 sm:p-3 bg-gradient-to-r ${info.color} 
                              rounded-xl sm:rounded-2xl text-white shadow-lg
                              group-hover:scale-110 group-hover:rotate-3 
                              transition-all duration-500`}>
                  <info.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-white truncate">
                    {info.label === 'WhatsApp' ? formatPhoneNumber(info.value) : info.value}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {info.action}
                  </div>
                </div>

                {/* Decorative Arrow on Hover */}
                <FiSend className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 opacity-0 group-hover:opacity-100 
                                 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}

            {/* WhatsApp Quick Action Card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
                <h3 className="text-base sm:text-lg font-semibold">Quick WhatsApp Chat</h3>
              </div>
              <p className="text-xs sm:text-sm text-green-100 mb-4">
                Prefer instant messaging? Click below to start a WhatsApp conversation right away.
              </p>
              <a
                href="https://wa.me/639924837052?text=Hi%20Kevin%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 
                         px-4 py-2 rounded-xl text-sm font-medium
                         hover:bg-green-50 transition-all duration-300
                         transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaWhatsapp className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </div>

            {/* Availability Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 
                          shadow-lg border border-gray-100 dark:border-gray-700
                          hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                  <FiClock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Availability (PHT)
                </h3>
              </div>
              
              <div className="space-y-2">
                {availabilityHours.map((time, index) => (
                  <div key={index} className="flex items-center text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">{time}</span>
                  </div>
                ))}
              </div>

              {/* Timezone Info */}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Philippines Time (UTC+8)</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-gray-500">
                  <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white">
              <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 mb-2 opacity-90" />
              <p className="text-sm sm:text-base font-medium mb-1">Based in Cebu City, Philippines</p>
              <p className="text-xs sm:text-sm text-purple-100">
                Available for remote work worldwide • Open to international clients
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-gray-800 rounded-3xl sm:rounded-4xl 
                       p-5 sm:p-8 lg:p-10 shadow-2xl border border-gray-100 
                       dark:border-gray-700"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Send me a message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 
                                  text-sm sm:text-base font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 
                             border border-gray-200 dark:border-gray-700 
                             rounded-xl focus:outline-none focus:ring-2 
                             focus:ring-blue-500 text-gray-900 dark:text-white
                             transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 
                                  text-sm sm:text-base font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 
                             border border-gray-200 dark:border-gray-700 
                             rounded-xl focus:outline-none focus:ring-2 
                             focus:ring-blue-500 text-gray-900 dark:text-white
                             transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 dark:text-gray-300 
                                text-sm sm:text-base font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 
                           border border-gray-200 dark:border-gray-700 
                           rounded-xl focus:outline-none focus:ring-2 
                           focus:ring-blue-500 text-gray-900 dark:text-white
                           transition-all text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>
              
              {/* Message Field */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-gray-700 dark:text-gray-300 
                                text-sm sm:text-base font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 
                           border border-gray-200 dark:border-gray-700 
                           rounded-xl focus:outline-none focus:ring-2 
                           focus:ring-blue-500 text-gray-900 dark:text-white
                           transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r 
                         from-blue-600 to-cyan-600 hover:from-blue-700 
                         hover:to-cyan-700 text-white font-semibold 
                         rounded-xl sm:rounded-2xl transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed 
                         flex items-center justify-center gap-2 text-sm sm:text-base
                         transform hover:-translate-y-0.5 active:translate-y-0
                         hover:shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 sm:p-4 bg-gradient-to-r from-green-500 to-emerald-500 
                              text-white rounded-xl text-center text-sm sm:text-base
                              animate-fadeIn">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* WhatsApp Alternative */}
              <div className="mt-6 text-center">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Prefer instant messaging?
                </p>
                <a
                  href="https://wa.me/639924837052?text=Hi%20Kevin%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 
                           hover:text-green-700 dark:hover:text-green-300 
                           transition-colors duration-200 text-sm sm:text-base"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Chat on WhatsApp instead
                </a>
              </div>

              {/* Form Footer */}
              <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-500">
                I'll respond within 24 hours. Your information is kept private.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
                            linear-gradient(to bottom, #80808012 1px, transparent 1px);
          background-size: 24px 24px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Contact