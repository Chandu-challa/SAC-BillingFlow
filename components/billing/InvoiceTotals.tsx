import { formatINR } from "../../lib/currency";

interface InvoiceTotalsProps {
  totals: {
    subtotal: number;
    totalDiscount: number;
    taxableAmount: number;
    gstAmount: number;
    grandTotal: number;
  };
  gstRate: number;
}

export function InvoiceTotals({ totals, gstRate }: InvoiceTotalsProps) {
  return (
    <div className="flex justify-end font-sans">
      <div className="w-full sm:w-64 space-y-2">
        <div className="flex justify-between text-sm text-[#475569]">
          <span>Subtotal</span>
          <span>₹{formatINR(totals.subtotal)}</span>
        </div>
        {totals.totalDiscount > 0 && (
          <div className="flex justify-between text-sm text-[#16A34A]">
            <span>Discount</span>
            <span>-₹{formatINR(totals.totalDiscount)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm text-[#475569]">
          <span>Taxable Amount</span>
          <span>₹{formatINR(totals.taxableAmount)}</span>
        </div>
        <div className="flex justify-between text-sm text-[#475569] border-b border-[#E2E8F0] pb-2">
          <span>GST ({gstRate}%)</span>
          <span>₹{formatINR(totals.gstAmount)}</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="font-bold text-[#0F172A]">Grand Total</span>
          <span className="text-xl font-black text-[#2563EB] tracking-tight">₹{formatINR(totals.grandTotal)}</span>
        </div>
      </div>
    </div>
  );
}
