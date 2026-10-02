export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discountPercent: number; // percentage or amount, for simplicity let's use percentage
}

export interface Customer {
  name: string;
}

export interface Invoice {
  id: string;
  date: string;
  customer: Customer;
  items: InvoiceItem[];
  subtotal: number;
  discountTotal: number;
  taxableAmount: number;
  gstRate: number;
  gstAmount: number;
  grandTotal: number;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft';
}
