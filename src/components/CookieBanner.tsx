import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('pm-cookie-consent');
      if (!consent) setShowBanner(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pm-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-16 right-8 w-full max-w-[400px] z-50 p-4"
        >
          <div className="bg-white border border-pm-slate-200 shadow-2xl rounded-2xl p-5 flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 bg-pm-slate-50 rounded-full flex items-center justify-center text-slate-400">
              <Cookie size={20} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] leading-tight text-slate-600 mb-3">
                We use cookies to ensure you get the best experience on our website. 
              </p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleAccept}
                  className="text-[10px] font-bold text-pm-blue hover:opacity-70 transition-all uppercase tracking-wider"
                >
                  Accept All
                </button>
                <button 
                  onClick={() => setShowBanner(false)}
                  className="text-[10px] font-bold text-slate-400 hover:text-pm-navy transition-all uppercase tracking-wider"
                >
                  Preferences
                </button>
              </div>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className="shrink-0 p-1 text-slate-300 hover:text-slate-500 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
