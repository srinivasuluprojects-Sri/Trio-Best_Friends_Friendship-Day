import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SCRATCH_CARDS } from '../constants/friendshipData';
import { Wand2, Sparkles, CheckCircle2, Lock } from 'lucide-react';

export default function MemoryCardsScratch() {
  const [revealed, setRevealed] = useState({});

  const toggleReveal = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-4">
          <Wand2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Secrets</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Tap To Reveal <span className="text-gradient-purple">Secret Memories</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          Click on any card below to unwrap a hidden personal memory inside our friendship vault!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SCRATCH_CARDS.map((card, index) => {
          const isUnlocked = revealed[card.id];

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => toggleReveal(card.id)}
              className="relative h-64 rounded-3xl glass-card border border-white/15 cursor-pointer select-none overflow-hidden group shadow-2xl transition-all duration-500 hover:border-pink-500/50"
            >
              {isUnlocked ? (
                /* Unlocked State */
                <motion.div
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-slate-900/80 text-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Unlocked Memory
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  </div>

                  <p className="text-base sm:text-lg font-medium leading-relaxed italic text-pink-100 my-auto">
                    "{card.hiddenText}"
                  </p>

                  <div className="text-right text-[11px] text-slate-400">
                    Tap to lock again 🔒
                  </div>
                </motion.div>
              ) : (
                /* Locked State */
                <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-slate-900/70 backdrop-blur-xl group-hover:bg-slate-900/50 transition-colors">
                  <div className="w-14 h-14 rounded-2xl glass-card border border-pink-500/40 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform shadow-lg glow-pink">
                    <Lock className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-amber-400 font-mono tracking-wide">
                    {card.subtitle}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
