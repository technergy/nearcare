import React from 'react';
import { Shield, CheckCircle, Heart, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="relative bg-purple-900 py-24 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7446609/pexels-photo-7446609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="About Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-purple-200 flex items-center justify-center gap-2 font-medium mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-teal-300">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            We Support You to Live Independently
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            At Near Care Support, we believe in clear, inclusive, jargon-free communication. Our purpose is simple: empowering people with disability and seniors to live confidently in their community.
          </p>
        </div>
      </div>
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        
        {/* Left Photo & Badges */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-purple-600 transform translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
          <img 
            src="https://images.pexels.com/photos/7446609/pexels-photo-7446609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Participant smiling with support worker in Australia" 
            className="rounded-3xl shadow-xl w-full object-cover h-[480px]"
          />
          
          <div className="absolute -bottom-8 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-t-4 border-teal-500">
             <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 font-bold text-xl">
                   20+
                </div>
                <div className="font-bold text-gray-800 leading-tight">Years Supporting<br/>Australians</div>
             </div>
             <p className="text-sm text-gray-600">Committed to national NDIS quality standards.</p>
          </div>
        </div>

        {/* Right Story & Commitments */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
            Your Voice, Your Choice, Your Community
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Near Care Support is proudly Australian-owned. We know that navigating NDIS funding can feel overwhelming when paperwork is filled with complex jargon. That is why we speak plain language.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Whether you need Supported Independent Living (SIL), daily personal assistance, or someone to accompany you to social outings, we work alongside you as partnersâ€”respecting your culture, your identity, and your goals.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
             <div className="bg-purple-50/70 p-6 rounded-2xl border border-purple-100">
                <div className="flex items-center gap-2 font-bold text-[#0f172a] mb-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  NDIS Support Provider
                </div>
                <p className="text-sm text-gray-600">
                  We meet strict NDIS Practice Standards for quality, safety, and participant rights.
                </p>
             </div>
             <div className="bg-teal-50/70 p-6 rounded-2xl border border-teal-100">
                <div className="flex items-center gap-2 font-bold text-[#0f172a] mb-2">
                  <Heart className="w-5 h-5 text-teal-600" />
                  Inclusive & Respectful
                </div>
                <p className="text-sm text-gray-600">
                  We celebrate diversity and ensure culturally safe care for every participant.
                </p>
             </div>
          </div>

          <ul className="space-y-3.5 text-gray-700 font-medium">
            <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-gray-100">
              <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">&#10003;</span>
              <span>We support people to live independently and feel confident in their community</span>
            </li>
            <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-gray-100">
              <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">&#10003;</span>
              <span>Transparent, jargon-free support coordination and plan management</span>
            </li>
            <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-gray-100">
              <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">&#10003;</span>
              <span>1-click access to our NDIS Privacy Policy, Complaints Process & Charter of Rights</span>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              to="/compliance"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-bold text-base"
            >
              View Our NDIS Practice Standards &amp; Policies &rarr;
            </Link>
          </div>
        </div>

      </div>

      {/* Values Banner */}
      <div className="bg-purple-50/50 border border-purple-100 rounded-[2rem] p-8 md:p-14 shadow-sm mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Our Core Principles</h2>
          <p className="text-gray-600 text-lg">
            Everything we do is guided by respect for your dignity, independence, and right to speak up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl font-bold text-teal-600 mb-2">Participant-First Autonomy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              You decide how your supports are organized. We listen to what works best for you and your household.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Plain Language Communication</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              No confusing acronyms or bureaucratic barriers. We explain your NDIS funding clearly so you can make informed decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl font-bold text-teal-600 mb-2">Accountability & Transparency</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We welcome complaints and feedback with a zero-retaliation guarantee, continuously improving our care standards.
            </p>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};
