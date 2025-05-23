import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Technology stacks
  const skills = [
    {
      category: "Backend",
      description: "Güvenli, ölçeklenebilir ve performanslı sunucu tarafı uygulamalar geliştiriyorum.",
      items: [
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          applications: ["Web Uygulamaları", "API Geliştirme", "Sunucu Tarafı Mantık"]
        },
        {
          name: "Laravel",
          icon: "https://www.svgrepo.com/show/353985/laravel.svg",
          applications: ["MVC Web Uygulamaları", "RESTful API'ler", "Authentication & Authorization"]
        },
        {
          name: "Codeigniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
          applications: ["Hafif Web Uygulamaları", "API Geliştirme", "CRUD İşlemleri"]
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          applications: ["Gerçek Zamanlı Uygulamalar", "RESTful API'ler", "Sunucu Tarafı Scriptler"]
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          applications: ["Web Sunucuları", "API Gateway", "Middleware Çözümleri"]
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          applications: ["Veritabanı Yönetimi", "SQL Sorguları", "Veri Saklama"]
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          applications: ["Veritabanı Yönetimi", "SQL Sorguları", "Veri Analizi"]
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          applications: ["NoSQL Veritabanı", "Şemasız Veri Saklama", "Hızlı Veri Erişimi"]
        },
      ]
    },
    {
      category: "Frontend",
      description: "Modern ve kullanıcı dostu web arayüzleri geliştiriyorum.",
      items: [
        {
          name: "JavaScript",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          applications: ["DOM Manipülasyonu", "API Entegrasyonları", "Kompleks Animasyonlar"]
        },
        {
          name: "React.js",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          applications: ["Single Page Applications", "Interaktif Dashboardlar", "E-ticaret Arayüzleri"]
        },
        {
          name: "Next.js",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          applications: ["SEO Optimizasyonu", "Server-Side Rendering", "Statik Site Oluşturma"]
        },
        {
          name: "HTML5",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          applications: ["SEO Uyumlu Yapı", "Semantik Web", "Erişilebilir Siteler"]
        },
        {
          name: "CSS3",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          applications: ["Responsive Tasarımlar", "CSS Animasyonları", "Kompleks Layoutlar"]
        },
        {
          name: "Tailwind",
          level: 90,
          icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
          applications: ["Hızlı UI Geliştirme", "Tutarlı Tasarım Sistemi", "Dark/Light Tema"]
        },
      ]
    },
    {
      category: "Araçlar",
      description: "Geliştirme sürecini hızlandıran ve kalitesini artıran profesyonel araçlar.",
      items: [
        {
          name: "Git",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          applications: ["Versiyon Kontrolü", "Branch Stratejileri", "Kod Tarihçesi"]
        },
        {
          name: "GitHub",
          level: 85,
          icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
          applications: ["Açık Kaynak Katkıları", "CI/CD Pipeline", "Kod İncelemesi"]
        },
        {
          name: "VS Code",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          applications: ["Kod Editörü", "Extension Geliştirme", "Entegre Terminal"]
        },
        {
          name: "WebStorm",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg",
          applications: ["JavaScript IDE", "Kod Refactoring", "Gelişmiş Debugging"]
        },
      ]
    }
  ];

  // Determine active category by listening to scroll event - Simple approach
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find and check element for each category by ID
      for (let i = 0; i < skills.length; i++) {
        const element = document.getElementById(`skill-category-${i}`);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.pageYOffset;
        const bottom = top + rect.height;

        // Is element in visible area?
        if (scrollPosition >= top && scrollPosition <= bottom) {
          if (activeCategory !== i) {
            setActiveCategory(i);
          }
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeCategory, skills.length]);

  // Change category and scroll on click - by ID
  const scrollToCategory = (index) => {
    setActiveCategory(index);

    const element = document.getElementById(`skill-category-${index}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };


  return (
    <section className="bg-gray-900 py-12 lg:py-20 skills-section-container" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 skills-container">
        <SectionHeader
          subtitle="YETENEKLERİM"
          title="Teknik Becerilerim"
          description="Yazılım geliştirme sürecinde kullandığım teknolojiler."
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-10">
          {/* Left side - Sticky sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 pt-2">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg overflow-hidden z-50">
                {skills.map((skillGroup, groupIndex) => (
                  <button
                    key={groupIndex}
                    className={`relative w-full text-left p-4 border-l-4 transition-all duration-300 ${
                      activeCategory === groupIndex
                        ? 'border-blue-500 text-white bg-blue-500/20'
                        : 'border-transparent text-gray-400 hover:bg-gray-700/30 hover:text-gray-300'
                    }`}
                    onClick={() => scrollToCategory(groupIndex)}
                    aria-current={activeCategory === groupIndex ? 'true' : 'false'}
                  >
                    <span className="relative z-10">{skillGroup.category}</span>
                    {activeCategory === groupIndex && (
                      <motion.span
                        className="absolute inset-0 bg-blue-500/10"
                        layoutId="activeCategoryBackground"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Skill sections */}
          <div className="lg:w-3/4">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="scroll-mt-32 skill-category"
                id={`skill-category-${groupIndex}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
              >
                <motion.div
                  className="mb-8"
                  variants={itemVariants}
                >
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                    {skillGroup.category}
                  </h2>
                  <p className="text-gray-400 mt-2">{skillGroup.description}</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4 mb-12">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center justify-center bg-gray-800/60 rounded-xl border border-gray-700/50 p-6 shadow-lg group transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-blue-900/30"
                      variants={itemVariants}
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-900/80 rounded-lg p-3 border border-gray-700/50 shadow-lg mb-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                      <span className="text-white text-base font-medium text-center mt-1">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;