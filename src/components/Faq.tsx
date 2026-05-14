import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-pm-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-start gap-4 pr-8">
          <HelpCircle className="mt-1 shrink-0 text-pm-blue opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
          <h3 className="font-bold text-pm-navy md:text-lg leading-tight">{question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="shrink-0 text-slate-400 group-hover:text-pm-blue transition-colors"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-14 pr-8 text-slate-600 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const faqs = [
    {
      question: "These are just example questions, swap them out?",
      answer: "Use the ones in OneNote"
    },
    {
      question: "How does PolicyMate ensure the accuracy of the AI-generated answers?",
      answer: "PolicyMate uses a Retrieval-Augmented Generation (RAG) approach, meaning it only looks at your specific company documents to formulate answers. It provides direct citations to the source document, ensuring every answer is verifiable and 100% accurate to your policy."
    },
    {
      question: "Is our company data secure with PolicyMate?",
      answer: "Absolutely. We use enterprise-grade encryption and isolated data environments for every client. Your documents are never used to train global AI models, and access is strictly controlled via your existing identity provider."
    },
    {
      question: "How long does it take to get PolicyMate up and running?",
      answer: "Most organisations can be live within 24-48 hours. Once you upload your documents, our AI indexes them almost instantly, and your team can start asking questions right away."
    },
    {
      question: "Can PolicyMate handle complex, multi-document policy queries?",
      answer: "Yes. PolicyMate identifies relevant information across multiple documents (e.g., cross-referencing your Leave Policy with your Parent Policy) to provide comprehensive, nuanced answers to complex employee scenarios."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-pm-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-pm-blue bg-pm-blue/10 rounded-full">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-pm-navy mb-4 tracking-tight">Everything you need to know</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Find answers to common questions about PolicyMate's implementation, security, and precision features.
          </p>
        </div>

        <div className="bg-white rounded-[32px] border border-pm-slate-200 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Have more questions? <a href="#contact" className="text-pm-blue font-bold hover:underline">Speak to our team</a>
          </p>
        </div>
      </div>
    </section>
  );
}
