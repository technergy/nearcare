import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const serviceData: Record<string, { title: string; description: string; benefits: string[] }> = {
  'personal-cares': {
    title: 'Personal Cares (Home)',
    description: 'We provide respectful and dignified assistance with everyday personal care tailored to your unique routines and lifestyle in the comfort of your home.',
    benefits: ['Daily hygiene assistance', 'Dressing and grooming', 'Mobility support around the home', 'Medication reminders']
  },
  'community-services': {
    title: 'Community Services',
    description: 'Supporting you to actively participate in your community, whether it\'s attending events, pursuing hobbies, or joining local groups.',
    benefits: ['Support attending community events', 'Assistance joining clubs or groups', 'Skill-building for community interaction', 'Accompanied outings']
  },
  'transport': {
    title: 'Transport',
    description: 'Safe and reliable transport assistance to help you get to appointments, work, or social outings, ensuring you maintain your independence.',
    benefits: ['Travel to medical appointments', 'Transport for shopping and errands', 'Assistance with public transport', 'Accessible vehicles available']
  },
  'social-services': {
    title: 'Social Services',
    description: 'Fostering meaningful connections and social inclusion through guided activities and support designed to enhance your social well-being.',
    benefits: ['Social skills development', 'Group activities and workshops', 'Peer support facilitation', 'Recreational activities']
  },
  'domestic-services': {
    title: 'Domestic Services',
    description: 'Assistance with household tasks such as cleaning, laundry, and maintaining your living environment to ensure it is safe and comfortable.',
    benefits: ['General house cleaning', 'Laundry and ironing', 'Meal preparation and cooking', 'Yard maintenance']
  },
  'autism-cares': {
    title: 'Autism Cares',
    description: 'Specialized, compassionate support for individuals with Autism, focusing on individual strengths, sensory needs, and personal goals.',
    benefits: ['Tailored sensory support', 'Routine development and management', 'Communication and social skill building', 'Behavioral support strategies']
  }
};

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-teal-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-purple-900 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 to-purple-800/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-teal-500/20 text-teal-300 font-semibold tracking-wider px-4 py-2 uppercase text-sm mb-4 rounded-full border border-teal-500/30">
            NDIS Support Service
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Can Help</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our {service.title.toLowerCase()} are designed around your specific needs and goals. We work closely with you to ensure you receive the right level of support.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-purple-50/50">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between text-white">
              <div className="mb-6 sm:mb-0 sm:pr-8">
                <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
                <p className="text-purple-100">Contact us today to discuss how we can support you with {service.title}.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex-shrink-0 whitespace-nowrap"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
