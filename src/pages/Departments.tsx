import React from 'react';
import { Link } from 'react-router-dom';

export const Departments = () => {
  const departments = [
    { name: "Home Care Packages", desc: "Government-funded assistance with daily living, domestic help, and personal care.", image: "https://images.pexels.com/photos/7446630/pexels-photo-7446630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "NDIS Core Supports", desc: "Everyday support including community participation and transport assistance.", image: "https://images.pexels.com/photos/8415703/pexels-photo-8415703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Respite Care", desc: "Short-term relief and supportive care for primary caregivers and their loved ones.", image: "https://images.pexels.com/photos/7446778/pexels-photo-7446778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Allied Health Therapy", desc: "Access to physiotherapy, occupational therapy, and speech pathology services.", image: "https://images.pexels.com/photos/6284838/pexels-photo-6284838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Nursing Services", desc: "In-home clinical care, wound management, and medication administration.", image: "https://images.pexels.com/photos/8415730/pexels-photo-8415730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Dementia Support", desc: "Specialized cognitive care and memory support for individuals living with dementia.", image: "https://images.pexels.com/photos/33768885/pexels-photo-33768885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Domestic Assistance", desc: "Help with household chores, cleaning, laundry, and meal preparation.", image: "https://images.pexels.com/photos/7698991/pexels-photo-7698991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Social Support", desc: "Companionship, social outings, and community group engagement activities.", image: "https://images.pexels.com/photos/6284840/pexels-photo-6284840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  ];

  return (
    <div>
      <div className="relative bg-purple-900 py-24 text-center overflow-hidden mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7446630/pexels-photo-7446630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Programs Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-purple-200 flex items-center justify-center gap-2 font-medium mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-teal-300">Programs</span>
          </div>
          <h2 className="text-4xl font-bold text-white mt-4 mb-4">Our Specialized Care Programs</h2>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">We offer a wide range of specialized programs designed to cater to the unique needs of the elderly and individuals requiring support.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
              <p className="text-gray-600">{dept.desc}</p>
              <Link to={`/programs/${dept.name.toLowerCase().replace(/ /g, '-')}`} className="mt-4 text-teal-500 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2">
                Learn More <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
