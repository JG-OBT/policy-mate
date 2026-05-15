import { SHOW_PRICING_SECTION } from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenCookies }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 px-4 md:px-8 border-t border-pm-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-6">
               <img 
                src="/policymate-logo.png" 
                alt="PolicyMate" 
                className="h-8 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
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
                    textLogo.className = 'font-bold text-2xl tracking-tight text-pm-navy';
                    textLogo.innerText = 'PolicyMate';
                    parent.appendChild(textLogo);
                  }
                }}
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Next-generation AI policy management. Save management time and ensure total accuracy with natural language document search.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-pm-navy text-sm">Platform</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-medium">
              <li><a href="#demo" className="hover:text-pm-blue transition-colors">Demo</a></li>
              <li><a href="#documents" className="hover:text-pm-blue transition-colors">Documents</a></li>
              {SHOW_PRICING_SECTION && <li><a href="#pricing" className="hover:text-pm-blue transition-colors">Pricing</a></li>}
              <li><a href="#contact" className="hover:text-pm-blue transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-pm-navy text-sm">Legal</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-medium">
              <li><button onClick={onOpenPrivacy} className="hover:text-pm-blue transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={onOpenCookies} className="hover:text-pm-blue transition-colors cursor-pointer text-left">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-pm-navy text-sm">Contact</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-medium">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-300 mb-1">Email us</span>
                <a href="mailto:info@policymate.com" className="text-slate-600 hover:text-pm-blue transition-colors">info@policy-mate.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-pm-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          <p>© {currentYear} PolicyMate Ltd. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
