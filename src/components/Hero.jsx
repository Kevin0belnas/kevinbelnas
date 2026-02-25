import React, { useState, useEffect, useRef } from 'react'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiCode, FiFacebook } from 'react-icons/fi'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for fade-in animation
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

  const skills = [
    'Reactjs + Vite', 'React Native', 'Nodejs', 'Express', 'JavaScript',
    'Tailwind CSS', 'MySQL', 'PostgreSQL',
  ]

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Modern background pattern - matching About section */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Gradient orbs - matching About section */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            } order-2 lg:order-1`}
          >
            {/* Hello Badge - redesigned */}
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 mb-4 sm:mb-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Freelancer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Building{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
                  digital experiences
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-4 bg-blue-100 dark:bg-blue-900/30 -z-0 rounded-lg"></span>
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Hi, I'm <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">Kevin Belnas</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Full-stack developer with 1 year of industry experience. I transform ideas into 
              elegant, high-performance web applications that users love.
            </p>

            {/* CTA Buttons - redesigned */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
              >
                View Projects
                <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FiMail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Contact Me</span>
                <span className="xs:hidden">Contact</span>
              </a>
            </div>

            {/* Social Links - redesigned */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <a 
                href="https://github.com/Kevin0belnas?tab=repositories/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FiGithub size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kevin-belnas-700042258/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a 
                href="https://www.facebook.com/kevinwebstudio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FiFacebook size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a 
                href="#" 
                className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:-translate-y-1"
                aria-label="Download Resume"
              >
                <FiDownload size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
            </div>

            {/* Stats - redesigned with cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-md">
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">1+</div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">4+</div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">1</div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Card */}
          <div 
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            } order-1 lg:order-2 mb-8 lg:mb-0`}
          >
            {/* Code Card - redesigned to match About section aesthetic */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-md lg:max-w-none mx-auto">
              {/* Card Header with gradient */}
              <div className="relative px-4 sm:px-6 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-cyan-600">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/30"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-white/80">developer.js</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full blur-2xl"></div>
              </div>
              
              {/* Code Content */}
              <div className="p-4 sm:p-6 lg:p-8 font-mono text-[10px] sm:text-xs lg:text-sm">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}
                  </p>
                  
                  <div className="pl-3 sm:pl-4 lg:pl-6 space-y-1 sm:space-y-2">
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">name</span>:{' '}
                      <span className="text-green-600 dark:text-green-400">'Kevin Belnas'</span>,
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">role</span>:{' '}
                      <span className="text-green-600 dark:text-green-400">'Full Stack Developer'</span>,
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">experience</span>:{' '}
                      <span className="text-orange-600 dark:text-orange-400">1+ Year</span>,
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">skills</span>: [
                    </p>
                    
                    {/* Skills List with hover effects */}
                    <div className="pl-3 sm:pl-4 lg:pl-6 space-y-0.5 sm:space-y-1.5">
                      {skills.map((skill, i) => (
                        <p 
                          key={skill} 
                          className="group/skill hover:translate-x-1 transition-transform duration-200"
                          style={{ animationDelay: `${i * 0.05}s` }}
                        >
                          <span className="text-green-600 dark:text-green-400 group-hover/skill:text-blue-500 transition-colors">
                            '{skill}'
                          </span>
                          {i < skills.length - 1 && ','}
                        </p>
                      ))}
                    </div>
                    <p>],</p>
                    
                    <p>
                      <span className="text-blue-600 dark:text-blue-400">available</span>:{' '}
                      <span className="text-green-600 dark:text-green-400">true</span>
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">{'}'}</p>
                </div>

                {/* Terminal Line with cursor */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-1 sm:gap-2 text-gray-500 dark:text-gray-400">
                  <FiCode className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                  <span className="text-green-600 dark:text-green-400 font-medium text-[10px] sm:text-xs">$</span>
                  <span className="text-[10px] sm:text-xs">npm run dev</span>
                  <span className="w-1 h-3 sm:w-1.5 sm:h-5 bg-blue-600 animate-blink ml-1"></span>
                </div>
              </div>
            </div>

            {/* Floating Badges - redesigned */}
            <div className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:-left-4 bg-white dark:bg-gray-800 px-3 sm:px-5 py-1.5 sm:py-3 rounded-lg sm:rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200">
              <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="text-base sm:text-lg">⚡</span> 
                <span className="hidden xs:inline">4+ completed projects</span>
                <span className="xs:hidden">4+ projects</span>
              </span>
            </div>
            
            <div className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-white dark:bg-gray-800 px-3 sm:px-5 py-1.5 sm:py-3 rounded-lg sm:rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float animation-delay-2000 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200">
              <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="text-base sm:text-lg">🚀</span> 
                <span className="hidden xs:inline">1 year experience</span>
                <span className="xs:hidden">1yr exp</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
                            linear-gradient(to bottom, #80808012 1px, transparent 1px);
          background-size: 24px 24px;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero