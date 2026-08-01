import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECRET_LETTER } from '../constants/friendshipData';
import { Mail, Heart, Sparkles, Check } from 'lucide-react';

export default function SecretLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="secret-letter" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-4">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>Personal & Private</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          The <span className="text-gradient-gold">Secret Letter</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          A personal letter written strictly for my best friend. Tap the wax seal to open.
        </p>
      </div>

      {/* Interactive Envelope Container */}
      <div className="flex flex-col items-center">
        {!isOpen ? (
          /* Sealed Envelope View */
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            className="w-full max-w-lg cursor-pointer rounded-3xl glass-card p-8 sm:p-12 border-2 border-amber-400/40 text-center relative overflow-hidden shadow-2xl glow-gold group"
          >
            {/* Stamp Badge */}
            <div className="absolute top-6 right-6 w-16 h-20 border-2 border-amber-400/50 rounded-lg p-2 flex flex-col items-center justify-center bg-amber-500/10 rotate-6">
              <Heart className="w-6 h-6 text-amber-400 fill-amber-400 mb-1" />
              <span className="text-[9px] font-mono font-bold text-amber-300">TRIO SEAL</span>
            </div>

            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest uppercase text-amber-300 block mb-2">
                Confidential Memory Envelope
              </span>
              <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                For My Favorite Person ❤️
              </h3>
            </div>

            {/* Wax Seal Center Button */}
            <div className="relative inline-flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 via-red-600 to-pink-600 border-4 border-amber-300 flex items-center justify-center shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                <Heart className="w-9 h-9 text-amber-100 fill-amber-100" />
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono tracking-wider mt-8">
              ✨ Click Wax Seal to Open Letter ✨
            </p>
          </motion.div>
        ) : (
          /* Opened Luxury Parchment Letter */
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full glass-card p-8 sm:p-14 rounded-3xl border border-amber-300/40 shadow-2xl text-slate-100 relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617]"
          >
            {/* Top Close / Re-seal */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-widest">
                {SECRET_LETTER.date}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 rounded-full glass-card text-xs text-slate-300 hover:text-white transition-all"
              >
                Close Envelope ✉️
              </button>
            </div>

            {/* Letter Body */}
            <div className="space-y-6 text-left">
              <h3 className="font-handwriting text-3xl sm:text-4xl text-amber-300 font-bold">
                {SECRET_LETTER.recipient}
              </h3>

              {SECRET_LETTER.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-slate-200 font-sans font-light leading-relaxed tracking-wide"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400 italic mb-2">
                  {SECRET_LETTER.signoff}
                </p>
                <p className="font-handwriting text-3xl text-gradient-gold font-bold">
                  {SECRET_LETTER.sender}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
