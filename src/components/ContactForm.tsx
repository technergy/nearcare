import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const ContactForm = ({ layout = 'vertical' }: { layout?: 'vertical' | 'horizontal' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className={`text-center text-purple-600 font-bold ${layout === 'horizontal' ? 'py-4' : 'py-12'} text-xl`}>
        Thank you for your message! We will get back to you shortly.
      </div>
    );
  }

  if (layout === 'horizontal') {
    return (
      <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 border border-gray-100 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 items-center w-full">
          <div className="flex-1 w-full">
            <input 
              type="text" 
              required 
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400" 
              placeholder="Enter Name" 
            />
          </div>
          <div className="flex-1 w-full">
            <select 
              required 
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1.5rem_center] bg-[length:0.8rem_auto]"
            >
              <option value="">Select Care Type...</option>
              <option value="hcp">Home Care Packages (HCP)</option>
              <option value="ndis">NDIS Support Services</option>
              <option value="chsp">Commonwealth Home Support</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <input 
              type="tel" 
              required 
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400" 
              placeholder="Phone Number" 
            />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <button type="submit" className="w-full md:w-auto flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-full transition-all group shadow-md">
              Submit Now
              <span className="bg-teal-400 rounded-full p-1 -mr-2 group-hover:bg-teal-500 transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input 
            type="text" 
            required 
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700" 
            placeholder="John" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input 
            type="text" 
            required 
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700" 
            placeholder="Doe" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input 
            type="email" 
            required 
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700" 
            placeholder="john@example.com" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            required 
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700" 
            placeholder="0400 000 000" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
        <select 
          required 
          className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1.5rem_center] bg-[length:0.8rem_auto]"
        >
          <option value="">Select a service...</option>
          <option value="hcp">Home Care Packages (HCP)</option>
          <option value="ndis">NDIS Support Services</option>
          <option value="chsp">Commonwealth Home Support</option>
          <option value="sil">Supported Independent Living</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
        <textarea 
          required 
          rows={4}
          className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all text-gray-700 resize-none" 
          placeholder="How can we help you today?" 
        ></textarea>
      </div>

      <div>
        <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-xl transition-all group shadow-md text-lg">
          Send Message
          <span className="bg-teal-400 rounded-full p-1 -mr-2 group-hover:bg-teal-500 transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </span>
        </button>
      </div>
    </form>
  );
};
