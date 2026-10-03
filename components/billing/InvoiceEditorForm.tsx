interface InvoiceEditorFormProps {
  customerName: string;
  setCustomerName: (name: string) => void;
  gstRate: number;
  setGstRate: (rate: number) => void;
  children: React.ReactNode;
}

export function InvoiceEditorForm({ customerName, setCustomerName, gstRate, setGstRate, children }: InvoiceEditorFormProps) {
  return (
    <div className="p-5 lg:p-8 bg-white overflow-y-auto min-h-[500px] lg:min-h-[600px] lg:max-h-[calc(100vh-200px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="mb-6">
        <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4 flex items-center gap-2">
          <div className="w-1.5 h-4 bg-[#2563EB] rounded-sm" aria-hidden="true" />
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

      {children}
    </div>
  );
}
