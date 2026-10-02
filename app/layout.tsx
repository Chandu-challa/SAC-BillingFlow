import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAC BillFlow — Smart Billing & Invoice Management",
  description: "Create professional invoices, track payments, manage customers, and simplify business billing with SAC BillFlow.",
  openGraph: {
    title: "SAC BillFlow — Smart Billing & Invoice Management",
    description: "Create professional invoices, track payments, manage customers, and simplify business billing with SAC BillFlow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAC BillFlow — Smart Billing & Invoice Management",
    description: "Create professional invoices, track payments, manage customers, and simplify business billing with SAC BillFlow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col selection:bg-brand-500 selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
