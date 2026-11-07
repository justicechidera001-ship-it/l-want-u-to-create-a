import React, { useState, useEffect } from 'react';
import {
  DollarSign,
  ShoppingBag,
  Box,
  Layers,
  Plus,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Trash2,
  Eye,
  X,
  Truck,
  Check,
  ExternalLink
} from 'lucide-react';

export default function AdminDashboard({ onRefreshData }) {
  const [metrics, setMetrics] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [updatingOrderId, setUpdatingOrderId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // New product form
  const [newProd, setNewProd] = useState({
    name: '',
    category: 'Hoodies',
    type: 'hoodie',
    price: 135,
    tagline: '',
    description: ''
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [resMetrics, resOrders] = await Promise.all([
        fetch('/api/admin/metrics'),
        fetch('/api/orders')
      ]);
      const dataMetrics = await resMetrics.json();
      const dataOrders = await resOrders.json();

      if (dataMetrics.success) setMetrics(dataMetrics.metrics);
      if (dataOrders.success) setOrders(dataOrders.orders);
    } catch (err) {
      console.error('Failed to load admin stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    setUpdatingOrderId(orderId);
    try {
      const res = await fetch(`/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success && data.order) {
        setOrders(prev => prev.map(o => o.orderId === orderId ? data.order : o));
        if (selectedOrderDetails?.orderId === orderId) {
          setSelectedOrderDetails(data.order);
        }
        showToast(`Order ${orderId} updated to: ${newStatus}`);
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm(`Delete order ${orderId}?`)) return;
    try {
      const res = await fetch(`/api/orders/${orderId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setOrders(prev => prev.filter(o => o.orderId !== orderId));
        if (selectedOrderDetails?.orderId === orderId) {
          setSelectedOrderDetails(null);
        }
        showToast(`Order ${orderId} deleted.`);
      }
    } catch (err) {
      console.error('Failed to delete order:', err);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newProd,
          price: Number(newProd.price),
          colors: [
            { name: "Onyx Black", hex: "#14171d" },
            { name: "Cyber Neon", hex: "#00f5a0" },
            { name: "Electric Cyan", hex: "#00d9f5" },
            { name: "Pure White", hex: "#ffffff" }
          ],
          fabrics: [
            { id: "terry", name: "Heavyweight French Terry", gsm: "480 GSM", priceExtra: 0, desc: "Dense combed knit." },
            { id: "cotton", name: "Brushed Fleece Cotton", gsm: "420 GSM", priceExtra: 15, desc: "Thermal fleece." }
          ],
          sizes: ["S", "M", "L", "XL"]
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowAddModal(false);
        setNewProd({ name: '', category: 'Hoodies', type: 'hoodie', price: 135, tagline: '', description: '' });
        loadData();
        showToast(`Garment model ${data.product.name} launched!`);
        if (onRefreshData) onRefreshData();
      }
    } catch (err) {
      console.error('Failed to create product:', err);
    }
  };

  const statuses = [
    'Order Confirmed',
    'Laser Fabric Cut',
    'Custom 3D Print & Stitch',
    'Quality Inspection',
    'Dispatched with Courier',
    'Delivered'
  ];

  const filteredOrders = orders.filter(o => {
    if (statusFilter === 'All') return true;
    if (statusFilter === 'In Production') {
      return o.status === 'In Production' || o.status === 'Laser Fabric Cut' || o.status === 'Custom 3D Print & Stitch';
    }
    if (statusFilter === 'Dispatched') {
      return o.status === 'Dispatched with Courier' || o.status === 'Shipped';
    }
    if (statusFilter === 'Delivered') {
      return o.status === 'Delivered';
    }
    return o.status === statusFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-brand-neon/60 px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 text-xs font-mono text-white animate-fade-in backdrop-blur-xl">
          <Check className="w-4 h-4 text-brand-neon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/15 text-brand-neon border border-brand-neon/30 text-xs font-mono font-bold tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Atelier Operational Center</span>
          </div>
          <h1 className="text-3xl font-display font-extrabold text-white">Studio Management & Metrics</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time telemetry on customer 3D customizations, orders pipeline, and catalog garments.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={loadData}
            className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-brand-neon' : ''}`} />
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display flex items-center space-x-1.5 shadow-glow-neon hover:opacity-95 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Garment Model</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            label: 'Total Studio Revenue',
            val: `$${metrics?.totalRevenue?.toLocaleString() || '0'}`,
            icon: DollarSign,
            color: 'text-brand-neon',
            bg: 'bg-brand-neon/10 border-brand-neon/20'
          },
          {
            label: 'Total Bespoke Orders',
            val: metrics?.totalOrders || '0',
            icon: ShoppingBag,
            color: 'text-brand-cyan',
            bg: 'bg-brand-cyan/10 border-brand-cyan/20'
          },
          {
            label: 'Custom User Designs',
            val: metrics?.totalDesigns || '0',
            icon: Box,
            color: 'text-brand-gold',
            bg: 'bg-brand-gold/10 border-brand-gold/20'
          },
          {
            label: 'Active Garment Models',
            val: metrics?.totalProducts || '0',
            icon: Layers,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10 border-purple-500/20'
          }
        ].map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-dark-900 border border-slate-800 flex items-center justify-between shadow-xl"
            >
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">{card.label}</span>
                <span className="text-2xl font-display font-extrabold text-white">{card.val}</span>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.bg}`}>
                <Icon className={`w-6 h-6 ${card.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Orders Management Table */}
      <div className="p-6 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
          <div>
            <h3 className="text-lg font-bold font-display text-white">Live Orders Dispatch Queue</h3>
            <p className="text-xs text-slate-400 font-mono">Bespoke garments currently in production pipeline</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none">
            {['All', 'In Production', 'Dispatched', 'Delivered'].map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={`px-3 py-1 rounded-xl text-xs font-mono transition ${
                  statusFilter === filter
                    ? 'bg-brand-cyan text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white bg-dark-950 border border-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-4">Order Code</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Garment Items</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Production Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-500">
                    No orders found matching filter.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((ord) => (
                  <tr key={ord.orderId} className="hover:bg-dark-950/80 transition">
                    <td className="py-3.5 px-4 font-bold text-brand-cyan">{ord.orderId}</td>
                    <td className="py-3.5 px-4 text-white">
                      <div className="font-semibold">{ord.customer?.fullName}</div>
                      <span className="text-[10px] text-slate-500 font-sans">{ord.customer?.email}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      <div className="space-y-1">
                        {ord.items?.map((it, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-slate-600 inline-block"
                              style={{ backgroundColor: it.primaryColor }}
                            />
                            <span>{it.name} ({it.size}) × {it.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-brand-neon font-bold">${ord.total}</td>
                    <td className="py-3.5 px-4">
                      {/* Interactive Status Selector */}
                      <select
                        value={ord.status}
                        disabled={updatingOrderId === ord.orderId}
                        onChange={(e) => handleUpdateOrderStatus(ord.orderId, e.target.value)}
                        className="bg-dark-950 text-slate-200 border border-slate-700/80 rounded-lg px-2.5 py-1 text-[11px] font-mono focus:border-brand-neon focus:outline-none cursor-pointer"
                      >
                        {statuses.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      {new Date(ord.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        <button
                          onClick={() => setSelectedOrderDetails(ord)}
                          title="View Order Details"
                          className="p-1.5 rounded-lg bg-dark-950 border border-slate-800 hover:border-brand-cyan text-slate-400 hover:text-brand-cyan transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(ord.orderId)}
                          title="Delete Order"
                          className="p-1.5 rounded-lg bg-dark-950 border border-slate-800 hover:border-rose-500 text-slate-400 hover:text-rose-400 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-slate-400">Order Specs</span>
                <h3 className="text-xl font-mono font-bold text-brand-neon">{selectedOrderDetails.orderId}</h3>
              </div>
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="p-1.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Customer & Shipping Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase text-[10px] block">Customer</span>
                <div className="text-white font-bold">{selectedOrderDetails.customer?.fullName}</div>
                <div className="text-slate-400">{selectedOrderDetails.customer?.email}</div>
                <div className="text-brand-cyan text-[11px] pt-1">
                  Payment: {selectedOrderDetails.paymentMethod}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase text-[10px] block">Delivery Address</span>
                <div className="text-white">{selectedOrderDetails.customer?.address}</div>
                <div className="text-slate-400">
                  {selectedOrderDetails.customer?.city}, {selectedOrderDetails.customer?.state} {selectedOrderDetails.customer?.postalCode}
                </div>
                <div className="text-slate-400">{selectedOrderDetails.customer?.country}</div>
              </div>
            </div>

            {/* Items with 3D specs */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Custom Tailored Garments ({selectedOrderDetails.items?.length})
              </span>
              <div className="space-y-2">
                {selectedOrderDetails.items?.map((it, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-between text-xs font-mono"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <span
                          className="w-4 h-4 rounded-full border border-slate-700 shadow-sm"
                          style={{ backgroundColor: it.primaryColor }}
                          title={`Primary: ${it.primaryColor}`}
                        />
                        {it.accentColor && (
                          <span
                            className="w-3 h-3 rounded-full border border-slate-700 shadow-sm"
                            style={{ backgroundColor: it.accentColor }}
                            title={`Accent: ${it.accentColor}`}
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-white font-display text-sm">{it.name}</div>
                        <div className="text-slate-400 text-[11px]">
                          Fabric: {it.fabricName || it.fabricId} • Size: {it.size} • Qty: {it.quantity}
                        </div>
                      </div>
                    </div>
                    <span className="text-brand-neon font-bold">${it.price * it.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Timeline Status */}
            <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Current Production Stage:</span>
                <span className="text-brand-neon font-bold px-2 py-0.5 rounded bg-brand-neon/10 border border-brand-neon/30">
                  {selectedOrderDetails.status}
                </span>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {selectedOrderDetails.timeline?.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${step.done ? 'bg-brand-neon' : 'bg-slate-700'}`} />
                      <span className={step.done ? 'text-white' : 'text-slate-500'}>{step.status}</span>
                    </div>
                    <span className="text-slate-500">
                      {step.time ? new Date(step.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-sm font-mono text-slate-400">
                Order Total: <strong className="text-white text-base">${selectedOrderDetails.total}</strong>
              </span>
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-white font-mono text-xs hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowAddModal(false)}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
          />
          <div className="relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10 space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Add New Garment to Atelier</h3>

            <form onSubmit={handleCreateProduct} className="space-y-3">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Phantom Cyber Anorak"
                  value={newProd.name}
                  onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Category</label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"
                  >
                    <option value="Hoodies">Hoodies</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Blazers">Blazers</option>
                    <option value="Pants">Pants</option>
                    <option value="Headwear">Headwear</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">3D Mesh Type</label>
                  <select
                    value={newProd.type}
                    onChange={(e) => setNewProd({ ...newProd, type: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"
                  >
                    <option value="hoodie">Hoodie</option>
                    <option value="tshirt">T-Shirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="blazer">Blazer</option>
                    <option value="pants">Cargo Pants</option>
                    <option value="cap">Cap</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Base Price ($)</label>
                <input
                  type="number"
                  required
                  value={newProd.price}
                  onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Tagline</label>
                <input
                  type="text"
                  placeholder="e.g. 500 GSM heavyweight brushed fleece"
                  value={newProd.tagline}
                  onChange={(e) => setNewProd({ ...newProd, tagline: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs shadow-glow-neon"
                >
                  Create Garment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
