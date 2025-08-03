import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes';
import MouseInteraction from './components/threejs/MouseInteraction';
import { DarkModeContextProvider } from './context/dark-mode';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <>
      {/* عنصر اختبار Tailwind */}
      {/* <div className="text-red-500 font-bold">Hello Tailwind</div> */}
      {/* باقي الكود */}
      <DarkModeContextProvider>
        <RouterProvider router={router} />
        <MouseInteraction />
      </DarkModeContextProvider>
      <Toaster />
    </>
  );
}

export default App;
