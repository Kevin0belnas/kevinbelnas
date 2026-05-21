// src/components/Footer.jsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Kevin T. Belnas. Full Stack Developer & IT Systems Specialist.
        </p>
        <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
          Built with React, Vite & Tailwind CSS <Heart size={14} className="text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;