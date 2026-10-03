"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-white">
      {/* Background Visual System - Richer glows for atmosphere */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#EFF6FF] to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#14B8A6] rounded-full blur-[140px] opacity-[0.06] pointer-events-none" aria-hidden="true" />
      
      {/* Extremely faint grid for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-full overflow-hidden lg:overflow-visible">
          
          {/* Left Column - Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">Smart Billing Platform</span>
              </div>
              
              <h1 className="h1-hero lg:h1-hero mb-6 text-[#0F172A]">
                Smart Billing.<br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#6366F1] drop-shadow-sm">Faster Payments.</span><br className="hidden lg:block"/> Better Business.
              </h1>

              <p className="text-[#475569] text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Create professional invoices, manage GST billing, track payments, and keep your business finances organized from one simple workspace.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link href="#demo" className="btn-primary w-full sm:w-auto h-12 text-[15px]">
                  Create Free Invoice
                  <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                </Link>
                <Link href="#features" className="btn-secondary w-full sm:w-auto h-12 text-[15px]">
                  Explore Features
                </Link>
              </div>

              {/* Value checks */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[13px] font-semibold text-[#475569]">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm"><CheckCircle2 size={14} className="text-[#16A34A]" aria-hidden="true" /> GST-ready invoicing</span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm"><CheckCircle2 size={14} className="text-[#16A34A]" aria-hidden="true" /> Payment tracking</span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm"><CheckCircle2 size={14} className="text-[#16A34A]" aria-hidden="true" /> Customer management</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Realistic Dashboard Bleed */}
          <div className="lg:col-span-7 relative w-full mt-12 lg:mt-0 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.2 }}
              className="relative w-full max-w-[900px] mx-auto lg:mr-[-120px] rounded-2xl ring-1 ring-[#0F172A]/5 shadow-2xl overflow-hidden bg-white"
            >
              {/* The Realistic Product UI Mockup */}
              <div className="product-panel overflow-hidden bg-white rounded-2xl shadow-none">
                
                {/* App Header (Mac Style Browser/App Frame) */}
                <div className="h-12 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between px-4 sm:px-6">
                  <div className="flex items-center gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#E2E8F0] sm:bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#E2E8F0] sm:bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#E2E8F0] sm:bg-[#27C93F]" />
                  </div>
                  
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-[#0F172A] text-[13px] flex items-center gap-2">
                        <div className="w-4 h-4 rounded-[4px] bg-[#2563EB]" /> Overview
                      </span>
                      <span className="text-[#64748B] text-[13px] font-medium hidden sm:block">October 2026</span>
                    </div>
                  </div>
                  
                  <MoreVertical size={16} className="text-[#94A3B8]" aria-hidden="true" />
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* KPI Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Revenue</p>
                      <p className="text-xl md:text-2xl font-bold text-[#0F172A]">₹4.82L</p>
                      <p className="text-xs font-semibold text-[#16A34A] flex items-center gap-1">
                        <TrendingUp size={12} aria-hidden="true" /> +18.4%
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Paid</p>
                      <p className="text-xl md:text-2xl font-bold text-[#0F172A]">₹3.91L</p>
                      <p className="text-xs font-semibold text-[#16A34A] flex items-center gap-1">
                        <TrendingUp size={12} aria-hidden="true" /> +12.1%
                      </p>
                    </div>
                    <div className="space-y-1 border-l border-[#F1F5F9] pl-4">
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Pending</p>
                      <p className="text-xl md:text-2xl font-bold text-[#0F172A]">₹58.2K</p>
                      <p className="text-xs font-semibold text-[#DC2626] flex items-center gap-1">
                        <TrendingUp size={12} className="rotate-180" aria-hidden="true" /> -4.2%
                      </p>
                    </div>
                    <div className="space-y-1 border-l border-[#F1F5F9] pl-4">
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Overdue</p>
                      <p className="text-xl md:text-2xl font-bold text-[#0F172A]">₹33.4K</p>
                      <p className="text-xs font-semibold text-[#DC2626] flex items-center gap-1">
                        <TrendingUp size={12} aria-hidden="true" /> +2.8%
                      </p>
                    </div>
                  </div>

                  {/* Revenue Overview Chart (Visual) */}
                  <div className="h-32 md:h-40 border border-[#F1F5F9] rounded-xl p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-[#0F172A]">Revenue Overview</span>
                      <select className="text-xs border-none bg-transparent text-[#64748B] font-semibold focus:ring-0 cursor-pointer">
                        <option>Last 6 Months</option>
                      </select>
                    </div>
                    <div className="flex-1 flex items-end gap-2 px-1">
                      {[40, 55, 45, 70, 85, 100].map((h, i) => (
                        <div key={i} className="group flex-1 flex flex-col justify-end h-full relative cursor-pointer">
                          <div 
                            className="w-full bg-gradient-to-t from-[#2563EB]/5 to-[#2563EB]/25 rounded-t-md relative overflow-hidden transition-all duration-300 group-hover:from-[#2563EB]/15 group-hover:to-[#2563EB]/40" 
                            style={{ height: `${h}%` }}
                          >
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#2563EB] rounded-t-md transition-transform duration-300 group-hover:scale-y-150 origin-top" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-[#94A3B8] font-bold mt-2 px-1">
                      <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                    </div>
                  </div>

                  {/* Recent Invoices Table */}
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] mb-3">Recent Invoices</h3>
                    <div className="border border-[#E2E8F0] rounded-xl overflow-x-auto">
                      <table className="w-full text-sm text-left min-w-[450px]">
                        <thead className="bg-[#F8FAFC] text-[#64748B] text-xs uppercase font-semibold">
                          <tr>
                            <th className="px-4 py-3 font-semibold">Invoice</th>
                            <th className="px-4 py-3 font-semibold">Customer</th>
                            <th className="px-4 py-3 font-semibold">Amount</th>
                            <th className="px-4 py-3 font-semibold text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F5F9]">
                          {[
                            { id: "INV-1042", client: "Arjun Traders", amt: "₹24,800", status: "PAID", statusColor: "text-[#16A34A]", dot: "bg-[#16A34A]" },
                            { id: "INV-1041", client: "Nova Retail", amt: "₹18,500", status: "PENDING", statusColor: "text-[#D97706]", dot: "bg-[#D97706]" },
                            { id: "INV-1040", client: "Green Mart", amt: "₹32,200", status: "OVERDUE", statusColor: "text-[#DC2626]", dot: "bg-[#DC2626]" },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-[#F8FAFC] transition-colors">
                              <td className="px-4 py-3 font-semibold text-[#0F172A]">{row.id}</td>
                              <td className="px-4 py-3 text-[#475569]">{row.client}</td>
                              <td className="px-4 py-3 font-bold text-[#0F172A]">{row.amt}</td>
                              <td className="px-4 py-3 text-right">
                                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-[#E2E8F0] shadow-sm">
                                  <span className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />
                                  <span className={`text-[10px] font-bold tracking-wider ${row.statusColor}`}>{row.status}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
