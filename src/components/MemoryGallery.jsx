import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRIO_IMAGE_2 } from '../constants/friendshipData';
import { Maximize2, X, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function MemoryGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredMemory = {
    title: "Trio Hanging Out at the Food Court",
    category: "FAVORITE MEMORY",
    image: TRIO_IMAGE_2,
    caption: "The iconic selfie that captured pure joy, unfiltered laughter, and core memories together. Three souls, one heartbeat, infinite laughs. ❤️"
  };

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-pink-500/40 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-4 glow-pink">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span>Trio Featured Memory</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-4">
          Our Unforgettable <span className="text-gradient-gold">Snapshot</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          A timeless memory captured in a single frame.
        </p>
      </div>

      {/* ONE BIG FEATURED CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onClick={() => setSelectedImage(featuredMemory)}
        className="group relative rounded-[2.5rem] overflow-hidden bg-[#0a0d1a]/95 p-3.5 sm:p-5 border-2 border-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.35)] cursor-pointer transition-all duration-500 hover:shadow-[0_0_70px_rgba(236,72,153,0.55)] max-w-4xl mx-auto"
      >
        {/* Photo Container - Landscape showing all faces */}
        <div className="relative overflow-hidden rounded-[2rem] w-full bg-slate-950 shadow-2xl" style={{ height: '450px' }}>
          <img
            src={featuredMemory.image}
            alt={featuredMemory.title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-700 filter brightness-105"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />

          {/* Dark Gradient Overlay for Crisp Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a] via-[#0a0d1a]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

          {/* Top Category Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-full bg-slate-950/85 border border-white/15 text-xs font-extrabold text-pink-400 uppercase tracking-widest backdrop-blur-md shadow-xl flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse" />
            <span>{featuredMemory.category}</span>
          </div>

          {/* Top Right Expand Button Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(featuredMemory);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-slate-950/85 border border-white/20 flex items-center justify-center text-slate-200 hover:text-white hover:bg-pink-600 transition-all shadow-xl backdrop-blur-md group-hover:scale-110"
            title="Expand Memory Photo"
          >
            <Maximize2 className="w-5 h-5 text-pink-300" />
          </button>

          {/* Bottom Title & Caption */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-left">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-pink-400 mb-2 tracking-tight">
              {featuredMemory.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
              {featuredMemory.caption}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full glass-card p-4 sm:p-6 rounded-3xl border border-pink-500/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full glass-card text-white hover:text-pink-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-2xl overflow-hidden mb-4 max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              <div className="text-center sm:text-left px-2">
                <h3 className="text-2xl font-bold text-pink-400 mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-300 font-light">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
