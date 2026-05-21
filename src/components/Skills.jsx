// src/components/Skills.jsx
import React from 'react';
import { 
  Code2, Server, Phone, Cloud, Database, Layout, 
  Zap, ShieldCheck 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: <Layout className="w-6 h-6 text-blue-600" />,
      skills: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'React Native']
    },
    {
      title: 'Backend & Databases',
      icon: <Server className="w-6 h-6 text-blue-600" />,
      skills: ['Node.js', 'Express.js', 'MySQL', 'MSSQL', 'MongoDB', 'Supabase', 'Gemini AI API']
    },
    {
      title: 'VoIP & Dialer Systems',
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      skills: ['VICIdial Setup', 'SIP/VoIP Integration', 'DAHDI Configuration', 'Dialer Administration']
    },
    {
      title: 'Tools & Hosting',
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      skills: ['GitHub', 'Hostinger', 'Bluehost', 'Linux Server', 'LAN Deployment']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            Leveraging modern technologies to build robust applications and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-blue-100">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-amber-400" />
              <div>
                <h4 className="text-xl font-bold">Available for Contract & Full-Time Roles</h4>
                <p className="text-blue-100">Expert in full-stack development & VoIP systems</p>
              </div>
            </div>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;