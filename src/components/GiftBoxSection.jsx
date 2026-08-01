import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FINAL_MESSAGE } from '../constants/friendshipData';
import { Gift, Sparkles, Heart, Crown, Stars } from 'lucide-react';
import FireworksCanvas from './FireworksCanvas';

export default function GiftBoxSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);
    setShowFireworks(true);

    // Launch Confetti Explosion
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#EC4899', '#9333EA', '#FFD700', '#38BDF8']
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);
    } catch(e){}
  };

  return (
    <section id="gift-box" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      {/* Canvas Fireworks Background when opened */}
      <FireworksCanvas active={showFireworks} />

      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-400/30 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4">
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>The Grand Finale</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Unwrap Your <span className="text-gradient-gold">Final Gift</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          Tap the 3D gift box to unwrap the ribbon and unleash the fireworks!
        </p>
      </div>

      {/* 3D Interactive Gift Box */}
      <div className="relative z-20 flex flex-col items-center">
        {!isOpen ? (
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenGift}
            className="cursor-pointer group relative"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-400 rounded-3xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse-glow" />

            {/* 3D Gift Box Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl glass-card border-2 border-amber-400/60 p-8 flex flex-col items-center justify-center shadow-2xl glow-gold">
              
              {/* Ribbon Graphic */}
              <div className="absolute inset-y-0 w-10 bg-gradient-to-b from-pink-500 via-purple-600 to-pink-500 rounded-sm shadow-md" />
              <div className="absolute inset-x-0 h-10 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-sm shadow-md" />

              {/* Gift Ribbon Bow */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center shadow-2xl border-2 border-white group-hover:scale-110 transition-transform">
                <Gift className="w-10 h-10 text-white animate-bounce-soft" />
              </div>

              <span className="relative z-10 mt-6 text-xs font-mono font-bold text-amber-300 uppercase tracking-widest bg-slate-900/80 px-4 py-1.5 rounded-full border border-amber-400/40">
                ✨ Tap to Open Gift Box ✨
              </span>
            </div>
          </motion.div>
        ) : (
          /* Revealed Final Thank You Card */
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full glass-card p-8 sm:p-16 rounded-3xl border-2 border-pink-500/50 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617] glow-pink"
          >
            {/* Top Crown Emblem */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 border-2 border-amber-300 flex items-center justify-center text-white mx-auto mb-8 shadow-2xl glow-gold animate-bounce-soft">
              <Crown className="w-10 h-10 text-amber-100" />
            </div>

            {/* Title */}
            <h3 className="text-4xl sm:text-6xl font-display font-extrabold text-gradient-gold mb-8 tracking-tight">
              {FINAL_MESSAGE.title}
            </h3>

            {/* Exact Requested Message Lines */}
            <div className="space-y-4 max-w-2xl mx-auto mb-10">
              {FINAL_MESSAGE.lines.map((line, idx) => (
                <p
                  key={idx}
                  className={`text-lg sm:text-2xl font-serif leading-relaxed ${
                    idx === FINAL_MESSAGE.lines.length - 1
                      ? 'text-pink-400 font-bold text-2xl sm:text-3xl font-handwriting mt-6'
                      : 'text-slate-200 font-medium'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

          </motion.div>
        )}
      </div>
    </section>
  );
}
