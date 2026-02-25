import React, { useState } from 'react'
import { FiGithub, FiExternalLink, FiFilter, FiLock } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Author Website Template',
    description: 'A modern, responsive website template designed specifically for authors and writers. Features book showcase, blog section, and newsletter integration.',
    image: '/images/cover.png',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Responsive'],
    category: 'frontend',
    github: 'https://github.com/Kevin0belnas/a-originalTemp',
    live: 'https://a-original-temp.vercel.app',
  },
  {
    id: 2,
    title: 'Aurevo Agency',
    description: 'A creative agency website featuring AI-powered search and AI photo integration. Modern, responsive design with dynamic content capabilities.',
    image: '/images/cover2.png',
    tags: ['React', 'Tailwind', 'AI Integration', 'Frontend'],
    category: 'frontend',
    live: 'https://aurevoagency.com',
    // No github - company project
  },
  {
    id: 3,
    title: 'Fulfill1st',
    description: 'A full-stack fulfillment platform with complete frontend and backend implementation. Streamlines order processing and inventory management.',
    image: '/images/cover4.png',
    tags: ['React', 'Node.js', 'Database', 'Full Stack'],
    category: 'fullstack',
    live: 'https://fulfill1st.com',
    // No github - company project
  },
  {
    id: 4,
    title: 'Pages & Pixel',
    description: 'A visually stunning frontend website for a creative studio. Clean design, smooth animations, and responsive layout.',
    image: '/images/cover3.png',
    tags: ['React', 'Tailwind', 'Frontend', 'Responsive'],
    category: 'frontend',
    live: 'https://pagesandpixel.com',
    // No github - company project
  },
]

const categories = ['all', 'frontend', 'fullstack']

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Real websites I've built for clients and myself
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 
                       bg-sky-500 text-white rounded-lg mb-4"
            >
              <FiFilter /> Filter Projects
            </button>
            
            <div className={`${showFilters ? 'block' : 'hidden'} md:flex gap-4 flex-wrap justify-center`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setShowFilters(false)
                  }}
                  className={`px-6 py-2 rounded-full capitalize transition-all
                    ${selectedCategory === category
                      ? 'bg-sky-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-gray-600'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden 
                       shadow-lg hover:shadow-xl transition-all duration-300
                       hover:-translate-y-2 border border-gray-100 
                       dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform 
                           duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 
                              group-hover:opacity-100 transition-opacity 
                              duration-300 flex items-center justify-center gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 
                               hover:text-sky-500 transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  ) : (
                    <span className="px-3 py-2 bg-white/90 text-gray-700 rounded-full text-sm 
                                   flex items-center gap-1">
                      <FiLock size={14} /> Private Repo
                    </span>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-gray-900 
                             hover:text-sky-500 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sky-50 dark:bg-gray-700 
                               text-sky-600 dark:text-sky-400 text-xs 
                               rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects