import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] pt-16 pb-10 border-t border-[#1E293B]">
      <div className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1.5 mb-6">
              <div className="bg-[#2563EB] text-white font-black text-xl tracking-tight px-2 py-0.5 rounded-[6px]">
                SAC
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                BILLFLOW
              </span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs mb-6">
              Smart Billing. Faster Payments. Better Business.
              The ultimate financial workspace for growing Indian businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Product</h4>
            <ul className="space-y-4">
              {["Features", "Invoicing", "Payments", "Analytics", "Pricing"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-[#94A3B8] hover:text-white text-sm transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Solutions</h4>
            <ul className="space-y-4">
              {["Agencies", "Freelancers", "Retail", "Services", "Startups"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#94A3B8] hover:text-white text-sm transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog", "Contact", "Partners"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#94A3B8] hover:text-white text-sm transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm font-medium">
            © 2026 SAC BillFlow. Demo project created for technical assessment.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[#64748B] hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#64748B] hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
