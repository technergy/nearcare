import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-xl inline-block">
                 <Logo className="w-8 h-8 md:w-10 md:h-10" layout="horizontal" />
              </div>
            </div>
            <p className="text-slate-400 mt-4 max-w-sm leading-relaxed">
              Empowering Australians through dedicated in-home support, aged care, and disability services. Committed to fostering independence and dignity.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="/departments" className="hover:text-teal-400 transition-colors">Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Call: 1300 123 456</li>
              <li>Email: hello@nearcare.com.au</li>
              <li>Location: 45 Collins Street, Melbourne VIC 3000</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Near Care. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-teal-400">Privacy Policy</a>
             <a href="#" className="hover:text-teal-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

