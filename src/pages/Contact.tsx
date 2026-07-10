import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our care options or housing support? Our friendly Australian team is here to help you navigate your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">We are available Mon-Fri, 9am - 5pm AEST.</p>
              <a href="tel:1300123456" className="text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors">1300 123 456</a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your queries anytime.</p>
              <a href="mailto:hello@nearcare.com.au" className="text-lg font-bold text-teal-500 hover:text-teal-600 transition-colors">hello@nearcare.com.au</a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
              <p className="text-gray-600 mb-4">Visit us for a face-to-face consultation.</p>
              <address className="text-lg font-bold text-teal-500 not-italic">
                45 Collins Street,<br/>Melbourne VIC 3000
              </address>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
