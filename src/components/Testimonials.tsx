import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Family Member, NSW",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    quote: "The care and compassion shown to my mother has been truly exceptional. We couldn't have asked for a better support system for our family here in Australia."
  },
  {
    id: 2,
    name: "David Chen",
    role: "NDIS Participant, VIC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "The team has been incredibly supportive in helping me achieve my NDIS goals. Their dedication to my independence is unmatched."
  },
  {
    id: 3,
    name: "Margaret O'Reilly",
    role: "Home Care Client, QLD",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
    quote: "Having someone visit me regularly for a chat and help around the house has changed my life. I feel so much more confident living at home."
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-24 bg-purple-900 relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-squares" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M10 10l40 0l0 40l-40 0z" fill="none" stroke="white" strokeWidth="2" transform="rotate(20 30 30)"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-squares)" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-300 font-semibold uppercase tracking-wider px-4 py-1">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">What Our Families Say</h2>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-teal-400 text-teal-400" />
            ))}
          </div>
        </div>

        <div className="relative mt-20">
          <div className="bg-purple-800 rounded-[2rem] p-8 sm:p-10 md:p-16 text-center shadow-2xl relative pt-20 border border-purple-700/50 min-h-[350px] flex flex-col justify-center">
            {/* User Image - overlapping the top */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-purple-800 overflow-hidden shadow-xl bg-white">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={testimonials[activeIndex].image}
                />
              </div>
            </div>

            <blockquote 
              key={`quote-${activeIndex}`}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-medium text-white mb-10 leading-snug animate-in fade-in duration-500"
            >
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div 
              key={`author-${activeIndex}`}
              className="text-white animate-in fade-in duration-500"
            >
              <div className="font-bold text-xl mb-1 text-teal-300">{testimonials[activeIndex].name}</div>
              <div className="text-purple-200 text-sm tracking-wide">{testimonials[activeIndex].role}</div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white text-purple-900 items-center justify-center shadow-lg hover:bg-teal-400 hover:text-white transition-colors focus:outline-none z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white text-purple-900 items-center justify-center shadow-lg hover:bg-teal-400 hover:text-white transition-colors focus:outline-none z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-teal-400 w-8' : 'bg-purple-700 hover:bg-purple-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
