// src/components/Hero.jsx - FIXED
import React from 'react';
import {Mail, Phone, MapPin, Download, ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Open to opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Kevin T. Belnas
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-3">
              Full Stack Developer & IT Systems Specialist
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Building high-impact web solutions & managing enterprise communication systems
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-blue-500" />
                <span>Cebu City, Philippines</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} className="text-blue-500" />
                <span>09700948102</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="text-blue-500" />
                <span>belnaskevin03@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Hire Me <ArrowRight size={18} />
              </a>
              <a
                href="/images/Kevin_Belnas_Final_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                View My Resume <Download size={18} />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-up hidden md:block">
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Full Stack Dev</p>
                    <p className="text-blue-200 text-sm">3+ Years Experience</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-white">
                    <span>React/Next.js</span>
                    <span className="text-blue-200">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full w-[95%]"></div>
                  </div>
                  <div className="flex justify-between text-white mt-2">
                    <span>Node.js/Express</span>
                    <span className="text-blue-200">90%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full w-[90%]"></div>
                  </div>
                  <div className="flex justify-between text-white mt-2">
                    <span>VoIP/VICIdial</span>
                    <span className="text-blue-200">88%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;