import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation().pathname;

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'MENU', href: '/menu' },
    { name: 'ABOUT', href: '/about' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 text-white transition-all duration-300 ${
          scrolled ? 'bg-primary bg-opacity-95 shadow-md' : 'bg-primary bg-opacity-90'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-accent">Imran's Restaurant</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className={`hover:text-accent transition-colors duration-300 ${
                    location === item.href ? 'text-accent' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/#reservations" 
                className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300"
              >
                RESERVE
              </Link>
            </div>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Open mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-2/3 h-full bg-primary z-50 p-6 shadow-xl"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={closeMenu}
                className="text-white focus:outline-none"
                aria-label="Close mobile menu"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-white">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="py-2 border-b border-gray-700 hover:text-accent"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/#reservations" 
                className="mt-4 px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-white text-center"
                onClick={closeMenu}
              >
                RESERVE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;