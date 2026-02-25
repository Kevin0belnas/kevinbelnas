import React, { useState, useEffect, useRef } from 'react'
import { FiBriefcase, FiCode, FiFolder, FiUsers, FiArrowRight, FiAward, FiHeart } from 'react-icons/fi'

const About = () => {
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

  const stats = [
    { icon: FiBriefcase, label: 'Industry Experience', value: '1 Year', color: 'from-blue-500 to-cyan-500' },
    { icon: FiCode, label: 'Company Projects', value: '4', color: 'from-purple-500 to-pink-500' },
    { icon: FiFolder, label: 'Personal Projects', value: '2', color: 'from-green-500 to-emerald-500' },
    { icon: FiUsers, label: 'Happy Clients', value: '1', color: 'from-orange-500 to-red-500' },
  ]

  const whatIDo = [
    { title: 'Full-stack Development', description: 'End-to-end web applications with modern tech stack' },
    { title: 'UI/UX Design', description: 'Responsive and intuitive user interfaces' },
    { title: 'API Integration', description: 'Seamless third-party service integration' },
    { title: 'Performance Optimization', description: 'Fast, efficient, and scalable solutions' },
  ]

  const technologies = ['ReactJs + Vite','React Native','Nodejs', 'Express', 'JavaScript', 'Tailwind CSS', 'PostgreSQL','MySQL']

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Modern background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Gradient orbs - responsive sizing */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - with animation */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Passionate developer crafting digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Building the future,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  one line at a time
                </span>
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a full-stack developer with 1 year of industry experience, passionate about 
                  creating web applications that solve real-world problems. My journey in tech 
                  started with a simple curiosity that grew into a dedicated craft.
                </p>
                <p>
                  Working across 4 company projects and 2 personal initiatives, I've developed 
                  a keen eye for detail and a commitment to writing clean, maintainable code. 
                  Every project is an opportunity to learn something new and push boundaries.
                </p>
              </div>
            </div>

            {/* Tech Stack - responsive chips */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Technologies I work with
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium
                             text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 
                             dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 
                             transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Grid - responsive cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 
                           shadow-lg hover:shadow-xl transition-all duration-300
                           hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 
                                 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`}></div>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-1 sm:mb-2 lg:mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`} />
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - What I Do & Values */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* What I Do Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 lg:mb-8 flex items-center">
                <FiAward className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
                What I specialize in
              </h4>
              
              <div className="grid gap-4 sm:gap-6">
                {whatIDo.map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-50 
                             dark:hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 
                                  rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg
                                  group-hover:scale-110 transition-transform duration-200">
                      {index + 1}
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-white">
              <FiHeart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mb-3 sm:mb-4 opacity-90" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">My development philosophy</h4>
              <p className="text-blue-50 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                "I believe in continuous learning and building solutions that make a difference. 
                Every challenge is an opportunity to grow and create something meaningful."
              </p>
              <div className="flex items-center text-blue-50">
                <span className="text-xs sm:text-sm opacity-90">1 year of growth</span>
                <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </div>
            </div>

            {/* Quick Fact */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">Quick fact:</span>{' '}
                I've contributed to 4 company projects and built 2 personal projects in my first year as a developer.
              </p>
            </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
                            linear-gradient(to bottom, #80808012 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .stats-grid {
            gap: 0.75rem;
          }
        }

        /* Tablet-specific adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .stats-grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About