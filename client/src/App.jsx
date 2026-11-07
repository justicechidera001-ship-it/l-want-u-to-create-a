import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import GarmentViewer from './components/canvas3d/GarmentViewer';
import CustomizerPanel from './components/studio/CustomizerPanel';
import ProductCatalog from './components/catalog/ProductCatalog';
import CartDrawer from './components/cart/CartDrawer';
import CheckoutModal from './components/checkout/CheckoutModal';
import OrderTracking from './components/tracking/OrderTracking';
import SavedWardrobe from './components/wardrobe/SavedWardrobe';
import AdminDashboard from './components/admin/AdminDashboard';
import SizeGuideModal from './components/common/SizeGuideModal';
import { Box, Sparkles, Check, Download, ExternalLink, ArrowRight } from 'lucide-react';

export default function App() {
  // Navigation
  const [currentView, setCurrentView] = useState('studio'); // studio, catalog, wardrobe, tracking, admin

  // Data State
  const [products, setProducts] = useState([]);
  const [presets, setPresets] = useState([]);
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Active Studio Garment & Customizer State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customConfig, setCustomConfig] = useState({
    primaryColor: '#14171d',
    accentColor: '#00f5a0',
    cordsColor: '#ffffff',
    fabricId: 'terry',
    size: 'L',
    decal: {
      id: 'cyber-kanji',
      position: 'front',
      scale: 0.65,
      rotation: 0,
      opacity: 0.95
    }
  });

  // Hotspot & Interaction
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Cart & Checkout
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('atelier_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  // Tracking target ID
  const [trackOrderId, setTrackOrderId] = useState('TC-94821');

  // Snapshot modal
  const [snapshotPreview, setSnapshotPreview] = useState(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cart]);

  // Initial Data Fetch
  const loadInitialData = async () => {
    try {
      const [resProd, resPresets, resDesigns] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/presets'),
        fetch('/api/custom-designs')
      ]);

      const dataProd = await resProd.json();
      const dataPresets = await resPresets.json();
      const dataDesigns = await resDesigns.json();

      if (dataProd.success && dataProd.products.length > 0) {
        setProducts(dataProd.products);
        if (!selectedProduct) {
          const first = dataProd.products[0];
          setSelectedProduct(first);
          if (first.defaultConfig) {
            setCustomConfig({
              ...first.defaultConfig,
              decal: {
                ...first.defaultConfig.decal,
                svgContent: dataPresets.presets?.[0]?.svg || null
              }
            });
          }
        }
      }

      if (dataPresets.success) {
        setPresets(dataPresets.presets);
      }

      if (dataDesigns.success) {
        setSavedDesigns(dataDesigns.designs);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  // Listen to hash changes (e.g. #track-TC-94821)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#track-')) {
        const id = hash.replace('#track-', '');
        setTrackOrderId(id);
        setCurrentView('tracking');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  // Switch Active Garment in Studio
  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    if (prod.defaultConfig) {
      const initialPreset = presets.find(p => p.id === prod.defaultConfig.decal?.id) || presets[0];
      setCustomConfig({
        ...prod.defaultConfig,
        decal: {
          ...prod.defaultConfig.decal,
          svgContent: initialPreset?.svg || null
        }
      });
    }
    setCurrentView('studio');
  };

  // Add customized garment to Bag
  const handleAddToCart = ({ product, customConfig, fabric, price }) => {
    const cartItem = {
      cartId: `item-${Date.now()}-${Math.random()}`,
      productId: product.id,
      productName: product.name,
      type: product.type,
      primaryColor: customConfig.primaryColor,
      accentColor: customConfig.accentColor,
      cordsColor: customConfig.cordsColor,
      fabricId: customConfig.fabricId,
      fabricName: fabric.name || 'Standard',
      size: customConfig.size,
      decal: customConfig.decal,
      price: price,
      quantity: 1
    };

    setCart(prev => [cartItem, ...prev]);
    setIsCartOpen(true);
    showToast(`Added ${product.name} (${customConfig.size}) to Bag!`);
  };

  // Save customized garment to database / wardrobe
  const handleSaveToWardrobe = async (designData) => {
    try {
      const res = await fetch('/api/custom-designs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${selectedProduct.name} Custom`,
          ...designData
        })
      });
      const data = await res.json();
      if (data.success && data.design) {
        setSavedDesigns(prev => [data.design, ...prev]);
        showToast('Saved custom creation to your Wardrobe!');
      }
    } catch (err) {
      console.error('Failed to save design:', err);
    }
  };

  // Delete saved design
  const handleDeleteDesign = async (id) => {
    try {
      const res = await fetch(`/api/custom-designs/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSavedDesigns(prev => prev.filter(d => d.id !== id));
        showToast('Design deleted from Wardrobe.');
      }
    } catch (err) {
      console.error('Failed to delete design:', err);
    }
  };

  // Load a saved design back into 3D Studio
  const handleLoadSavedDesign = (design) => {
    if (!design) {
      setCurrentView('studio');
      return;
    }
    const prod = products.find(p => p.id === design.productId) || products[0];
    setSelectedProduct(prod);

    const preset = presets.find(p => p.id === design.decal?.id);
    setCustomConfig({
      primaryColor: design.primaryColor,
      accentColor: design.accentColor,
      cordsColor: design.cordsColor || '#ffffff',
      fabricId: design.fabricId,
      size: design.size || 'L',
      decal: {
        ...design.decal,
        svgContent: preset ? preset.svg : null
      }
    });

    setCurrentView('studio');
    showToast(`Loaded ${design.name} into 3D Studio.`);
  };

  // Order placed successfully
  const handleOrderPlaced = (order) => {
    setCart([]);
    setTrackOrderId(order.orderId);
  };

  // Cart actions
  const handleUpdateQuantity = (cartId, qty) => {
    setCart(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity: qty } : item));
  };

  const handleRemoveCartItem = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleApplyDiscount = (code, amount) => {
    setDiscountCode(code);
    setDiscountAmount(amount);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartShipping = cartSubtotal > 150 || discountCode === 'FREESHIP' || cart.length === 0 ? 0 : 15;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + cartShipping);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-neon/30 selection:text-brand-neon">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-brand-neon/50 px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 text-xs font-mono text-white animate-fade-in backdrop-blur-xl">
          <Check className="w-4 h-4 text-brand-neon" />
          <span>{toast}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={setCurrentView}
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        savedCount={savedDesigns.length}
      />

      {/* Main Content Pages */}
      <main className="flex-1 flex flex-col">
        {/* VIEW 1: 3D STUDIO */}
        {currentView === 'studio' && (
          <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4">
            {/* Quick Garment Switcher Strip */}
            <div className="flex items-center justify-between glass-panel p-2 rounded-2xl border border-slate-800/80 overflow-x-auto scrollbar-none gap-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 hidden lg:inline">
                Garment Models:
              </span>
              <div className="flex items-center space-x-1.5">
                {products.map((p) => {
                  const isSelected = selectedProduct?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelectProduct(p)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                        isSelected
                          ? 'bg-brand-neon text-dark-950 font-bold shadow-glow-neon'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <Box className={`w-3.5 h-3.5 ${isSelected ? 'text-dark-950' : 'text-brand-cyan'}`} />
                      <span>{p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Split 3D Viewport and Customizer Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[620px] lg:min-h-[700px]">
              {/* Left/Center: 3D WebGL Canvas */}
              <div className="lg:col-span-7 xl:col-span-8 h-[480px] lg:h-full relative">
                {selectedProduct ? (
                  <GarmentViewer
                    product={selectedProduct}
                    customConfig={customConfig}
                    activeHotspot={activeHotspot}
                    onHotspotClick={setActiveHotspot}
                    onExportSnapshot={(dataUrl) => {
                      setSnapshotPreview(dataUrl);
                      showToast('High-Res 3D Mockup captured!');
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                    Loading 3D Engine...
                  </div>
                )}
              </div>

              {/* Right: Customizer Control Studio */}
              <div className="lg:col-span-5 xl:col-span-4 h-full">
                {selectedProduct && (
                  <CustomizerPanel
                    product={selectedProduct}
                    customConfig={customConfig}
                    onChangeConfig={setCustomConfig}
                    presets={presets}
                    onAddToCart={handleAddToCart}
                    onSaveToWardrobe={handleSaveToWardrobe}
                    onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
                    onExportSnapshot={() => {
                      showToast('Click the camera icon on the top right of the 3D viewer to download PNG snapshot!');
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: COLLECTIONS CATALOG */}
        {currentView === 'catalog' && (
          <ProductCatalog
            products={products}
            onSelectProductFor3D={handleSelectProduct}
            onQuickAddToCart={(p) => {
              handleSelectProduct(p);
            }}
          />
        )}

        {/* VIEW 3: SAVED WARDROBE */}
        {currentView === 'wardrobe' && (
          <SavedWardrobe
            savedDesigns={savedDesigns}
            onLoadIntoStudio={handleLoadSavedDesign}
            onAddToCart={(d) => {
              const p = products.find(prod => prod.id === d.productId) || products[0];
              handleAddToCart({
                product: p,
                customConfig: {
                  primaryColor: d.primaryColor,
                  accentColor: d.accentColor,
                  cordsColor: d.cordsColor,
                  fabricId: d.fabricId,
                  size: d.size || 'L',
                  decal: d.decal
                },
                fabric: { name: d.fabricName },
                price: d.price || p.price
              });
            }}
            onDeleteDesign={handleDeleteDesign}
          />
        )}

        {/* VIEW 4: ORDER TRACKING */}
        {currentView === 'tracking' && (
          <OrderTracking
            initialOrderId={trackOrderId}
            onOpenStudio={() => setCurrentView('studio')}
          />
        )}

        {/* VIEW 5: ADMIN STUDIO */}
        {currentView === 'admin' && (
          <AdminDashboard
            onRefreshData={loadInitialData}
          />
        )}
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        discountCode={discountCode}
        onApplyDiscount={handleApplyDiscount}
        discountAmount={discountAmount}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        subtotal={cartSubtotal}
        shipping={cartShipping}
        discount={discountAmount}
        totalAmount={cartTotal}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* High-Res Snapshot Preview Modal */}
      {snapshotPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md">
          <div className="relative max-w-xl w-full bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-xs font-mono text-brand-neon font-bold uppercase">
                3D Snapshot Generated
              </span>
              <button
                onClick={() => setSnapshotPreview(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <img
              src={snapshotPreview}
              alt="Snapshot"
              className="w-full rounded-2xl border border-slate-800 shadow-xl"
            />
            <div className="flex justify-end space-x-3">
              <a
                href={snapshotPreview}
                download="custom-garment-mockup.png"
                className="px-4 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs flex items-center space-x-1.5 shadow-glow-neon"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Device</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-dark-950 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-brand-neon inline-block" />
            <span className="text-slate-300 font-bold">ATELIER 3D</span>
            <span>— Bespoke Technical Garment Studio</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Three.js PBR WebGL</span>
            <span>•</span>
            <span>Node.js / Express</span>
            <span>•</span>
            <span>Digital Atelier 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
