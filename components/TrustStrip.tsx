
import { CheckCircle } from "lucide-react";

export default function TrustStrip() {
  const items = [
    "GST Ready",
    "Faster Invoicing",
    "Payment Tracking",
    "Customer Management"
  ];

  return (
    <section className="bg-white border-y border-[#F1F5F9] py-6 sm:py-8">
      <div className="container-app">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <CheckCircle size={18} className="text-[#14B8A6]" />
              <span className="text-sm md:text-base font-bold text-[#0F172A] tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
