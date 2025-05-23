import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card, { InfoCard, TimelineCard } from '../ui/Card';

function AboutSection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const timelineAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      }
    }
  };

  const cardHover = {
    rest: {
      scale: 1,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="bg-gray-900 py-12 lg:py-20" id="about">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Section header without animation */}
        <div>
          <SectionHeader
            subtitle="KISACA BEN"
            title="Hakkımda"
            description="2018'den beri Freelancer Yazılım Geliştirici olarak çalışıyorum. İsteğe özel yazılım geliştirme, yazılımlarda hata giderme, yeni özellik ekleme işlerini yapıyorum."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left side - About Me Summary with starry background and profile image */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeUp}
            whileHover="hover"
            initial="rest"
          >
            <motion.div variants={cardHover}>
              <Card
                backgroundImage="images/about/about-bg.jpeg"
                overlay={true}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_25px_rgba(0,0,0,0.6)] mb-6 mt-4"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src="images/about/profile.jpeg"
                    alt="Mehmet Maşa"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  Mehmet Maşa
                </motion.h3>

                <motion.p
                  className="text-blue-400 text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  Full Stack Web Developer
                </motion.p>

                <motion.p
                  className="text-gray-300 mb-8 leading-relaxed text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                Web geliştirme alanında çalışıyorum. PHP, Laravel, Codeigniter, Livewire, Inertia, NodeJS, ExpressJS, ReactJS, NextJS, JavaScript, Tailwind CSS, PostgreSQL, MongoDB, MySQL, Git gibi teknolojileri kullanarak kullanıcı odaklı web uygulamaları geliştiriyorum.
                </motion.p>

                {/* Personal info cards using our InfoCard component */}
                <div className="grid grid-cols-1 gap-4 w-full max-w-md mx-auto mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1 }}
                  >
                    <InfoCard
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      }
                      label="E-posta"
                      value="mehmetmasa@icloud.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1 }}
                  >
                    <InfoCard
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      }
                      label="Konum"
                      value="Balıkesir, Türkiye"
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right side - Education in a stylized timeline - using Card component */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeUp}
            whileHover="hover"
            initial="rest"
          >
            <motion.div variants={cardHover}>
              <Card variant="gradient" className="h-full flex flex-col">
                <motion.h3
                  className="text-2xl font-bold text-white mb-8 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-3 shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.5)",
                        "0 0 0 10px rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </motion.div>
                  <span>Eğitim Geçmişim</span>
                  <motion.div
                    className="ml-auto opacity-20"
                    animate={{
                      opacity: [0.2, 0.3, 0.2],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </motion.div>
                </motion.h3>

                {/* Education Timeline - Using TimelineCard components with motion */}
                <motion.div
                  className="relative flex-grow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={timelineAnimation}
                >
                  <motion.div
                    className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600/30 rounded-full"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  ></motion.div>

                  <div className="space-y-12 relative">
                    {/* Education Item 1 */}
                    <motion.div
                      className="pl-12 relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {/* Timeline node */}
                      <motion.div
                        className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-800 z-20"
                        whileHover={{ scale: 1.2 }}
                        whileInView={pulseAnimation}
                        viewport={{ once: true, amount: 0.7 }}
                      ></motion.div>

                      {/* Using TimelineCard component */}
                      <TimelineCard
                        title="Bilgisayar Mühendisliği"
                        subtitle="Balıkesir Üniversitesi"
                        period="2023 - ∞"
                        description="Yatay geçiş ile 2023 yılında Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümüne başladım. Şu an ikinci sınıf öğrencisiyim."
                      />
                    </motion.div>

                    {/* Education Item 2 */}
                    <motion.div
                      className="pl-12 relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {/* Timeline node */}
                      <motion.div
                        className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-800 z-20"
                        whileHover={{ scale: 1.2 }}
                        whileInView={{
                          ...pulseAnimation,
                          transition: {
                            ...pulseAnimation.transition,
                            delay: 0.4
                          }
                        }}
                        viewport={{ once: true, amount: 0.7 }}
                      ></motion.div>

                      {/* Using TimelineCard component */}
                      <TimelineCard
                        title="Bilgisayar Mühendisliği"
                        subtitle="Adnan Menderes Üniversitesi"
                        period="2021 - 2023"
                        description="Dikey geçiş ile Adnan Menderes Üniversitesi Bilgisayar Mühendisliği bölümüne başladım. 2023 yılında Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümüne geçiş yaptım."
                      />
                    </motion.div>

                    {/* Education Item 3 */}
                    <motion.div
                      className="pl-12 relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {/* Timeline node */}
                      <motion.div
                        className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-800 z-20"
                        whileHover={{ scale: 1.2 }}
                        whileInView={{
                          ...pulseAnimation,
                          transition: {
                            ...pulseAnimation.transition,
                            delay: 0.8
                          }
                        }}
                        viewport={{ once: true, amount: 0.7 }}
                      ></motion.div>

                      {/* Using TimelineCard component */}
                      <TimelineCard
                        title="Bilgisayar Programcılığı"
                        subtitle="Ege Üniversitesi"
                        period="2016 - 2019"
                        description="2016 yılında Ege Üniversitesi Bilgisayar Programcılığı bölümüne başladım. 2019 yılında mezun oldum. "
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Buttons section removed */}
      </motion.div>
    </section>
  );
}

export default AboutSection;
