import { useState } from "react";
import { Download, Printer, ShieldCheck } from "lucide-react";
import { generatePdf } from "../../lib/pdf-generator";

interface InvoiceActionsProps {
  onPrint: () => void;
  canExport: boolean;
  customerName: string;
  printRef: React.RefObject<HTMLDivElement | null>;
}

export function InvoiceActions({ onPrint, canExport, customerName, printRef }: InvoiceActionsProps) {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownload = async () => {
    if (!printRef.current || !canExport) return;
    setIsGeneratingPdf(true);
    await generatePdf(printRef.current, customerName, () => {
      setIsGeneratingPdf(false);
    });
  };

  return (
    <div className="flex items-center gap-3">
      <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] bg-[#F0FDF4] px-2.5 py-1.5 rounded-full border border-[#BBF7D0]">
        <ShieldCheck size={14} aria-hidden="true" /> Auto-saving
      </span>
      <div className="h-4 w-px bg-[#E2E8F0] hidden sm:block mx-1" />
      <button 
        onClick={onPrint} 
        disabled={!canExport}
        className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] text-[#0F172A] px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-[#F8FAFC] transition-colors focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Printer size={16} aria-hidden="true" /> <span className="hidden sm:inline">Print</span>
      </button>
      <button 
        onClick={handleDownload} 
        disabled={!canExport || isGeneratingPdf}
        className="flex items-center gap-1.5 bg-[#2563EB] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-[#1D4ED8] transition-colors focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] justify-center"
      >
        <Download size={16} aria-hidden="true" /> 
        <span className="hidden sm:inline">
          {isGeneratingPdf ? "Generating..." : "Download"}
        </span>
      </button>
    </div>
  );
}
