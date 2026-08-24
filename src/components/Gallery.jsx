import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/businessData';
import { Sparkles, Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Cleaning <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Standard</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-pressure foam washing, thorough interior vacuuming, and shine-focused detailing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(item)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-cyan-400">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 inline-block mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImg.img}
              alt={selectedImg.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-6 bg-slate-900 flex items-center justify-between border-t border-slate-800">
              <div>
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">{selectedImg.category}</span>
                <h3 className="text-xl font-bold text-white">{selectedImg.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
