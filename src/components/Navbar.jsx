import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Home', 'Projeto', 'Figma', 'Estatísticas', 'Vídeo'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isMenuOpen &&
        !target.closest('#menu-button') &&
        !target.closest('#mobile-nav')
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-5 left-0 right-0 mx-auto w-[95%] sm:w-[85%] md:w-[75%] lg:w-[50%] max-w-[1200px] h-[60px] flex justify-between items-center bg-black/30 rounded-[40px] px-3 sm:px-6 md:px-8 shadow-lg z-[1000]">
   

      {/* Botão hambúrguer */}
      <button
        id="menu-button"
        className="flex md:hidden w-8 h-8 sm:w-9 sm:h-9 bg-white/20 border-2 border-white/40 rounded-md flex-col justify-center items-center relative z-[1000]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-center items-center transition-all duration-300">
          <div
            className={`w-4 sm:w-5 h-[2px] bg-white my-[2px] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-x-[3px] translate-y-[3px]' : ''
            }`}
          />
          <div
            className={`w-4 sm:w-5 h-[2px] bg-white my-[2px] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-4 sm:w-5 h-[2px] bg-white my-[2px] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 translate-x-[3px] -translate-y-[3px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Menu desktop */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-2 lg:gap-4 list-none">
          {menuItems.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.1 + (index * 0.1),
                duration: 1.5
              }}
            >
              <a
                href={`#${item}`}
                className="text-white px-2 lg:px-4 py-2 rounded-lg hover:bg-white/15 transition text-sm lg:text-base"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      <nav
        id="mobile-nav"
        className={`fixed top-[72px] left-0 right-0 mx-auto w-[95%] sm:w-[90%] max-w-[1200px] bg-black/30 rounded-[40px] flex flex-col p-4 transition-all duration-300 z-[999] ${
          isMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        } md:hidden`}
      >
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          {menuItems.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.1 + (index * 0.1),
                duration: 1.5
              }}
            >
              <a
                href={`#${item}`}
                onClick={closeMenu}
                className="block w-full text-center text-white text-base py-2 px-4 transition hover:bg-white/15"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
