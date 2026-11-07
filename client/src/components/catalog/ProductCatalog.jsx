import React, { useState } from 'react';
import { Search, Box, Sparkles, Filter, ArrowRight, Star } from 'lucide-react';

export default function ProductCatalog({
  products = [],
  onSelectProductFor3D,
  onQuickAddToCart
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Hoodies', 'T-Shirts', 'Jackets', 'Blazers', 'Pants', 'Headwear'];

  const filtered = products.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Banner / Header */}
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-slate-800 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/15 text-brand-neon border border-brand-neon/30 text-xs font-mono font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 TECHNICAL RUNWAY COLLECTION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Crafted for Reality. <br />
            <span className="bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-violet bg-clip-text text-transparent">
              Tailored in 3D.
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every garment is an open canvas. Select any piece from our archival drops, inspect tailoring in real-time 3D, customize luxury fabrics, and imprint custom graphic artwork.
          </p>
        </div>

        {/* Ambient background glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-40 bottom-0 w-80 h-80 bg-brand-neon/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
        {/* Categories Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-brand-neon text-dark-950 font-bold shadow-glow-neon'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search garments, fabrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon transition"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col rounded-2xl bg-dark-900 border border-slate-800/80 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Top Badges */}
            <div className="p-4 flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-brand-neon/15 text-brand-neon border border-brand-neon/30">
                {product.badge || 'Archive'}
              </span>
              <div className="flex items-center space-x-1 text-brand-gold text-xs font-mono">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{product.rating}</span>
                <span className="text-slate-500">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Visual Preview Box */}
            <div
              onClick={() => onSelectProductFor3D(product)}
              className="relative mx-4 h-60 rounded-xl bg-dark-950/80 border border-slate-800/80 flex flex-col items-center justify-center cursor-pointer overflow-hidden group-hover:border-brand-cyan/40 transition"
            >
              {/* Animated 3D Preview Icon / Representation */}
              <div className="relative flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-brand-cyan transition duration-300">
                  <Box className="w-10 h-10 text-brand-neon group-hover:text-brand-cyan transition" />
                </div>
                <span className="mt-3 text-xs font-mono font-bold text-brand-cyan flex items-center space-x-1">
                  <span>Interactive 3D Configurator</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                </span>
              </div>

              {/* Color Swatches Indicator */}
              <div className="absolute bottom-3 left-4 flex items-center space-x-1.5">
                {product.colors?.slice(0, 5).map((c) => (
                  <span
                    key={c.hex}
                    className="w-3 h-3 rounded-full border border-slate-700"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
                {product.colors?.length > 5 && (
                  <span className="text-[10px] font-mono text-slate-500">
                    +{product.colors.length - 5}
                  </span>
                )}
              </div>

              {/* Fabric Specs Tag */}
              <span className="absolute bottom-3 right-4 text-[10px] font-mono text-slate-400 bg-dark-900/90 px-2 py-0.5 rounded border border-slate-800">
                {product.fabrics?.length} Fabrics
              </span>
            </div>

            {/* Details Section */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase text-brand-cyan font-bold tracking-wider mb-1">
                  {product.category}
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-tight mb-1 group-hover:text-brand-neon transition">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Bottom Price & Launch Studio CTA */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block font-mono">Base Price</span>
                  <span className="text-xl font-display font-extrabold text-white">
                    ${product.price}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onSelectProductFor3D(product)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-brand-neon hover:text-dark-950 text-white font-semibold text-xs transition flex items-center space-x-1.5 shadow-sm"
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Customize 3D</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
