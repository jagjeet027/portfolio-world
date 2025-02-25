import React, { useState } from 'react';
import { Home, Briefcase, Zap, User, Mail } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home', icon: <Home size={24} /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase size={24} /> },
  { id: 'skills', label: 'Skills', icon: <Zap size={24} /> },
  { id: 'about', label: 'About', icon: <User size={24} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={24} /> }
];

const MobileNav = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`bg-gray-900 text-white p-4 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="flex items-center space-x-4 max-w-screen-xl mx-auto">
          <div className="relative w-12 h-12">
            <img
              src="/api/placeholder/48/48"
              alt="Profile"
              className="rounded-full border-2 border-purple-500"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
          </div>
          <div>
            <h1 className="font-bold text-lg">Jagjeet jaiswal</h1>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </div>
      </div>
      <nav className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 text-white fixed bottom-0 left-0 right-0">
        <ul className="flex justify-around items-center max-w-screen-xl mx-auto">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`p-4 flex flex-col items-center space-y-1 relative group ${
                  currentPage === item.id 
                    ? 'text-purple-500' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {currentPage === item.id && (
                  <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-purple-500" />
                )}
                <span className="relative">
                  {item.icon}
                  {currentPage === item.id && (
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full -z-10" />
                  )}
                </span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;