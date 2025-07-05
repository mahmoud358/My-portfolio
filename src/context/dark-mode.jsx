import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // التحقق من التفضيل المحفوظ
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // التحقق من تفضيل النظام
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    // حفظ التفضيل في localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    // تطبيق الوضع على document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // الاستماع لتغييرات تفضيل النظام
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // تحديث الوضع فقط إذا لم يكن هناك تفضيل محفوظ
      const saved = localStorage.getItem('darkMode');
      if (saved === null) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    isDarkMode,
    toggleDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Context القديم للتوافق مع المكونات الموجودة
export const darkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-gray-800");

  const changeColorMode = () => {
    if (bgColor === "bg-white") {
      setBgColor("bg-gray-900");
      setTextColor("text-white");
    } else {
      setBgColor("bg-white");
      setTextColor("text-gray-800");
    }
  };

  return (
    <darkModeContext.Provider value={{ bgColor, textColor, changeColorMode }}>
      {children}
    </darkModeContext.Provider>
  );
};