import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa'
import myCV from '../../../assets/Backend_CV .pdf'

export default function Resume() {
  const education = [
    {
      year: '2014 - 2019',
      degree: 'Bachelor’s Degree of Civil engineering',
      institution: 'South Valley University – SVU',
      description: ['']
    },
    {
      year: '2023 - 2024',
      degree: 'Software Development Fundamentals Track',
      institution: 'Information Technology Institute – ITI',
      description: ['Led the development of an E-Commerce WordPress website, enhancing functionality and user interface.']
    },
    {
      year: '2023 - 2024',
      degree: 'Full-stack Web Development Using MERN Track',
      institution: 'Information Technology Institute – ITI',
      description: [`- Leading the development of a Udemy website utilizing Angular & React Framework for a seamless user experience.`,
        `- Developed a Movie website utilizing React Framework and Redux for seamless user experience and optimization.`]
    }
  ]

  const experience = [
    {
      year: '2024 - 2025',
      position: 'Full Stack Developer using MERN ',
      company: 'Freelance',
      description: [` Developed and maintained a full-featured chalet booking platform for the Saudi market.`,
        ` Implemented backend architecture with Node.js, Express, MongoDB, and RESTful APIs.`,
        ` Built role-based access, booking, subscriptions, admin controls, and support system.`,
        ` Integrated real-time chat and notifications using Pusher.`,
        ` Contributed to React + Tailwind CSS frontend components`,
      ]
    },
    {
      year: '2023 - 2024',
      position: 'Full stack Developer using MERN (Intern)',
      company: 'Information Technology Institute – ITI',
      description: [` Developed and deployed 3+ Web applications (Udemy Clone,Twitter ,Movies website)`,
        ` Integrated third-party APIs to enhance app functionality.`,
        ` Improved app performance, reducing load time by 25%.`]
    },
    {
      year: '2023 - 2024',
      position: 'Software Development Fundamentals (Intern) ',
      company: 'Information Technology Institute – ITI',
      description: [` Led the development of an E-Commerce WordPress website, enhancing functionality and user interface.`]
    }
  ]

  const skills = {
    'Frontend': ['React', 'NextJs', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
    'Backend': ['Node.js', 'Express.js'],
    'Database': ['MongoDB', 'MySQL', 'Firebase'],
    'Tools': ['Git', 'GitHub', 'Postman', 'Swagger', 'Figma', 'Adobe XD'],
    'Other': ['REST APIs', 'GraphQL', 'Testing']
  }

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      credential: 'AWS-DEV-001'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2022',
      credential: 'MDB-DEV-002'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      credential: 'REACT-DEV-003'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2021',
      credential: 'GCP-DEV-004'
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
            Resume
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'>
            My experience and qualifications in the field of web and software development
          </p>
          <motion.a href={myCV} download={`Mahmoud.pdf`}>
            <motion.button

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto cursor-pointer'
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.a>

        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* العمود الأيسر - التعليم والمهارات */}
          <div className='lg:col-span-1 space-y-8'>
            {/* التعليم */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='bg-gray-800 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-6'>
                  <FaGraduationCap className='text-2xl text-blue-400' />
                  <h2 className='text-2xl font-bold text-white'>Education</h2>
                </div>
                <div className='space-y-6'>
                  {education.map((edu, index) => (
                    <div key={index} className='border-l-4 border-blue-500 pl-4'>
                      <div className='text-blue-400 font-medium text-sm'>{edu.year}</div>
                      <h3 className='text-lg font-semibold text-white mt-1'>{edu.degree}</h3>
                      <div className='text-gray-300 text-sm mt-1'>{edu.institution}</div>
                      {edu.description.map((des, idx) => (
                        <p className='text-gray-400 text-sm mt-2' key={idx}>{des}</p>
                      ))}

                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* المهارات */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className='bg-gray-800 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-6'>
                  <FaCode className='text-2xl text-blue-400' />
                  <h2 className='text-2xl font-bold text-white'>Skills</h2>
                </div>
                <div className='space-y-4'>
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>{category}</h3>
                      <div className='flex flex-wrap gap-2'>
                        {skillList.map((skill) => (
                          <span
                            key={skill}
                            className='px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* الشهادات */}
            {/* <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className='bg-gray-800 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-6'>
                  <FaAward className='text-2xl text-blue-400' />
                  <h2 className='text-2xl font-bold text-white'>الشهادات</h2>
                </div>
                <div className='space-y-4'>
                  {certifications.map((cert, index) => (
                    <div key={index} className='border-l-4 border-green-500 pl-4'>
                      <h3 className='text-lg font-semibold text-white'>{cert.name}</h3>
                      <div className='text-gray-300 text-sm'>{cert.issuer}</div>
                      <div className='text-gray-400 text-sm'>{cert.year} - {cert.credential}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section> */}
          </div>

          {/* العمود الأيمن - الخبرات */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:col-span-2'
          >
            <div className='bg-gray-800 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-8'>
                <FaBriefcase className='text-2xl text-blue-400' />
                <h2 className='text-2xl font-bold text-white'>Work experience</h2>
              </div>
              <div className='space-y-8'>
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className='border-l-4 border-blue-500 pl-6'
                  >
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                      <h3 className='text-xl font-semibold text-white'>{exp.position}</h3>
                      <span className='text-blue-400 font-medium'>{exp.year}</span>
                    </div>
                    <h4 className='text-lg text-gray-300 mb-3'>{exp.company}</h4>
                    <ul className='space-y-2'>
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className='text-gray-400 flex items-start gap-2'>
                          <span className='text-blue-400 mt-1'>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* إحصائيات إضافية */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16'
        >
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8'>
            <h3 className='text-2xl font-bold text-white mb-6 text-center'>Professional statistics</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                { number: '1+', label: 'Years of experience' },
                { number: '10+', label: 'Completed project' },
                { number: '50+', label: 'Happy customer' },
                { number: '3', label: 'Professional certificates' }
              ].map((stat, index) => (
                <div key={index} className='text-center'>
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