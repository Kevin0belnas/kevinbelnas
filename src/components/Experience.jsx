// src/components/Experience.jsx
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'IT Staff / Systems Developer',
      company: 'Attitech Company, Philippines',
      period: 'July 2025 – Present (Full-Time)',
      location: 'Philippines',
      achievements: [
        'Absorbed as a full-time core engineer within 5 months of interning due to outstanding technical execution',
        'Engineered, configured, and maintained custom VICIdial server networks and SIP/VoIP configurations, maintaining near-zero downtime for an active 15-agent call center floor',
        'Managed company server environments, secure LAN system configurations, application code file directories, and standard hardware troubleshooting'
      ]
    },
    {
      title: 'IT Intern',
      company: 'Attitech Company, Philippines',
      period: 'February 2025 – June 2025',
      location: 'Philippines',
      achievements: [
        'Demonstrated exceptional technical skills leading to early full-time absorption',
        'Assisted in server maintenance and network configuration tasks',
        'Contributed to internal software development projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Work Experience</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            Professional journey delivering high-impact solutions
          </p>
        </div>

        <div className="relative border-l-2 border-blue-200 ml-4 md:ml-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-6 md:ml-8 relative">
              <div className="absolute -left-10 md:-left-12 mt-1.5">
                <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} className="text-blue-500" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-blue-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-500 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;