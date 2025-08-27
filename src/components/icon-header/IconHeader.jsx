import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  MdHome, 
  MdPerson, 
  MdWork, 
  MdDescription, 
  MdEmail 
} from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const IconHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const navRefs = useRef({});
  const containerRef = useRef(null);

  const navItems = [
    { path: "/", icon: MdHome, name: 'Home' },
    { path: "/About", icon: MdPerson, name: 'About' },
    { path: "/Projects", icon: MdWork, name: 'Projects' },
    { path: "/Resume", icon: MdDescription, name: 'Resume' },
    { path: "/Contact-me", icon: MdEmail, name: 'Contact' }
  ];

  // دالة لحساب موقع المؤشر بدقة
  const calculateIndicatorPosition = () => {
    const currentPath = location.pathname;
    const activeIndex = navItems.findIndex(item => item.path === currentPath);
    
    if (activeIndex === -1 || !navRefs.current[activeIndex] || !containerRef.current) {
      return 0;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const activeElementRect = navRefs.current[activeIndex].getBoundingClientRect();
    
    // حساب الموقع النسبي للعنصر النشط بالنسبة للحاوية
    const relativePosition = activeElementRect.top - containerRect.top;
    
    // تعديل الموقع ليكون في وسط العنصر
    const elementHeight = activeElementRect.height;
    const indicatorHeight = 40; // ارتفاع المؤشر
    const adjustedPosition = relativePosition + (elementHeight / 2) - (indicatorHeight / 2);
    
    return Math.max(0, adjustedPosition);
  };

  // تحديث موقع المؤشر عند تغيير الصفحة أو إعادة تحميل الصفحة
  useEffect(() => {
    const updatePosition = () => {
      const position = calculateIndicatorPosition();
      setIndicatorPosition(position);
    };

    // تحديث فوري
    updatePosition();

    // تحديث بعد فترة قصيرة للتأكد من تحميل جميع العناصر
    const timeoutId = setTimeout(updatePosition, 100);
    
    // تحديث إضافي بعد تحميل الصفحة بالكامل
    const loadTimeoutId = setTimeout(updatePosition, 500);

    // إضافة مستمع لتغيير حجم النافذة
    window.addEventListener('resize', updatePosition);
    
    // إضافة مستمع لتحميل الصفحة
    window.addEventListener('load', updatePosition);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(loadTimeoutId);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('load', updatePosition);
    };
  }, [location.pathname]);

  // دالة للانتقال
  const handleNavigation = (path,isMobile=false) => {
    if(isMobile){
      setIsMenuOpen(false);
    }
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
  const menuVariants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <motion.aside
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 text-gray-800"
    >
      <div className="hidden md:flex flex-col items-center space-y-6">
        {/* شريط التنقل العمودي */}
        <motion.div
          className="w-1 h-32 rounded-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"
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
            ref={(el) => navRefs.current[index] = el}
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
                  ? 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-400/50'
                  : 'bg-white/50 hover:bg-white/70 backdrop-blur-sm'
              }`}
            >
              <item.icon 
                className={`text-2xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />

              {/* تأثير التوهج */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* تأثير النبض */}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400/30"
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
              className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap bg-white text-gray-800 shadow-lg"
            >
              {item.name}
            </motion.div>
          </motion.div>
        ))}

        {/* شريط التنقل العمودي السفلي */}
        <motion.div
          className="w-1 h-32 rounded-full bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400"
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

        {/* مؤشر الموقع الحالي - محسوب بدقة */}
        <motion.div
          className="absolute left-0 w-1 rounded-full bg-blue-500"
          initial={{ height: 0 }}
          animate={{ 
            height: 40,
            y: indicatorPosition
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
    </motion.aside>

    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed md:hidden top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-gray-900/80 border-gray-700"
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
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500"
            >
              <span className="text-white font-bold text-lg">M</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-white"
            >
              Mahmoud Abdelhamid
            </motion.h1>
          </motion.div>

          {/* أزرار التحكم */}
          <div className="flex items-center space-x-4">
            {/* زر القائمة للهواتف */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white"
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
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.path,true)}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-gray-800'
                      : 'text-gray-600 hover:text-white hover:bg-gray-800'
                  }`}
                >
                <item.icon className='text-2xl' />  {item.name } 
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
};

export default IconHeader; 
