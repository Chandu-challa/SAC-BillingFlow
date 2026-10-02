"use client";

import { useState, useRef } from "react";
import { Plus, Trash2, Download, FileText, Printer, ShieldCheck } from "lucide-react";
import { InvoiceItem } from "../types/billing";
import { motion, AnimatePresence } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function BillingDemo() {
  const [customerName, setCustomerName] = useState("Arjun Traders");
  const [gstRate, setGstRate] = useState<number>(18);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "Web Development", quantity: 1, unitPrice: 15000, discountPercent: 0 },
    { id: "2", description: "UI/UX Design", quantity: 1, unitPrice: 10000, discountPercent: 10 },
  ]);

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), description: "", quantity: 1, unitPrice: 0, discountPercent: 0 }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const calculateTotals = () => {
    let subtotal = 0;
    let totalDiscount = 0;

    items.forEach(item => {
      const itemSubtotal = item.quantity * item.unitPrice;
      const itemDiscount = itemSubtotal * ((item.discountPercent || 0) / 100);
      subtotal += itemSubtotal;
      totalDiscount += itemDiscount;
    });

    const taxableAmount = subtotal - totalDiscount;
    const gstAmount = taxableAmount * (gstRate / 100);
    const grandTotal = taxableAmount + gstAmount;

    return { subtotal, totalDiscount, taxableAmount, gstAmount, grandTotal };
  };

  const totals = calculateTotals();

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Invoice_${customerName.replace(/\s+/g, '_') || 'Draft'}`,
  });

  const handleDownload = async () => {
    if (!printRef.current || items.length === 0 || !customerName.trim()) return;
    
    try {
      // Temporarily hide the UI buttons while generating PDF
      const canvas = await html2canvas(printRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`Invoice_${customerName.replace(/\s+/g, '_') || 'Draft'}.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF", error);
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-white border-t border-[#F1F5F9]">
      <div className="container-app">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="h2-section mb-4">Create an Invoice in Seconds</h2>
          <p className="text-lg text-[#475569]">
            Experience our intelligent billing workspace. Real-time calculations, GST support, and instant professional previews.
          </p>
        </div>

        {/* Realistic SaaS Workspace Container */}
        <div className="product-panel overflow-hidden bg-[#F8FAFC]">
          
          {/* Workspace Header */}
          <div className="h-14 border-b border-[#E2E8F0] bg-white flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#0F172A] font-bold text-sm">
                <FileText size={16} className="text-[#2563EB]" />
                Invoice Editor
              </div>
            </div>
            <div className="flex items-center gap-3">
               <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] bg-[#F0FDF4] px-2.5 py-1.5 rounded-full border border-[#BBF7D0]">
                 <ShieldCheck size={14} /> Auto-saving
               </span>
               <div className="h-4 w-px bg-[#E2E8F0] hidden sm:block mx-1" />
               <button 
                 onClick={() => handlePrint()} 
                 disabled={items.length === 0 || !customerName.trim()}
                 className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] text-[#0F172A] px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-[#F8FAFC] transition-colors focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 <Printer size={16} /> <span className="hidden sm:inline">Print</span>
               </button>
               <button 
                 onClick={handleDownload} 
                 disabled={items.length === 0 || !customerName.trim()}
                 className="flex items-center gap-1.5 bg-[#2563EB] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-[#1D4ED8] transition-colors focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 <Download size={16} /> <span className="hidden sm:inline">Download</span>
               </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            
            {/* Left Column: Form Controls */}
            <div className="p-5 lg:p-8 bg-white overflow-y-auto min-h-[500px] lg:min-h-[600px] lg:max-h-[calc(100vh-200px)]">
              <div className="mb-6">
                <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-[#2563EB] rounded-sm" />
                  Invoice Details
                </h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="customerName" className="label-standard">Customer Name</label>
                    <input
                      id="customerName"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="input-standard focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                      placeholder="e.g. Arjun Traders"
                    />
                  </div>
                  <div>
                    <label htmlFor="gstRate" className="label-standard">Global GST Rate (%)</label>
                    <select
                      id="gstRate"
                      value={gstRate}
                      onChange={(e) => setGstRate(Number(e.target.value))}
                      className="input-standard focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                    >
                      <option value={0}>0% (Exempt)</option>
                      <option value={5}>5%</option>
                      <option value={12}>12%</option>
                      <option value={18}>18%</option>
                      <option value={28}>28%</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Line Items</h3>
                  <button onClick={addItem} className="text-[#2563EB] hover:text-[#1D4ED8] text-sm font-bold flex items-center gap-1 transition-colors p-2 -mr-2 rounded-md focus:ring-2 focus:ring-[#2563EB]/20">
                    <Plus size={16} /> Add Item
                  </button>
                </div>
                
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item, index) => (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] relative group transition-colors hover:border-[#CBD5E1]"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold text-[#64748B] bg-white px-2 py-1 rounded-md border border-[#E2E8F0] shadow-sm">
                            Item {index + 1}
                          </span>
                          {items.length > 1 && (
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-[#94A3B8] hover:text-[#DC2626] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626] rounded-md p-2 -mr-2"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor={`desc-${item.id}`} className="sr-only">Description</label>
                            <input
                              id={`desc-${item.id}`}
                              type="text"
                              value={item.description}
                              onChange={(e) => updateItem(item.id, "description", e.target.value)}
                              placeholder="Service or product description"
                              className="input-standard text-sm focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label htmlFor={`qty-${item.id}`} className="text-[11px] font-bold text-[#64748B] block mb-1">Qty</label>
                              <input
                                id={`qty-${item.id}`}
                                type="number"
                                min="1"
                                value={item.quantity || ""}
                                onChange={(e) => updateItem(item.id, "quantity", Math.max(1, Number(e.target.value)))}
                                className="input-standard text-sm px-3 focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                              />
                            </div>
                            <div>
                              <label htmlFor={`price-${item.id}`} className="text-[11px] font-bold text-[#64748B] block mb-1">Price (₹)</label>
                              <input
                                id={`price-${item.id}`}
                                type="number"
                                min="0"
                                value={item.unitPrice || ""}
                                onChange={(e) => updateItem(item.id, "unitPrice", Math.max(0, Number(e.target.value)))}
                                className="input-standard text-sm px-3 focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                              />
                            </div>
                            <div>
                              <label htmlFor={`disc-${item.id}`} className="text-[11px] font-bold text-[#64748B] block mb-1">Disc (%)</label>
                              <input
                                id={`disc-${item.id}`}
                                type="number"
                                min="0"
                                max="100"
                                value={item.discountPercent || ""}
                                onChange={(e) => updateItem(item.id, "discountPercent", Math.min(100, Math.max(0, Number(e.target.value))))}
                                className="input-standard text-sm px-3 focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {items.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-[#E2E8F0] rounded-xl bg-[#F8FAFC]">
                      <p className="text-sm font-semibold text-[#64748B] mb-2">No items added yet</p>
                      <button onClick={addItem} className="btn-secondary text-sm h-9 px-4">
                        Add First Item
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Live A4 Document Preview */}
            <div className="bg-[#F1F5F9] p-4 sm:p-6 lg:p-8 flex items-start justify-center overflow-y-auto min-h-[500px] lg:min-h-[600px] lg:max-h-[calc(100vh-200px)]">
              
              <div className="w-full max-w-[500px] flex flex-col gap-6 pb-4">
                {/* The A4 Page */}
                <div ref={printRef} className="w-full bg-white rounded-sm shadow-[0_10px_40px_-10px_rgba(15,23,42,0.1)] border border-[#E2E8F0] p-6 sm:p-8 text-sm text-[#0F172A] font-mono print:shadow-none print:border-none">
                  
                  {/* Invoice Header */}
                  <div className="flex justify-between items-end border-b-2 border-[#111A3A] pb-6 mb-6">
                    <div>
                      <h2 className="text-2xl font-black tracking-tight text-[#111A3A] mb-1">SAC BILLFLOW</h2>
                      <p className="text-[#64748B] text-xs font-sans">GSTIN: 27AADCS0472N1Z1</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#2563EB] mb-1 tracking-tight">INVOICE</p>
                      <p className="text-[#64748B] text-xs font-sans">#SB-2026-00124</p>
                      <p className="text-[#64748B] text-xs font-sans">Date: {new Date().toLocaleDateString('en-IN')}</p>
                    </div>
                  </div>

                  {/* Bill To */}
                  <div className="mb-8">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2 font-sans">Bill To</p>
                    <p className="font-bold text-[#0F172A] text-base">{customerName || "Customer Name"}</p>
                  </div>

                  {/* Items Table */}
                  <div className="w-full mb-8 overflow-x-auto">
                    <div className="min-w-[380px] pb-2">
                      <div className="flex text-xs font-bold text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0] pb-2 mb-2 font-sans">
                        <div className="flex-1">Description</div>
                        <div className="w-16 text-right">Qty</div>
                        <div className="w-24 text-right">Rate</div>
                        <div className="w-28 text-right">Amount</div>
                      </div>
                      
                      <div className="space-y-3 font-sans min-h-[60px]">
                        {items.length === 0 ? (
                          <div className="text-center text-[#94A3B8] text-sm italic py-4">No items added. Invoice is empty.</div>
                        ) : (
                          items.map((item) => (
                            <div key={item.id} className="flex text-sm text-[#0F172A]">
                              <div className="flex-1 pr-4">{item.description || <span className="text-[#94A3B8] italic">No description</span>}</div>
                              <div className="w-16 text-right">{item.quantity}</div>
                              <div className="w-24 text-right">₹{item.unitPrice.toLocaleString('en-IN')}</div>
                              <div className="w-28 text-right font-semibold">₹{(item.quantity * item.unitPrice).toLocaleString('en-IN')}</div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Totals Section */}
                  <div className="flex justify-end font-sans">
                    <div className="w-full sm:w-64 space-y-2">
                      <div className="flex justify-between text-sm text-[#475569]">
                        <span>Subtotal</span>
                        <span>₹{totals.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      {totals.totalDiscount > 0 && (
                        <div className="flex justify-between text-sm text-[#16A34A]">
                          <span>Discount</span>
                          <span>-₹{totals.totalDiscount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm text-[#475569]">
                        <span>Taxable Amount</span>
                        <span>₹{totals.taxableAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#475569] border-b border-[#E2E8F0] pb-2">
                        <span>GST ({gstRate}%)</span>
                        <span>₹{totals.gstAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-bold text-[#0F172A]">Grand Total</span>
                        <span className="text-xl font-black text-[#2563EB] tracking-tight">₹{totals.grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
