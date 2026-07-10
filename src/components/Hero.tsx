import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-[#f8fafc] overflow-hidden pt-16 pb-32">
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
            Compassionate Care For <br className="hidden lg:block"/>
            Your <span className="text-purple-600">Loved Ones</span>
          </h1>
          <p className="text-base md:text-xl text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Providing exceptional in-home support, elderly care, and companionship to help seniors live comfortably and independently with dignity.
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-md group"
          >
            Learn More
            <span className="bg-teal-400 rounded-full p-1 -mr-2 group-hover:bg-teal-500 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </span>
          </Link>
        </div>

        {/* Right Graphic/Image */}
        <div className="flex-1 w-full relative h-[350px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
          {/* Custom Blob Shape Container for the image */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-full h-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
                {/* SVG for masking the image into a blob */}
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full drop-shadow-2xl z-10 pointer-events-none">
                   <defs>
                      <clipPath id="blob-mask">
                         <path d="M410.5,317.5Q376,385,313,418Q250,451,164.5,422.5Q79,394,49,322Q19,250,56.5,177.5Q94,105,172,66Q250,27,337.5,58.5Q425,90,435,170Q445,250,410.5,317.5Z" />
                      </clipPath>
                      {/* Optional border gradient if needed */}
                      <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                         <stop offset="0%" stopColor="#9333ea" />
                         <stop offset="100%" stopColor="#2dd4bf" />
                      </linearGradient>
                   </defs>
                   {/* We draw the path behind the image and scale it slightly to act as a border/backdrop */}
                   <path 
                      d="M410.5,317.5Q376,385,313,418Q250,451,164.5,422.5Q79,394,49,322Q19,250,56.5,177.5Q94,105,172,66Q250,27,337.5,58.5Q425,90,435,170Q445,250,410.5,317.5Z" 
                      fill="url(#blobGrad)"
                      transform="scale(1.05) translate(-10, -10)"
                   />
                </svg>

                {/* The actual image masked by the blob */}
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000"
                  alt="Elderly care"
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


