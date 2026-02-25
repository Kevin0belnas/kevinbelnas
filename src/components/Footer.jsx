import React from 'react'
import { FiGithub, FiLinkedin, FiHeart, FiFacebook } from 'react-icons/fi'

const Footer = () => {
  // const currentYear = new Date().getFullYear()
    const currentYear = 2025

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 
                      dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/Kevin0belnas?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 
                       dark:hover:text-sky-400 transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-belnas-9873a4350/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 
                       dark:hover:text-sky-400 transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/kevinwebstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 
                       dark:hover:text-sky-400 transition-colors"
            >
              <FiFacebook size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-center mb-2">
            © {currentYear} Kevin Belnas. All rights reserved.
          </p>
          
          {/* Made with love */}
          {/* <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-500" /> using React & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer