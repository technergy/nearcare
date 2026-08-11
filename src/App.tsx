/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { Departments } from './pages/Departments';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { ProgramDetail } from './pages/ProgramDetail';
import { Contact } from './pages/Contact';
import { HousingPage } from './pages/HousingPage';
import { CompliancePage } from './pages/CompliancePage';
import { FAQPage } from './pages/FAQPage';
import { ServiceDetail } from './pages/ServiceDetail';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-teal-200 selection:text-teal-900 flex flex-col">
        <TopBar />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/housing" element={<HousingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
