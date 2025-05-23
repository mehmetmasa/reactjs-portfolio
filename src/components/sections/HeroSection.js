import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12
      }
    }
  };

  const imageAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  const decorationAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const float = {
    y: [0, -15, 0],
    scale: [1, 1.05, 1],
    rotate: [0, 1, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  };

  const floatWithDelay = {
    y: [0, -15, 0],
    scale: [1, 1.05, 1],
    rotate: [0, 1, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      delay: 0.5
    }
  };

  return (
    <section id="home" className="py-32 pb-0 overflow-hidden relative bg-gray-900 h-screen">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black opacity-90 z-0"></div>

      {/* Animated decorative elements */}
      <motion.div
        initial="hidden"
        animate={{
          ...decorationAnimation.visible,
          ...float
        }}
        variants={decorationAnimation}
        className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={{
          ...decorationAnimation.visible,
          ...floatWithDelay
        }}
        variants={decorationAnimation}
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left section: Hero content with staggered animations */}
          <motion.div
            className="lg:w-1/2 text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Mehmet Maşa</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-blue-400 font-medium mb-6 h-[40px]"
              variants={fadeIn}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Web Developer',
                  1000,
                  'Backend Developer',
                  1000,
                  'Frontend Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed"
              variants={fadeIn}
            >
              Merhaba, ben Mehmet Maşa 👋<br /> Web geliştirme alanında çalışan bir yazılım geliştiriciyim.
            </motion.p>

            <motion.div
              className="flex flex-row sm:justify-start gap-4"
              variants={fadeIn}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  href="#projects"
                  variant="primary"
                >
                  Projelerim
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  href="#contact"
                  variant="secondary"
                >
                  İletişime Geç
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right section: Code editor with animated elements */}
          <motion.div
            className="lg:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
          >
            <div className="relative z-10 flex items-center justify-center h-full">
              {/* Code editor window */}
              <div className="w-full max-w-lg bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                {/* Editor header with controls */}
                <div className="bg-gray-900/80 px-4 py-2 flex items-center border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Code editor content */}
                <div className="p-4 font-mono text-sm">
                  <div className="mt-2">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-orange-300">'Mehmet Maşa'</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">title</span><span className="text-white">:</span> <span className="text-orange-300">'Full Stack Web Developer'</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">skills</span><span className="text-white">:</span> <span className="text-yellow-300">[</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-300">'PHP'</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-300">'NodeJS '</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-300">'ReactJS'</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-300">'SQL'</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-300">'Tailwind CSS'</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-300">]</span><span className="text-white">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">contact</span><span className="text-white">:</span> <span className="text-orange-300">'mehmetmasa@icloud.com'</span>
                  </div>
                  <div>
                    <span className="text-yellow-300">{`}`}</span><span className="text-white">;</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-purple-400">function</span> <span className="text-blue-400">createAmazingWebsites</span><span className="text-white">() {`{`}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400">return</span> <span className="text-blue-400">developer</span><span className="text-white">.</span><span className="text-blue-400">skills</span><span className="text-white">.</span><span className="text-yellow-300">map</span><span className="text-white">{`(skill => magic(skill));`}</span>
                  </div>
                  <div>
                    <span className="text-white">{`}`}</span>
                  </div>
                </div>
              </div>

              {/* Floating technology badges */}
              <motion.div
                className="absolute top-10 -left-6 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">React.js</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 -right-6 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Tailwind CSS</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scrolling skills marquee (desktop only) */}
      {!isMobile && (
        <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-gray-800 bg-black/50">
          <div className="skills-marquee">
            <div className="skills-track">
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">PHP</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">NODEJS</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">JAVASCRIPT</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">Tailwind CSS</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">Laravel</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">ExpressJS</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">PostgreSQL</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">MongoDB</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">Git</span></div>

              {/* Duplicate items for continuous flow */}
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">PHP</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">NODEJS</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">JAVASCRIPT</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">Tailwind CSS</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">Laravel</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">ExpressJS</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">PostgreSQL</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">MongoDB</span></div>
              <div className="skills-item"><span className="text-blue-400 mr-3">✦</span><span className="text-white font-semibold">Git</span></div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;