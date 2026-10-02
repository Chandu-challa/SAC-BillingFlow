"use client";

import { TrendingUp, Users, FileText, Clock, AlertCircle } from "lucide-react";

export default function DashboardPreview() {
  const cards = [
    { label: "Paid Invoices", value: "142", icon: FileText, color: "text-[#16A34A]" },
    { label: "Pending", value: "28", icon: Clock, color: "text-[#D97706]" },
    { label: "Overdue", value: "4", icon: AlertCircle, color: "text-[#DC2626]" },
    { label: "Customers", value: "86", icon: Users, color: "text-[#2563EB]" },
  ];

  const recentInvoices = [
    { id: "INV-1042", customer: "Arjun Traders", amount: "₹24,800", status: "Paid" },
    { id: "INV-1041", customer: "Nova Retail", amount: "₹18,500", status: "Pending" },
    { id: "INV-1040", customer: "Green Mart", amount: "₹32,200", status: "Overdue" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full font-sans">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <p className="text-sm font-medium text-[#64748B] mb-1">Total Revenue</p>
          <div className="flex items-end gap-3">
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">₹4,82,500</h2>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#16A34A] bg-[#16A34A0F] px-2 py-0.5 rounded-full mb-1">
              <TrendingUp size={14} />
              <span>+18.4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards - White surface, neutral background, semantic icons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div key={i} className="card-premium p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <p className="text-sm font-semibold text-[#475569]">{card.label}</p>
              <div className={`${card.color}`}>
                <card.icon size={18} strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F172A]">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section - Chart & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Professional Chart placeholder */}
        <div className="lg:col-span-2 card-premium p-6 flex flex-col">
          <h3 className="text-sm font-bold text-[#0F172A] mb-6 uppercase tracking-wider">Revenue Overview</h3>
          <div className="flex-1 flex items-end gap-2 sm:gap-6 mt-auto min-h-[180px] pt-4 border-b border-[#F1F5F9]">
            {[
              { label: "Jan", val: 40 },
              { label: "Feb", val: 55 },
              { label: "Mar", val: 50 },
              { label: "Apr", val: 70 },
              { label: "May", val: 85 },
              { label: "Jun", val: 100 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center gap-3 group cursor-pointer h-full">
                <div 
                  className="w-full max-w-[40px] bg-[#EEF2FF] group-hover:bg-[#E0E7FF] rounded-t-md transition-colors relative overflow-hidden" 
                  style={{ height: `${bar.val}%` }}
                >
                  {/* Accent colored top bar for chart */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-[#2563EB]" />
                </div>
                <span className="text-xs text-[#64748B] font-semibold">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Invoices Table */}
        <div className="card-premium p-6 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Recent Invoices</h3>
            <button className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] focus:outline-none focus:underline" aria-label="View all invoices">
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <tbody className="divide-y divide-[#F1F5F9]">
                {recentInvoices.map((inv, i) => (
                  <tr key={i} className="group">
                    <td className="py-3.5 pr-3">
                      <p className="font-semibold text-[#0F172A]">{inv.id}</p>
                      <p className="text-xs text-[#64748B] mt-0.5 truncate max-w-[120px]">{inv.customer}</p>
                    </td>
                    <td className="py-3.5 px-2 text-[#0F172A] font-semibold text-right">{inv.amount}</td>
                    <td className="py-3.5 pl-3 text-right">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        inv.status === 'Paid' ? 'bg-[#16A34A14] text-[#16A34A]' :
                        inv.status === 'Pending' ? 'bg-[#D9770614] text-[#D97706]' :
                        'bg-[#DC262614] text-[#DC2626]'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
