import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const headerClass = isScrolled
    ? 'py-3 bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-gray-800'
    : 'py-5 bg-transparent';

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-blue-400' : 'text-white'}`}>
            Mehmet<span className={isScrolled ? 'text-gray-200' : 'text-blue-300'}> Maşa</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-gray-200 hover:text-blue-400 font-medium">
            Anasayfa
          </a>
          <a href="#about" className="text-gray-200 hover:text-blue-400 font-medium">
            Hakkımda
          </a>
          <a href="#skills" className="text-gray-200 hover:text-blue-400 font-medium">
            Yeteneklerim
          </a>
          <a href="#projects" className="text-gray-200 hover:text-blue-400 font-medium">
            Projeler
          </a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            href="#contact"
            variant="secondary"
            size="md"
          >
            İletişime Geç
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü aç/kapa"
        >
          <div className={`w-7 h-5 flex flex-col justify-between relative ${isMobileMenuOpen ? 'transform' : ''}`}>
            <span className={`block h-0.5 w-7 rounded transition-all duration-300 ${isMobileMenuOpen
              ? 'bg-white rotate-45 absolute top-2'
              : 'bg-white'}`}></span>
            <span className={`block h-0.5 w-7 rounded transition-all duration-300 ${isMobileMenuOpen
              ? 'opacity-0'
              : 'bg-white'}`}></span>
            <span className={`block h-0.5 w-7 rounded transition-all duration-300 ${isMobileMenuOpen
              ? 'bg-white -rotate-45 absolute top-2'
              : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden transition-opacity z-20 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: '#0f172a',
          boxShadow: '0 0 25px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="flex flex-col h-screen bg-gray-900">
          {/* Menu Header */}
          <div className="p-6 pb-4 border-b border-gray-800 bg-gray-900">
            <div className="text-xl font-bold text-white mb-1">
              Mehmet<span className="text-blue-400"> Maşa</span>
            </div>
            <p className="text-blue-300 text-sm opacity-80">Freelance Yazılım Geliştirici</p>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 bg-gray-900">
            <nav className="flex flex-col space-y-1">
              <a
                href="#home"
                className="flex items-center py-3 px-4 rounded-xl transition-all text-gray-200 hover:bg-gray-800/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Anasayfa</span>
              </a>

              <a
                href="#about"
                className="flex items-center py-3 px-4 rounded-xl transition-all text-gray-200 hover:bg-gray-800/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Hakkımda</span>
              </a>

              <a
                href="#skills"
                className="flex items-center py-3 px-4 rounded-xl transition-all text-gray-200 hover:bg-gray-800/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span>Yeteneklerim</span>
              </a>

              <a
                href="#projects"
                className="flex items-center py-3 px-4 rounded-xl transition-all text-gray-200 hover:bg-gray-800/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span>Projeler</span>
              </a>

              <a
                href="#contact"
                className="flex items-center py-3 px-4 rounded-xl transition-all text-gray-200 hover:bg-gray-800/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>İletişim</span>
              </a>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-800 bg-gray-900">
            <Button
              href="#contact"
              variant="secondary"
              className="w-full flex items-center justify-center gap-2"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              }
              iconPosition="left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişime Geç
            </Button>

            <div className="flex justify-center gap-4 mt-6">
              <a href="https://github.com/mehmetmasa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/mehmetmasa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://x.com/mehmetmasa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://facebook.com/mehmetmasa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;