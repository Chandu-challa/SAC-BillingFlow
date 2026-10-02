"use client";

import { FileText, PieChart, Clock, Users, Receipt } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[#F8FAFC]">
      <div className="container-app">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="h2-section mb-6">
            Everything You Need to Stay on Top of Billing
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Stop switching between spreadsheets and generic templates. Manage your entire billing lifecycle in one professional platform.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid lg:grid-cols-12 gap-6 lg:gap-8"
        >
          
          {/* Dominant Feature - Smart Invoicing */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="lg:col-span-7 card-premium overflow-hidden bg-white flex flex-col group hover:border-[#BFDBFE] hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8 lg:p-10 flex-1">
              <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#2563EB] mb-6 border border-[#BFDBFE]">
                <FileText size={24} />
              </div>
              <h3 className="h3-sub mb-3">Smart Invoicing Engine</h3>
              <p className="text-[#475569] leading-relaxed max-w-md">
                Create highly professional, error-free invoices in seconds. Auto-calculate subtotals, apply percentage discounts, and handle complex tax structures effortlessly.
              </p>
            </div>
            
            {/* Embedded Mini UI Mockup */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border-t border-[#E2E8F0] p-6 lg:p-8 mt-auto overflow-hidden relative h-[240px] flex items-start justify-center lg:justify-start transition-colors duration-500 group-hover:from-[#EFF6FF] group-hover:to-[#DBEAFE]">
               <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-full max-w-[320px] bg-white rounded-t-xl border border-[#E2E8F0] shadow-2xl p-5 group-hover:-translate-y-2 lg:group-hover:translate-x-0 transition-transform duration-500">
                  <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-3 mb-3">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 rounded-md bg-[#2563EB] flex items-center justify-center">
                          <FileText size={12} className="text-white" />
                       </div>
                       <span className="text-[11px] font-bold text-[#0F172A] tracking-tight">INV-2026-142</span>
                    </div>
                    <span className="text-[9px] font-bold text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] px-1.5 py-0.5 rounded-full tracking-wider uppercase">PAID</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <div className="w-4 h-4 rounded-sm border border-[#CBD5E1] bg-white flex items-center justify-center">
                           <div className="w-2 h-2 rounded-[2px] bg-[#2563EB]" />
                         </div>
                         <span className="text-[11px] text-[#475569] font-medium">Enterprise Plan</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#0F172A]">₹1,24,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <div className="w-4 h-4 rounded-sm border border-[#CBD5E1] bg-white" />
                         <span className="text-[11px] text-[#475569] font-medium">Custom Setup</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#0F172A]">₹45,000</span>
                    </div>
                    
                    <div className="pt-3 border-t border-[#F1F5F9] flex justify-between items-center">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Total</span>
                      <span className="text-sm font-black text-[#2563EB]">₹1,69,000</span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Secondary Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <motion.div 
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
              className="card-premium p-8 bg-white flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-[#CCFBF1] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0FDFA] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="w-12 h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center text-[#0D9488] mb-5 border border-[#CCFBF1]">
                <Receipt size={24} />
              </div>
              <h3 className="h3-sub mb-3">GST Billing</h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                Native support for Indian tax structures. Auto-calculate CGST, SGST, and IGST based on inter-state rules and HSN/SAC codes.
              </p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
              className="card-premium p-8 bg-white flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-[#FEF3C7] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFFBEB] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="w-12 h-12 bg-[#FFFBEB] rounded-xl flex items-center justify-center text-[#D97706] mb-5 border border-[#FEF3C7]">
                <Clock size={24} />
              </div>
              <h3 className="h3-sub mb-3">Payment Tracking</h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                Never lose track of an invoice. Monitor pending, paid, and overdue amounts with our intelligent aging reports.
              </p>
            </motion.div>
          </div>

          {/* Tertiary Row */}
          <div className="lg:col-span-12 grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="card-premium p-8 bg-white flex items-start gap-5 group hover:border-[#EDE9FE] hover:shadow-xl transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 bg-[#F5F3FF] rounded-xl flex items-center justify-center text-[#7C3AED] border border-[#EDE9FE] group-hover:scale-110 transition-transform duration-300">
                <Users size={24} />
              </div>
              <div>
                <h3 className="h3-sub mb-2 text-base">Customer Management</h3>
                <p className="text-[#475569] text-sm leading-relaxed">Store billing profiles, GSTIN details, and historical data for quick reuse.</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="card-premium p-8 bg-white flex items-start gap-5 group hover:border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center text-[#475569] border border-[#E2E8F0] group-hover:scale-110 transition-transform duration-300">
                <PieChart size={24} />
              </div>
              <div>
                <h3 className="h3-sub mb-2 text-base">Business Reports</h3>
                <p className="text-[#475569] text-sm leading-relaxed">Generate actionable insights on your revenue growth and collection efficiency.</p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
