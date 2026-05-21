import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      
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
            Career
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Work Experience
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-12">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600"
            />
            
            <div className="mb-8 relative">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -left-[41px] md:-left-[49px] w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg z-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-sky-400 rounded-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-xl border border-sky-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
                      IT Staff / Systems Developer
                    </h3>
                    <p className="text-sky-600 font-semibold text-lg mt-1">
                      Attitech Company, Philippines
                    </p>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full text-sm font-medium shadow-lg shadow-sky-500/25"
                  >
                    Full-Time
                  </motion.span>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-sky-50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <h4 className="font-bold text-navy-900">July 2025 – Present</h4>
                    </div>
                    <p className="text-navy-900/70">
                      Absorbed as a full-time core engineer within 5 months of interning due to outstanding 
                      technical execution across software development and IT infrastructure.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-sky-50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full" />
                      <h4 className="font-bold text-navy-900">February 2025 – June 2025</h4>
                      <span className="text-xs text-sky-600 font-medium ml-2">IT Intern</span>
                    </div>
                    <p className="text-navy-900/70">
                      Engineered, configured, and maintained custom VICIdial server networks and SIP/VoIP 
                      configurations, maintaining near-zero downtime for an active 15-agent call center floor.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience