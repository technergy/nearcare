import React from 'react';
import { HeartPulse, Home, Users, Activity, FileText, Shield } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-purple-600" />,
      title: "Home Care Packages (HCP)",
      description: "Coordinated support funded by the Australian Government to help you live independently at home for as long as possible."
    },
    {
      icon: <Shield className="w-10 h-10 text-teal-400" />,
      title: "NDIS Support Services",
      description: "Tailored assistance for NDIS participants, empowering you to achieve your goals and participate actively in the community."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-purple-600" />,
      title: "Nursing & Clinical Care",
      description: "Professional health monitoring, wound care, and medication management by qualified local nursing staff."
    },
    {
      icon: <Users className="w-10 h-10 text-teal-400" />,
      title: "Commonwealth Home Support",
      description: "Entry-level services through CHSP including domestic help, transport, and personal care for older Australians."
    },
    {
      icon: <Activity className="w-10 h-10 text-purple-600" />,
      title: "Allied Health Therapy",
      description: "Access to physiotherapists, occupational therapists, and other specialists to maintain your physical and mental well-being."
    },
    {
      icon: <FileText className="w-10 h-10 text-teal-400" />,
      title: "Care Planning & Navigation",
      description: "Expert guidance to help you navigate My Aged Care assessments and optimize your funded support plans."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-24 h-24 rounded-full bg-purple-50 opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-teal-50 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 font-semibold tracking-widest px-4 py-2 uppercase text-sm mb-4 rounded-full">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Comprehensive Support Across Australia
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
            From government-funded aged care packages to tailored disability support, we offer a complete range of services designed to enhance the quality of life and independence of Australians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="w-20 h-20 rounded-full bg-purple-50 mx-auto flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                {React.cloneElement(service.icon, { className: "w-10 h-10 group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

