import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'

export default function About() {
  const skills = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS','Bootstrap', 'Three.js'] },
    { name: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB'] },
    { name: 'Tools', items: ['Git', 'Figma', 'Adobe XD'] },
    { name: 'Other', items: ['REST APIs', 'GraphQL', ' Real-time applications'] }
  ]

  const experiences = [
    {
      year: '2024 - 2025',
      title: 'Full Stack Developer using MERN ',
      company: 'Freelance',
      description:[ `- Developed and maintained a full-featured chalet booking platform for the Saudi market.`,
        `- Implemented backend architecture with Node.js, Express, MongoDB, and RESTful APIs.`,
        `- Built role-based access, booking, subscriptions, admin controls, and support system.`,
        `- Integrated real-time chat and notifications using Pusher.`,
        `- Contributed to React + Tailwind CSS frontend components`,
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Full stack Developer using MERN (Intern)',
      company: 'Information Technology Institute – ITI',
      description: [`- Developed and deployed 3+ Web applications (Udemy Clone,Twitter ,Movies website)`,
                    `- Integrated third-party APIs to enhance app functionality.`,
                    `- Improved app performance, reducing load time by 25%.`]
    },
    {
      year: '2023 - 2024',
      title: 'Software Development Fundamentals Track ',
      company: 'Information Technology Institute – ITI',
      description: [`- Led the development of an E-Commerce WordPress website, enhancing functionality and user interface.`]
    }
  ]

  return (
    <main className='min-h-screen py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
          Who am I?
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          A web developer passionate about creating stunning digital experiences, I develop innovative solutions that combine beauty and functionality.
          </p>
        </motion.div>

        {/* المهارات */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-20'
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>Technical skills</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors'
              >
                <h3 className='text-xl font-semibold text-blue-400 mb-4'>{category.name}</h3>
                <div className='space-y-2'>
                  {category.items.map((skill) => (
                    <div key={skill} className='text-gray-300 text-sm'>{skill}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* الخبرات */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-20'
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>Work experience</h2>
          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500'
              >
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <h3 className='text-xl font-semibold text-white'>{exp.title}</h3>
                  <span className='text-blue-400 font-medium'>{exp.year}</span>
                </div>
                <h4 className='text-lg text-gray-300 mb-2'>{exp.company}</h4>
                {exp.description.map((des,idx)=>(
                  <p className='text-gray-400' key={idx}>{des}</p>
                ))}
                
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* الإنجازات */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mb-20'
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>Achievements</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { icon: FaCode, number: '10+', text: 'Completed project' },
              { icon: FaPalette, number: '7+', text: 'interface design' },
              { icon: FaRocket, number: '15+', text: 'Happy customer' },
              { icon: FaUsers, number: '1+', text: 'Years of experience' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6'
              >
                <achievement.icon className='text-4xl text-white mb-4 mx-auto' />
                <div className='text-3xl font-bold text-white mb-2'>{achievement.number}</div>
                <div className='text-gray-200'>{achievement.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* التعليم */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>التعليم والشهادات</h2>
          <div className='bg-gray-800 rounded-lg p-8'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-semibold text-white mb-4'>الدرجة العلمية</h3>
                <p className='text-gray-300'>بكالوريوس في علوم الحاسوب</p>
                <p className='text-gray-400'>جامعة التقنية - 2021</p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-white mb-4'>الشهادات المهنية</h3>
                <ul className='space-y-2 text-gray-300'>
                  <li>• AWS Certified Developer</li>
                  <li>• MongoDB Certified Developer</li>
                  <li>• React Developer Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section> */}
      </div>
    </main>
  )
} 