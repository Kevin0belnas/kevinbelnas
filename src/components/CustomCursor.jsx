// src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out hidden lg:block"
        style={{
          left: `${position.x - 8}px`,
          top: `${position.y - 8}px`,
        }}
      >
        <div className={`w-4 h-4 rounded-full bg-blue-500 mix-blend-difference ${
          isHovering ? 'scale-150' : ''
        } transition-transform duration-300`} />
      </div>
      <div 
        className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-blue-400 ${
          isHovering ? 'scale-75 opacity-50' : 'scale-100'
        } transition-all duration-300`} />
      </div>
    </>
  );
};

export default CustomCursor;