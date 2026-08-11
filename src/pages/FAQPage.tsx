import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: 'NDIS' | 'General' | 'SIL';
}

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      category: 'NDIS',
      question: "What is the NDIS and how do I know if I'm eligible?",
      answer: "The National Disability Insurance Scheme (NDIS) provides funding directly to people with a permanent and significant disability. You may be eligible if you are under 65, live in Australia as a citizen or permanent resident, and need support to perform everyday activities or participate in your community."
    },
    {
      category: 'NDIS',
      question: "How do I start receiving NDIS supports from Near Care Support?",
      answer: "Getting started is simple! Reach out to us via phone (1300 123 456) or our online contact form. We will arrange an initial, no-obligation consultation to understand your NDIS plan, your personal goals, and match you with the right support workers."
    },
    {
      category: 'SIL',
      question: "What is Supported Independent Living (SIL) and how does it work?",
      answer: "Supported Independent Living (SIL) is help with supervision and daily tasks in your home, shared living space, or Specialist Disability Accommodation (SDA). Whether you need 24/7 care, drop-in support, or help with cooking and cleaning, our SIL supports empower you to live as independently as possible."
    },
    {
      category: 'General',
      question: "Can I change my support schedule or services if my needs change?",
      answer: "Yes, absolutely! You are always in control of your care plan. If your goals change or you need different appointment times, simply talk to your Support Coordinator or call our office. We adjust your supports flexibly to suit your lifestyle."
    },
    {
      category: 'NDIS',
      question: "Can I use my NDIS funding for both in-home care and community activities?",
      answer: "Yes! Your NDIS Core budget can be used flexibly across personal activities at home, domestic assistance, and community access such as attending work, education, sports, or social outings."
    },
    {
      category: 'General',
      question: "How do you choose and train your support workers?",
      answer: "All Near Care support workers undergo comprehensive national background checks, NDIS Worker Screening checks, and mandatory training in NDIS Practice Standards, cultural safety, first aid, and disability-specific support."
    },
    {
      category: 'General',
      question: "What should I do if I have a question or want to make a complaint?",
      answer: "We welcome your feedback! You can speak to your support worker, call our office anytime on 1300 123 456, or visit our NDIS Compliance & Rights page to submit confidential feedback. Our Zero Retaliation Guarantee ensures speaking up will never negatively affect your care."
    }
  ];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-purple-900 py-24 text-center overflow-hidden mb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/8415872/pexels-photo-8415872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="FAQ Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-purple-200 flex items-center justify-center gap-2 font-medium mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-teal-300">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about NDIS supports, your eligibility, our services, and how we empower your independence.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'NDIS', 'SIL', 'General'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {cat === 'All' ? 'All Questions' : `${cat} Supports`}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-purple-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg text-[#0f172a]">{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-base border-t border-gray-50 bg-purple-50/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 bg-purple-900 rounded-[2rem] p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions About Your Care?</h2>
            <p className="text-purple-200 max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Our Australian team is ready to answer your questions and help you understand your NDIS funding.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-500 text-[#0f172a] font-bold px-8 py-4 rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Book a Free Consultation
              </Link>
              <a
                href="tel:1300123456"
                className="inline-flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl border border-purple-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 1300 123 456
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
