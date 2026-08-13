import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Users, HandHeart, MessageSquare, Heart, Shield, Award } from 'lucide-react';

const allServicesList = [
  { id: 'personal-cares', title: 'Personal Cares (Home)' },
  { id: 'community-services', title: 'Community Services' },
  { id: 'transport', title: 'Transport' },
  { id: 'social-services', title: 'Social Services' },
  { id: 'domestic-services', title: 'Domestic Services' },
  { id: 'autism-cares', title: 'Autism Cares' },
];

const serviceData: Record<string, { 
  title: string; 
  description: string; 
  image: string;
  benefits: string[];
  approach: string;
  outcome: string;
}> = {
  'personal-cares': {
    title: 'Personal Cares (Home)',
    description: 'We provide respectful and dignified assistance with everyday personal care tailored to your unique routines and lifestyle in the comfort of your home.',
    image: 'https://images.pexels.com/photos/7345443/pexels-photo-7345443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Daily hygiene assistance', 'Dressing and grooming', 'Mobility support around the home', 'Medication reminders'],
    approach: 'We provide human-centered, independent care and support for your daily activities in a professional and compassionate manner.',
    outcome: 'A well-maintained home environment and improved independence in daily routines.'
  },
  'community-services': {
    title: 'Community Services',
    description: 'Supporting you to actively participate in your community, whether it\'s attending events, pursuing hobbies, or joining local groups.',
    image: 'https://images.pexels.com/photos/34623598/pexels-photo-34623598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Support attending community events', 'Assistance joining clubs or groups', 'Skill-building for community interaction', 'Accompanied outings'],
    approach: 'Our community programs are designed to build your confidence and encourage social connection with peers.',
    outcome: 'Enhanced social inclusion, meaningful connections, and an active lifestyle.'
  },
  'transport': {
    title: 'Transport',
    description: 'Safe and reliable transport assistance to help you get to appointments, work, or social outings, ensuring you maintain your independence.',
    image: 'https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Travel to medical appointments', 'Transport for shopping and errands', 'Assistance with public transport', 'Accessible vehicles available'],
    approach: 'We prioritize safety, punctuality, and comfort to ensure your travel experiences are stress-free.',
    outcome: 'Reliable mobility, granting you the freedom to engage with the world when and where you choose.'
  },
  'social-services': {
    title: 'Social Services',
    description: 'Fostering meaningful connections and social inclusion through guided activities and support designed to enhance your social well-being.',
    image: 'https://images.pexels.com/photos/8088245/pexels-photo-8088245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Social skills development', 'Group activities and workshops', 'Peer support facilitation', 'Recreational activities'],
    approach: 'Our programs are inclusive, engaging, and focused on shared interests to naturally foster relationships.',
    outcome: 'A strong support network and increased confidence in social settings.'
  },
  'domestic-services': {
    title: 'Domestic Services',
    description: 'Assistance with household tasks such as cleaning, laundry, and maintaining your living environment to ensure it is safe and comfortable.',
    image: 'https://images.pexels.com/photos/7446752/pexels-photo-7446752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['General house cleaning', 'Laundry and ironing', 'Meal preparation and cooking', 'Yard maintenance'],
    approach: 'We work alongside you or independently, matching our services to your preferred routine and household standards.',
    outcome: 'A clean, safe, and comfortable living space allowing you to focus on your personal goals.'
  },
  'autism-cares': {
    title: 'Autism Cares',
    description: 'Specialized, compassionate support for individuals with Autism, focusing on individual strengths, sensory needs, and personal goals.',
    image: 'https://images.pexels.com/photos/8385985/pexels-photo-8385985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    benefits: ['Tailored sensory support', 'Routine development and management', 'Communication and social skill building', 'Behavioral support strategies'],
    approach: 'We take a neurodiversity-affirming approach, validating individual experiences and collaborating closely with families.',
    outcome: 'Empowerment, improved daily functioning, and a supportive environment tailored to specific sensory and communication needs.'
  }
};

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <a href="/#services" className="text-teal-600 hover:underline">Return to Services</a>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-purple-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 to-purple-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <div className="text-sm text-purple-200 flex items-center gap-2 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <span>/</span>
            <span className="text-teal-300">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 p-6 border-b border-gray-100">Services</h3>
                <div className="flex flex-col">
                  {allServicesList.map((item) => {
                    const isActive = slug === item.id;
                    return (
                      <Link
                        key={item.id}
                        to={`/services/${item.id}`}
                        className={`flex items-center justify-between p-4 border-b border-gray-100 last:border-0 transition-colors ${
                          isActive 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium text-sm">{item.title}</span>
                        <ChevronRight className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-sm"
              />
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Our Services Include</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.approach}
              </p>

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Outcome</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
