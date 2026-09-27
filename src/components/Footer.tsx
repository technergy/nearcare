import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#09152d] text-slate-300 py-16 border-t border-slate-800 no-print" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Logo className="h-24 w-auto md:h-32" theme="dark" />
            </div>
            <p className="text-slate-400 mt-4 max-w-sm leading-relaxed text-sm">
              We support people to live independently and feel confident in their community. Delivering compassionate, participant-centered door to door disability supports across Australia.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-teal-400 transition-colors">NDIS Supports</a></li>
              <li><a href="/#programs" className="hover:text-teal-400 transition-colors">Care Programs</a></li>
              <li><Link to="/compliance" className="hover:text-teal-400 transition-colors">Compliance & Rights</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:0269026901" className="hover:text-white font-medium">Office: 0269 026 901</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:0408563909" className="hover:text-white font-medium">Mob: 0408 563 909</a>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Near Care Support. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/compliance" className="hover:text-teal-400">Privacy Policy</Link>
            <Link to="/compliance" className="hover:text-teal-400">Complaints Process</Link>
            <Link to="/compliance" className="hover:text-teal-400">Charter of Rights</Link>
            <Link to="/contact" className="hover:text-teal-400">Contact Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
