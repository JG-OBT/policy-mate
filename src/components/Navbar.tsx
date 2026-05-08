import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { SHOW_PRICING_SECTION } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Demo', href: '#demo' },
    { name: 'Documents', href: '#documents' },
    ...(SHOW_PRICING_SECTION ? [{ name: 'Pricing', href: '#pricing' }] : []),
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-header py-1.5 shadow-md' : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          {/* 
            Assuming logo is at /public/policymate-logo.png 
            If not available, we use a styled logo block as per theme
          */}
          <picture className="flex items-center gap-2">
            <img 
              src="/policymate-logo.png" 
              alt="PolicyMate" 
              className="h-18 md:h-20 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.theme-logo-block')) {
                  const block = document.createElement('div');
                  block.className = 'theme-logo-block w-8 h-8 flex flex-wrap gap-0.5 shrink-0';
                  block.innerHTML = `
                    <div class="w-3.5 h-3.5 bg-[#F97316] rounded-sm"></div>
                    <div class="w-3.5 h-3.5 bg-[#3B82F6] rounded-sm"></div>
                    <div class="w-3.5 h-3.5 bg-[#EF4444] rounded-sm"></div>
                    <div class="w-3.5 h-3.5 bg-[#8B5CF6] rounded-sm"></div>
                  `;
                  parent.prepend(block);
                  
                  const textLogo = document.createElement('span');
                  textLogo.className = 'font-bold text-xl md:text-2xl tracking-tight text-pm-navy';
                  textLogo.innerText = 'PolicyMate';
                  parent.appendChild(textLogo);
                }
              }}
            />
          </picture>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-pm-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2 bg-pm-navy text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm">
            Request More Information
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-pm-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-pm-navy/5 shadow-xl p-6 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-pm-navy"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request More Information
          </a>
        </motion.div>
      )}
    </nav>
  );
}
