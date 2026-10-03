"use client";

import { useRef } from "react";
import { FileText, CheckCircle2, CircleDashed } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { useInvoiceState } from "./billing/hooks/useInvoiceState";
import { InvoiceActions } from "./billing/InvoiceActions";
import { InvoiceEditorForm } from "./billing/InvoiceEditorForm";
import { InvoiceLineItems } from "./billing/InvoiceLineItems";
import { LiveInvoicePreview } from "./billing/LiveInvoicePreview";
import { InvoiceTotals } from "./billing/InvoiceTotals";

export default function BillingDemo() {
  const {
    customerName,
    setCustomerName,
    gstRate,
    setGstRate,
    items,
    updateItem,
    addItem,
    removeItem,
    totals,
  } = useInvoiceState();

  const printRef = useRef<HTMLDivElement>(null);

  // Strip characters that are invalid in file names, but keep non-Latin names intact.
  const safeName = customerName.trim().replace(/[\\/:*?"<>|\s]+/g, "_");

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Invoice_${safeName || "Draft"}`,
  });

  const hasCustomer = customerName.trim().length > 0;
  const hasItems = items.length > 0;
  const canExport = hasItems && hasCustomer;

  // Tell the user exactly what is missing instead of silently disabling export.
  const missing = !hasCustomer && !hasItems
    ? "Add a customer name and at least one item to export."
    : !hasCustomer
    ? "Add a customer name to export."
    : !hasItems
    ? "Add at least one item to export."
    : "";

  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="section-pad bg-white"
    >
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 id="demo-heading" className="h2-section mb-3 md:mb-4">
            Create an Invoice in Seconds
          </h2>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Try the billing workspace below. Totals and GST update as you type,
            and the preview on the right is what your customer receives.
          </p>
        </div>

        {/* Workspace */}
        <div className="product-panel overflow-hidden bg-[#F3F6FC] shadow-[0_28px_60px_-20px_rgba(37,99,235,0.28)] ring-1 ring-[#0F172A]/5">
          {/* Toolbar */}
          <div className="min-h-14 border-b border-[#E2E8F0] bg-white flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 lg:px-6 py-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-sm">
                <FileText size={16} className="text-[#2563EB]" aria-hidden="true" />
                Invoice Editor
              </div>

              {/* Live status, announced politely to screen readers */}
              <span
                role="status"
                aria-live="polite"
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${
                  canExport
                    ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#15803D]"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]"
                }`}
              >
                {canExport ? (
                  <CheckCircle2 size={12} aria-hidden="true" />
                ) : (
                  <CircleDashed size={12} aria-hidden="true" />
                )}
                {canExport ? "Ready to export" : "Draft"}
              </span>
            </div>

            <InvoiceActions
              onPrint={handlePrint}
              canExport={canExport}
              customerName={customerName}
              printRef={printRef}
            />
          </div>

          {/* Editor on white, preview on a tinted "desk" so the invoice reads as paper */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            <div className="bg-white">
              <InvoiceEditorForm
                customerName={customerName}
                setCustomerName={setCustomerName}
                gstRate={gstRate}
                setGstRate={setGstRate}
              >
                <InvoiceLineItems
                  items={items}
                  addItem={addItem}
                  removeItem={removeItem}
                  updateItem={updateItem}
                />
              </InvoiceEditorForm>
            </div>

            <div className="bg-[#EEF2FA]">
              <LiveInvoicePreview
                printRef={printRef}
                customerName={customerName}
                items={items}
                totalsNode={<InvoiceTotals totals={totals} gstRate={gstRate} />}
              />
            </div>
          </div>

          {/* Footer: explains why export is disabled, otherwise reassures */}
          <div className="border-t border-[#E2E8F0] bg-white px-4 lg:px-6 py-3 text-xs text-[#475569]">
            {missing ? (
              <span className="text-[#B45309]">{missing}</span>
            ) : (
              <span>Looks good. Export to download a print-ready PDF.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}