import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import BillingDemo from "@/components/BillingDemo";
import AnalyticsSection from "@/components/AnalyticsSection";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import GSTSection from "@/components/GSTSection";
import PaymentTracking from "@/components/PaymentTracking";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <BillingDemo />
      <AnalyticsSection />
      <HowItWorks />
      <Solutions />
      <GSTSection />
      <PaymentTracking />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
