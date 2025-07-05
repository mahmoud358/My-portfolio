import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function ContactMe() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'البريد الإلكتروني',
      value: 'mahmoud@example.com',
      link: 'mailto:mahmoud@example.com'
    },
    {
      icon: FaPhone,
      title: 'رقم الهاتف',
      value: '+20 123 456 7890',
      link: 'tel:+201234567890'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'الموقع',
      value: 'القاهرة، مصر',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mahmoud-abdelhmied',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/mahmoud-dev',
      color: 'hover:bg-gray-700'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/mahmoud_dev',
      color: 'hover:bg-blue-400'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // هنا يمكن إضافة منطق إرسال النموذج
    alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.')
  }

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
            تواصل معي
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            هل لديك مشروع تريد العمل عليه؟ أو تريد مناقشة فكرة معينة؟ 
            لا تتردد في التواصل معي!
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* معلومات التواصل */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-8'
          >
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>معلومات التواصل</h2>
              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors'
                  >
                    <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center'>
                      <info.icon className='text-white text-xl' />
                    </div>
                    <div>
                      <h3 className='text-white font-semibold'>{info.title}</h3>
                      <p className='text-gray-300'>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* روابط التواصل الاجتماعي */}
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>التواصل الاجتماعي</h2>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className='text-xl' />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ساعات العمل */}
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>ساعات العمل</h2>
              <div className='space-y-3'>
                {[
                  { day: 'الأحد - الخميس', time: '9:00 ص - 6:00 م' },
                  { day: 'الجمعة', time: '10:00 ص - 2:00 م' },
                  { day: 'السبت', time: 'مغلق' }
                ].map((schedule, index) => (
                  <div key={index} className='flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0'>
                    <span className='text-white'>{schedule.day}</span>
                    <span className='text-gray-300'>{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* نموذج التواصل */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>أرسل لي رسالة</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='firstName' className='block text-white font-medium mb-2'>
                      الاسم الأول
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      required
                      className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                      placeholder='أدخل اسمك الأول'
                    />
                  </div>
                  <div>
                    <label htmlFor='lastName' className='block text-white font-medium mb-2'>
                      اسم العائلة
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      required
                      className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                      placeholder='أدخل اسم العائلة'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-white font-medium mb-2'>
                    البريد الإلكتروني
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                    placeholder='أدخل بريدك الإلكتروني'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-white font-medium mb-2'>
                    الموضوع
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                    placeholder='أدخل موضوع الرسالة'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-white font-medium mb-2'>
                    الرسالة
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none'
                    placeholder='اكتب رسالتك هنا...'
                  ></textarea>
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  إرسال الرسالة
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* خريطة أو معلومات إضافية */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-16'
        >
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>دعنا نعمل معاً!</h3>
            <p className='text-gray-200 mb-6 max-w-2xl mx-auto'>
              أنا متحمس دائماً للعمل على مشاريع جديدة ومثيرة. 
              سواء كنت تريد تطوير موقع ويب، تطبيق، أو أي مشروع تقني آخر، 
              أنا هنا لمساعدتك في تحقيق رؤيتك.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                تطوير الويب
              </span>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                تطبيقات الموبايل
              </span>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                تصميم واجهات
              </span>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                استشارات تقنية
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}