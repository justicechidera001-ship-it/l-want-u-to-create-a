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
  Clock
} from 'lucide-react';

export default function AdminDashboard({ onRefreshData }) {
  const [metrics, setMetrics] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  // New product form
  const [newProd, setNewProd] = useState({
    name: '',
    category: 'Hoodies',
    type: 'hoodie',
    price: 135,
    tagline: '',
    description: ''
  });

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
            { name: "Electric Cyan", hex: "#00d9f5" }
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
        if (onRefreshData) onRefreshData();
      }
    } catch (err) {
      console.error('Failed to create product:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
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
            className="p-2.5 rounded-xl glass-panel border border-slate-700 text-slate-300 hover:text-white"
            title="Refresh metrics"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-1.5 shadow-glow-neon"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>ADD NEW GARMENT</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            label: 'Gross Studio Revenue',
            val: `$${metrics?.totalRevenue || 0}`,
            icon: DollarSign,
            color: 'text-brand-neon',
            bg: 'bg-brand-neon/10 border-brand-neon/20'
          },
          {
            label: 'Custom Orders Placed',
            val: metrics?.totalOrders || 0,
            icon: ShoppingBag,
            color: 'text-brand-cyan',
            bg: 'bg-brand-cyan/10 border-brand-cyan/20'
          },
          {
            label: '3D Custom Creations',
            val: metrics?.totalDesigns || 0,
            icon: Box,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10 border-purple-500/20'
          },
          {
            label: 'Active Catalog Pieces',
            val: metrics?.totalProducts || 6,
            icon: Layers,
            color: 'text-brand-gold',
            bg: 'bg-brand-gold/10 border-brand-gold/20'
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
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold font-display text-white">Live Orders Dispatch Queue</h3>
            <p className="text-xs text-slate-400 font-mono">Bespoke garments currently in queue</p>
          </div>
          <span className="text-xs font-mono text-brand-neon">{orders.length} Orders</span>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {orders.map((ord) => (
                <tr key={ord.orderId} className="hover:bg-dark-950 transition">
                  <td className="py-3.5 px-4 font-bold text-brand-cyan">{ord.orderId}</td>
                  <td className="py-3.5 px-4 text-white">
                    <div>{ord.customer?.fullName}</div>
                    <span className="text-[10px] text-slate-500 font-sans">{ord.customer?.email}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">
                    {ord.items?.map((it) => `${it.name} (${it.size})`).join(', ')}
                  </td>
                  <td className="py-3.5 px-4 text-brand-neon font-bold">${ord.total}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-neon/15 text-brand-neon border border-brand-neon/30">
                      {ord.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">
                    {new Date(ord.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Category</label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
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
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
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
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Tagline</label>
                <input
                  type="text"
                  placeholder="e.g. 500 GSM heavyweight brushed fleece"
                  value={newProd.tagline}
                  onChange={(e) => setNewProd({ ...newProd, tagline: e.target.value })}
                  className="w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
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
                  className="px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs"
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
