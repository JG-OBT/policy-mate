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
      question: "What happens if I ask something that isn't covered in the policies?",
      answer: "PolicyMate will tell you clearly that it couldn't find an answer in your uploaded documents, and recommend speaking directly with HR. It will never guess, invent an answer, or draw on outside knowledge. Every response is either grounded in your policies or an honest \"I don't know\" - that's by design."
    },
    {
      question: "How does PolicyMate make sure answers are accurate?",
      answer: "Every answer is pulled directly from your uploaded policy documents, with the exact source and section cited. You can click any quoted passage to see it highlighted in the original document. There's no AI guesswork - if it's not in your policies, it won't be in the answer."
    },
    {
      question: "Is our company's data kept private and secure?",
      answer: "Yes. Each company gets a completely isolated environment - your documents are never shared with or visible to any other organisation. PolicyMate is built on Supabase, which is SOC 2 Type 2 certified and GDPR compliant. Your policies stay yours."
    },
    {
      question: "Who is this for — HR or managers?",
      answer: "Both, but it's designed to be used by site managers and team leaders who need quick, reliable policy answers without escalating to HR every time. HR teams upload and manage the documents. Managers ask the questions. HR gets their time back."
    },
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
