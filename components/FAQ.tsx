"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I use SAC BillFlow for multiple companies?",
      a: "Yes, our Professional plan allows you to manage billing for up to 3 separate entities from a single master account, with separate GST tracking for each.",
    },
    {
      q: "Does it automatically calculate GST?",
      a: "Yes, SAC BillFlow automatically computes CGST, SGST, and IGST based on the tax rate you select and generates a compliant invoice instantly.",
    },
    {
      q: "Can I customize the invoice design?",
      a: "Absolutely. You can upload your company logo, choose your brand colors, and add custom footer notes or terms and conditions to every invoice.",
    },
    {
      q: "Are my financial data and customer details secure?",
      a: "We use enterprise-grade 256-bit encryption for all data at rest and in transit. Your financial data is securely backed up and never shared.",
    },
  ];

  return (
    <section id="faq" className="section-pad bg-[#F8FAFC]">
      <div className="container-app">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="h2-section mb-4 text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#475569]">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-[#E2E8F0] overflow-hidden transition-colors duration-300`}
                >
                  <button
                    className="w-full py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm group text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold text-base md:text-lg transition-colors pr-8 ${isOpen ? 'text-[#2563EB]' : 'text-[#0F172A] group-hover:text-[#2563EB]'}`}>
                      {faq.q}
                    </span>
                    <div className={`shrink-0 transition-colors ${isOpen ? 'text-[#2563EB]' : 'text-[#94A3B8]'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="pb-6 text-[#475569] text-base leading-relaxed pr-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
