"use client";

import { FileText, PieChart, Clock, Users, Receipt } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

/*
  Section background options (all light, all pass contrast with #0F172A / #475569 text):
  - "#F3F6FC"  cool periwinkle mist   (default, pairs with the blue brand colour)
  - "#F2F7F5"  soft sage mist         (calm, fintech-friendly)
  - "#F6F5FB"  pale lavender          (a bit more premium)
  - "#FAFAF7"  neutral off-white      (most minimal)
*/
const SECTION_BG = "bg-[#F3F6FC]";

const aging = [
  { label: "Paid", amount: "₹8.4L", width: "72%", bar: "bg-[#16A34A]" },
  { label: "Pending", amount: "₹2.1L", width: "18%", bar: "bg-[#D97706]" },
  { label: "Overdue", amount: "₹64K", width: "10%", bar: "bg-[#DC2626]" },
];

export default function Features() {
  const reduce = useReducedMotion();

  // One reveal for the whole grid, children stagger in. Disabled for reduced-motion users.
  const item: Variants = reduce
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

  return (
    <section id="features" className={`section-pad ${SECTION_BG} relative`}>
      {/* Subtle dot texture so the background isn't a flat fill */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C7D2E8 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
        }}
      />

      <div className="container-app relative">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <h2 className="h2-section mb-4 md:mb-6">
            Everything You Need to Stay on Top of Billing
          </h2>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Stop switching between spreadsheets and generic templates. Manage your
            entire billing lifecycle in one professional platform.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid lg:grid-cols-12 gap-5 lg:gap-6"
        >
          {/* Lead feature: Smart Invoicing */}
          <motion.article
            variants={item}
            className="lg:col-span-7 card-premium bg-white flex flex-col overflow-hidden"
          >
            <div className="p-8 lg:p-10">
              <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#2563EB] mb-6 border border-[#BFDBFE]">
                <FileText size={24} aria-hidden="true" />
              </div>
              <h3 className="h3-sub mb-3">Smart Invoicing Engine</h3>
              <p className="text-[#475569] leading-relaxed max-w-md">
                Create professional, error-free invoices in seconds. Subtotals,
                percentage discounts and tax are calculated for you.
              </p>
            </div>

            {/* Invoice preview (decorative) */}
            <div
              aria-hidden="true"
              className="mt-auto h-[270px] overflow-hidden border-t border-[#E2E8F0] bg-gradient-to-br from-[#F3F6FC] to-[#E3ECFD] px-6 pt-7 lg:px-10"
            >
              <div className="w-full max-w-[360px] mx-auto lg:mx-0 bg-white rounded-t-xl border border-[#E2E8F0] border-b-0 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.25)] p-5">
                <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-[#2563EB] flex items-center justify-center">
                      <FileText size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">INV-2026-142</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#15803D] bg-[#F0FDF4] border border-[#BBF7D0] px-2 py-0.5 rounded-full">
                    Paid
                  </span>
                </div>

                <dl className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-[#475569]">Enterprise Plan <span className="text-[#94A3B8]">· HSN 998314</span></dt>
                    <dd className="font-semibold text-[#0F172A]">₹1,24,000</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#475569]">Custom Setup</dt>
                    <dd className="font-semibold text-[#0F172A]">₹45,000</dd>
                  </div>
                  <div className="flex justify-between text-[#64748B]">
                    <dt>CGST 9%</dt>
                    <dd>₹15,210</dd>
                  </div>
                  <div className="flex justify-between text-[#64748B]">
                    <dt>SGST 9%</dt>
                    <dd>₹15,210</dd>
                  </div>
                  <div className="pt-2.5 border-t border-[#F1F5F9] flex justify-between items-center">
                    <dt className="font-semibold text-[#0F172A]">Total</dt>
                    <dd className="text-sm font-bold text-[#2563EB]">₹1,99,420</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.article>

          {/* Secondary stack */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
            <motion.article
              variants={item}
              className="card-premium p-8 bg-white flex-1 border-t-4 border-t-[#0D9488]"
            >
              <div className="w-12 h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center text-[#0D9488] mb-5 border border-[#CCFBF1]">
                <Receipt size={24} aria-hidden="true" />
              </div>
              <h3 className="h3-sub mb-3">GST Billing</h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                Built for Indian tax rules. CGST, SGST and IGST are applied
                automatically based on place of supply and HSN/SAC codes.
              </p>
            </motion.article>

            <motion.article variants={item} className="card-premium p-8 bg-white flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 bg-[#FFFBEB] rounded-xl flex items-center justify-center text-[#D97706] border border-[#FEF3C7]">
                  <Clock size={24} aria-hidden="true" />
                </div>
                <h3 className="h3-sub">Payment Tracking</h3>
              </div>
              <p className="text-[#475569] text-sm leading-relaxed mb-5">
                See what is paid, pending and overdue at a glance, with aging
                reports that show which invoices need a reminder.
              </p>

              {/* Mini status bar */}
              <div aria-hidden="true">
                <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
                  {aging.map((a) => (
                    <div key={a.label} className={a.bar} style={{ width: a.width }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2.5 text-xs text-[#475569]">
                  {aging.map((a) => (
                    <span key={a.label} className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${a.bar}`} />
                      {a.label} <strong className="text-[#0F172A]">{a.amount}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>

          {/* Supporting row */}
          <div className="lg:col-span-12 grid md:grid-cols-2 gap-5 lg:gap-6">
            <motion.article variants={item} className="card-premium p-7 bg-white flex items-start gap-5">
              <div className="shrink-0 w-11 h-11 bg-[#F5F3FF] rounded-xl flex items-center justify-center text-[#7C3AED] border border-[#EDE9FE]">
                <Users size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="h3-sub mb-1.5 text-base">Customer Management</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Save billing profiles and GSTIN details once, then reuse them on every invoice.
                </p>
              </div>
            </motion.article>

            <motion.article variants={item} className="card-premium p-7 bg-white flex items-start gap-5">
              <div className="shrink-0 w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#2563EB] border border-[#BFDBFE]">
                <PieChart size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="h3-sub mb-1.5 text-base">Business Reports</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Track revenue growth and how quickly customers pay, without building a spreadsheet.
                </p>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}