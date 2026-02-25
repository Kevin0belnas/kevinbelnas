import React, { useState, useEffect } from 'react'
import { FiArrowUp, FiLoader } from 'react-icons/fi'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme')
    
    // If theme is stored in localStorage
    if (storedTheme) {
      return storedTheme === 'dark'
    }
    
    // If no stored theme, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Loading state for initial render
  const [isLoading, setIsLoading] = useState(true)
  
  // Active section for scroll spy
  const [activeSection, setActiveSection] = useState('hero')

  // Update dark mode class on html element
  useEffect(() => {
    const root = document.documentElement
    
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    
    // Debug
    console.log('Theme set to:', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      // Only update if there's no manual preference stored
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Listen for scroll to show/hide button and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll button
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
      
      // Update active section for scroll spy
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

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Keyboard shortcut for dark mode (Ctrl/Cmd + Shift + D)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault()
        setDarkMode(!darkMode)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [darkMode])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <FiLoader className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white 
                    dark:from-gray-900 dark:to-gray-800 
                    transition-colors duration-300 overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
      
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      <Footer />

      {/* Scroll to Top Button - Responsive */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 
                   p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-cyan-600 
                   hover:from-blue-700 hover:to-cyan-700 text-white 
                   rounded-full shadow-lg hover:shadow-xl 
                   transition-all duration-300 z-50
                   transform hover:scale-110 active:scale-95
                   ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Keyboard shortcut hint - hidden on mobile */}
      <div className="fixed bottom-4 left-4 hidden sm:block text-xs text-gray-400 dark:text-gray-600 
                    bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 
                    rounded-full border border-gray-200 dark:border-gray-700
                    shadow-sm z-40">
        Press <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Ctrl</kbd> + 
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1">Shift</kbd> + 
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1">D</kbd> 
        to toggle dark mode
      </div>

      {/* Progress bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300"
          style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div> */}

      {/* Responsive debug helper - remove in production */}
      {/* <div className="fixed top-20 left-4 bg-black text-white text-xs p-2 rounded z-50 sm:hidden">
        Mobile
      </div>
      <div className="fixed top-20 left-4 bg-black text-white text-xs p-2 rounded z-50 hidden sm:block lg:hidden">
        Tablet
      </div>
      <div className="fixed top-20 left-4 bg-black text-white text-xs p-2 rounded z-50 hidden lg:block">
        Desktop
      </div> */}
    </div>
  )
}

export default App