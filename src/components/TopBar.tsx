import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-purple-600 text-white py-2 px-6 hidden md:flex justify-between items-center text-sm font-medium">
      <div className="flex items-center gap-8 pl-8 md:pl-20">
        <div className="flex items-center gap-2 hover:text-teal-200 transition-colors cursor-pointer">
          <Mail className="w-4 h-4" />
          <span>hello@nearcare.com.au</span>
        </div>
        <div className="flex items-center gap-2 hover:text-teal-200 transition-colors cursor-pointer">
          <Phone className="w-4 h-4" />
          <span>1300 123 456</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 pr-8 md:pr-20">
        <a href="#" className="w-8 h-8 rounded-full bg-white text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-white text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-white text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

