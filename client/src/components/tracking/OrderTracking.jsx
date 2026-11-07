import React, { useState, useEffect } from 'react';
import { Search, Package, CheckCircle2, Clock, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function OrderTracking({ initialOrderId = 'TC-94821', onOpenStudio }) {
  const [searchCode, setSearchCode] = useState(initialOrderId);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchOrder = async (id) => {
    if (!id) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/orders/${id.trim()}`);
      const data = await res.json();
      if (data.success && data.order) {
        setOrder(data.order);
      } else {
        setError('Order not found. Check code (e.g. TC-94821).');
        setOrder(null);
      }
    } catch (err) {
      setError('Failed to fetch order tracking.');
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialOrderId) {
      fetchOrder(initialOrderId);
    }
  }, [initialOrderId]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchOrder(searchCode);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 text-xs font-mono font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          <span>Real-time Atelier Tracking</span>
        </div>
        <h1 className="text-3xl font-display font-extrabold text-white">Live Garment Dispatch Status</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Track the digital cutting, 3D screen printing, and tailored assembly of your bespoke garments.
        </p>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="flex gap-2 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Enter Order Code (e.g. TC-94821)"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full bg-dark-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-mono uppercase focus:outline-none focus:border-brand-neon"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display hover:opacity-90 transition shadow-glow-neon"
          >
            Track Order
          </button>
        </form>
        {error && <p className="text-xs font-mono text-rose-400">{error}</p>}
      </div>

      {loading && (
        <div className="text-center py-12 text-slate-400 font-mono text-xs animate-pulse">
          Retrieving garment production log...
        </div>
      )}

      {/* Order Display */}
      {order && !loading && (
        <div className="space-y-6">
          {/* Status Progress Timeline */}
          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-slate-400">Order ID</span>
                <h3 className="text-2xl font-mono font-bold text-brand-neon">{order.orderId}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40">
                  {order.status}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Placed: {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Step Milestones */}
            <div className="relative pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {order.timeline?.map((stepItem, idx) => (
                  <div key={idx} className="flex sm:flex-col items-center sm:text-center space-x-3 sm:space-x-0 sm:space-y-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition shadow-lg ${
                        stepItem.done
                          ? 'bg-brand-neon text-dark-950 shadow-glow-neon'
                          : 'bg-dark-950 text-slate-500 border border-slate-800'
                      }`}
                    >
                      {stepItem.done ? <CheckCircle2 className="w-5 h-5 stroke-[2.5]" /> : idx + 1}
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold leading-tight ${stepItem.done ? 'text-white' : 'text-slate-500'}`}>
                        {stepItem.status}
                      </h4>
                      {stepItem.time && (
                        <span className="text-[10px] font-mono text-brand-cyan block">
                          {new Date(stepItem.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Garments Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Items */}
            <div className="md:col-span-2 p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-display flex items-center space-x-2">
                <Package className="w-4 h-4 text-brand-neon" />
                <span>Custom Garments in This Order</span>
              </h4>

              <div className="space-y-3">
                {order.items?.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">{item.name}</h5>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono mt-1">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span className="text-brand-cyan">{item.fabricName || 'Custom'}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-slate-700"
                          style={{ backgroundColor: item.primaryColor }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-slate-700"
                          style={{ backgroundColor: item.accentColor }}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-display font-bold text-white">${item.price}</span>
                      <span className="text-xs text-slate-500 block font-mono">Qty: {item.quantity || 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Info */}
            <div className="p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-display flex items-center space-x-2">
                <Truck className="w-4 h-4 text-brand-cyan" />
                <span>Shipping Address</span>
              </h4>

              <div className="space-y-1 text-xs text-slate-300 font-mono">
                <p className="font-bold text-white">{order.customer?.fullName}</p>
                <p>{order.customer?.address}</p>
                <p>{order.customer?.city}, {order.customer?.state} {order.customer?.postalCode}</p>
                <p>{order.customer?.country}</p>
                <p className="pt-2 text-slate-400">{order.customer?.email}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-white">${order.subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Shipping</span>
                  <span className="text-white">{order.shipping === 0 ? 'FREE' : `$${order.shipping}`}</span>
                </div>
                <div className="flex justify-between text-brand-neon font-bold text-sm pt-2 border-t border-slate-800/80">
                  <span>Total Paid</span>
                  <span>${order.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
