import myPhoto from '../../../assets/my photo.jpg'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Card المحتوى */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full bg-white/20 dark:bg-gray-900/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/30"
        >
          {/* الصورة والاسم */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              <motion.img
                src={myPhoto}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-2xl ring-4 ring-blue-400/30 hover:ring-purple-500/40 transition-all duration-300"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
                alt="صورة شخصية"
              />
              {/* توهج خلف الصورة */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-cyan-400/30 blur-2xl z-[-1]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 text-center md:text-left drop-shadow-lg">
              محمود عبد الحميد
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-semibold text-center md:text-left">
              Full Stack Developer
            </h2>
          </div>

          {/* المحتوى النصي والأزرار */}
          <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
            <p className="text-lg text-gray-100 leading-relaxed text-center md:text-right">
              مطور ويب متخصص في React, Node.js, و Three.js.<br />
              أحب إنشاء تجارب تفاعلية مذهلة وتطبيقات حديثة.
            </p>

            {/* المهارات */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-2 text-center md:text-right">المهارات التقنية:</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['React', 'Node.js', 'Three.js', 'TypeScript', 'MongoDB', 'Express.js'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-blue-600/80 text-white rounded-full text-sm font-medium hover:bg-blue-700/90 transition-colors shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* روابط التواصل الاجتماعي */}
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              {[
                { icon: FaGithub, href: '#', label: 'GitHub' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaEnvelope, href: '#', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="w-12 h-12 bg-gray-900/80 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>

            {/* زر دعوة للعمل */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              دعني أعمل معك! 🚀
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}