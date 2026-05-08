import { motion, AnimatePresence } from 'motion/react';
import { X, FileText } from 'lucide-react';
import { Document } from '../types';

interface PDFModalProps {
  document: Document | null;
  onClose: () => void;
}

export default function PDFModal({ document, onClose }: PDFModalProps) {
  return (
    <AnimatePresence>
      {document && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pm-navy/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-bottom border-pm-navy/10 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pm-red/10 flex items-center justify-center text-pm-red">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-pm-navy">{document.title}</h3>
                  <p className="text-xs text-pm-navy/50">Viewing sample document</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-pm-navy/5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 bg-pm-navy/5 p-4 overflow-hidden">
              <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden flex flex-col items-center justify-center text-center p-8">
                {/* 
                  In a real app, this would be an <iframe src={document.path} /> 
                  But since we don't have real PDFs, we'll show a nice placeholder.
                */}
                <FileText size={64} className="text-pm-navy/20 mb-4" />
                <h4 className="text-xl font-medium mb-2">Document Preview Unavailable</h4>
                <p className="text-pm-navy/60 max-w-md mx-auto">
                  In a production environment, the PDF file at <code className="bg-pm-navy/5 px-1 rounded">{document.path}</code> would be displayed here using an embedded viewer.
                </p>
                <a 
                  href={document.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 btn-primary"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
