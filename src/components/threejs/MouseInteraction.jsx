import React, { useEffect, useState } from 'react';

const MouseInteraction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });

      // إضافة جزيئات جديدة عند تحريك الماوس
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: event.clientX,
          y: event.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1
        };
        
        setParticles(prev => [...prev, newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 0.02
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* تأثير الماوس */}
      <div
        className="mouse-follow"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10
        }}
      />
      
      {/* الجزيئات المتحركة */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="space-particle animate-star-twinkle"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.life,
            transform: `scale(${particle.life})`
          }}
        />
      ))}
      
      {/* تأثير التوهج حول الماوس */}
      <div
        className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          transform: 'translateZ(0)'
        }}
      />
    </div>
  );
};

export default MouseInteraction; 