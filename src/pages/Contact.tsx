import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="relative bg-purple-900 py-24 text-center overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/8415711/pexels-photo-8415711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Contact us background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-900/40"></div>
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Have questions about our NDIS supports or Care Programs? We're here to help you live independently.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:0269026901" className="text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors">Office: 0269 026 901</a>
                      <a href="tel:0408563909" className="text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors">Mob: 0408 563 909</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                    <a href="mailto:hello@nearcare.com.au" className="text-lg font-bold text-gray-900 hover:text-teal-600 transition-colors">hello@nearcare.com.au</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Office Location</p>
                    <p className="text-base font-semibold text-gray-900">45 Collins Street,<br />Melbourne VIC 3000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Business Hours</p>
                    <p className="text-base font-semibold text-gray-900">Mon - Fri: 8:30am - 5:00pm<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Area */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
