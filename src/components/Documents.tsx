import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Eye, Search } from 'lucide-react';
import { DOCUMENTS } from '../constants';
import { Document } from '../types';
import PDFModal from './PDFModal';

export default function Documents() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = DOCUMENTS.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="documents" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-pm-navy mb-4 tracking-tight">Precision Policy Search</h2>
            <p className="text-slate-600 max-w-xl">
              The policies listed below are examples for our demonstration. With PolicyMate, your organisation can <strong className="text-pm-navy">securely upload</strong> your own document library, enabling managers to surface exact clauses and make accurate, compliant decisions in seconds.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search policies..."
              className="w-full bg-white border border-pm-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pm-blue/10 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-pm-slate-200 p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {filteredDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                viewport={{ once: true }}
                className="group p-3 bg-pm-slate-50 border border-transparent hover:border-pm-slate-200 hover:bg-white rounded-xl transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="shrink-0 w-6 h-6 text-pm-red">
                    <FileText size={20} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 truncate" title={doc.title}>
                    {doc.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="shrink-0 px-3 py-1.5 border border-pm-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-pm-blue hover:text-white hover:border-pm-blue transition-all"
                >
                  View
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[32px] border border-dashed border-pm-navy/10">
            <p className="text-pm-navy/40 font-medium">No policy documents found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      <PDFModal 
        document={selectedDoc} 
        onClose={() => setSelectedDoc(null)} 
      />
    </section>
  );
}
