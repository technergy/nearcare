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
    <section id="services" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Supports Designed Around Your Goals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We use plain language and put you in the driver&apos;s seat. Explore our detailed door to door NDIS servicesâ€”each structured so you can live independently, safely, and confidently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-purple-600">
                    {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
              </div>

              <Link 
                to={service.link}
                className="inline-flex items-center gap-1.5 font-medium text-sm text-purple-600 hover:text-purple-800 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
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
