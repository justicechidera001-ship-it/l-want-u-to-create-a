import React from 'react';
import { Bookmark, Box, ShoppingBag, Trash2, ArrowRight, Sparkles } from 'lucide-react';

export default function SavedWardrobe({
  savedDesigns = [],
  onLoadIntoStudio,
  onAddToCart,
  onDeleteDesign
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-violet/20 text-brand-cyan border border-brand-violet/40 text-xs font-mono font-bold tracking-wider mb-2">
            <Bookmark className="w-3.5 h-3.5 text-brand-neon" />
            <span>Personal Atelier Archive</span>
          </div>
          <h1 className="text-3xl font-display font-extrabold text-white">Your Saved 3D Wardrobe</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Revisit your custom-crafted garments, adjust tailoring configurations, or dispatch them directly to cart.
          </p>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1.5 rounded-xl border border-slate-800">
          {savedDesigns.length} Saved Creations
        </span>
      </div>

      {/* Grid of Saved Designs */}
      {savedDesigns.length === 0 ? (
        <div className="text-center py-20 rounded-3xl bg-dark-900 border border-slate-800 p-8 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500 mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white">No custom designs saved yet</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Open the 3D Studio, pick custom fabrics, colors, and decal placements, and click "Save Design" to store your creations here.
          </p>
          <button
            onClick={() => onLoadIntoStudio(null)}
            className="px-6 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display hover:opacity-90 shadow-glow-neon"
          >
            Launch 3D Studio
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedDesigns.map((design) => (
            <div
              key={design.id}
              className="group rounded-2xl bg-dark-900 border border-slate-800 hover:border-brand-neon/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Visual Card Header */}
              <div className="p-5 bg-dark-950/80 border-b border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-display group-hover:text-brand-neon transition">
                    {design.name || design.productName}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{design.productName}</span>
                </div>
                <button
                  onClick={() => onDeleteDesign(design.id)}
                  title="Delete design"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Specs & Preview Details */}
              <div className="p-5 space-y-4 flex-1">
                {/* Visual Icon Representation */}
                <div
                  onClick={() => onLoadIntoStudio(design)}
                  className="h-36 rounded-xl bg-dark-900 border border-slate-800 flex flex-col items-center justify-center cursor-pointer hover:border-brand-cyan/60 transition group-hover:bg-dark-850"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-neon mb-2 shadow-lg">
                    <Box className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-brand-cyan flex items-center space-x-1">
                    <span>Inspect in 3D</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                {/* Fabric & Swatches info */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fabric Grade:</span>
                    <span className="text-white font-bold">{design.fabricName || 'French Terry'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Size:</span>
                    <span className="text-brand-neon font-bold">{design.size || 'L'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Palette:</span>
                    <div className="flex items-center space-x-1.5">
                      <span
                        className="w-4 h-4 rounded-full border border-slate-700 shadow-sm"
                        style={{ backgroundColor: design.primaryColor }}
                        title="Primary Color"
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-slate-700 shadow-sm"
                        style={{ backgroundColor: design.accentColor }}
                        title="Accent Color"
                      />
                      {design.cordsColor && (
                        <span
                          className="w-4 h-4 rounded-full border border-slate-700 shadow-sm"
                          style={{ backgroundColor: design.cordsColor }}
                          title="Hardware / Cords"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-dark-850/90 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-lg font-display font-extrabold text-white">
                  ${design.price || 128}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onLoadIntoStudio(design)}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition flex items-center space-x-1"
                  >
                    <Box className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Open 3D</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(design)}
                    className="px-4 py-2 rounded-xl bg-brand-neon hover:opacity-90 text-dark-950 font-bold text-xs transition flex items-center space-x-1.5 shadow-glow-neon"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
