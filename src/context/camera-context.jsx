import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CameraContext = createContext();

export const useCamera = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCamera must be used within a CameraProvider');
  }
  return context;
};

export const CameraProvider = ({ children }) => {
  const location = useLocation();
  const [cameraState, setCameraState] = useState({
    position: [0, 0, 60],
    rotation: [0, 0, 0],
    fov: 75,
    target: [0, 0, 0]
  });
  
  const [backgroundState, setBackgroundState] = useState({
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
    intensity: 1,
    color: '#4ECDC4'
  });

  // إعدادات الكاميرا والخلفية لكل صفحة
  const pageSettings = {
    '/': {
      camera: {
        position: [0, 0, 60],
        rotation: [0, 0, 0],
        fov: 75,
        target: [0, 0, 0]
      },
      background: {
        gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        intensity: 1,
        color: '#4ECDC4'
      }
    },
    '/About': {
      camera: {
        position: [30, 20, 50],
        rotation: [0.2, 0.3, 0],
        fov: 80,
        target: [10, 5, 0]
      },
      background: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #8B5CF6 100%)',
        intensity: 1.2,
        color: '#FF6B6B'
      }
    },
    '/Projects': {
      camera: {
        position: [-40, -30, 70],
        rotation: [-0.3, -0.4, 0.1],
        fov: 85,
        target: [-15, -10, 0]
      },
      background: {
        gradient: 'linear-gradient(135deg, #16213e 0%, #0f3460 25%, #533483 50%, #8B5CF6 75%, #EC4899 100%)',
        intensity: 1.5,
        color: '#F7DF1E'
      }
    },
    '/Resume': {
      camera: {
        position: [20, -40, 55],
        rotation: [0.4, 0.2, -0.1],
        fov: 70,
        target: [5, -15, 0]
      },
      background: {
        gradient: 'linear-gradient(135deg, #0f3460 0%, #533483 25%, #8B5CF6 50%, #EC4899 75%, #F59E0B 100%)',
        intensity: 1.3,
        color: '#10B981'
      }
    },
    '/Contact-me': {
      camera: {
        position: [-30, 40, 65],
        rotation: [-0.2, -0.3, 0.2],
        fov: 90,
        target: [-10, 15, 0]
      },
      background: {
        gradient: 'linear-gradient(135deg, #533483 0%, #8B5CF6 25%, #EC4899 50%, #F59E0B 75%, #EF4444 100%)',
        intensity: 1.4,
        color: '#8B5CF6'
      }
    }
  };

  // تحديث الكاميرا والخلفية عند تغيير الصفحة
  useEffect(() => {
    const currentPath = location.pathname;
    const settings = pageSettings[currentPath] || pageSettings['/'];
    
    // تحريك الكاميرا بسلاسة
    setCameraState(prev => ({
      ...prev,
      ...settings.camera
    }));
    
    // تغيير الخلفية بسلاسة
    setBackgroundState(prev => ({
      ...prev,
      ...settings.background
    }));
  }, [location.pathname]);

  // دالة لتغيير الكاميرا يدوياً
  const updateCamera = (newState) => {
    setCameraState(prev => ({
      ...prev,
      ...newState
    }));
  };

  // دالة لتغيير الخلفية يدوياً
  const updateBackground = (newState) => {
    setBackgroundState(prev => ({
      ...prev,
      ...newState
    }));
  };

  // دالة للانتقال السلس إلى صفحة معينة
  const transitionToPage = (path) => {
    const settings = pageSettings[path];
    if (settings) {
      setCameraState(prev => ({
        ...prev,
        ...settings.camera
      }));
      
      setBackgroundState(prev => ({
        ...prev,
        ...settings.background
      }));
    }
  };

  const value = {
    cameraState,
    backgroundState,
    updateCamera,
    updateBackground,
    transitionToPage,
    currentPage: location.pathname
  };

  return (
    <CameraContext.Provider value={value}>
      {children}
    </CameraContext.Provider>
  );
}; 