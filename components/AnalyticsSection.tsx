"use client";

import { TrendingUp, TrendingDown, ArrowUpRight, DollarSign } from "lucide-react";

export default function AnalyticsSection() {
  const chartData = [
    { label: "Jan", val: 40 },
    { label: "Feb", val: 55 },
    { label: "Mar", val: 45 },
    { label: "Apr", val: 70 },
    { label: "May", val: 85 },
    { label: "Jun", val: 100 },
  ];

  return (
    <section id="analytics" className="section-pad bg-[#F8FAFC]">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2-section mb-4">
            Know Your Business at a Glance
          </h2>
          <p className="text-lg text-[#475569]">
            Real-time financial insights that help you make better decisions.
          </p>
        </div>

        {/* Realistic Analytics Dashboard */}
        <div className="max-w-[1000px] mx-auto product-panel overflow-hidden bg-white">
          
          <div className="h-14 border-b border-[#E2E8F0] flex items-center justify-between px-6 bg-[#F8FAFC]">
            <span className="text-sm font-bold text-[#0F172A]">Financial Overview</span>
            <select className="text-sm border border-[#E2E8F0] rounded-md px-3 py-1.5 bg-white text-[#475569] font-medium shadow-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="p-6 md:p-8">
            {/* KPI Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className="card-standard p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Total Revenue</span>
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                    <DollarSign size={16} />
                  </div>
                </div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">₹12.4L</p>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#16A34A]">
                  <TrendingUp size={14} /> <span>+24.5% vs last period</span>
                </div>
              </div>

              <div className="card-standard p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Paid</span>
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-[#16A34A]" />
                </div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">₹8.9L</p>
                <div className="mt-2 text-xs font-semibold text-[#475569]">71% of total</div>
              </div>

              <div className="card-standard p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Pending</span>
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-[#D97706]" />
                </div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">₹2.1L</p>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#D97706]">
                  <ArrowUpRight size={14} /> <span>Needs attention</span>
                </div>
              </div>

              <div className="card-standard p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Overdue</span>
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-[#DC2626]" />
                </div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">₹1.4L</p>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#DC2626]">
                  <TrendingDown size={14} /> <span>Increased by 2%</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Chart Area */}
              <div className="md:col-span-2 card-standard p-6 flex flex-col h-[300px]">
                <h3 className="text-sm font-bold text-[#0F172A] mb-6">Revenue Growth</h3>
                <div className="flex-1 flex items-end justify-between gap-2 border-b border-[#F1F5F9] pb-2 relative">
                  {/* Y-axis lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-t border-[#CBD5E1] w-full" />
                    <div className="border-t border-[#CBD5E1] w-full" />
                    <div className="border-t border-[#CBD5E1] w-full" />
                    <div className="border-t border-[#CBD5E1] w-full" />
                  </div>
                  {chartData.map((d, i) => (
                    <div key={i} className="w-full max-w-[48px] flex flex-col justify-end h-full z-10 group">
                      <div className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-[#2563EB] text-center mb-1 transition-opacity">
                        ₹{(d.val * 2.4).toFixed(1)}k
                      </div>
                      <div 
                        className="w-full bg-[#EEF2FF] rounded-t-md relative overflow-hidden transition-all group-hover:bg-[#E0E7FF]"
                        style={{ height: `${d.val}%` }}
                      >
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#2563EB]" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs font-bold text-[#64748B]">
                  {chartData.map((d, i) => <span key={i} className="w-full max-w-[48px] text-center">{d.label}</span>)}
                </div>
              </div>

              {/* Status Breakdown */}
              <div className="card-standard p-6 flex flex-col">
                <h3 className="text-sm font-bold text-[#0F172A] mb-6">Invoice Status</h3>
                <div className="flex-1 flex flex-col justify-center gap-6">
                  
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#16A34A]" />
                        <span className="text-sm font-bold text-[#475569]">Paid</span>
                      </div>
                      <span className="text-sm font-black text-[#0F172A]">71%</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#16A34A] rounded-full" style={{ width: '71%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#D97706]" />
                        <span className="text-sm font-bold text-[#475569]">Pending</span>
                      </div>
                      <span className="text-sm font-black text-[#0F172A]">17%</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#D97706] rounded-full" style={{ width: '17%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#DC2626]" />
                        <span className="text-sm font-bold text-[#475569]">Overdue</span>
                      </div>
                      <span className="text-sm font-black text-[#0F172A]">12%</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#DC2626] rounded-full" style={{ width: '12%' }} />
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
