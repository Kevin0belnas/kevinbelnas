import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    title: "Internal Corporate CRM & Lead Manager",
    role: "Full-Stack Developer",
    description: "Built a full-stack, secure system to handle and track 100,000+ active leads for 15 agents, migrating operations off Excel. Deployed locally over the company LAN via custom network configurations per strict executive security mandates for in-office exclusivity.",
    tech: ["React", "Node.js", "MySQL", "LAN Deploy"],
    highlight: "100k+ Records",
    icon: "🏢"
  },
  {
    title: "Fulfill1st Eco-System",
    role: "Full-Stack Developer",
    description: "Developed the corporate storefront using Vite, React, Tailwind CSS, and Node.js/Express.js. Built an isolated internal administrative engine to track real-time subscription lifecycle statuses and fulfillment tasks.",
    tech: ["Vite", "React", "Tailwind CSS", "Node.js"],
    links: ["fulfill1st.com", "management.fulfill1st.com"],
    icon: "🛒"
  },
  {
    title: "Aurevo Agency AI Platform",
    role: "Frontend & API Integration",
    description: "Architected a fast SPA utilizing Vite, React, and Tailwind CSS. Implemented advanced asynchronous Gemini AI API integrations to generate automated book blurbs and dynamic book covers on-the-fly.",
    tech: ["Vite", "React", "Tailwind CSS", "Gemini AI"],
    link: "aurevoagency.com",
    icon: "🤖"
  },
  {
    title: "Corporate & Client Web Fleet",
    role: "Web Developer",
    description: "Modernized Attitech's web presence and built static architecture for partner entity Pages & Pixel. Currently maintain a fleet of ~10 production author client websites hosted on Hostinger.",
    tech: ["React", "Hostinger", "Domain Config"],
    links: ["attitech.ph", "pagesandpixel.com"],
    icon: "🌐"
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Core Software Projects
          </h2>
          <p className="text-navy-900/60 text-lg">Attitech Company</p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full mt-4"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-sky-100">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 transform origin-left transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sky-600 font-semibold text-sm mt-1">{project.role}</p>
                      </div>
                    </div>
                    {project.highlight && (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full text-xs font-bold whitespace-nowrap shadow-lg shadow-sky-500/25"
                      >
                        {project.highlight}
                      </motion.span>
                    )}
                  </div>
                  
                  <p className="text-navy-900/70 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-lg text-xs font-medium border border-sky-100 hover:bg-sky-100 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {(project.link || project.links) && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                      {project.links ? project.links.map((link, i) => (
                        <motion.a
                          key={i}
                          href={`https://${link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="text-sky-600 hover:text-sky-700 text-sm font-medium flex items-center gap-2 bg-sky-50 px-3 py-1.5 rounded-lg hover:bg-sky-100 transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {link}
                        </motion.a>
                      )) : (
                        <motion.a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="text-sky-600 hover:text-sky-700 text-sm font-medium flex items-center gap-2 bg-sky-50 px-3 py-1.5 rounded-lg hover:bg-sky-100 transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {project.link}
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects