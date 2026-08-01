import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRIO_IMAGE_1, TRIO_IMAGE_2 } from '../constants/friendshipData';
import { Book, ChevronLeft, ChevronRight, Bookmark, Heart, Sparkles } from 'lucide-react';

export default function MemoryBook() {
  const pages = [
    {
      pageNo: 1,
      title: "Our Trio Story Begins",
      subtitle: "Madhavi, Meena Kumari & Meenakshi",
      text: "Three beautiful souls — Madhavi, Meena Kumari & Meenakshi — who found each other and made every ordinary day feel extraordinary.",
      quote: "Friendship isn't a big thing, it's a million little things.",
      image: TRIO_IMAGE_1
    },
    {
      pageNo: 2,
      title: "Food Court Memories",
      subtitle: "Laughs, Food & Crazy Vibes",
      text: "No matter where we go — the food court, a random plan or a silly selfie session — we always turn every moment into a core memory.",
      quote: "Laughter is brightest where food & friends are best!",
      image: TRIO_IMAGE_2
    },
    {
      pageNo: 3,
      title: "Our Unbreakable Bond",
      subtitle: "Always There For Each Other",
      text: "Through every high and low — Madhavi's warmth, Meena Kumari's humor, and Meenakshi's gentle love — we have always held each other together.",
      quote: "Some souls just understand each other instantly.",
      image: TRIO_IMAGE_1
    },
    {
      pageNo: 4,
      title: "Forever Trio",
      subtitle: "Beyond Time & Distance",
      text: "Life will change, years will pass, but what Madhavi, Meena Kumari & Meenakshi share is permanent. Forever Trio Best Friends ❤️",
      quote: "True best friends are the family you choose forever.",
      image: TRIO_IMAGE_2
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-4">
          <Book className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Digital Memory Book</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Flip Through <span className="text-gradient-gold">Our Book</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          Use the navigation buttons below to flip through the chapters of our friendship book.
        </p>
      </div>

      {/* Book Frame */}
      <div className="relative glass-card p-6 sm:p-12 rounded-3xl border border-amber-400/30 shadow-2xl overflow-hidden glow-gold">
        
        {/* Bookmark Tag */}
        <div className="absolute top-0 right-10 w-10 h-16 bg-gradient-to-b from-pink-500 to-purple-600 rounded-b-lg flex items-center justify-center shadow-lg">
          <Bookmark className="w-5 h-5 text-amber-200 fill-amber-200" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="space-y-8"
          >
            {/* Landscape Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-white/10 shadow-xl w-full" style={{ aspectRatio: '16/7' }}>
              <img
                src={pages[currentPage].image}
                alt="Memory Book Page"
                className="w-full h-full object-cover rounded-xl filter brightness-105"
                style={{ objectPosition: 'center 40%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs text-amber-300 font-mono">
                  ✨ Page {pages[currentPage].pageNo} of {pages.length}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 text-xs text-pink-300 font-semibold uppercase tracking-wider">
                  {pages[currentPage].subtitle}
                </span>
              </div>
            </div>

            {/* Text & Chapter below */}
            <div className="space-y-4 text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-display font-bold text-white leading-tight">
                {pages[currentPage].title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                {pages[currentPage].text}
              </p>

              <blockquote className="p-4 rounded-xl bg-purple-900/20 border-l-4 border-amber-400 text-amber-200 font-serif italic text-sm text-left">
                "{pages[currentPage].quote}"
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Page Flip Buttons */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:border-pink-500/50 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all text-xs font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            {currentPage + 1} / {pages.length}
          </span>

          <button
            disabled={currentPage === pages.length - 1}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:border-pink-500/50 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all text-xs font-medium"
          >
            <span>Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
