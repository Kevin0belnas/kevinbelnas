import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: "100k+", label: "Records Managed", icon: "📊" },
    { value: "15+", label: "Agents Supported", icon: "👥" },
    { value: "~10", label: "Production Sites", icon: "🚀" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      
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
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Professional Overview
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-sky-100/50 border border-sky-50 relative overflow-hidden group hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <p className="text-lg text-navy-900/80 leading-relaxed mb-10">
              Resourceful Full Stack Developer and IT Systems Specialist with a proven track record of 
              engineering, deploying, and maintaining high-impact web software and communication systems 
              inside call center environments. Expertise spans building data-dense local CRMs handling 
              100k+ records, implementing complex full-stack web solutions, and integrating third-party 
              AI APIs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-sky-50 to-white shadow-md hover:shadow-lg transition-all border border-sky-100"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-sky-500 mb-1">{stat.value}</div>
                  <div className="text-navy-900/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About