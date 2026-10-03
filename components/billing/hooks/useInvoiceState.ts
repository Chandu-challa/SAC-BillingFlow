import { useState, useMemo } from "react";
import { InvoiceItem } from "../../../types/billing";
import { calculateInvoiceTotals } from "../../../lib/invoice-calculations";

export function useInvoiceState() {
  const [customerName, setCustomerName] = useState("Arjun Traders");
  const [gstRate, setGstRate] = useState<number>(18);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "Web Development", quantity: 1, unitPrice: 15000, discountPercent: 0 },
    { id: "2", description: "UI/UX Design", quantity: 1, unitPrice: 10000, discountPercent: 10 },
  ]);

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addItem = () => {
    setItems(prev => [...prev, { id: Date.now().toString(), description: "", quantity: 1, unitPrice: 0, discountPercent: 0 }]);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.length > 1 ? prev.filter(item => item.id !== id) : prev);
  };

  const totals = useMemo(() => calculateInvoiceTotals(items, gstRate), [items, gstRate]);

  return {
    customerName,
    setCustomerName,
    gstRate,
    setGstRate,
    items,
    updateItem,
    addItem,
    removeItem,
    totals
  };
}
