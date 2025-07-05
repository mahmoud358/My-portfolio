import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { darkModeContext } from '../../context/dark-mode';
import { 
  MdHome, 
  MdPerson, 
  MdWork, 
  MdDescription, 
  MdEmail 
} from 'react-icons/md';

const IconHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bgColor, textColor } = useContext(darkModeContext);

  const isDarkMode = bgColor === "bg-gray-900";

  const navItems = [
    { path: "/", icon: MdHome, name: 'الرئيسية' },
    { path: "/About", icon: MdPerson, name: 'من أنا' },
    { path: "/Projects", icon: MdWork, name: 'المشاريع' },
    { path: "/Resume", icon: MdDescription, name: 'السيرة الذاتية' },
    { path: "/Contact-me", icon: MdEmail, name: 'تواصل معي' }
  ];

  // دالة للانتقال
  const handleNavigation = (path) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* شريط التنقل العمودي */}
        <motion.div
          className={`w-1 h-32 rounded-full ${
            isDarkMode 
              ? 'bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500' 
              : 'bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400'
          }`}
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* عناصر التنقل */}
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            variants={itemVariants}
            className="relative group"
          >
            <motion.button
              onClick={() => handleNavigation(item.path)}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className={`relative p-4 rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50'
                    : 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-400/50'
                  : isDarkMode
                  ? 'bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-sm'
                  : 'bg-white/50 hover:bg-white/70 backdrop-blur-sm'
              }`}
            >
              <item.icon 
                className={`text-2xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : isDarkMode
                    ? 'text-gray-300 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />

              {/* تأثير التوهج */}
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/20'
                }`}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* تأثير النبض */}
              {location.pathname === item.path && (
                <motion.div
                  className={`absolute inset-0 rounded-full ${
                    isDarkMode ? 'bg-blue-500/30' : 'bg-blue-400/30'
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.button>

            {/* اسم الصفحة */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className={`absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap ${
                isDarkMode
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white text-gray-800 shadow-lg'
              }`}
            >
              {item.name}
            </motion.div>
          </motion.div>
        ))}

        {/* شريط التنقل العمودي السفلي */}
        <motion.div
          className={`w-1 h-32 rounded-full ${
            isDarkMode 
              ? 'bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500' 
              : 'bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400'
          }`}
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* مؤشر الموقع الحالي */}
        <motion.div
          className={`absolute left-0 w-1 rounded-full ${
            isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
          }`}
          initial={{ height: 0 }}
          animate={{ 
            height: 40,
            y: navItems.findIndex(item => item.path === location.pathname) * 96 + 128
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </motion.aside>
  );
};

export default IconHeader; 