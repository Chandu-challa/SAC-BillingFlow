"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is SAC BillFlow?",
      a: "SAC BillFlow is a premium billing and invoice management system designed for modern businesses. It helps you create professional invoices, manage customers, and track payments in real-time.",
    },
    {
      q: "Can I create GST invoices?",
      a: "Yes, SAC BillFlow natively supports Indian GST requirements. You can easily select your applicable GST rate, and the system will automatically calculate and display the taxable amount and GST totals.",
    },
    {
      q: "Can I track pending payments?",
      a: "Yes, our dashboard provides a clear overview of your paid, pending, and overdue invoices, helping you stay on top of your collections and cash flow.",
    },
    {
      q: "Can I manage multiple customers?",
      a: "Yes, you can manage an unlimited number of customers. The billing workspace allows you to quickly enter customer details and generate invoices instantly.",
    },
    {
      q: "Can I use different GST rates?",
      a: "Absolutely. Our intelligent invoice editor allows you to select from standard GST rates (0%, 5%, 12%, 18%, 28%) applying them accurately to your taxable totals.",
    },
    {
      q: "Is this a real billing system?",
      a: "This is a frontend demonstration project built to showcase senior-level React and Next.js engineering skills. It contains realistic UI and client-side logic, but does not connect to a production backend database.",
    }
  ];

  return (
    <section id="faq" className="section-pad bg-[#F8FAFC]">
      <div className="container-app">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="h2-section mb-3 text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-[#64748B]">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div 
                  key={index} 
                  className={`border-b border-[#E2E8F0] overflow-hidden transition-colors duration-300`}
                >
                  <button
                    id={buttonId}
                    className="w-full py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm group text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
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
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="pb-6 text-[#64748B] text-base leading-relaxed pr-8">
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
