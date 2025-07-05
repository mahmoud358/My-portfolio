import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa'

export default function Resume() {
  const education = [
    {
      year: '2017 - 2021',
      degree: 'بكالوريوس علوم الحاسوب',
      institution: 'جامعة التقنية المتقدمة',
      description: 'تخصص في تطوير البرمجيات وهندسة الحاسوب'
    },
    {
      year: '2019 - 2020',
      degree: 'دبلوم تطوير الويب',
      institution: 'معهد التكنولوجيا الرقمية',
      description: 'تطوير تطبيقات الويب الحديثة'
    }
  ]

  const experience = [
    {
      year: '2023 - الحالي',
      position: 'Full Stack Developer',
      company: 'شركة التقنية المتقدمة',
      description: [
        'تطوير تطبيقات ويب كاملة باستخدام React و Node.js',
        'إدارة قواعد البيانات وتطوير APIs',
        'العمل مع فريق متعدد التخصصات',
        'تحسين أداء التطبيقات وأمانها'
      ]
    },
    {
      year: '2022 - 2023',
      position: 'Frontend Developer',
      company: 'استوديو التصميم الرقمي',
      description: [
        'تطوير واجهات مستخدم تفاعلية وجذابة',
        'العمل مع React و Vue.js',
        'تحسين تجربة المستخدم',
        'التعاون مع مصممي UI/UX'
      ]
    },
    {
      year: '2021 - 2022',
      position: 'Web Developer Intern',
      company: 'شركة البرمجيات المبتكرة',
      description: [
        'تعلم أساسيات تطوير الويب',
        'المساعدة في تطوير مشاريع صغيرة',
        'العمل مع HTML, CSS, JavaScript',
        'التعرف على أدوات التطوير الحديثة'
      ]
    }
  ]

  const skills = {
    'Frontend': ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
    'Tools': ['Git', 'Docker', 'AWS', 'Heroku', 'Figma', 'Adobe XD'],
    'Other': ['REST APIs', 'GraphQL', 'WebRTC', 'PWA', 'SEO', 'Testing']
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
            السيرة الذاتية
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'>
            خبراتي ومؤهلاتي في مجال تطوير الويب والبرمجيات
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto'
          >
            <FaDownload />
            تحميل السيرة الذاتية
          </motion.button>
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
                  <h2 className='text-2xl font-bold text-white'>التعليم</h2>
                </div>
                <div className='space-y-6'>
                  {education.map((edu, index) => (
                    <div key={index} className='border-l-4 border-blue-500 pl-4'>
                      <div className='text-blue-400 font-medium text-sm'>{edu.year}</div>
                      <h3 className='text-lg font-semibold text-white mt-1'>{edu.degree}</h3>
                      <div className='text-gray-300 text-sm mt-1'>{edu.institution}</div>
                      <p className='text-gray-400 text-sm mt-2'>{edu.description}</p>
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
                  <h2 className='text-2xl font-bold text-white'>المهارات</h2>
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
            <motion.section
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
            </motion.section>
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
                <h2 className='text-2xl font-bold text-white'>الخبرات العملية</h2>
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
            <h3 className='text-2xl font-bold text-white mb-6 text-center'>إحصائيات مهنية</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                { number: '5+', label: 'سنوات خبرة' },
                { number: '50+', label: 'مشروع مكتمل' },
                { number: '15+', label: 'عميل سعيد' },
                { number: '4', label: 'شهادات مهنية' }
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