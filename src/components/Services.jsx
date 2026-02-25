import React, { useState, useEffect, useRef } from 'react'
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiCloud, 
  FiShield, 
  FiTrendingUp,
  FiArrowRight
} from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Node.js, and Next.js.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Single Page Apps', 'E-commerce', 'Portfolios', 'Corporate Sites']
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description: 'Mobile-first designs that look great and function perfectly on all devices, from phones to desktops.',
    color: 'from-purple-500 to-pink-500',
    features: ['Mobile-First Approach', 'Cross-Browser', 'Touch-Friendly', 'Fast Loading']
  },
  {
    icon: FiDatabase,
    title: 'Backend Development',
    description: 'Scalable server-side solutions, RESTful APIs, and database design for robust applications.',
    color: 'from-green-500 to-emerald-500',
    features: ['REST APIs', 'Database Design', 'Authentication', 'Server Management']
  },
  {
    icon: FiCloud,
    title: 'Cloud Services',
    description: 'Deployment and management on BlueHost, Hostinger, and other cloud platforms with CI/CD setup.',
    color: 'from-orange-500 to-red-500',
    features: ['BlueHost', 'Hostinger', 'AWS', 'CI/CD Pipeline']
  },
  {
    icon: FiShield,
    title: 'Security',
    description: 'Implementation of best security practices, data protection, and regular security audits.',
    color: 'from-indigo-500 to-purple-500',
    features: ['SSL/TLS', 'Data Encryption', 'XSS Prevention', 'SQL Injection Protection']
  },
  {
    icon: FiTrendingUp,
    title: 'SEO Optimization',
    description: 'Optimize your site for better search engine rankings and increased organic traffic.',
    color: 'from-pink-500 to-rose-500',
    features: ['On-Page SEO', 'Performance Tuning', 'Meta Tags', 'Sitemap Generation']
  },
]

const Services = () => {
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

  return (
    <section 
      id="services"
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
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            My Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:-translate-y-2 border border-gray-100 
                       dark:border-gray-700 transform ${
                         isVisible 
                           ? 'translate-y-0 opacity-100' 
                           : 'translate-y-10 opacity-0'
                       }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionProperty: 'all',
                transitionDuration: '700ms'
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                            group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-transparent to-gray-100 dark:to-gray-700 opacity-0 group-hover:opacity-100 rounded-tr-2xl sm:rounded-tr-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl 
                            text-white mb-3 sm:mb-4 transform group-hover:scale-110 group-hover:rotate-3 
                            transition-all duration-500 shadow-lg`}>
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Learn More Link */}
              <a 
                href="#contact" 
                className={`inline-flex items-center text-xs sm:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color} 
                         group-hover:gap-2 transition-all duration-300`}
              >
                Learn More 
                <FiArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
              </a>

              {/* Mobile-specific touch feedback */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-transparent to-gray-50 dark:to-gray-700 opacity-0 active:opacity-10 sm:hidden pointer-events-none transition-opacity duration-200"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
            Looking for a custom solution or have a specific project in mind?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 
                     hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 
                     rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium transition-all 
                     duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform 
                     hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            Let's Work Together
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
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
        
        /* Mobile-specific styles */
        @media (max-width: 640px) {
          .services-grid {
            gap: 1rem;
          }
        }
        
        /* Tablet-specific adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .services-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services