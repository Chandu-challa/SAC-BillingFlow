import { 
  FileText, 
  Calculator, 
  CreditCard, 
  Users, 
  BarChart3, 
  Receipt 
} from "lucide-react";

export const features = [
  {
    id: "smart-invoicing",
    title: "Smart Invoicing",
    description: "Create professional invoices in seconds.",
    icon: FileText,
  },
  {
    id: "gst-billing",
    title: "GST Billing",
    description: "Calculate taxes and generate GST-ready invoices.",
    icon: Calculator,
  },
  {
    id: "payment-tracking",
    title: "Payment Tracking",
    description: "Monitor paid, pending, and overdue invoices.",
    icon: CreditCard,
  },
  {
    id: "customer-management",
    title: "Customer Management",
    description: "Keep customer information organized.",
    icon: Users,
  },
  {
    id: "business-reports",
    title: "Business Reports",
    description: "Understand revenue and billing activity.",
    icon: BarChart3,
  },
  {
    id: "expense-tracking",
    title: "Expense Tracking",
    description: "Keep business expenses visible and organized.",
    icon: Receipt,
  },
];
