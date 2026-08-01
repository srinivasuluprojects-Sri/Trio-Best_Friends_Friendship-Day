import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Sparkles, Heart, Gift, X } from 'lucide-react';
import { MAIN_TRIO_IMAGE } from '../constants/friendshipData';

export default function QRCodeSurprise() {
  const [showModal, setShowModal] = useState(false);
  const surpriseUrl = window.location.origin + "#gift-box";

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Main Glowing Card */}
      <div className="relative glass-card p-8 sm:p-14 rounded-3xl border border-pink-500/40 text-center shadow-2xl overflow-hidden glow-pink">
        
        {/* Top Heart Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-6">
          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse" />
          <span>Exclusive Surprise</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-3">
          One Last Surprise ❤️
        </h2>

        <p className="text-slate-300 text-base sm:text-lg font-light max-w-xl mx-auto mb-10">
          Scan this QR code to unlock our special hidden memory, or click on it directly!
        </p>

        {/* Interactive Glowing QR Code Container */}
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="cursor-pointer p-6 rounded-3xl bg-slate-900/90 border-2 border-pink-500/50 shadow-2xl glow-purple relative group"
          >
            {/* QR Code SVG */}
            <div className="p-3 bg-white rounded-2xl">
              <QRCodeSVG
                value={surpriseUrl}
                size={180}
                bgColor="#FFFFFF"
                fgColor="#020617"
                level="H"
                includeMargin={false}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>Tap to Reveal Hidden Memory</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden Memory Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-lg w-full glass-card p-8 rounded-3xl border border-pink-500/50 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full glass-card text-white hover:text-pink-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white mx-auto mb-6 shadow-xl glow-pink">
                <Gift className="w-8 h-8 text-amber-300 animate-bounce-soft" />
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-3">
                Secret Memory Unlocked! ✨
              </h3>

              <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg aspect-video flex items-center justify-center bg-black">
                <img
                  src={MAIN_TRIO_IMAGE}
                  alt="Secret Memory"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                "You are truly one in a billion. Thank you for making life so vibrant, silly, warm, and beautiful every single day!"
              </p>

              <a
                href="#gift-box"
                onClick={() => setShowModal(false)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm shadow-xl glow-pink"
              >
                <span>Proceed to Gift Box 🎁</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
