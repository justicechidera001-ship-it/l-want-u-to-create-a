import React from 'react';
import { ShoppingBag, Box, Compass, Bookmark, Truck, ShieldCheck, Menu, X } from 'lucide-react';

export default function Navbar({
  currentView,
  onNavigate,
  cartCount = 0,
  onOpenCart,
  savedCount = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'studio', label: '3D Studio', icon: Box },
    { id: 'catalog', label: 'Collections', icon: Compass },
    { id: 'wardrobe', label: 'Saved Wardrobe', icon: Bookmark, badge: savedCount },
    { id: 'tracking', label: 'Track Order', icon: Truck },
    { id: 'admin', label: 'Admin Studio', icon: ShieldCheck }
  ];

  const handleNav = (viewId) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNav('studio')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-neon via-brand-cyan to-brand-violet p-0.5 shadow-glow-neon group-hover:scale-105 transition">
            <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
              <Box className="w-5 h-5 text-brand-neon" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-extrabold text-lg text-white tracking-wider">ATELIER</span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 font-bold">
                3D
              </span>
            </div>
            <p className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">Next-Gen Fashion Lab</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel-subtle px-3 py-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? 'text-dark-950 bg-brand-neon shadow-glow-neon'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-dark-950' : 'text-slate-400'}`} />
                <span>{link.label}</span>
                {link.badge > 0 && !isActive && (
                  <span className="w-4 h-4 rounded-full bg-brand-cyan text-dark-950 text-[10px] font-bold flex items-center justify-center">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Cart Drawer Trigger & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenCart}
            className="relative flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-slate-700/80 hover:border-brand-neon/60 text-slate-200 hover:text-white transition group"
          >
            <ShoppingBag className="w-4 h-4 text-brand-neon group-hover:scale-110 transition" />
            <span className="text-xs font-semibold hidden sm:inline">Bag</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-brand-neon text-dark-950 font-display font-extrabold text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel border border-slate-700 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-dark-900/95 backdrop-blur-xl px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition ${
                  isActive ? 'bg-brand-neon text-dark-950 font-bold' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </div>
                {link.badge > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-brand-cyan text-dark-950 text-xs font-bold">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
