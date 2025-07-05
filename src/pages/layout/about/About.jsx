import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'

export default function About() {
  const skills = [
    { name: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Three.js'] },
    { name: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Adobe XD'] },
    { name: 'Other', items: ['REST APIs', 'GraphQL', 'WebRTC', 'PWA', 'SEO'] }
  ]

  const experiences = [
    {
      year: '2023 - الحالي',
      title: 'Full Stack Developer',
      company: 'شركة التقنية المتقدمة',
      description: 'تطوير تطبيقات ويب حديثة باستخدام React و Node.js'
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'استوديو التصميم الرقمي',
      description: 'إنشاء واجهات مستخدم تفاعلية وجذابة'
    },
    {
      year: '2021 - 2022',
      title: 'Web Developer Intern',
      company: 'شركة البرمجيات المبتكرة',
      description: 'تعلم أساسيات تطوير الويب والعمل في فريق'
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
            من أنا؟
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            مطور ويب شغوف بإنشاء تجارب رقمية مذهلة. أعمل على تطوير حلول مبتكرة 
            تجمع بين الجمال والوظائف العملية.
          </p>
        </motion.div>

        {/* المهارات */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-20'
        >
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>المهارات التقنية</h2>
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
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>الخبرات العملية</h2>
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
                <p className='text-gray-400'>{exp.description}</p>
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
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>الإنجازات</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { icon: FaCode, number: '50+', text: 'مشروع مكتمل' },
              { icon: FaPalette, number: '30+', text: 'تصميم واجهة' },
              { icon: FaRocket, number: '15+', text: 'عميل سعيد' },
              { icon: FaUsers, number: '5+', text: 'سنوات خبرة' }
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
        <motion.section
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
        </motion.section>
      </div>
    </main>
  )
} 