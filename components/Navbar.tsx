"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 border-b border-[#E2E8F0] shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-app mx-auto flex h-16 sm:h-20 items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
        >
          <div className="bg-[#2563EB] text-white font-black text-lg sm:text-xl tracking-tight px-2 py-0.5 rounded-[6px]">
            SAC
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-[#0F172A]">
            BILLFLOW
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="#" 
            className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
          >
            Login
          </Link>
          <Link 
            href="#demo" 
            className="btn-primary text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#0F172A] hover:bg-[#F1F5F9] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0F172A]/40 z-50 lg:hidden backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#F1F5F9]">
                <div className="flex items-center gap-1.5">
                  <div className="bg-[#2563EB] text-white font-black text-lg tracking-tight px-2 py-0.5 rounded-[6px]">
                    SAC
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-semibold text-[#0F172A] border-b border-transparent hover:border-[#F1F5F9] pb-2 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="p-4 sm:p-6 border-t border-[#F1F5F9] bg-[#F8FAFC] flex flex-col gap-3">
                <Link 
                  href="#" 
                  className="btn-secondary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="#demo" 
                  className="btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
