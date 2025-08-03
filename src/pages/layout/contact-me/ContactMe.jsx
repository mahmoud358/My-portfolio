import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'e-mail',
      value: 'mahmoudabdelhamied68@gmail.com',
      link: 'mailto:mahmoudabdelhamied68@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'phone number',
      value: '+20 128 944 1249',
      link: 'tel:+201289441249'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Site',
      value: 'Cairo, Egypt',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mahmoud-abd-alhamied-704761139',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/mahmoud358',
      color: 'hover:bg-blue-700'
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/201289441249',
      color: 'hover:bg-blue-400'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
 
    setIsLoading(true)


    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setIsLoading(false)
        toast.success('Message sent successfully', {
          duration: 5000,
         
        });
      }, (error) => {
        console.log(error);
        setIsLoading(false)
        toast.error('Message not sent', {
          duration: 5000,
         
        });
      });
  }

  return (
    <main className='min-h-screen py-20 '>
      <div className='max-w-6xl mx-auto'>
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
            Contact me
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Do you have a project you'd like to work on or want to discuss a specific idea?
            Don't hesitate to contact me!
          </p>
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-12'>
          {/* معلومات التواصل */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-8 w-full lg:w-1/2'
          >
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>Contact information</h2>
              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-center gap-4 p-2 md:p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors'
                  >
                    <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center'>
                      <info.icon className='text-white text-lg lg:text-xl' />
                    </div>
                    <div>
                      <h3 className='text-white font-semibold'>{info.title}</h3>
                      <p className='text-gray-300 text-xs lg:text-base'>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* روابط التواصل الاجتماعي */}
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>Social media</h2>
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
            {/* <div className='bg-gray-800 rounded-lg p-8'>
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
            </div> */}
          </motion.div>

          {/* نموذج التواصل */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='w-full lg:w-1/2'
          >
            <div className='bg-gray-800 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>Send me a message</h2>
              <form onSubmit={handleSubmit} ref={form} className='space-y-6'>

                <div>
                  <label htmlFor='fullName' className='block text-white font-medium mb-2'>
                    Full name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                    placeholder='Enter your full name'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-white font-medium mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                    placeholder='Enter your email'
                  />
                </div>
                {/* <div>
                  <label htmlFor='email' className='block text-white font-medium mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
                    placeholder='Enter your subject'
                  />
                </div> */}



                <div>
                  <label htmlFor='message' className='block text-white font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    required
                    className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none'
                    placeholder='Write your message here...'
                  ></textarea>
                </div>
              
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  
                  {isLoading ? <div className='flex items-center justify-center'>
                    <div className='w-7 h-7 border-t-2 border-b-2 border-white rounded-full animate-spin'></div>
                    <span className='ml-2'>Sending...</span>
                  </div> : 'Send message'}
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
            <h3 className='text-2xl font-bold text-white mb-4'>Let's work together!</h3>
            <p className='text-gray-200 mb-6 max-w-2xl mx-auto'>
              I'm always excited to work on new and exciting projects.
              Whether you need a web development, mobile app, or any other technical project,
              I'm here to help you achieve your vision.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                Web development
              </span>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                Mobile apps
              </span>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                UI/UX design
              </span>
              <span className='px-4 py-2 bg-white bg-opacity-20 text-white rounded-full'>
                Technical consulting
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      
    </main>
  )
}