import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PRICING_TIERS, SHOW_PRICING_SECTION } from '../constants';

export default function Pricing() {
  /**
   * CRITICAL IMPLEMENTATION REQUIREMENT:
   * The pricing section must be built into the code but hidden from the website by default.
   * 
   * TO ENABLE: Go to src/constants.ts and set SHOW_PRICING_SECTION = true
   */
  if (!SHOW_PRICING_SECTION) return null;

  return (
    <section id="pricing" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-pm-navy mb-6">Simple, Transparent Pricing</h2>
          <p className="text-pm-navy/60 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your organisation's compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-pm-navy text-white border-pm-navy shadow-2xl scale-105 z-10' 
                  : 'bg-white text-pm-navy border-pm-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-pm-blue text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-lg font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-pm-navy'}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className={`text-sm ${tier.highlight ? 'text-white/60' : 'text-slate-400'}`}>/month</span>}
                </div>
                <p className={`text-xs leading-relaxed font-light ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4 text-xs font-medium">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <div className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-pm-blue' : 'text-pm-blue'}`}>
                        <Check size={14} />
                      </div>
                      <span className={tier.highlight ? 'text-white/90' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-lg text-xs font-bold transition-all shadow-sm ${
                tier.highlight 
                  ? 'bg-white text-pm-navy hover:bg-pm-slate-50' 
                  : 'bg-pm-navy text-white hover:bg-slate-800'
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
