import React, { useState } from 'react';

const options = [
  {
    id: '01',
    title: 'Home care assistance.',
    image: 'https://images.pexels.com/photos/7446630/pexels-photo-7446630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Assistance for the elderly in various aspects of life, ensuring comfort and independence.'
  },
  {
    id: '02',
    title: 'Support for seniors',
    image: 'https://images.pexels.com/photos/8415703/pexels-photo-8415703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Companionship, daily chores, and engaging activities tailored for seniors.'
  },
  {
    id: '03',
    title: 'Therapist helps.',
    image: 'https://images.pexels.com/photos/7446778/pexels-photo-7446778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Professional therapy services including physical and occupational support.'
  },
  {
    id: '04',
    title: 'Disability support',
    image: 'https://images.pexels.com/photos/6284838/pexels-photo-6284838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Specialized care plans designed to empower and assist individuals with disabilities.'
  }
];

export const CareOptions = () => {
  const [activeId, setActiveId] = useState('01');

  const activeOption = options.find((opt) => opt.id === activeId) || options[0];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
          
          {/* Left Side: Options List */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
            {options.map((option) => {
              const isActive = option.id === activeId;
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveId(option.id)}
                  className="flex items-center text-left w-full group transition-all"
                >
                  <div 
                    className={`text-3xl md:text-4xl font-bold mr-6 w-16 transition-colors ${
                      isActive ? 'text-purple-600' : 'text-gray-300'
                    }`}
                  >
                    {option.id}
                  </div>
                  
                  {/* Vertical Line */}
                  <div 
                    className={`w-1 h-12 mr-6 rounded-full transition-colors ${
                      isActive ? 'bg-purple-600' : 'bg-gray-100'
                    }`}
                  />
                  
                  <div 
                    className={`text-xl md:text-2xl font-semibold transition-colors ${
                      isActive ? 'text-purple-600' : 'text-gray-400'
                    }`}
                  >
                    {option.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Image & Description */}
          <div className="w-full lg:w-2/3">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
              <img 
                key={activeOption.id}
                src={activeOption.image} 
                alt={activeOption.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              
              {/* Optional overlay to match the red tint from the user's snapshot, but using theme color */}
              <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl transform transition-all translate-y-0">
                <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                  {activeOption.description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
