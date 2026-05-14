/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Documents from './components/Documents';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { LegalModal, PrivacyContent, CookieContent } from './components/LegalModals';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-pm-blue/30 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle separator background element */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pm-navy/[0.02] to-transparent pointer-events-none"></div>
          <Documents />
        </div>

        <Pricing />
        
        <Faq />
        
        <Contact />
      </main>

      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)} 
        onOpenCookies={() => setCookiesOpen(true)} 
      />
      <CookieBanner />

      <LegalModal 
        isOpen={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
        title="Privacy Policy" 
        content={<PrivacyContent />} 
      />
      
      <LegalModal 
        isOpen={cookiesOpen} 
        onClose={() => setCookiesOpen(false)} 
        title="Cookie Policy" 
        content={<CookieContent />} 
      />
    </div>
  );
}

