import React, { useState } from 'react';
import { ShieldCheck, FileText, HeartHandshake, Printer, ExternalLink, AlertCircle, CheckCircle2, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

type TabType = 'rights' | 'privacy' | 'complaints';

export const CompliancePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('rights');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Print Only Header */}
        <div className="hidden print-header mb-8 text-center border-b pb-4">
          <h1 className="text-2xl font-bold">Near Care Support - NDIS Compliance & Participant Rights</h1>
          <p className="text-sm text-gray-600">Approved NDIS Registered Provider | Phone: 1300 123 456</p>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 font-semibold tracking-wide px-4 py-1.5 rounded-full text-sm mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>NDIS Practice Standards & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Your Rights, Privacy & Feedback
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We support people to live independently and feel confident in their community. We believe in plain language, total transparency, and putting your rights first.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 no-print">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-medium px-5 py-2.5 rounded-xl border border-purple-200 shadow-sm transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print / Save Policy Sheet
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition-colors"
            >
              Contact Our Advocate Team
            </Link>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 no-print">
          <button
            onClick={() => setActiveTab('rights')}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all text-base ${
              activeTab === 'rights'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            }`}
          >
            <HeartHandshake className="w-5 h-5" />
            <span>Participant Rights</span>
          </button>
          
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all text-base ${
              activeTab === 'privacy'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Privacy Policy</span>
          </button>
          
          <button
            onClick={() => setActiveTab('complaints')}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all text-base ${
              activeTab === 'complaints'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Complaints & Feedback Process</span>
          </button>
        </div>

        {/* Document Body */}
        <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 border border-gray-100">
          
          {/* PARTICIPANT RIGHTS TAB */}
          {(activeTab === 'rights' || window.matchMedia('print').matches) && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-gray-100 pb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-3">
                  1. Charter of Participant Rights
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Under the National Disability Insurance Scheme (NDIS) Quality and Safeguards framework, you are at the center of every decision. Your voice, your culture, and your goals guide how we work together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-purple-50/70 rounded-2xl border border-purple-100">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    Choice and Control
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You have the right to decide what supports you receive, when and how they are delivered, and who delivers them. You can change your preferences at any time without penalty.
                  </p>
                </div>

                <div className="p-6 bg-teal-50/70 rounded-2xl border border-teal-100">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    Dignity and Respect
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We respect your privacy, independence, individual values, and personal identity. You will always be treated as a valued individual with equal rights.
                  </p>
                </div>

                <div className="p-6 bg-teal-50/70 rounded-2xl border border-teal-100">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    Cultural & Linguistic Safety
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We welcome and support individuals from all cultural, religious, and linguistic backgrounds, including First Nations Australians and LGBTQIA+ community members.
                  </p>
                </div>

                <div className="p-6 bg-purple-50/70 rounded-2xl border border-purple-100">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    Safety & Freedom from Harm
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You have the absolute right to be free from violence, abuse, neglect, exploitation, or discrimination. Our workers undergo rigorous screening and ongoing training.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6">
                <h4 className="font-bold text-[#0f172a] mb-2">Right to an Independent Advocate</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  You are always entitled to involve an independent advocate, trusted friend, or family member to support you in meetings, reviews, or when raising concerns. We can connect you with independent disability advocacy services across Australia.
                </p>
                <a
                  href="https://www.ndiscommission.gov.au/participants/advocacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800"
                >
                  Learn about NDIS Advocacy Services <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY TAB */}
          {(activeTab === 'privacy' || window.matchMedia('print').matches) && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-gray-100 pb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-3">
                  2. Privacy Policy & Information Security
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your privacy is important to us. This policy explains in plain language how we collect, store, use, and protect your personal and health information under the <em>Privacy Act 1988 (Cth)</em>, the <em>Australian Privacy Principles (APPs)</em>, and the NDIS Practice Standards.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6 py-1">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">What Information We Collect</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We only collect information that is directly necessary to deliver your support services safely. This includes your contact details, NDIS plan number, emergency contacts, medical and health history, and care preferences.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6 py-1">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">How We Use and Share Your Information</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use your information exclusively to plan, coordinate, and provide your NDIS supports. We will never sell your data or share your personal information with third parties without your explicit consent, unless required by law or in a medical emergency.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-1">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">How We Keep Your Information Safe</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    All digital records are encrypted and stored on secure Australian servers with strict role-based access control. Physical documents are kept in locked, secure facilities. Our staff are trained in mandatory confidentiality protocols.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6 py-1">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">Your Right to Access and Correct Records</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You have the right to inspect your personal file and request corrections at any time. Simply ask your support coordinator or contact our office, and we will provide access within 5 business days at no cost.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[#0f172a]">Have a privacy question or request?</h4>
                  <p className="text-sm text-gray-600">Our Privacy Officer is ready to assist you.</p>
                </div>
                <a
                  href="mailto:privacy@nearcare.com.au"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors whitespace-nowrap"
                >
                  Email Privacy Officer
                </a>
              </div>
            </div>
          )}

          {/* COMPLAINTS & FEEDBACK TAB */}
          {(activeTab === 'complaints' || window.matchMedia('print').matches) && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-gray-100 pb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-3">
                  3. Feedback & Complaints Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We welcome all feedback, compliments, and complaints. Hearing from you helps us improve. You have the right to speak up at any time without fear of negative consequences or changes to the quality of your care.
                </p>
              </div>

              {/* 3 Step Process */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">Speak With Us Directly</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Talk to your support worker, coordinator, or call our office on <strong>1300 123 456</strong>. You can also email us at <strong>feedback@nearcare.com.au</strong> or submit an anonymous note.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">We Listen & Investigate</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We acknowledge all complaints within <strong>24 hours</strong>. We will work with you, listen to your experience, and investigate fairly and transparently within 10 business days.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">Resolution & Improvement</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We will agree on a solution together, take corrective action, and make sure you are satisfied with the outcome. Your feedback makes our service safer for everyone.
                  </p>
                </div>
              </div>

              {/* Whistleblower & Guarantee Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">Our Zero Retaliation Guarantee</h4>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    We guarantee that making a complaint or giving constructive feedback will never negatively affect your care, your schedule, or how you are treated by our team. We protect the rights of whistleblowers and participants alike.
                  </p>
                </div>
              </div>

              {/* External NDIS Quality & Safeguards Commission */}
              <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-teal-400 mb-2">
                  Independent NDIS Quality & Safeguards Commission
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  If you do not feel comfortable raising an issue with us directly, or if you are not satisfied with how we resolved your complaint, you have the right to contact the independent Australian NDIS Quality and Safeguards Commission at any time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:1800035544"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 p-4 rounded-xl border border-slate-700 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-xs text-slate-400">Call Freecall</div>
                      <div className="font-bold text-white">1800 035 544</div>
                    </div>
                  </a>

                  <a
                    href="https://www.ndiscommission.gov.au/participants/complaints"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 p-4 rounded-xl border border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-xs text-slate-400">Online Portal</div>
                      <div className="font-bold text-white">NDIS Commission Website</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center no-print">
          <p className="text-gray-500 text-sm mb-4">
            Need this document in an alternative format (Easy Read, large print, or community language)?
          </p>
          <a
            href="mailto:hello@nearcare.com.au?subject=Accessible%20Document%20Request"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 text-sm"
          >
            <Mail className="w-4 h-4" />
            Request Easy Read or Translated Copies
          </a>
        </div>

      </div>
    </div>
  );
};
