import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'NDIS Services', href: '/#services' },
    { name: 'Care Programs', href: '/#programs' },
    { name: 'Policies', href: '/compliance' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 no-print" aria-label="Main Navigation">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" aria-label="Near Care Support Home">
              <Logo className="h-16 w-auto md:h-20" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/');
              return link.href.includes('#') ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-medium transition-colors font-sans text-[15px] px-2 py-1.5 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`font-medium transition-colors font-sans text-[15px] px-2 py-1.5 rounded-lg ${
                    isActive 
                      ? 'text-teal-600 font-semibold bg-teal-50/70' 
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <a 
              href="/#contact" 
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-purple-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Appointment
              <span className="bg-teal-400 rounded-full p-1 -mr-2">
                <ChevronRight className="w-4 h-4 text-white" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/compliance"
              className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Policies
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none rounded-lg"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl transition-all duration-300 ease-in-out overflow-hidden origin-top ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/');
            return link.href.includes('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium transition-colors text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive 
                    ? 'text-teal-600 bg-teal-50 font-bold' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 bg-purple-600 text-white px-4 py-3.5 rounded-xl text-base font-semibold hover:bg-purple-700 transition-colors shadow-md"
          >
            Book Free Consultation
            <ChevronRight className="w-5 h-5 text-teal-400" />
          </a>
        </div>
      </div>
    </nav>
  );
};
