// src/components/About.jsx
import React from 'react';
import { Award, Users, Database, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Award, text: 'Full-time core engineer within 5 months of internship', color: 'blue' },
    { icon: Database, text: 'Handled 100,000+ leads in custom CRM', color: 'blue' },
    { icon: Users, text: 'Managed 15-agent call center infrastructure', color: 'blue' },
    { icon: Shield, text: 'Secure LAN deployment & server management', color: 'blue' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            Resourceful Full Stack Developer and IT Systems Specialist with a proven track record 
            of engineering high-impact web software and communication systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate developer who thrives at the intersection of <span className="text-blue-600 font-semibold">full-stack development</span> 
               <span className="ml-1">and</span> <span className="text-blue-600 font-semibold">IT systems infrastructure</span>. My journey from IT intern to core engineer 
              in just 5 months at Attitech Company reflects my dedication to technical excellence and rapid problem-solving.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I specialize in building data-dense local CRMs handling <span className="font-semibold">100k+ records</span>, implementing 
              complex full-stack web solutions, and integrating third-party AI APIs. My expertise extends to 
              managing <span className="font-semibold">VICIdial server networks</span> and maintaining near-zero downtime 
              for active call center operations.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                  <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-sm border border-blue-100 animate-slide-up">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Core Philosophy
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "Building robust, secure, and scalable systems that empower teams to work smarter, not harder."
            </p>
            <div className="border-t border-blue-100 pt-4 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Education:</span>
                <span className="font-semibold text-gray-800">BS Information Technology</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Institution:</span>
                <span className="font-semibold text-gray-800">Cebu Technological University – Main Campus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;