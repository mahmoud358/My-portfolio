import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'


function ProjectCard({ project, index }) {
    const getTechnologyIcon = (tech) => {
        const icons = {
          'React': FaReact,
          'Node.js': FaNodeJs,
          'MongoDB': FaDatabase,
          'Express': FaNodeJs,
          'Firebase': FaDatabase,
          'PostgreSQL': FaDatabase,
          'Django': FaNodeJs,
          'Socket.io': FaNodeJs,
          'Stripe': FaNodeJs,
          'AWS': FaNodeJs,
          'React Native': FaReact,
          'Redux': FaReact,
          'Chart.js': FaNodeJs,
          'Three.js': FaReact,
          'Framer Motion': FaReact,
          'Tailwind CSS': FaReact
        }
        return icons[tech] || FaNodeJs
      }
      const openGithub = () => {
        if (project.isPrivate) {
          toast.error('Sorry, this project is private', {
            duration: 5000,
            position: 'top-right',
            style: {
              background: '#363636',
              color: '#fff',
              borderRadius: '10px',
              padding: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              textAlign: 'center',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'
            }
          })
        } else {
          window.open(project.github, '_blank')
        }
      }
    
    return (
        <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300'
              >
                <div className='relative'>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className='w-full h-48 object-cover'
                    loading='lazy'
                  />
                 {project.featured && (
                    <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    Featured
                    </div>
                 )}
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-white mb-3'>{project.title}</h3>
                  <p className='text-gray-300 mb-4 leading-relaxed'>{project.description}</p>
                  
                  {/* التقنيات المستخدمة */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech) => {
                      const Icon = getTechnologyIcon(tech)
                      return (
                        <span
                          key={tech}
                          className='flex items-center gap-1 px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm'
                        >
                          <Icon className='text-blue-400' />
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                  
                  {/* روابط المشروع */}
                  <div className='flex gap-4'>
                    <button
                      onClick={openGithub}
                      className={`flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors ${project.isPrivate ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer'}`}
                      
                    >
                      <FaGithub />
                      Code
                    </button>
                    <button
                      onClick={() => { window.open(project.live, '_blank') }}
                      className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'
                    >
                      <FaExternalLinkAlt />
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
    )
}

export default ProjectCard;