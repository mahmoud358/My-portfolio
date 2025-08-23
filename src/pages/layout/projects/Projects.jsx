import { motion } from 'framer-motion'
import ProjectCard from '../../../components/project-card/projectCard'
import smarCh from '../../../assets/smarch.webp'
import udemy from '../../../assets/download.png'
import movieHub from '../../../assets/movieHub.webp'
import fixyland from '../../../assets/fixyland.webp'
import portfolio from '../../../assets/portfolio.webp'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SMAR-CH Site',
      description: 'Chalet management and reservation',
      image: smarCh,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express','Tailwind CSS','Pusher Realtime Technology'],
      github: '#',
      live: 'https://smarch-web-server.vercel.app/',
      featured: true,
      isPrivate: true
    },
    {
      id: 2,
      title: ' Udemy Clone (Front-End)',
      description: 'An interactive educational platform with a course management system and educational content.',
      image: udemy,
      technologies: ['Next JS', 'Material UI', 'PayPal', 'Pusher Realtime Technology'],
      github: 'https://github.com/mahmoud358/udemy-next',
      live: 'https://udemy-next-nu.vercel.app/',
      featured: true,
      isPrivate: false
    },
    {
      id: 3,
      title: 'Udemy Clone (Back-End)',
      description: 'An interactive educational platform with a course management system and educational content.',
      image: udemy,
      technologies: ['Node.js', 'MongoDB', 'Express', 'Pusher Realtime Technology'],
      github: 'https://github.com/mahmoud358/udemy-backend',
      live: 'https://udemy-next-nu.vercel.app/',
      featured: true,
      isPrivate: false
    },
    {
      id: 4,
      title: 'My Portfolio ',
      description: 'Interactive personal website with 3D background and modern design.',
      image: portfolio,
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: false,
      isPrivate: false
    },
    {
      id: 5,
      title: 'MovieHub',
      description: 'Website for movies and TV shows',
      image: movieHub,
      technologies: ['React', 'Tailwind CSS'],
      github: 'https://github.com/mahmoud358/MoviesHub',
      live: 'https://movies-hub-eight-chi.vercel.app/',
      featured: false,
      isPrivate: false
    },
    {
      id: 6,
      title: 'fixyland template',
      description: 'Template for a website with a modern design and user-friendly interface.',
      image: fixyland,
      technologies: ['React ', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/mahmoud358/task',
      live: 'https://fixyland-rouge.vercel.app/',
      featured: false,
      isPrivate: false
    }
  ]

 

  return (
    <main className='min-h-screen py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
          Projects
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          A collection of diverse projects that reflect my skills and experience in web development
          </p>
        </motion.div>

        {/* المشاريع المميزة */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-20'
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>Featured Projects</h2>
          <div className='grid lg:grid-cols-2 gap-8'>
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard  project={project} index={index} />
            ))}
          </div>
        </motion.section> */}

        {/* جميع المشاريع */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>All Projects</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {projects.map((project, index) => (
              // <motion.div
              //   key={project.id}
              //   initial={{ opacity: 0, y: 30 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.6, delay: index * 0.1 }}
              //   className='bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300'
              // >
              //   <img 
              //     src={project.image} 
              //     alt={project.title}
              //     className='w-full h-48 object-cover'
              //   />
              //   <div className='p-6'>
              //     <h3 className='text-xl font-bold text-white mb-3'>{project.title}</h3>
              //     <p className='text-gray-300 mb-4 text-sm leading-relaxed'>{project.description}</p>
                  
              //     {/* التقنيات المستخدمة */}
              //     <div className='flex flex-wrap gap-1 mb-4'>
              //       {project.technologies.slice(0, 3).map((tech) => (
              //         <span
              //           key={tech}
              //           className='px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs'
              //         >
              //           {tech}
              //         </span>
              //       ))}
              //       {project.technologies.length > 3 && (
              //         <span className='px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs'>
              //           +{project.technologies.length - 3}
              //         </span>
              //       )}
              //     </div>
                  
              //     {/* روابط المشروع */}
              //     <div className='flex gap-2'>
              //       <a
              //         href={project.github}
              //         className='flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors text-sm'
              //       >
              //         <FaGithub className='text-sm' />
              //         Code
              //       </a>
              //       <a
              //         href={project.live}
              //         className='flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm'
              //       >
              //         <FaExternalLinkAlt className='text-sm' />
              //         View
              //       </a>
              //     </div>
              //   </div>
              // </motion.div>
              <ProjectCard  project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* إحصائيات المشاريع */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-20'
        >
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center'>
            <h3 className='text-2xl font-bold text-white mb-6'>Project Statistics</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                { number: '20+', label: 'Completed Projects' },
                { number: '15+', label: 'Satisfied Clients' },
                { number: '5+', label: 'Years of Experience' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className='text-3xl font-bold text-white mb-2'>{stat.number}</div>
                  <div className='text-gray-200'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
} 