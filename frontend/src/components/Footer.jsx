import React from 'react';
import { Github, Linkedin, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hardik-pandey-profile/',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hardik0903',
      icon: <Github size={24} />,
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/hardikpandey',
      icon: <FileText size={24} />,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@hardikpandey0903',
      icon: <MessageCircle size={24} />,
    },
  ];

  const contactInfo = [
    { label: '+91 9321646172' },
    { label: '+91 9167180793' },
  ];

  return (
    <footer className="bg-black border-t border-[#04CEFB]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-['Press_Start_2P'] text-[#04CEFB] text-lg mb-4">Hardik Pandey</h3>
            <p className="text-gray-400 text-sm">
              AI & ML Engineering student passionate about building end to end solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <p key={index} className="text-gray-400 text-sm font-['Press_Start_2P'] text-xs">
                  {info.label}
                </p>
              ))}
              <p className="text-gray-400 text-sm">hardikpandey0903@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-[#04CEFB] hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#04CEFB]/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hardik Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;