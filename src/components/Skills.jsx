import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillsData = [
  {
    category: "Frontend Technologies",
    icon: "🎨",
    items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "React Native"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend & Databases",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "MySQL", "MSSQL", "MongoDB", "Supabase", "Gemini AI API"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "VoIP & Dialer Systems",
    icon: "📞",
    items: ["VICIdial Setup", "SIP/VoIP", "DAHDI Config", "Dialer Admin"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Tools & Hosting",
    icon: "🛠️",
    items: ["GitHub", "Hostinger", "Bluehost", "Linux Server", "LAN Deploy", "Hardware Support"],
    color: "from-orange-500 to-red-500"
  }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

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
            className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-medium mb-4 backdrop-blur-sm"
          >
            My Arsenal
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-sky-400/30 transition-all duration-300 h-full">
                {/* Gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.3)" }}
                      className={`px-4 py-2 bg-gradient-to-r ${skill.color} bg-opacity-10 text-white/90 rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-all cursor-default`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills