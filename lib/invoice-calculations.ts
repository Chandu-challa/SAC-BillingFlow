import { InvoiceItem } from "../types/billing";

export function calculateInvoiceTotals(items: InvoiceItem[], gstRate: number) {
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

  return {
    subtotal,
    totalDiscount,
    taxableAmount,
    gstAmount,
    grandTotal
  };
}
