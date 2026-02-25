import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiUser, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust for navbar height
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', id: 'hero', icon: FiHome },
    { name: 'About', id: 'about', icon: FiUser },
    { name: 'Services', id: 'services', icon: FiBriefcase },
    { name: 'Projects', id: 'projects', icon: FiFolder },
    { name: 'Contact', id: 'contact', icon: FiMail },
  ]

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Reset to system preference
  const resetToSystemPreference = () => {
    localStorage.removeItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(systemPrefersDark)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-3 sm:py-4'
    }`}>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Brand */}
          <div 
            className="flex items-center gap-2 sm:gap-3 lg:gap-4 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <img
                src="/images/logo1.jpg"
                alt="Kevin Belnas Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full object-cover 
                         border-2 border-transparent group-hover:border-blue-500 
                         transition-all duration-300 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 
                            group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            <span
              className="text-lg sm:text-xl lg:text-2xl font-bold 
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400
                       group-hover:from-blue-700 group-hover:to-cyan-700 
                       transition-all duration-300"
            >
              Kevin Belnas
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base 
                         font-medium transition-all duration-300 group
                         ${activeSection === link.id
                           ? 'text-blue-600 dark:text-blue-400' 
                           : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                         }`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 
                                 rounded-lg animate-fadeIn"></span>
                )}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                               w-0 group-hover:w-full h-0.5 bg-gradient-to-r 
                               from-blue-600 to-cyan-600 transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 
                       text-gray-700 dark:text-gray-300 
                       hover:bg-blue-100 dark:hover:bg-gray-700 
                       hover:text-blue-600 dark:hover:text-blue-400
                       transition-all duration-300 transform hover:scale-110
                       border border-gray-200 dark:border-gray-700
                       shadow-sm hover:shadow-md"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={18} className="sm:w-5 sm:h-5" /> : <FiMoon size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 
                       text-gray-700 dark:text-gray-300
                       hover:bg-blue-100 dark:hover:bg-gray-700 
                       hover:text-blue-600 dark:hover:text-blue-400
                       transition-all duration-300 border border-gray-200 
                       dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <FiMoon size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300
                       ${isOpen 
                         ? 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' 
                         : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                       } hover:bg-blue-100 dark:hover:bg-gray-700 
                       hover:text-blue-600 dark:hover:text-blue-400
                       border border-gray-200 dark:border-gray-700`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={18} className="sm:w-5 sm:h-5" /> : <FiMenu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 sm:py-4 border-t border-gray-200 dark:border-gray-700 
                        bg-white/95 dark:bg-gray-900/95 backdrop-blur-md 
                        rounded-2xl shadow-xl">
            <div className="space-y-1 px-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-xl transition-all duration-300 group
                           ${activeSection === link.id
                             ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                           }`}
                >
                  <link.icon className={`w-4 h-4 sm:w-5 sm:h-5 mr-3 transition-all duration-300
                                      ${activeSection === link.id 
                                        ? 'text-blue-600 dark:text-blue-400' 
                                        : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                                      }`} />
                  <span className="text-sm sm:text-base font-medium">{link.name}</span>
                  {activeSection === link.id && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Reset to system preference option */}
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 px-2">
              <button
                onClick={resetToSystemPreference}
                className="flex items-center w-full px-3 sm:px-4 py-2.5 sm:py-3
                         text-sm text-gray-500 dark:text-gray-400 
                         hover:text-blue-600 dark:hover:text-blue-400
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         rounded-xl transition-all duration-300"
              >
                <FiSun className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                <span>Use system preference</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar (optional) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300"
          style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div> */}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        /* Mobile-specific styles */
        @media (max-width: 640px) {
          .mobile-menu-enter {
            max-height: 0;
            opacity: 0;
          }
          .mobile-menu-enter-active {
            max-height: 400px;
            opacity: 1;
            transition: all 0.3s ease-in-out;
          }
          .mobile-menu-exit {
            max-height: 400px;
            opacity: 1;
          }
          .mobile-menu-exit-active {
            max-height: 0;
            opacity: 0;
            transition: all 0.3s ease-in-out;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar