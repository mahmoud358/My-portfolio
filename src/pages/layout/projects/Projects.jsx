import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق ويب متقدم لإدارة المهام والمشاريع مع واجهة تفاعلية وميزات متقدمة.',
      image: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=Task+Manager',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'متجر إلكتروني',
      description: 'منصة تسوق إلكتروني كاملة مع نظام دفع وإدارة مخزون متقدم.',
      image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=E-Commerce',
      technologies: ['React', 'Stripe', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'تطبيق المحادثات',
      description: 'تطبيق محادثات في الوقت الفعلي مع ميزات مشاركة الملفات والرسائل الصوتية.',
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Chat+App',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'منصة التعلم الإلكتروني',
      description: 'منصة تعليمية تفاعلية مع نظام إدارة الدورات والمحتوى التعليمي.',
      image: 'https://via.placeholder.com/400x250/059669/ffffff?text=E-Learning',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'تطبيق تتبع اللياقة',
      description: 'تطبيق للياقة البدنية مع تتبع التمارين والتغذية والإحصائيات.',
      image: 'https://via.placeholder.com/400x250/ea580c/ffffff?text=Fitness+Tracker',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'موقع Portfolio تفاعلي',
      description: 'موقع شخصي تفاعلي مع خلفية ثلاثية الأبعاد وتصميم حديث.',
      image: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=Portfolio',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

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
            مشاريعي
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            مجموعة من المشاريع المتنوعة التي تعكس مهاراتي وخبراتي في تطوير الويب
          </p>
        </motion.div>

        {/* المشاريع المميزة */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-20'
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>المشاريع المميزة</h2>
          <div className='grid lg:grid-cols-2 gap-8'>
            {projects.filter(p => p.featured).map((project, index) => (
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
                  />
                  <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    مميز
                  </div>
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
                    <a
                      href={project.github}
                      className='flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors'
                    >
                      <FaGithub />
                      الكود
                    </a>
                    <a
                      href={project.live}
                      className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      <FaExternalLinkAlt />
                      عرض المشروع
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* جميع المشاريع */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>جميع المشاريع</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300'
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-white mb-3'>{project.title}</h3>
                  <p className='text-gray-300 mb-4 text-sm leading-relaxed'>{project.description}</p>
                  
                  {/* التقنيات المستخدمة */}
                  <div className='flex flex-wrap gap-1 mb-4'>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* روابط المشروع */}
                  <div className='flex gap-2'>
                    <a
                      href={project.github}
                      className='flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors text-sm'
                    >
                      <FaGithub className='text-sm' />
                      الكود
                    </a>
                    <a
                      href={project.live}
                      className='flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm'
                    >
                      <FaExternalLinkAlt className='text-sm' />
                      عرض
                    </a>
                  </div>
                </div>
              </motion.div>
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
            <h3 className='text-2xl font-bold text-white mb-6'>إحصائيات المشاريع</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                { number: '20+', label: 'مشروع مكتمل' },
                { number: '15+', label: 'عميل سعيد' },
                { number: '5+', label: 'سنوات خبرة' },
                { number: '100%', label: 'رضا العملاء' }
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