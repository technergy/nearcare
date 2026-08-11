import React from 'react';
import { HeartPulse, Home, Users, Activity, FileText, Shield, ArrowRight, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-purple-600" />,
      title: "Personal Cares (Home)",
      description: "Respectful and dignified assistance with everyday personal care tailored to your unique routines and lifestyle in the comfort of your home.",
      link: "/services/personal-cares",
      badge: "Core Support"
    },
    {
      icon: <Users className="w-10 h-10 text-teal-600" />,
      title: "Community Services",
      description: "Supporting you to actively participate in your community, whether it's attending events, pursuing hobbies, or joining local groups.",
      link: "/services/community-services",
      badge: "Community Participation"
    },
    {
      icon: <Car className="w-10 h-10 text-purple-600" />,
      title: "Transport",
      description: "Safe and reliable transport assistance to help you get to appointments, work, or social outings, ensuring you maintain your independence.",
      link: "/services/transport",
      badge: "Travel Assistance"
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-teal-600" />,
      title: "Social Services",
      description: "Fostering meaningful connections and social inclusion through guided activities and support designed to enhance your social well-being.",
      link: "/services/social-services",
      badge: "Social Wellbeing"
    },
    {
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      title: "Domestic Services",
      description: "Assistance with household tasks such as cleaning, laundry, and maintaining your living environment to ensure it is safe and comfortable.",
      link: "/services/domestic-services",
      badge: "Household Tasks"
    },
    {
      icon: <Activity className="w-10 h-10 text-teal-600" />,
      title: "Autism Cares",
      description: "Specialized, compassionate support for individuals with Autism, focusing on individual strengths, sensory needs, and personal goals.",
      link: "/services/autism-cares",
      badge: "Specialised Support"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-24 h-24 rounded-full bg-purple-50 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-teal-50 opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 font-semibold tracking-widest px-4 py-2 uppercase text-sm mb-4 rounded-full">
            Tailored NDIS & Home Care Supports
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Supports Designed Around Your Goals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We use plain language and put you in the driver&apos;s seat. Explore our detailed door to door NDIS services—each structured so you can live independently, safely, and confidently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 group-hover:text-white transition-colors" })}
                  </div>
                  <span className="text-xs font-bold bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-200">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
              </div>

              <Link 
                to={service.link}
                className="inline-flex items-center gap-1.5 font-semibold text-sm text-teal-600 hover:text-purple-700 transition-colors pt-4 border-t border-gray-100"
              >
                Learn More About This Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-50 border border-slate-200 p-6 rounded-2xl max-w-2xl mx-auto">
            <div className="text-left">
              <h4 className="font-bold text-[#0f172a]">Not sure which NDIS support fits your plan?</h4>
              <p className="text-sm text-gray-600">Our Australian care navigators can review your NDIS budget with you for free.</p>
            </div>
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm shadow-sm"
            >
              Talk to a Navigator
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
