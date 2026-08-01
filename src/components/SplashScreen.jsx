import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

export default function SplashScreen({ onComplete, isMuted, toggleAudio }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Smooth logarithmic progress increment
        const diff = Math.max(1, Math.floor((100 - prev) * 0.15));
        return prev + diff;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] text-white px-4 select-none overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-amber-500/20 rounded-full blur-[140px] animate-pulse" />

      {/* Floating Audio Toggle */}
      <button
        onClick={toggleAudio}
        className="absolute top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-pink-500/50 transition-all text-xs tracking-wider uppercase text-slate-300"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />}
        <span>{isMuted ? "Sound Off" : "Ambient Music On"}</span>
      </button>

      {/* Cute Floating Balloon Accents */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">🎈</div>
      <div className="absolute top-16 right-16 text-4xl animate-float">✨</div>
      <div className="absolute bottom-20 left-16 text-4xl animate-float-slow">💖</div>
      <div className="absolute bottom-12 right-12 text-4xl animate-bounce">👑</div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        
        {/* Animated Brand Emblem with Cute Doodle Accents */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 rounded-3xl glass-card flex items-center justify-center border border-pink-500/40 shadow-2xl glow-pink relative">
            <Heart className="w-12 h-12 text-pink-500 animate-bounce-soft" />
            <span className="absolute -bottom-3 -right-3 text-2xl">🎈</span>
            <span className="absolute -top-4 -left-4 text-2xl animate-bounce">💖</span>
            <span className="absolute -top-3 -right-4 text-xl">⭐</span>
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-7 h-7 text-amber-400 animate-spin-slow" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-3"
        >
          <span className="text-gradient-purple">Forever</span>{" "}
          <span className="text-gradient-gold">Best Friends</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-slate-400 text-sm sm:text-base font-light tracking-wide mb-10 max-w-md"
        >
          Preparing your handcrafted digital memory experience...
        </motion.p>

        {/* Luxury Circular Progress Ring & Percentage */}
        <div className="relative flex flex-col items-center mb-8">
          <div className="text-3xl font-display font-bold text-gradient-gold tracking-widest mb-4">
            {progress}%
          </div>

          {/* Progress Bar Container */}
          <div className="w-64 h-2 rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/50 p-[1px]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Cinematic Reveal Button when 100% */}
        {isReady ? (
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 font-semibold text-white shadow-2xl glow-pink hover:shadow-purple-500/50 transition-all duration-300"
          >
            <ShieldCheck className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span className="tracking-wide">Enter Private Experience</span>
          </motion.button>
        ) : (
          <div className="text-xs uppercase tracking-widest text-slate-500 animate-pulse">
            Loading Magic...
          </div>
        )}
      </div>

      {/* Footer Tagline */}
      <div className="absolute bottom-6 text-xs text-slate-500 tracking-widest uppercase font-medium">
        Dedicated to Trio Best Friends ❤️
      </div>
    </motion.div>
  );
}
