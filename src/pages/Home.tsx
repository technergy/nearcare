import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ContactForm } from '../components/ContactForm';
import { CareOptions } from '../components/CareOptions';
import { HousingSupport } from '../components/HousingSupport';
import { ContactCTA } from '../components/ContactCTA';
import { Testimonials } from '../components/Testimonials';
import { BlogPreview } from '../components/BlogPreview';

export const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 md:-mt-24">
          <ContactForm layout="horizontal" />
        </div>
      </div>
      <CareOptions />
      <Services />
      <HousingSupport />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
};
