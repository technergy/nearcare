import React from 'react';
import { Link } from 'react-router-dom';

export const ContactCTA = () => {
  return (
    <div className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/8415711/pexels-photo-8415711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="Contact us background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
          Any Inquiry? Contact <br className="hidden sm:block" /> Us As Needed.
        </h2>
        <Link 
          to="/contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg px-12 py-4 rounded-xl transition-colors shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
