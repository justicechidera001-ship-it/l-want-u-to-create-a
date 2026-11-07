import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Tag, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  discountCode,
  onApplyDiscount,
  discountAmount = 0
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 || discountCode === 'FREESHIP' || items.length === 0 ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyCode = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'DRIP20') {
      const discount = Math.round(subtotal * 0.2);
      onApplyDiscount(code, discount);
      setPromoError('');
    } else if (code === 'FREESHIP') {
      onApplyDiscount(code, 0);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try DRIP20 (20% off) or FREESHIP');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-dark-850">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-brand-neon" />
              <h2 className="font-display font-bold text-lg text-white">Your Custom Bag</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white">Your bag is empty</h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Configure any garment in the 3D Studio, pick custom fabrics, and add your bespoke piece to bag.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs"
                >
                  Explore 3D Studio
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartId}
                  className="p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.productName}</h4>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono mt-0.5">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span className="text-brand-cyan">{item.fabricName}</span>
                      </div>
                    </div>
                    <span className="text-sm font-display font-bold text-white">${item.price}</span>
                  </div>

                  {/* Custom specs chips */}
                  <div className="flex items-center space-x-2 text-[11px] font-mono">
                    <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-900 border border-slate-800">
                      <span className="text-slate-400">Base:</span>
                      <span
                        className="w-3 h-3 rounded-full border border-slate-600 inline-block"
                        style={{ backgroundColor: item.primaryColor }}
                      />
                    </div>
                    <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-900 border border-slate-800">
                      <span className="text-slate-400">Accent:</span>
                      <span
                        className="w-3 h-3 rounded-full border border-slate-600 inline-block"
                        style={{ backgroundColor: item.accentColor }}
                      />
                    </div>
                    {item.decal?.id && item.decal.id !== 'none' && (
                      <span className="px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold border border-brand-gold/20 truncate">
                        Decal: {item.decal.position}
                      </span>
                    )}
                  </div>

                  {/* Quantity and Delete */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                    <div className="flex items-center space-x-2 glass-panel px-2 py-1 rounded-lg border border-slate-700/60">
                      <button
                        onClick={() => onUpdateQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                        className="p-0.5 text-slate-400 hover:text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono font-bold text-white px-2">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                        className="p-0.5 text-slate-400 hover:text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.cartId)}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1 font-mono transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-dark-850/95 space-y-4">
              {/* Promo code form */}
              <form onSubmit={handleApplyCode} className="space-y-1">
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. DRIP20)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full bg-dark-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2 text-xs text-white uppercase placeholder-slate-500 font-mono focus:outline-none focus:border-brand-neon"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-rose-400 font-mono">{promoError}</p>}
                {discountCode && (
                  <p className="text-[11px] text-brand-neon font-mono">
                    ✓ Code {discountCode} applied!
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-brand-neon">
                    <span>Discount ({discountCode})</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="text-white">
                    {shipping === 0 ? 'FREE' : `$${shipping}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white font-display">
                  <span>Total Amount</span>
                  <span className="text-brand-neon text-lg">${grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-neon text-dark-950 font-display font-extrabold text-sm tracking-wide shadow-glow-neon flex items-center justify-center space-x-2 hover:opacity-95 transition"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-neon" />
                <span>Encrypted 256-Bit Custom Order Dispatch</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
