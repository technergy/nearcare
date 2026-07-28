import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 border-t border-slate-800 no-print" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="bg-white p-2.5 rounded-2xl inline-block shadow-md">
                 <Logo className="w-9 h-9 md:w-10 md:h-10" layout="horizontal" />
              </div>
            </div>
            <p className="text-slate-400 mt-4 max-w-sm leading-relaxed text-sm">
              We support people to live independently and feel confident in their community. Delivering compassionate, participant-centered disability and aged care supports across Australia.
            </p>
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-700/50 text-purple-300 px-3.5 py-2 rounded-xl text-xs font-semibold">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>Approved Registered NDIS Provider #40500123</span>
            </div>
          </div>
          
          {/* Sitemap Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base tracking-wide">Main Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">NDIS Supports</Link></li>
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Care Programs</Link></li>
              <li><Link to="/housing" className="hover:text-teal-400 transition-colors">SIL & Housing</Link></li>
              <li><Link to="/blog" className="hover:text-teal-400 transition-colors">News & Resources</Link></li>
            </ul>
          </div>

          {/* NDIS Policies & Compliance (1-click access) */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base tracking-wide">NDIS Policies & Rights</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/compliance" className="hover:text-teal-400 transition-colors font-semibold text-teal-300">Compliance Hub</Link></li>
              <li><Link to="/compliance" className="hover:text-teal-400 transition-colors">Participant Rights</Link></li>
              <li><Link to="/compliance" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-teal-400 transition-colors">Complaints & Feedback</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ & Help Center</Link></li>
              <li>
                <a 
                  href="https://www.ndiscommission.gov.au/participants/complaints" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs text-purple-300 hover:text-white"
                >
                  NDIS Commission <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:1300123456" className="hover:text-white font-medium">1300 123 456</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="mailto:hello@nearcare.com.au" className="hover:text-white">hello@nearcare.com.au</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span>45 Collins Street, Melbourne VIC 3000</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="block text-center bg-teal-400 hover:bg-teal-500 text-[#0f172a] font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Near Care Support. All rights reserved. ABN 12 345 678 910.</p>
          <div className="flex flex-wrap gap-6">
             <Link to="/compliance" className="hover:text-teal-400">Privacy Policy</Link>
             <Link to="/compliance" className="hover:text-teal-400">Complaints Process</Link>
             <Link to="/compliance" className="hover:text-teal-400">Charter of Rights</Link>
             <Link to="/faq" className="hover:text-teal-400">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
