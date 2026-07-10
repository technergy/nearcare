import React from 'react';
import { HousingSupport } from '../components/HousingSupport';

export const HousingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">Housing Options</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Explore Our Properties</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find the perfect Supported Independent Living (SIL) or Specialist Disability Accommodation (SDA) across Australia.
          </p>
        </div>
      </div>
      <div className="py-0">
         <HousingSupport />
      </div>
    </div>
  );
};
