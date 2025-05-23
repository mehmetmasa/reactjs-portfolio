import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobile detection function
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    // Don't apply custom cursor on mobile
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

    // Add custom cursor styles to body only on desktop
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if the element is clickable
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      // Clean up
      document.body.style.cursor = 'auto';
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 20,
        stiffness: 300
      }
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      border: '2px solid rgba(59, 130, 246, 0.6)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 20,
        stiffness: 300
      }
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-50 pointer-events-none rounded-full"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 z-40 pointer-events-none rounded-full bg-white opacity-20"
        style={{
          height: 6,
          width: 6,
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: 'spring',
          mass: 0.2,
          damping: 10,
          stiffness: 400
        }}
      />
    </>
  );
};

export default CustomCursor; 