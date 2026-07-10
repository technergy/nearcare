import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Programs', href: '/departments' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <Logo className="w-8 h-8 md:w-10 md:h-10" layout="horizontal" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`font-medium transition-colors font-sans text-[15px] ${location.pathname === link.href ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:bg-purple-700"
            >
              Appointment
              <span className="bg-teal-400 rounded-full p-1 -mr-3">
                <ChevronRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-500 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden origin-top ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-teal-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 bg-purple-600 text-white px-3 py-3 rounded-md text-base font-medium hover:bg-purple-700 transition-colors"
          >
            Appointment
            <ChevronRight className="w-5 h-5 text-teal-400" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

