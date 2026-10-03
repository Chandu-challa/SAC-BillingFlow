import { InvoiceItem } from "../../types/billing";
import { formatINR } from "../../lib/currency";

interface LiveInvoicePreviewProps {
  printRef: React.RefObject<HTMLDivElement | null>;
  customerName: string;
  items: InvoiceItem[];
  totalsNode: React.ReactNode;
}

export function LiveInvoicePreview({ printRef, customerName, items, totalsNode }: LiveInvoicePreviewProps) {
  return (
    <div className="bg-[#F1F5F9] p-4 sm:p-6 lg:p-8 flex items-start justify-center overflow-y-auto min-h-[500px] lg:min-h-[600px] lg:max-h-[calc(100vh-200px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full max-w-[500px] flex flex-col gap-6 pb-4">
        {/* The A4 Page */}
        <div ref={printRef} className="w-full bg-white rounded-sm shadow-2xl ring-1 ring-black/5 border border-[#E2E8F0] p-6 sm:p-8 text-sm text-[#0F172A] font-mono print:shadow-none print:border-none print:ring-0">
          
          {/* Invoice Header */}
          <div className="flex justify-between items-end border-b-2 border-[#111A3A] pb-6 mb-6">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-[#111A3A] mb-1">SAC BILLFLOW</h2>
              <p className="text-[#64748B] text-xs font-sans">GSTIN: 27AADCS0472N1Z1</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-[#2563EB] mb-1 tracking-tight">INVOICE</p>
              <p className="text-[#64748B] text-xs font-sans">#SB-2026-00124</p>
              <p className="text-[#64748B] text-xs font-sans">Date: {new Date().toLocaleDateString('en-IN')}</p>
            </div>
          </div>

          {/* Bill To */}
          <div className="mb-8">
            <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2 font-sans">Bill To</p>
            <p className="font-bold text-[#0F172A] text-base">{customerName || "Customer Name"}</p>
          </div>

          {/* Items Table */}
          <div className="w-full mb-8 overflow-x-auto">
            <div className="min-w-[380px] pb-2">
              <div className="flex text-xs font-bold text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0] pb-2 mb-2 font-sans">
                <div className="flex-1">Description</div>
                <div className="w-16 text-right">Qty</div>
                <div className="w-24 text-right">Rate</div>
                <div className="w-28 text-right">Amount</div>
              </div>
              
              <div className="space-y-3 font-sans min-h-[60px]">
                {items.length === 0 ? (
                  <div className="text-center text-[#94A3B8] text-sm italic py-4">No items added. Invoice is empty.</div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex text-sm text-[#0F172A]">
                      <div className="flex-1 pr-4">{item.description || <span className="text-[#94A3B8] italic">No description</span>}</div>
                      <div className="w-16 text-right">{item.quantity}</div>
                      <div className="w-24 text-right">₹{formatINR(item.unitPrice)}</div>
                      <div className="w-28 text-right font-semibold">₹{formatINR(item.quantity * item.unitPrice)}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Totals Section */}
          {totalsNode}

        </div>
      </div>
    </div>
  );
}
