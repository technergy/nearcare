import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const HousingSupport = () => {
  const location = useLocation();
  const isHousingPage = location.pathname === '/housing';

  return (
    <div className={`py-24 bg-gray-50 ${isHousingPage ? 'pt-0' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isHousingPage && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 font-semibold tracking-widest px-4 py-2 uppercase text-sm mb-4 rounded-full">
              NDIS Accommodation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Supported Independent <br /> Living & SDA
            </h2>
            <p className="text-xl text-gray-600">
              Explore our specialized disability accommodation (SDA) and supported living options across Australia, designed to foster independence in a safe environment.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Property 1 */}
          <div className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-[4/3] relative">
              <span className="absolute top-4 left-4 bg-teal-400 text-white font-semibold px-4 py-1 rounded-full z-10">High Physical Support</span>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" 
                alt="Melbourne Property" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-2">Melbourne East</h3>
            <p className="text-center text-gray-500 mb-4">Victoria, Australia</p>
          </div>

          {/* Property 2 */}
          <div className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="rounded-[1.5rem] overflow-hidden mb-6 aspect-[4/3] relative">
              <span className="absolute top-4 left-4 bg-purple-600 text-white font-semibold px-4 py-1 rounded-full z-10">Robust SDA</span>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                alt="Sydney Property" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-2">Sydney North Shore</h3>
            <p className="text-center text-gray-500 mb-4">New South Wales, Australia</p>
          </div>
        </div>

        {!isHousingPage && (
          <div className="text-center">
            <Link 
              to="/housing"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-10 py-4 rounded-xl transition-colors shadow-lg text-lg"
            >
              See All Vacancies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
