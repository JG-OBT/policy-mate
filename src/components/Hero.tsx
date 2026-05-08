import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { VIDEO_URL } from '../constants';

export default function Hero() {
  return (
    <section id="demo" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-pm-blue bg-pm-blue/10 rounded-full">
            Modern Policy Management
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-pm-navy mb-6 leading-[1.1]">
            Policy Speed. <span className="text-pm-blue">Manager Precision.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Free your HR team for the work that matters. PolicyMate's AI handles repetitive policy queries instantly, giving advisors their time back to focus on supporting and growing your people while ensuring absolute compliance accuracy.
          </p>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl aspect-video rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl bg-pm-navy relative group ring-1 ring-pm-slate-200"
        >
          {/* 
            Placeholder for actual video embed. 
            Update VIDEO_URL in src/constants.ts to change the video.
          */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={VIDEO_URL}
            title="PolicyMate Demonstration"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          {/* Overlay mask to feel more integrated with theme if video isn't playing */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-pm-navy/20 to-transparent"></div>
        </motion.div>

        {/* CTA below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-8"
        >
          <a href="#contact" className="btn-accent flex items-center gap-2">
            Request More Information
            <ArrowRight size={18} />
          </a>
          <a href="#documents" className="text-sm font-semibold text-slate-500 hover:text-pm-navy flex items-center gap-2 underline underline-offset-8 transition-colors">
            View sample policy documents
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
