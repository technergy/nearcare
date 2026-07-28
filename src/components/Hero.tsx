import React from 'react';
import { ChevronRight, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-[#f8fafc] overflow-hidden pt-12 sm:pt-16 pb-28 md:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-purple-100 opacity-50"></div>
        
        {/* Dash lines */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 500 Q 500 100, 1000 600 T 2000 400" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-100/80 text-purple-700 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 shadow-sm">
            <Shield className="w-4 h-4 text-teal-600" />
            <span>Approved Registered NDIS & Aged Care Provider</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0f172a] leading-[1.08] mb-6 tracking-tight">
            We Support You to Live <span className="text-purple-600">Independently</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            We support people to live independently and feel confident in their community. Providing tailored NDIS disability supports, Supported Independent Living (SIL), and aged care across Australia in clear, jargon-free language.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-200 group text-base"
            >
              Book a Free Consultation
              <span className="bg-teal-400 rounded-full p-1 -mr-2 group-hover:bg-teal-500 transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-7 py-4 rounded-full border border-gray-200 transition-all text-base shadow-sm"
            >
              Explore NDIS Supports
            </Link>
          </div>

          {/* Quick Highlight Badges */}
          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-purple-600 fill-purple-600" />
              <span>Participant Choice & Control</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span>1-Click NDIS Compliance & Rights</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              <span>Zero Jargon Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Right Graphic/Image */}
        <div className="flex-1 w-full relative h-[350px] sm:h-[420px] lg:h-[520px] mt-8 lg:mt-0">
          {/* Custom Blob Shape Container for the image */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-full h-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] aspect-square">
                {/* SVG for masking the image into a blob */}
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-2xl z-10 pointer-events-none">
                   <defs>
                      <clipPath id="blob-mask">
                         <path d="M410.5,317.5Q376,385,313,418Q250,451,164.5,422.5Q79,394,49,322Q19,250,56.5,177.5Q94,105,172,66Q250,27,337.5,58.5Q425,90,435,170Q445,250,410.5,317.5Z" />
                      </clipPath>
                      <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                         <stop offset="0%" stopColor="#9333ea" />
                         <stop offset="100%" stopColor="#2dd4bf" />
                      </linearGradient>
                   </defs>
                   <path 
                      d="M410.5,317.5Q376,385,313,418Q250,451,164.5,422.5Q79,394,49,322Q19,250,56.5,177.5Q94,105,172,66Q250,27,337.5,58.5Q425,90,435,170Q445,250,410.5,317.5Z" 
                      fill="url(#blobGrad)"
                      transform="scale(1.04) translate(-10, -10)"
                   />
                </svg>

                {/* The actual image masked by the blob */}
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000"
                  alt="NDIS participant enjoying community support in Australia"
                  className="absolute inset-0 w-full h-full object-cover z-20"
                  style={{ clipPath: 'url(#blob-mask)', WebkitClipPath: 'url(#blob-mask)' }}
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
