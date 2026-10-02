"use client";

import { CheckCircle2 } from "lucide-react";

export default function GSTSection() {
  return (
    <section className="section-pad bg-gradient-to-br from-[#F0FDFA] to-[#EFF6FF]">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="h2-section mb-6 text-[#0F172A]">
              GST Billing Without the Complexity
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Generate fully detailed invoices with automatic CGST, SGST, and IGST calculations. We handle the math so you can focus on your business.
            </p>
            
            <div className="space-y-4">
              {[
                "Automatic GST calculation based on HSN/SAC.",
                "Built-in support for multiple tax slabs.",
                "Detailed breakdown of all applied taxes."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#0D9488] shrink-0 mt-0.5" />
                  <span className="text-[#0F172A] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Hyper-realistic tabular Indian invoice snippet */}
            <div className="product-panel p-6 bg-white max-w-lg mx-auto">
              <div className="border border-[#E2E8F0] rounded-lg overflow-hidden text-sm font-sans">
                
                <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E2E8F0] flex justify-between font-bold text-[#0F172A]">
                  <span>SAC BillFlow Inc.</span>
                  <span className="text-[#64748B] font-medium text-xs mt-0.5">GSTIN: 27AADCS0472N1Z1</span>
                </div>

                <div className="p-4 space-y-4">
                  <table className="w-full text-left text-[13px]">
                    <thead className="text-xs text-[#64748B] uppercase border-b border-[#F1F5F9]">
                      <tr>
                        <th className="pb-2 font-semibold">Item & HSN</th>
                        <th className="pb-2 font-semibold text-right">Taxable Val</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F5F9]">
                      <tr>
                        <td className="py-2 text-[#0F172A] font-medium">Software License<br/><span className="text-[#64748B] text-[11px]">SAC: 998311</span></td>
                        <td className="py-2 text-right font-semibold">₹10,000.00</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="bg-[#F8FAFC] rounded border border-[#F1F5F9] p-3 text-[13px] space-y-2">
                    <div className="flex justify-between text-[#475569]">
                      <span>CGST (9%)</span>
                      <span className="font-medium text-[#0F172A]">₹900.00</span>
                    </div>
                    <div className="flex justify-between text-[#475569]">
                      <span>SGST (9%)</span>
                      <span className="font-medium text-[#0F172A]">₹900.00</span>
                    </div>
                    <div className="flex justify-between text-[#475569]">
                      <span>IGST (0%)</span>
                      <span className="font-medium text-[#0F172A]">₹0.00</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#0F172A] pt-2 border-t border-[#E2E8F0] text-sm">
                      <span>Total Invoice Value</span>
                      <span>₹11,800.00</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
