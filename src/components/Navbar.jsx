import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Just track if page is scrolled for styling changes
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setMobileOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={scrollToTop}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}>
              Kevin<span className="text-sky-500 ml-1">Belnas</span>
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-500 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative px-4 py-2 group"
              >
                <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                  scrolled 
                    ? activeSection === link.id 
                      ? 'text-sky-600' 
                      : 'text-navy-900/70 hover:text-navy-900'
                    : activeSection === link.id
                      ? 'text-sky-400'
                      : 'text-white/80 hover:text-white'
                }`}>
                  {link.label}
                </span>
                
                {/* Active indicator */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute inset-0 rounded-lg transition-colors duration-300 ${
                      scrolled ? 'bg-sky-50' : 'bg-white/10'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
            
            {/* Resume/Hire Me button */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                scrolled
                  ? 'bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/25'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'text-navy-900 hover:bg-navy-900/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-0 left-0 w-full h-0.5 rounded-full ${
                  scrolled ? 'bg-navy-900' : 'bg-white'
                }`}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-2 left-0 w-full h-0.5 rounded-full ${
                  scrolled ? 'bg-navy-900' : 'bg-white'
                }`}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-4 left-0 w-full h-0.5 rounded-full ${
                  scrolled ? 'bg-navy-900' : 'bg-white'
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-1 border-t ${
                scrolled ? 'border-gray-200' : 'border-white/20'
              }`}>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? scrolled
                          ? 'bg-sky-50 text-sky-600'
                          : 'bg-white/10 text-sky-400'
                        : scrolled
                          ? 'text-navy-900/70 hover:text-navy-900 hover:bg-navy-900/5'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="block mx-4 mt-4 px-6 py-3 bg-sky-500 text-white rounded-full font-medium text-center hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/25"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar