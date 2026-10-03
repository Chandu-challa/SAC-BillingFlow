
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative section-pad bg-[#111A3A] overflow-hidden">
      
      {/* Extremely subtle teal/blue glow */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#14B8A6] rounded-full blur-[150px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/3 translate-y-1/3"
      />
      
      <div className="container-app relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
            Ready to Simplify Your Billing?
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 md:mb-10 leading-relaxed">
            Spend less time managing invoices and more time growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#demo"
              className="btn-base bg-white text-[#0F172A] hover:bg-[#F8FAFC] focus:ring-white/50 h-14 w-full sm:w-auto text-[15px]"
            >
              Create Free Invoice
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              href="#features"
              className="btn-base bg-transparent border border-[#334155] text-white hover:bg-[#1E293B] focus:ring-[#334155]/50 h-14 w-full sm:w-auto text-[15px]"
            >
              Explore Features
            </Link>
          </div>
          
          <p className="mt-8 text-xs text-[#64748B] font-semibold uppercase tracking-widest">
            No credit card required. Free plan available.
          </p>
        </div>
      </div>
    </section>
  );
}
