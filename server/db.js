import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defaultProducts, graphicPresets } from './data/defaultProducts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'data', 'db.json');

// Initialize database in memory and load from disk if present
let state = {
  products: [...defaultProducts],
  presets: [...graphicPresets],
  savedDesigns: [
    {
      id: "design-demo-1",
      name: "Cyber Kanji Acid Hoodie",
      productId: "prod-hoodie-01",
      productName: "Aetheric Cyber-Hoodie",
      primaryColor: "#0f131a",
      accentColor: "#00f5a0",
      cordsColor: "#ffffff",
      fabricId: "terry",
      fabricName: "Heavyweight French Terry",
      size: "L",
      decal: {
        id: "cyber-kanji",
        position: "front",
        scale: 0.65,
        rotation: 0,
        opacity: 0.95
      },
      price: 128,
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      thumbnail: null
    },
    {
      id: "design-demo-2",
      name: "Electric Prism Windbreaker",
      productId: "prod-jacket-03",
      productName: "Neo-Tokyo Techwear Windbreaker",
      primaryColor: "#0a0d14",
      accentColor: "#00d9f5",
      cordsColor: "#00f5a0",
      fabricId: "ripstop",
      fabricName: "3-Layer DWR Hydrophobic Ripstop",
      size: "XL",
      decal: {
        id: "bauhaus-grid",
        position: "back",
        scale: 0.75,
        rotation: 0,
        opacity: 0.95
      },
      price: 185,
      createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
      thumbnail: null
    }
  ],
  orders: [
    {
      orderId: "TC-94821",
      customer: {
        fullName: "Alex Rivera",
        email: "alex.rivera@example.com",
        address: "742 Evergreen Terrace",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        country: "United States"
      },
      items: [
        {
          id: "item-1",
          productId: "prod-hoodie-01",
          name: "Aetheric Cyber-Hoodie",
          type: "hoodie",
          primaryColor: "#0f131a",
          accentColor: "#00f5a0",
          fabricId: "terry",
          fabricName: "Heavyweight French Terry",
          size: "L",
          decal: { id: "cyber-kanji", position: "front" },
          quantity: 1,
          price: 128
        }
      ],
      subtotal: 128,
      shipping: 0,
      discount: 0,
      total: 128,
      status: "In Production", // Confirmed -> In Production -> Quality Check -> Shipped -> Delivered
      timeline: [
        { status: "Order Confirmed", time: new Date(Date.now() - 3600000 * 20).toISOString(), done: true },
        { status: "Laser Fabric Cut", time: new Date(Date.now() - 3600000 * 10).toISOString(), done: true },
        { status: "Custom 3D Print & Stitch", time: new Date(Date.now() - 3600000 * 2).toISOString(), done: true },
        { status: "Quality Inspection", time: null, done: false },
        { status: "Dispatched with Courier", time: null, done: false }
      ],
      paymentMethod: "Credit Card (ending 4242)",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
    }
  ]
};

// Try to read saved DB file
try {
  if (fs.existsSync(DB_FILE)) {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (parsed.products && parsed.products.length > 0) {
      state = { ...state, ...parsed };
      console.log(`[DB] Loaded persisted state with ${state.products.length} products, ${state.orders.length} orders.`);
    }
  } else {
    // Write initial state
    fs.writeFileSync(DB_FILE, JSON.stringify(state, null, 2), 'utf-8');
    console.log('[DB] Initialized new persistent state.');
  }
} catch (err) {
  console.error('[DB] Failed to load db file, using defaults:', err.message);
}

let saveTimeout = null;
function persist() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(state, null, 2), 'utf-8');
    } catch (err) {
      console.error('[DB] Error writing to disk:', err.message);
    }
  }, 200);
}

export const db = {
  // Products
  getProducts: () => state.products,
  getProductById: (id) => state.products.find(p => p.id === id),
  updateProduct: (id, updates) => {
    const idx = state.products.findIndex(p => p.id === id);
    if (idx === -1) return null;
    state.products[idx] = { ...state.products[idx], ...updates };
    persist();
    return state.products[idx];
  },
  addProduct: (product) => {
    const newProd = {
      id: `prod-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 1,
      badge: "New Release",
      ...product
    };
    state.products.unshift(newProd);
    persist();
    return newProd;
  },

  // Graphic Presets
  getPresets: () => state.presets,

  // Saved Custom 3D Designs
  getSavedDesigns: () => state.savedDesigns,
  getSavedDesignById: (id) => state.savedDesigns.find(d => d.id === id),
  saveDesign: (designData) => {
    const newDesign = {
      id: `design-${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...designData
    };
    state.savedDesigns.unshift(newDesign);
    persist();
    return newDesign;
  },
  deleteSavedDesign: (id) => {
    const initialLen = state.savedDesigns.length;
    state.savedDesigns = state.savedDesigns.filter(d => d.id !== id);
    const deleted = state.savedDesigns.length < initialLen;
    if (deleted) persist();
    return deleted;
  },

  // Orders
  getOrders: () => state.orders,
  getOrderById: (orderId) => state.orders.find(o => o.orderId === orderId),
  createOrder: (orderData) => {
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const newOrder = {
      orderId: `TC-${randomCode}`,
      createdAt: new Date().toISOString(),
      status: "In Production",
      timeline: [
        { status: "Order Confirmed", time: new Date().toISOString(), done: true },
        { status: "Laser Fabric Cut", time: new Date(Date.now() + 1000 * 60 * 15).toISOString(), done: false },
        { status: "Custom 3D Print & Stitch", time: null, done: false },
        { status: "Quality Inspection", time: null, done: false },
        { status: "Dispatched with Courier", time: null, done: false }
      ],
      ...orderData
    };
    state.orders.unshift(newOrder);
    persist();
    return newOrder;
  },

  // Metrics for Admin Dashboard
  getMetrics: () => {
    const totalOrders = state.orders.length;
    const totalRevenue = state.orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalDesigns = state.savedDesigns.length;
    const totalProducts = state.products.length;
    return {
      totalOrders,
      totalRevenue,
      totalDesigns,
      totalProducts,
      recentOrders: state.orders.slice(0, 5),
      popularProducts: state.products.slice(0, 4).map(p => ({
        id: p.id,
        name: p.name,
        type: p.type,
        price: p.price,
        rating: p.rating
      }))
    };
  }
};
