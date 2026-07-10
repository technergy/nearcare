import React from 'react';

export const About = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">About Us</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Dedicated to Quality Care in Australia</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We are committed to providing exceptional aged care, disability support, and home assistance to empower Australians to live fulfilling and independent lives.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-purple-600 transform translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1000" 
            alt="Elderly care professionals" 
            className="rounded-3xl shadow-xl w-full object-cover h-[500px]"
          />
          
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-t-4 border-teal-400">
             <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                   20+
                </div>
                <div className="font-bold text-gray-800">Years in <br/> Australia</div>
             </div>
             <p className="text-sm text-gray-500">Trusted provider under My Aged Care and NDIS.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">Empowering Seniors & Supporting Families Across the Nation</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Near Care is a proudly Australian-owned provider of in-home care, nursing support, and lifestyle assistance. We understand the local community because we are a part of it.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Whether you are navigating the My Aged Care system, seeking NDIS support, or arranging private care, our dedicated team of local professionals is here to guide you every step of the way, ensuring that every individual receives personalized and compassionate care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
             <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600">
                <h4 className="font-bold text-gray-900 mb-2">Approved Provider</h4>
                <p className="text-sm text-gray-600">Registered with national health and aged care quality standards.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-400">
                <h4 className="font-bold text-gray-900 mb-2">Local Experts</h4>
                <p className="text-sm text-gray-600">Highly trained caregivers serving local communities across Australia.</p>
             </div>
          </div>

          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">✓</span>
              Comprehensive In-Home Support
            </li>
            <li className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">✓</span>
              NDIS & Disability Services
            </li>
            <li className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">✓</span>
              Dementia & Memory Care Expertise
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
