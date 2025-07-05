import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useContext } from "react";
import { darkModeContext } from "../../context/dark-mode";

const Header = () => {
  const { changeColorMode, bgColor } = useContext(darkModeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: "/", icon: "🏠", name: 'الرئيسية' },
    { path: "/About", icon: "👤", name: 'من أنا' },
    { path: "/Projects", icon: "💼", name: 'المشاريع' },
    { path: "/Resume", icon: "📄", name: 'السيرة الذاتية' },
    { path: "/Contact-me", icon: "📧", name: 'تواصل معي' }
  ];

  // دالة للانتقال
  const handleNavigation = (path) => {
    // إغلاق القائمة إذا كانت مفتوحة
    setIsMenuOpen(false);
    
    // الانتقال
    navigate(path);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const isDarkMode = bgColor === "bg-gray-900";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${
        isDarkMode 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* الشعار */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                  : 'bg-gradient-to-r from-blue-400 to-purple-500'
              }`}
            >
              <span className="text-white font-bold text-lg">م</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              محمود عبد الحميد
            </motion.h1>
          </motion.div>

          {/* القائمة الرئيسية */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? isDarkMode 
                      ? 'text-blue-400' 
                      : 'text-blue-600'
                    : isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{ 
                    scaleX: location.pathname === item.path ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* أزرار التحكم */}
          <div className="flex items-center space-x-4">
            {/* زر تبديل الوضع المظلم */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={changeColorMode}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

            {/* زر القائمة للهواتف */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* القائمة المتحركة للهواتف */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`md:hidden absolute top-full left-0 right-0 ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } border-t ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-right px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? isDarkMode 
                        ? 'text-blue-400 bg-gray-800' 
                        : 'text-blue-600 bg-blue-50'
                      : isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;