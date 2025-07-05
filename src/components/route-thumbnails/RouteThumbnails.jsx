import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const RouteThumbnails = () => {
  const location = useLocation();

  // صور مصغرة لكل صفحة
  const routeThumbnails = {
    '/': {
      icon: '🏠',
      title: 'الرئيسية',
      description: 'مرحباً بك في عالمي الرقمي',
      color: 'from-blue-500 to-cyan-500'
    },
    '/About': {
      icon: '👨‍💻',
      title: 'عني',
      description: 'تعرف على قصتي وخبراتي',
      color: 'from-purple-500 to-pink-500'
    },
    '/Projects': {
      icon: '🚀',
      title: 'المشاريع',
      description: 'استكشف أعمالي وإبداعاتي',
      color: 'from-green-500 to-emerald-500'
    },
    '/Resume': {
      icon: '📄',
      title: 'السيرة الذاتية',
      description: 'مؤهلاتي ومهاراتي',
      color: 'from-orange-500 to-red-500'
    },
    '/Contact-me': {
      icon: '📧',
      title: 'تواصل معي',
      description: 'دعنا نبدأ مشروعاً معاً',
      color: 'from-indigo-500 to-purple-500'
    }
  };

  const currentRoute = routeThumbnails[location.pathname] || routeThumbnails['/'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-20 right-6 z-30 pointer-events-none"
    >
      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${currentRoute.color} shadow-2xl backdrop-blur-sm`}>
        {/* تأثيرات الخلفية */}
        <div className="absolute inset-0 bg-white/10 rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
        
        {/* المحتوى */}
        <div className="relative z-10 text-center">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-4xl mb-2"
          >
            {currentRoute.icon}
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white font-bold text-lg mb-1"
          >
            {currentRoute.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-sm"
          >
            {currentRoute.description}
          </motion.p>
        </div>

        {/* تأثيرات إضافية */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/20 rounded-full"
        />
      </div>

      {/* خط متصل */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-white/50 to-transparent"
      />
    </motion.div>
  );
};

export default RouteThumbnails; 