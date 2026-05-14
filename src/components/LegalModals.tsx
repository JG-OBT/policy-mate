import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-pm-navy/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-pm-slate-200">
              <h3 className="text-xl font-bold text-pm-navy">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-pm-slate-100 transition-colors text-slate-400"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar prose prose-slate max-w-none text-sm text-slate-600 space-y-6">
              {content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const PrivacyContent = () => (
  <>
    <p>Last Updated: May 2024</p>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">1. Information We Collect</h4>
      <p>We collect information you provide directly to us when you request information through our contact forms, such as your name, email address, and company details.</p>
    </section>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">2. How We Use Your Information</h4>
      <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you about PolicyMate, and to respond to your comments and questions.</p>
    </section>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">3. Data Security</h4>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.</p>
    </section>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">4. Your Choices</h4>
      <p>You may opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us.</p>
    </section>
  </>
);

export const CookieContent = () => (
  <>
    <p>Last Updated: May 2024</p>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">1. What are Cookies?</h4>
      <p>Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
    </section>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">2. How We Use Cookies</h4>
      <p>We use cookies to analyze our traffic, remember your preferences (like your cookie consent choice), and provide a more personalized experience.</p>
    </section>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">3. Types of Cookies We Use</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
        <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
      </ul>
    </section>
    <section>
      <h4 className="font-bold text-pm-navy mb-2">4. Managing Cookies</h4>
      <p>You can manage your cookie preferences through your browser settings or by using the preference tools provided on our website.</p>
    </section>
  </>
);
