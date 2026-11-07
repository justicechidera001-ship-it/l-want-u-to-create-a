import React, { useState, useRef } from 'react';
import {
  Palette,
  Sparkles,
  Layers,
  Upload,
  ShoppingBag,
  Bookmark,
  Ruler,
  Check,
  RotateCw,
  Sliders,
  DollarSign,
  Info
} from 'lucide-react';

export default function CustomizerPanel({
  product,
  customConfig,
  onChangeConfig,
  presets = [],
  onAddToCart,
  onSaveToWardrobe,
  onOpenSizeGuide,
  onExportSnapshot
}) {
  const [activeTab, setActiveTab] = useState('colors'); // colors, fabrics, graphics, sizes
  const [uploadingImage, setUploadingImage] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef(null);

  if (!product) return null;

  // Real-time price calculation
  const basePrice = product.price || 0;
  const currentFabric = product.fabrics?.find(f => f.id === customConfig.fabricId) || {};
  const fabricExtra = currentFabric.priceExtra || 0;
  const decalExtra = customConfig.decal?.customImage || (customConfig.decal?.svgContent && customConfig.decal.id !== 'none') ? 15 : 0;
  const totalPrice = basePrice + fabricExtra + decalExtra;

  // Handle color changes
  const handlePrimaryColorChange = (hex) => {
    onChangeConfig({ ...customConfig, primaryColor: hex });
  };

  const handleAccentColorChange = (hex) => {
    onChangeConfig({ ...customConfig, accentColor: hex });
  };

  const handleCordsColorChange = (hex) => {
    onChangeConfig({ ...customConfig, cordsColor: hex });
  };

  // Handle fabric change
  const handleFabricSelect = (fabricId) => {
    onChangeConfig({ ...customConfig, fabricId });
  };

  // Handle decal preset selection
  const handlePresetSelect = (preset) => {
    onChangeConfig({
      ...customConfig,
      decal: {
        ...customConfig.decal,
        id: preset.id,
        svgContent: preset.svg,
        customImage: null
      }
    });
  };

  // Handle custom image upload
  const handleCustomImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64Data = event.target.result;

        // Apply immediately to 3D model
        onChangeConfig({
          ...customConfig,
          decal: {
            ...customConfig.decal,
            id: 'custom-upload',
            svgContent: null,
            customImage: base64Data
          }
        });

        // Also upload to server in background
        try {
          await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ base64: base64Data })
          });
        } catch (err) {
          console.warn('Background upload failed, local base64 used:', err);
        }
        setUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('File read error:', err);
      setUploadingImage(false);
    }
  };

  // Handle decal placement and transform
  const handleDecalPosition = (pos) => {
    onChangeConfig({
      ...customConfig,
      decal: { ...customConfig.decal, position: pos }
    });
  };

  const handleDecalScale = (val) => {
    onChangeConfig({
      ...customConfig,
      decal: { ...customConfig.decal, scale: parseFloat(val) }
    });
  };

  const handleDecalRotation = (val) => {
    onChangeConfig({
      ...customConfig,
      decal: { ...customConfig.decal, rotation: parseInt(val, 10) }
    });
  };

  const handleDecalOpacity = (val) => {
    onChangeConfig({
      ...customConfig,
      decal: { ...customConfig.decal, opacity: parseFloat(val) }
    });
  };

  const handleSaveWardrobeClick = () => {
    onSaveToWardrobe({
      productName: product.name,
      productId: product.id,
      primaryColor: customConfig.primaryColor,
      accentColor: customConfig.accentColor,
      cordsColor: customConfig.cordsColor,
      fabricId: customConfig.fabricId,
      fabricName: currentFabric.name || 'Standard',
      size: customConfig.size,
      decal: customConfig.decal,
      price: totalPrice
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="flex flex-col h-full bg-dark-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
      {/* Product Header */}
      <div className="p-5 border-b border-slate-800 bg-dark-850/80">
        <div className="flex items-center justify-between mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-brand-neon/15 text-brand-neon border border-brand-neon/30">
            {product.badge || 'Studio Customizer'}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {product.rating} ★ ({product.reviewsCount} reviews)
          </span>
        </div>
        <h2 className="text-xl font-display font-bold text-white tracking-tight">{product.name}</h2>
        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{product.tagline}</p>

        {/* Live Price Tag */}
        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-2xl font-display font-extrabold text-white">${totalPrice}</span>
          {fabricExtra > 0 && (
            <span className="text-xs font-mono text-brand-cyan">
              (+${fabricExtra} {currentFabric.name?.split(' ')[0]})
            </span>
          )}
          {decalExtra > 0 && (
            <span className="text-xs font-mono text-brand-gold">(+$15 Custom Decal)</span>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-4 border-b border-slate-800 text-xs font-semibold bg-dark-950/60">
        {[
          { id: 'colors', label: 'Colors', icon: Palette },
          { id: 'fabrics', label: 'Fabrics', icon: Layers },
          { id: 'graphics', label: 'Decals', icon: Sparkles },
          { id: 'sizes', label: 'Fit & Size', icon: Ruler }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-3 px-2 border-b-2 transition duration-200 ${
                isActive
                  ? 'border-brand-neon text-white bg-slate-800/40'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
              }`}
            >
              <Icon className={`w-4 h-4 mb-1 ${isActive ? 'text-brand-neon' : ''}`} />
              <span className="text-[11px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* TAB 1: COLORS */}
        {activeTab === 'colors' && (
          <div className="space-y-6">
            {/* Primary Garment Color */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  1. Base Fabric Color
                </label>
                <div className="flex items-center space-x-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block"
                    style={{ backgroundColor: customConfig.primaryColor }}
                  />
                  <span className="text-xs font-mono text-slate-400">{customConfig.primaryColor}</span>
                </div>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {product.colors?.map((col) => {
                  const isSelected = customConfig.primaryColor === col.hex;
                  return (
                    <button
                      key={col.hex}
                      onClick={() => handlePrimaryColorChange(col.hex)}
                      className={`relative flex items-center p-2 rounded-xl border transition ${
                        isSelected
                          ? 'border-brand-neon bg-slate-800 ring-2 ring-brand-neon/30'
                          : 'border-slate-800 hover:border-slate-600 bg-dark-850'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-slate-700 shadow-inner flex-shrink-0 mr-2"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span className="text-[11px] font-medium text-slate-300 truncate">{col.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Color Input */}
              <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-dark-950 border border-slate-800">
                <input
                  type="color"
                  value={customConfig.primaryColor}
                  onChange={(e) => handlePrimaryColorChange(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"
                />
                <span className="text-xs text-slate-400 font-mono">Custom Hex Color Wheel</span>
              </div>
            </div>

            {/* Accent Color */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  2. Accent & Trims Color
                </label>
                <div className="flex items-center space-x-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block"
                    style={{ backgroundColor: customConfig.accentColor }}
                  />
                  <span className="text-xs font-mono text-slate-400">{customConfig.accentColor}</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3">
                {[
                  { name: 'Neon Green', hex: '#00f5a0' },
                  { name: 'Electric Cyan', hex: '#00d9f5' },
                  { name: 'Solar Amber', hex: '#f59e0b' },
                  { name: 'Hot Crimson', hex: '#ef4444' },
                  { name: 'Pure White', hex: '#ffffff' },
                  { name: 'Cyber Violet', hex: '#c084fc' },
                  { name: 'Stealth Onyx', hex: '#111827' },
                  { name: 'Chrome Grey', hex: '#64748b' }
                ].map((col) => {
                  const isSelected = customConfig.accentColor === col.hex;
                  return (
                    <button
                      key={col.hex}
                      onClick={() => handleAccentColorChange(col.hex)}
                      className={`relative flex items-center p-2 rounded-xl border transition ${
                        isSelected
                          ? 'border-brand-cyan bg-slate-800 ring-2 ring-brand-cyan/30'
                          : 'border-slate-800 hover:border-slate-600 bg-dark-850'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-slate-700 flex-shrink-0 mr-2"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span className="text-[11px] font-medium text-slate-300 truncate">{col.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Accent Input */}
              <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-dark-950 border border-slate-800">
                <input
                  type="color"
                  value={customConfig.accentColor}
                  onChange={(e) => handleAccentColorChange(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"
                />
                <span className="text-xs text-slate-400 font-mono">Custom Accent Wheel</span>
              </div>
            </div>

            {/* Cords & Aglets Color */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  3. Drawstrings & Aglets
                </label>
              </div>
              <div className="flex space-x-2">
                {['#ffffff', '#000000', '#00f5a0', '#00d9f5', '#f59e0b', '#dc2626'].map((hex) => (
                  <button
                    key={hex}
                    onClick={() => handleCordsColorChange(hex)}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      customConfig.cordsColor === hex ? 'border-brand-neon scale-110' : 'border-slate-700'
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FABRICS */}
        {activeTab === 'fabrics' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Select Luxury Material Grade
              </span>
              <span className="text-xs text-brand-neon font-mono">PBR Calibrated</span>
            </div>

            <div className="space-y-3">
              {product.fabrics?.map((fab) => {
                const isSelected = customConfig.fabricId === fab.id;
                return (
                  <div
                    key={fab.id}
                    onClick={() => handleFabricSelect(fab.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition ${
                      isSelected
                        ? 'border-brand-neon bg-dark-850 ring-1 ring-brand-neon/40 shadow-lg'
                        : 'border-slate-800 hover:border-slate-700 bg-dark-950'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center">
                          {fab.name}
                          {fab.priceExtra > 0 ? (
                            <span className="ml-2 text-xs font-mono text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded">
                              +${fab.priceExtra}
                            </span>
                          ) : (
                            <span className="ml-2 text-xs font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                              Standard
                            </span>
                          )}
                        </h4>
                        <span className="text-[11px] font-mono text-brand-cyan">{fab.gsm}</span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          isSelected
                            ? 'bg-brand-neon text-dark-950 border-brand-neon'
                            : 'border-slate-700'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">{fab.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: GRAPHICS & DECALS */}
        {activeTab === 'graphics' && (
          <div className="space-y-5">
            {/* Decal Placement */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2">
                Decal Placement Zone
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'front', label: 'Front Chest' },
                  { id: 'back', label: 'Back Graphic' },
                  { id: 'chest-left', label: 'Crest / Pocket' }
                ].map((pos) => {
                  const isSelected = customConfig.decal?.position === pos.id;
                  return (
                    <button
                      key={pos.id}
                      onClick={() => handleDecalPosition(pos.id)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border transition ${
                        isSelected
                          ? 'border-brand-neon bg-brand-neon/10 text-brand-neon font-bold'
                          : 'border-slate-800 text-slate-400 hover:text-white bg-dark-950'
                      }`}
                    >
                      {pos.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Upload Button */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2">
                Upload Custom Logo / Artwork
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/svg+xml, image/webp"
                className="hidden"
                onChange={handleCustomImageUpload}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadingImage}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-dashed border-brand-cyan/50 hover:border-brand-cyan bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan text-xs font-semibold transition"
              >
                <Upload className={`w-4 h-4 ${uploadingImage ? 'animate-bounce' : ''}`} />
                <span>{uploadingImage ? 'Processing artwork...' : 'Upload PNG / SVG / JPG (Transparent)'}</span>
              </button>
            </div>

            {/* Curated Graphic Presets */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2">
                Curated Graphic Prints Library
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {presets.map((preset) => {
                  const isSelected = customConfig.decal?.id === preset.id;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => handlePresetSelect(preset)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition flex flex-col items-center justify-center bg-dark-950 ${
                        isSelected
                          ? 'border-brand-neon ring-2 ring-brand-neon/30 bg-slate-800/60'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className="w-16 h-16 flex items-center justify-center mb-1.5"
                        dangerouslySetInnerHTML={{ __html: preset.svg }}
                      />
                      <span className="text-[11px] font-bold text-slate-200 text-center leading-tight">
                        {preset.name}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase">{preset.category}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transform Controls (Scale, Rotation, Opacity) */}
            <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-neon font-bold flex items-center">
                <Sliders className="w-3.5 h-3.5 mr-1.5" /> Adjust Graphic Transform
              </span>

              {/* Scale */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Scale</span>
                  <span className="font-mono">{Math.round((customConfig.decal?.scale || 0.7) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="1.0"
                  step="0.05"
                  value={customConfig.decal?.scale || 0.7}
                  onChange={(e) => handleDecalScale(e.target.value)}
                  className="w-full accent-brand-neon cursor-pointer"
                />
              </div>

              {/* Rotation */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Angle</span>
                  <span className="font-mono">{customConfig.decal?.rotation || 0}°</span>
                </div>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="5"
                  value={customConfig.decal?.rotation || 0}
                  onChange={(e) => handleDecalRotation(e.target.value)}
                  className="w-full accent-brand-cyan cursor-pointer"
                />
              </div>

              {/* Opacity */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Opacity</span>
                  <span className="font-mono">{Math.round((customConfig.decal?.opacity ?? 1) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.05"
                  value={customConfig.decal?.opacity ?? 1}
                  onChange={(e) => handleDecalOpacity(e.target.value)}
                  className="w-full accent-brand-neon cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SIZES & FIT */}
        {activeTab === 'sizes' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Select Tailored Size
              </label>
              <button
                onClick={onOpenSizeGuide}
                className="text-xs font-mono text-brand-cyan hover:underline flex items-center"
              >
                <Ruler className="w-3.5 h-3.5 mr-1" /> View Size Chart
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {product.sizes?.map((sz) => {
                const isSelected = customConfig.size === sz;
                return (
                  <button
                    key={sz}
                    onClick={() => onChangeConfig({ ...customConfig, size: sz })}
                    className={`py-3 rounded-xl border text-sm font-bold transition flex flex-col items-center justify-center ${
                      isSelected
                        ? 'border-brand-neon bg-brand-neon/15 text-brand-neon ring-2 ring-brand-neon/30'
                        : 'border-slate-800 text-slate-300 hover:border-slate-700 bg-dark-950'
                    }`}
                  >
                    <span>{sz}</span>
                    <span className="text-[10px] font-mono text-slate-500 font-normal">In Stock</span>
                  </button>
                );
              })}
            </div>

            {/* Fit notes */}
            <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80">
              <h5 className="text-xs font-bold text-white mb-1 flex items-center">
                <Info className="w-3.5 h-3.5 text-brand-gold mr-1.5" /> Silhouette & Fit Profile
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with an oversized streetwear drape. Drop shoulders and elongated sleeves provide relaxed comfort. True to size for intentional relaxed drape, or size down for tailored fit.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-4 border-t border-slate-800 bg-dark-850/90 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          {/* Save to Wardrobe */}
          <button
            onClick={handleSaveWardrobeClick}
            className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition ${
              saveSuccess
                ? 'border-brand-neon text-brand-neon bg-brand-neon/10'
                : 'border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white bg-dark-900'
            }`}
          >
            {saveSuccess ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
            <span>{saveSuccess ? 'Saved in Wardrobe' : 'Save Design'}</span>
          </button>

          {/* Download Snapshot Mockup */}
          <button
            onClick={onExportSnapshot}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border border-slate-700 hover:border-brand-cyan/50 text-slate-300 hover:text-brand-cyan bg-dark-900 text-xs font-semibold transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Export 3D Mockup</span>
          </button>
        </div>

        {/* Add to Cart CTA */}
        <button
          onClick={() => {
            onAddToCart({
              product,
              customConfig,
              fabric: currentFabric,
              price: totalPrice
            });
          }}
          className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-neon text-dark-950 font-display font-extrabold text-sm tracking-wide shadow-glow-neon hover:opacity-95 active:scale-[0.98] transition"
        >
          <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
          <span>ADD CUSTOM CREATION — ${totalPrice}</span>
        </button>
      </div>
    </div>
  );
}
