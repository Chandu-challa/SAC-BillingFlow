"use client";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aditi Sharma",
      role: "DesignStudio",
      content: "Switching to SAC BillFlow reduced our payment delays by over 40%. The automated reminders and clean GST invoices make us look incredibly professional.",
    },
    {
      name: "Rohan Patel",
      role: "TechNova",
      content: "The dashboard is fantastic. I can instantly see who owes us money and which invoices are pending without digging through spreadsheets.",
    },
    {
      name: "Vikram Singh",
      role: "Freelance Consultant",
      content: "Generating a compliant invoice used to take me 20 minutes in Excel. Now it takes exactly 30 seconds. Unbelievably good product.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#F1F5F9]">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="h2-section mb-4 text-[#0F172A]">
            Trusted by Growing Businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="card-standard p-6 sm:p-8 flex flex-col h-full bg-[#F8FAFC]">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed mb-8 flex-1">
                &quot;{review.content}&quot;
              </p>
              
              <div>
                <h4 className="font-bold text-[#0F172A] text-sm">{review.name}</h4>
                <p className="text-xs font-semibold text-[#64748B]">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-widest">
            Sample customer experiences — Demo content
          </p>
        </div>
      </div>
    </section>
  );
}
