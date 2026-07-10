import React from 'react';

export const Logo = ({ className = "w-10 h-10", layout = "vertical" }: { className?: string, layout?: "vertical" | "horizontal" }) => (
  <div className={`flex items-center justify-center ${layout === 'vertical' ? 'flex-col' : 'flex-row gap-2 sm:gap-3'}`}>
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      
      {/* Hand swoosh underneath */}
      <path 
        d="M 20 80 Q 40 70, 60 85 T 90 75 Q 85 85, 60 95 Q 35 100, 20 80 Z" 
        fill="url(#logoGrad)" 
        opacity="0.6"
      />
      
      {/* Left figure forming heart */}
      <path 
        d="M 50 80 C 40 75, 20 60, 20 45 C 20 30, 40 30, 45 45 C 45 45, 50 60, 50 80" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="35" cy="25" r="7" fill="#9333ea" />

      {/* Right figure forming heart */}
      <path 
        d="M 50 80 C 60 75, 80 60, 80 45 C 80 30, 60 30, 55 45 C 55 45, 50 60, 50 80" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="65" cy="25" r="7" fill="#2dd4bf" />
      
      {/* Inner heart lines for the textured look in the logo */}
      <path 
        d="M 50 72 C 43 68, 28 56, 28 45 C 28 35, 40 35, 43 45" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M 50 72 C 57 68, 72 56, 72 45 C 72 35, 60 35, 57 45" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
    <div className={`${layout === 'vertical' ? 'text-center mt-1' : 'flex flex-col justify-center'}`}>
      <h1 className={`${layout === 'vertical' ? 'text-xl' : 'text-base sm:text-xl'} font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400 uppercase leading-none`}>
        Near Care
      </h1>
      <p className={`text-[8px] sm:text-[10px] tracking-[0.2em] text-teal-500 uppercase mt-0.5 sm:mt-1 ${layout === 'vertical' ? '' : 'text-left'}`}>
        Support
      </p>
    </div>
  </div>
);


