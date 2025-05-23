import React, { useState, useEffect, useRef, useMemo } from 'react';
import SectionHeader from '../ui/SectionHeader';

function ProjectsSection() {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Mikpa",
      image: "/images/projects/mikpa.png",
      category: "Kurumsal Websitesi",
      tags: ["PHP", "Laravel", "MySQL"],
      url: "https://mikpa.com"
    },
    {
      id: 2,
      title: "GNCStore",
      image: "/images/projects/cihazsat.png",
      category: "Kurumsal Websitesi",
      tags: ["Laravel","Livewire","Filamentphp"],
      url: "https://cihaz-sat.gncservis.com/"
    },
    {
      id: 3,
      title: "Finans CMS",
      image: "/images/projects/finans.png",
      category: "CMS",
      tags: ["Laravel", "Livewire", "MySQL"],
      url: "https://finans.mikpa.com"
    }
  ], []);

  useEffect(() => {
    projectsRef.current = projects.map((_, i) => projectsRef.current[i] || React.createRef());
  }, [projects]);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      for (let i = 0; i < projectsRef.current.length; i++) {
        const ref = projectsRef.current[i];
        if (!ref.current) continue;

        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Handle project click
  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-gray-900 py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="pt-12 max-w-3xl mx-auto text-center">
          <SectionHeader
            subtitle="PROJELERİM"
            title="Son Çalışmalarım"
            description="Modern teknolojiler kullanarak geliştirdiğim projelerden bazıları. Detaylı bilgi için projelere tıklayabilirsiniz."
            centered={true}
          />
        </div>

        {/* Projects Section - Web */}
        {!isMobile && (
          <div ref={containerRef} className="relative">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={projectsRef.current[index]}
                className="h-auto md:h-[90vh] flex items-center justify-center sticky top-20"
              >
                <div className="w-full max-w-5xl">
                  <div
                    className="relative w-full bg-gray-800/20 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                    onClick={() => handleProjectClick(project.url)}>
                    {/* Project Image */}
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill object-center"
                      />

                      {/* Overlay gradient - only at bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                    </div>

                    {/* Project Detail */}
                    <div className="absolute bottom-8 left-4 z-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h3>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags && project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-8 right-8 z-10">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-300">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Section - Mobile */}
        {isMobile && (
          <div className="mt-6 grid gap-3">
            {projects.map((project, index) => (
              <div key={index} className="mb-2">
                <div
                  className="relative w-full bg-gray-800/20 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => handleProjectClick(project.url)}>
                  {/* Project Image */}
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay gradient - only at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                  </div>

                  {/* Project Information */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tags && project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-gray-300">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
