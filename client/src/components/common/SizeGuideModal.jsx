import React, { useState } from 'react';
import { X, Ruler, Check } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  const [unit, setUnit] = useState('cm'); // cm or in

  if (!isOpen) return null;

  const topsData = unit === 'cm'
    ? [
        { size: 'XS', chest: '106 cm', length: '68 cm', sleeve: '58 cm' },
        { size: 'S', chest: '112 cm', length: '71 cm', sleeve: '60 cm' },
        { size: 'M', chest: '118 cm', length: '73 cm', sleeve: '62 cm' },
        { size: 'L', chest: '124 cm', length: '76 cm', sleeve: '64 cm' },
        { size: 'XL', chest: '130 cm', length: '78 cm', sleeve: '66 cm' },
        { size: 'XXL', chest: '136 cm', length: '81 cm', sleeve: '67 cm' }
      ]
    : [
        { size: 'XS', chest: '41.7 in', length: '26.8 in', sleeve: '22.8 in' },
        { size: 'S', chest: '44.1 in', length: '28.0 in', sleeve: '23.6 in' },
        { size: 'M', chest: '46.5 in', length: '28.7 in', sleeve: '24.4 in' },
        { size: 'L', chest: '48.8 in', length: '29.9 in', sleeve: '25.2 in' },
        { size: 'XL', chest: '51.2 in', length: '30.7 in', sleeve: '26.0 in' },
        { size: 'XXL', chest: '53.5 in', length: '31.9 in', sleeve: '26.4 in' }
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-dark-950/80 backdrop-blur-md" />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10 space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Ruler className="w-5 h-5 text-brand-neon" />
            <h3 className="text-lg font-display font-bold text-white">Garment Sizing Specification</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-slate-400">Oversized Streetwear Silhouette</span>
          <div className="flex bg-dark-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-lg transition ${
                unit === 'cm' ? 'bg-brand-neon text-dark-950 font-bold' : 'text-slate-400'
              }`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 rounded-lg transition ${
                unit === 'in' ? 'bg-brand-neon text-dark-950 font-bold' : 'text-slate-400'
              }`}
            >
              INCHES
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-2.5 px-3">Size</th>
                <th className="py-2.5 px-3">Chest Width</th>
                <th className="py-2.5 px-3">Garment Length</th>
                <th className="py-2.5 px-3">Sleeve Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {topsData.map((row) => (
                <tr key={row.size} className="hover:bg-dark-950/80">
                  <td className="py-2.5 px-3 font-bold text-brand-neon">{row.size}</td>
                  <td className="py-2.5 px-3 text-slate-200">{row.chest}</td>
                  <td className="py-2.5 px-3 text-slate-200">{row.length}</td>
                  <td className="py-2.5 px-3 text-slate-200">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tailoring Guidance Note */}
        <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-400 space-y-1">
          <p className="font-bold text-white">How We Measure:</p>
          <p>• Chest is measured flat from armpit to armpit and multiplied by 2.</p>
          <p>• Length is measured from highest shoulder point down to bottom hemline.</p>
        </div>
      </div>
    </div>
  );
}
