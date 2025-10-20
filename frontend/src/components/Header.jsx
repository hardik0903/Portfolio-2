import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#04CEFB]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-['Press_Start_2P'] text-[#04CEFB] text-sm sm:text-base hover:text-white transition-colors duration-300">
            HP
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:text-[#04CEFB] transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#04CEFB] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <a
            href="/assets/Hardik_Pandey_Resume.pdf"
            download
            className="hidden md:block bg-[#04CEFB] text-black px-6 py-2 rounded-md font-semibold hover:bg-white transition-all duration-300 hover:scale-105 transform"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#04CEFB] hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#04CEFB]/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-[#04CEFB] transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/assets/Hardik_Pandey_Resume.pdf"
              download
              className="block bg-[#04CEFB] text-black px-6 py-3 rounded-md font-semibold hover:bg-white transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;