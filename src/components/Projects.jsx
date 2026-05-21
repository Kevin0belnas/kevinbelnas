// src/components/Projects.jsx
import React from 'react';
import { ExternalLink, Database, Globe, Shield, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Internal Corporate CRM & Lead Manager',
      description: 'Full-stack secure system handling 100,000+ active leads for 15 agents. Deployed locally over company LAN with custom network configurations per executive security mandates.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'LAN Deployment'],
      icon: <Database className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Fulfill1st Eco-System',
      description: 'Corporate storefront and internal administrative engine tracking real-time subscription lifecycles and fulfillment tasks.',
      tech: ['Vite', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Hostinger'],
      icon: <Globe className="w-6 h-6" />,
      color: 'blue',
      link: 'https://fulfill1st.com'
    },
    {
      title: 'Aurevo Agency AI Platform',
      description: 'Single-page app with advanced Gemini AI API integrations generating automated book blurbs and dynamic book covers on-the-fly.',
      tech: ['Vite', 'React', 'Tailwind CSS', 'Gemini AI API'],
      icon: <Zap className="w-6 h-6" />,
      color: 'blue',
      link: 'https://aurevoagency.com'
    },
    {
      title: 'Corporate & Client Web Fleet',
      description: 'Modernized web presence for Attitech and partner entities. Managing ~10 production author client websites.',
      tech: ['React', 'Hostinger', 'Domain Configuration', 'Static Architecture'],
      icon: <Shield className="w-6 h-6" />,
      color: 'blue',
      links: ['https://attitech.ph', 'https://pagesandpixel.com']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Core Software Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            High-impact solutions deployed in production environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Visit Project <ExternalLink size={14} />
                  </a>
                )}
                {project.links && (
                  <div className="flex gap-4">
                    {project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        {link.replace('https://', '')} <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;