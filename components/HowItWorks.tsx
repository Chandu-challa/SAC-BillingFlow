"use client";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Create", desc: "Select customer and add your line items in the workspace." },
    { num: "02", title: "Invoice", desc: "Generate a fully compliant PDF with auto-calculated GST." },
    { num: "03", title: "Track", desc: "Send it via email and monitor when the client views it." },
    { num: "04", title: "Get Paid", desc: "Receive payments and reconcile automatically." },
  ];

  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="h2-section mb-4">
            A Seamless Workflow
          </h2>
          <p className="text-lg text-[#475569]">
            Four simple steps to transform the way you manage billing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          {/* Desktop horizontal connecting line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-[#E2E8F0] z-0" />

          {/* Mobile vertical connecting line */}
          <div className="md:hidden absolute top-[28px] bottom-[28px] left-[28px] w-0.5 bg-[#E2E8F0] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4">
                
                <div className="shrink-0 w-14 h-14 bg-white border-[3px] border-[#2563EB] rounded-full flex items-center justify-center font-black text-[#2563EB] text-lg shadow-[0_0_0_8px_white]">
                  {step.num}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed max-w-[200px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
