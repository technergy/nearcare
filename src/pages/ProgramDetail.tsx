import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const ProgramDetail = () => {
  const { slug } = useParams();

  const programs: Record<string, any> = {
    'home-care-packages': {
      name: "Home Care Packages",
      desc: "Government-funded assistance with daily living, domestic help, and personal care.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200",
      content: "Home Care Packages (HCP) are a government-funded program designed to support older Australians to live independently in their own homes for as long as possible. We provide a range of coordinated services tailored to your individual needs, from basic assistance to complex care.",
      features: [
        "Personal care and hygiene assistance",
        "Domestic assistance and cleaning",
        "Meal preparation and diet planning",
        "Transport to appointments and social outings",
        "Nursing and clinical care"
      ]
    },
    'ndis-core-supports': {
      name: "NDIS Core Supports",
      desc: "Everyday support including community participation and transport assistance.",
      image: "https://images.unsplash.com/photo-1581579439050-8dc81cb14b0b?auto=format&fit=crop&q=80&w=1200",
      content: "Our NDIS Core Supports services are designed to help participants with everyday activities, enabling them to live as autonomously as possible. We work closely with you to understand your goals and develop a support plan that aligns with your NDIS funding.",
      features: [
        "Assistance with daily personal activities",
        "Support for community, social, and civic participation",
        "Transport assistance",
        "Help with household tasks",
        "Consumables support"
      ]
    },
    'respite-care': {
      name: "Respite Care",
      desc: "Short-term relief and supportive care for primary caregivers and their loved ones.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
      content: "Caring for a loved one is rewarding but can also be demanding. Our Respite Care services offer short-term, temporary relief for primary caregivers, ensuring their loved ones continue to receive high-quality care in a safe and supportive environment.",
      features: [
        "In-home respite care",
        "Community access and social support during respite",
        "Overnight respite care",
        "Emergency respite support",
        "Flexible scheduling to suit caregiver needs"
      ]
    },
    'allied-health-therapy': {
      name: "Allied Health Therapy",
      desc: "Access to physiotherapy, occupational therapy, and speech pathology services.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200",
      content: "Our Allied Health Therapy services aim to improve your physical function, mobility, and overall well-being. We offer a multidisciplinary approach, connecting you with experienced professionals who provide targeted therapies tailored to your specific condition or goals.",
      features: [
        "Physiotherapy for mobility and pain management",
        "Occupational therapy for daily living skills",
        "Speech pathology for communication and swallowing",
        "Dietetics and nutritional advice",
        "Podiatry services"
      ]
    },
    'nursing-services': {
      name: "Nursing Services",
      desc: "In-home clinical care, wound management, and medication administration.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
      content: "Our qualified nursing staff provide professional clinical care in the comfort of your own home. Whether you need ongoing monitoring for a chronic condition, post-hospital care, or wound management, our experienced nurses deliver compassionate and expert care.",
      features: [
        "Medication management and administration",
        "Wound care and dressing changes",
        "Continence management",
        "Chronic disease management (e.g., diabetes)",
        "Post-operative care and monitoring"
      ]
    },
    'dementia-support': {
      name: "Dementia Support",
      desc: "Specialized cognitive care and memory support for individuals living with dementia.",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1200",
      content: "We provide specialized support for individuals living with dementia, focusing on maintaining their dignity, independence, and quality of life. Our caregivers are trained in dementia care techniques and create a safe, stimulating, and supportive environment.",
      features: [
        "Cognitive stimulation activities",
        "Assistance with personal care and daily routines",
        "Behavioral support strategies",
        "Safe and secure environment management",
        "Support and education for families"
      ]
    },
    'domestic-assistance': {
      name: "Domestic Assistance",
      desc: "Help with household chores, cleaning, laundry, and meal preparation.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a8e4f?auto=format&fit=crop&q=80&w=1200",
      content: "Maintaining a clean and organized home is essential for safety and well-being. Our Domestic Assistance services provide practical help with everyday household tasks, allowing you to focus on enjoying your time and living comfortably.",
      features: [
        "General cleaning (vacuuming, dusting, mopping)",
        "Laundry and ironing",
        "Bed making and linen changes",
        "Meal preparation and cooking",
        "Grocery shopping and errands"
      ]
    },
    'social-support': {
      name: "Social Support",
      desc: "Companionship, social outings, and community group engagement activities.",
      image: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?auto=format&fit=crop&q=80&w=1200",
      content: "Staying socially active is vital for mental health and emotional well-being. Our Social Support services are designed to help you stay connected with your community, pursue your interests, and build meaningful relationships.",
      features: [
        "Companionship and conversation",
        "Assistance attending social events and clubs",
        "Transport to community activities",
        "Help with hobbies and recreational pursuits",
        "Facilitating connections with family and friends"
      ]
    }
  };

  const program = slug ? programs[slug] : null;

  if (!program) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center min-h-[50vh] flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">Program not found</h1>
        <Link to="/departments" className="text-teal-500 hover:text-teal-600 font-medium">← Back to Programs</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/departments" className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-400 font-medium mb-8">
            <ArrowLeft className="w-5 h-5" /> Back to Programs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{program.name}</h1>
          <p className="text-xl text-purple-200 max-w-2xl">{program.desc}</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <img src={program.image} alt={program.name} className="w-full h-[400px] object-cover rounded-2xl mb-8 shadow-md" />
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {program.content}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Services</h3>
            <ul className="space-y-4 mb-12">
              {program.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl sticky top-28 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Interested in this program?</h3>
              <p className="text-gray-600 mb-6">Contact us today to learn more about how we can support you.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
