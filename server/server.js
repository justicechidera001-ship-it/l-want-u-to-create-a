import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import multer from 'multer';
import { db } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Static uploads folder
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// Multer storage for uploaded graphics/decals
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.png';
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, unique);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

/* ----------------- API ROUTES ----------------- */

// 1. Products
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  let products = db.getProducts();

  if (category && category !== 'All') {
    products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, count: products.length, products });
});

app.get('/api/products/:id', (req, res) => {
  const product = db.getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, product });
});

app.post('/api/products', (req, res) => {
  const { name, category, price, type, description } = req.body;
  if (!name || !price || !type) {
    return res.status(400).json({ success: false, message: 'Missing required product fields' });
  }
  const created = db.addProduct(req.body);
  res.status(201).json({ success: true, product: created });
});

app.delete('/api/products/:id', (req, res) => {
  const ok = db.deleteProduct(req.params.id);
  if (!ok) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, message: 'Product deleted' });
});

// 2. Graphic Presets
app.get('/api/presets', (req, res) => {
  res.json({ success: true, presets: db.getPresets() });
});

// 3. User Saved 3D Customizations
app.get('/api/custom-designs', (req, res) => {
  res.json({ success: true, designs: db.getSavedDesigns() });
});

app.get('/api/custom-designs/:id', (req, res) => {
  const design = db.getSavedDesignById(req.params.id);
  if (!design) {
    return res.status(404).json({ success: false, message: 'Design not found' });
  }
  res.json({ success: true, design });
});

app.post('/api/custom-designs', (req, res) => {
  const { name, productId } = req.body;
  if (!name || !productId) {
    return res.status(400).json({ success: false, message: 'Name and Product ID are required' });
  }
  const saved = db.saveDesign(req.body);
  res.status(201).json({ success: true, design: saved });
});

app.delete('/api/custom-designs/:id', (req, res) => {
  const ok = db.deleteSavedDesign(req.params.id);
  if (!ok) {
    return res.status(404).json({ success: false, message: 'Design not found' });
  }
  res.json({ success: true, message: 'Design deleted successfully' });
});

// 4. Custom Decal / Texture Upload
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    const fileUrl = `/uploads/${req.file.filename}`;
    return res.json({
      success: true,
      url: fileUrl,
      filename: req.file.filename,
      size: req.file.size
    });
  }

  // Handle base64 upload if sent as JSON body
  if (req.body && req.body.base64) {
    try {
      const base64Data = req.body.base64.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      const filename = `upload-${Date.now()}-${Math.round(Math.random() * 1e6)}.png`;
      const filePath = path.join(uploadsDir, filename);
      fs.writeFileSync(filePath, buffer);
      return res.json({
        success: true,
        url: `/uploads/${filename}`,
        filename
      });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Failed to process base64 upload' });
    }
  }

  return res.status(400).json({ success: false, message: 'No file provided' });
});

// 5. Orders & Checkout
app.get('/api/orders', (req, res) => {
  res.json({ success: true, orders: db.getOrders() });
});

app.get('/api/orders/:orderId', (req, res) => {
  const order = db.getOrderById(req.params.orderId);
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  res.json({ success: true, order });
});

app.post('/api/orders', (req, res) => {
  const { items, customer, paymentMethod, total } = req.body;
  if (!items || !items.length || !customer || !customer.email) {
    return res.status(400).json({ success: false, message: 'Invalid order data' });
  }

  const createdOrder = db.createOrder({
    items,
    customer,
    paymentMethod: paymentMethod || 'Credit Card',
    subtotal: req.body.subtotal || total,
    shipping: req.body.shipping || 0,
    discount: req.body.discount || 0,
    total: total || items.reduce((s, i) => s + (i.price * (i.quantity || 1)), 0)
  });

  res.status(201).json({ success: true, order: createdOrder });
});

const handleStatusUpdate = (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ success: false, message: 'Status is required' });
  }
  const updated = db.updateOrderStatus(req.params.orderId, status);
  if (!updated) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  res.json({ success: true, order: updated });
};

app.patch('/api/orders/:orderId/status', handleStatusUpdate);
app.patch('/api/orders/:orderId', handleStatusUpdate);

app.delete('/api/orders/:orderId', (req, res) => {
  const ok = db.deleteOrder(req.params.orderId);
  if (!ok) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  res.json({ success: true, message: 'Order deleted successfully' });
});

// 6. Admin Metrics
app.get('/api/admin/metrics', (req, res) => {
  res.json({ success: true, metrics: db.getMetrics() });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), time: new Date().toISOString() });
});

// Serve frontend in production build if client/dist exists
const clientDist = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api') && !req.path.startsWith('/uploads')) {
      res.sendFile(path.join(clientDist, 'index.html'));
    }
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 [Atelier 3D Server] listening on http://localhost:${PORT}`);
});
