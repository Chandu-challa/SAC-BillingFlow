"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function PaymentTracking() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Paid", "Pending", "Overdue"];

  const payments = [
    { id: "INV-1042", name: "Arjun Traders", amount: "₹24,800", date: "24 Oct 2026", status: "Paid", color: "text-[#16A34A]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
    { id: "INV-1041", name: "Nova Retail", amount: "₹18,500", date: "22 Oct 2026", status: "Pending", color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
    { id: "INV-1040", name: "Green Mart", amount: "₹32,200", date: "15 Oct 2026", status: "Overdue", color: "text-[#DC2626]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]" },
    { id: "INV-1039", name: "Tech Solutions", amount: "₹15,000", date: "10 Oct 2026", status: "Paid", color: "text-[#16A34A]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
  ];

  return (
    <section id="payment-tracking" className="section-pad bg-white">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div>
            <h2 className="h2-section mb-6">
              Track Payments with Precision
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Never lose sight of an invoice. Our intelligent dashboard categorizes every invoice automatically, so you instantly know who has paid and who needs a reminder.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-sm font-semibold text-[#0F172A]">
                  <div className="w-10 h-10 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A]">✓</div>
                  Automated reconciliation against bank accounts.
               </div>
               <div className="flex items-center gap-4 text-sm font-semibold text-[#0F172A]">
                  <div className="w-10 h-10 rounded-full bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-[#D97706]">!</div>
                  Smart aging reports for pending invoices.
               </div>
            </div>
          </div>

          <div>
            {/* Realistic Payment Management UI */}
            <div className="product-panel bg-[#F8FAFC]">
              
              <div className="p-4 border-b border-[#E2E8F0] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-2">
                  {tabs.map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                        activeTab === tab 
                          ? "bg-[#0F172A] text-white" 
                          : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="relative w-full sm:w-auto">
                  <Search size={14} className="absolute left-2.5 top-2 text-[#94A3B8]" />
                  <input 
                    type="text" 
                    placeholder="Search invoices..." 
                    className="w-full sm:w-40 pl-8 pr-3 py-1.5 text-xs border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-[#F8FAFC]">
                <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden">
                  
                  <div className="hidden sm:grid grid-cols-4 px-4 py-3 bg-[#F8FAFC] border-b border-[#F1F5F9] text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    <div className="col-span-2">Customer</div>
                    <div>Amount</div>
                    <div className="text-right">Status</div>
                  </div>

                  <div className="divide-y divide-[#F1F5F9]">
                    {payments.filter(p => activeTab === "All" || p.status === activeTab).map((payment, i) => (
                      <div key={i} className="p-4 hover:bg-[#F8FAFC] transition-colors flex flex-col sm:grid sm:grid-cols-4 sm:items-center gap-3 sm:gap-0">
                        <div className="col-span-2">
                          <p className="text-sm font-bold text-[#0F172A]">{payment.name}</p>
                          <p className="text-xs text-[#64748B] mt-0.5">{payment.id} • {payment.date}</p>
                        </div>
                        <div className="text-sm font-bold text-[#0F172A]">
                          {payment.amount}
                        </div>
                        <div className="flex sm:justify-end">
                          <span className={`inline-flex items-center px-2 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${payment.bg} ${payment.color} ${payment.border}`}>
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
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
