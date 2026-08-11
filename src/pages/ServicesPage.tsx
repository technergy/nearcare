import React from 'react';
import { Services } from '../components/Services';

export const ServicesPage = () => {
  return (
    <div>
      <div className="relative bg-purple-900 py-24 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7698982/pexels-photo-7698982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive range of healthcare services we offer to ensure your well-being. We provide expert care tailored to your unique needs.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};
