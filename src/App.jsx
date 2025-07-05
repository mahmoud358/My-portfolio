import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes';
import MouseInteraction from './components/threejs/MouseInteraction';
import { DarkModeContextProvider } from './context/dark-mode';
import { CameraProvider } from './context/camera-context';
import './App.css';

function App() {
  return (
    <>
      {/* عنصر اختبار Tailwind */}
      {/* <div className="text-red-500 font-bold">Hello Tailwind</div> */}
      {/* باقي الكود */}
      <DarkModeContextProvider>
        <RouterProvider router={router}>
          <CameraProvider>
            {/* تفاعل الماوس */}
            <MouseInteraction />
          </CameraProvider>
        </RouterProvider>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
