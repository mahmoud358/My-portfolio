// import ThreeScene from "../../components/three-scene/ThreeScene"; // مسار الملف المناسب

import React, { useEffect, useState, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/header/Header';
import IconHeader from '../../components/icon-header/IconHeader';
// import RouteThumbnails from '../../components/route-thumbnails/RouteThumbnails';
import ThreeScene from '../../components/threejs/ThreeScene';
import { darkModeContext } from '../../context/dark-mode';
import { CameraProvider } from '../../context/camera-context';

const Layout = () => {
  const location = useLocation();
  const { bgColor, textColor } = useContext(darkModeContext);
  const [isLoading, setIsLoading] = useState(true);

  const isDarkMode = bgColor === "bg-gray-900";

  useEffect(() => {
    // محاكاة تحميل الصفحة
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // تأثيرات الانتقال
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  // تأثيرات التحميل
  const loadingVariants = {
    initial: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div
        variants={loadingVariants}
        initial="initial"
        exit="exit"
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            جاري التحميل...
          </motion.h2>
        </div>
      </motion.div>
    );
  }

  return (
    <CameraProvider>
      <div className={`min-h-screen transition-colors duration-500 ${bgColor} ${textColor} relative`}>
        {/* خلفية Three.js تغطي الشاشة بالكامل */}
        <div className="fixed inset-0 w-full h-full ">
          <ThreeScene />
        </div>

        {/* المحتوى الرئيسي في منتصف الصفحة مع تراكب */}
        <div className="relative z-20 flex flex-col min-h-screen items-center justify-center px-4 py-8">
          {/* <Header /> */}
          <div className="flex flex-col md:flex-row  w-full   mt-6">
            <IconHeader />
            {/* <main className="flex-1     rounded-2xl shadow-xl p-8  border border-white/20  my-8 flex flex-col justify-center items-center"> */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="min-h-[60vh] w-full flex-1 flex-col justify-center items-center md:ms-14"
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            {/* </main> */}
          </div>
          {/* الصور المصغرة للصفحات */}
          {/* <RouteThumbnails /> */}
        </div>

        {/* تأثيرات إضافية */}
        <div className="fixed bottom-4 right-4 z-30 hidden lg:block">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`w-4 h-4 rounded-full ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
            } shadow-lg`}
          />
        </div>
      </div>
    </CameraProvider>
  );
};

export default Layout;
