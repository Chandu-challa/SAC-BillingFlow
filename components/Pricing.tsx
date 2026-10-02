"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for freelancers and small teams getting started.",
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        "Up to 50 invoices per month",
        "Basic GST calculation",
        "Email support",
        "Standard templates",
      ],
      isPrimary: false,
    },
    {
      name: "Business",
      desc: "Everything you need to automate billing at scale.",
      monthlyPrice: 999,
      yearlyPrice: 799,
      features: [
        "Unlimited invoices",
        "Advanced GST & compliance",
        "Priority 24/7 support",
        "Automated payment reminders",
      ],
      isPrimary: true,
    },
    {
      name: "Professional",
      desc: "Advanced workflows and custom integration limits.",
      monthlyPrice: 1999,
      yearlyPrice: 1599,
      features: [
        "Everything in Business",
        "Multi-entity support",
        "Dedicated account manager",
        "API access",
      ],
      isPrimary: false,
    },
  ];

  return (
    <section id="pricing" className="section-pad bg-[#F8FAFC]">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="h2-section mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Start for free, upgrade when you need more power.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-white p-1.5 rounded-lg border border-[#E2E8F0] shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${!isYearly ? "bg-[#0F172A] text-white" : "text-[#475569] hover:bg-[#F1F5F9]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] flex items-center gap-2 ${isYearly ? "bg-[#0F172A] text-white" : "text-[#475569] hover:bg-[#F1F5F9]"}`}
            >
              Yearly 
              <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${isYearly ? "bg-white/20 text-white" : "bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0]"}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 flex flex-col transition-all duration-300 ${
                plan.isPrimary 
                  ? "card-premium border-2 border-[#2563EB] relative z-10" 
                  : "card-standard hover:border-[#CBD5E1]"
              }`}
            >
              {plan.isPrimary && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
              <p className="text-[#475569] text-sm mb-6 min-h-[40px] leading-relaxed">{plan.desc}</p>
              
              <div className="mb-8 pb-8 border-b border-[#F1F5F9]">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-[#0F172A] tracking-tight">
                    ₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[#64748B] font-semibold text-sm mb-1">/mo</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-[#16A34A] font-bold mt-2">Billed annually at ₹{(plan.yearlyPrice * 12).toLocaleString()}</p>
                )}
                {!isYearly && <div className="h-4 mt-2"></div>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-[#0F172A] font-medium text-sm leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full mt-auto ${
                  plan.isPrimary 
                    ? "btn-primary" 
                    : "btn-secondary"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#94A3B8] uppercase font-bold tracking-widest">
            Demo pricing for assessment purposes only
          </p>
        </div>
      </div>
    </section>
  );
}
