import { Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InvoiceItem } from "../../types/billing";

interface InvoiceLineItemsProps {
  items: InvoiceItem[];
  addItem: () => void;
  updateItem: (id: string, field: keyof InvoiceItem, value: string | number) => void;
  removeItem: (id: string) => void;
}

export function InvoiceLineItems({ items, addItem, updateItem, removeItem }: InvoiceLineItemsProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Line Items</h3>
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
                    <Trash2 size={18} aria-hidden="true" />
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
          </div>
        )}

        <button onClick={addItem} className="w-full py-3.5 mt-2 border-2 border-dashed border-[#CBD5E1] rounded-xl text-[#2563EB] font-bold hover:bg-[#EEF2FF] hover:border-[#2563EB] transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none">
          <Plus size={18} aria-hidden="true" /> Add New Line Item
        </button>
      </div>
    </div>
  );
}
