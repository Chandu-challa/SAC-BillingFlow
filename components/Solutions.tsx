
import { Building2, Briefcase, ShoppingBag, Code, ArrowRight } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "Retail & E-commerce",
      desc: "Generate high-volume GST invoices instantly and reconcile payments automatically.",
      icon: ShoppingBag,
    },
    {
      title: "Agencies & Freelancers",
      desc: "Bill clients based on project milestones with automated payment reminders.",
      icon: Code,
    },
    {
      title: "Professional Services",
      desc: "Send retainer invoices and track consulting hours seamlessly.",
      icon: Briefcase,
    },
    {
      title: "Startups & SaaS",
      desc: "Manage recurring subscriptions and scale your billing workflows.",
      icon: Building2,
    },
  ];

  return (
    <section id="solutions" className="section-pad bg-[#F8FAFC]">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2-section mb-4">Built for the Way You Work</h2>
          <p className="text-lg text-[#475569]">
            Whether you process 10 invoices a month or 10,000, our platform adapts to your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((item, index) => (
            <div key={index} className="card-premium p-6 md:p-8 flex items-start gap-5 group cursor-pointer hover:border-[#BFDBFE]">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#475569] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#2563EB]">
                  Explore solution <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
