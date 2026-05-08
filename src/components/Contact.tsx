import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /**
     * Placeholder submit action.
     * In a production app, you would add your API endpoint logic here.
     */
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-pm-navy rounded-[32px] p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Ready to save your managers hours of frustration?
            </h2>
            <p className="text-slate-400 text-sm font-light mb-8 leading-relaxed">
              Request a personalised demonstration and see how PolicyMate ensures absolute policy precision across your entire organisation.
            </p>
            
            <div className="flex flex-col gap-4 text-xs text-white/50 font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pm-blue" size={16} />
                <span>Zero-friction search setup</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pm-blue" size={16} />
                <span>Instant compliance auditing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pm-blue" size={16} />
                <span>Natural language policy indexing</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 bg-pm-blue rounded-full mb-6 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                <p className="text-sm text-slate-400">
                  Thank you for your interest. A member of our team will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-slate-800 border-none rounded-lg p-3 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-pm-blue outline-none transition-all"
                />
                <div className="flex gap-2">
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    className="flex-1 bg-slate-800 border-none rounded-lg p-3 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-pm-blue outline-none transition-all"
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="Company Name"
                    className="flex-1 bg-slate-800 border-none rounded-lg p-3 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-pm-blue outline-none transition-all"
                  />
                </div>
                <textarea 
                  rows={3}
                  placeholder="Message (Optional)"
                  className="w-full bg-slate-800 border-none rounded-lg p-3 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-pm-blue outline-none transition-all resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-pm-orange hover:bg-orange-600 py-3 rounded-lg text-xs font-bold transition-colors active:scale-[0.98] shadow-lg shadow-pm-orange/20"
                >
                  Request More Information
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
