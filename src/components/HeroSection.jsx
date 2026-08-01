import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA, TRIO_IMAGE_1 } from '../constants/friendshipData';
import { Heart, Sparkles, ArrowDown, Stars, Gift } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/30 rounded-full blur-[130px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/25 rounded-full blur-[150px] animate-float" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-pink-500/40 text-xs sm:text-sm font-medium text-pink-300 mb-8 shadow-xl glow-pink"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>{HERO_DATA.badge}</span>
        </motion.div>

        {/* Main Grand Typography */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.08] mb-6"
        >
          <span className="block text-white">Happy</span>
          <span className="text-gradient-purple block my-1">Friendship Day</span>
          <span className="text-gradient-gold block font-serif italic text-4xl sm:text-6xl lg:text-7xl font-bold mt-2">
            To My Favorite Human ❤️
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* Hero Photo - FULL LANDSCAPE DISPLAY */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative group mb-12 w-full max-w-2xl"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 opacity-60 blur-md group-hover:opacity-90 transition-opacity" />
          
          {/* Card */}
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/20 shadow-2xl">
            {/* Image container — fixed height, image centered */}
            <div className="relative w-full overflow-hidden" style={{ height: '380px' }}>
              <img
                src={TRIO_IMAGE_1}
                alt="Trio Best Friends"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 40%',
                }}
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/20 to-transparent" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-[11px] font-semibold text-pink-200 uppercase tracking-widest mb-2 backdrop-blur-md">
                  Trio Soulmates
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Forever Memories Locked Together
                </h3>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -top-5 -right-5 w-14 h-14 rounded-2xl glass-card border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-xl animate-float z-10">
            <Stars className="w-7 h-7" />
          </div>
          <div className="absolute -bottom-5 -left-5 w-14 h-14 rounded-2xl glass-card border border-pink-400/40 flex items-center justify-center text-pink-400 shadow-xl animate-float-slow z-10">
            <Heart className="w-7 h-7 fill-pink-500" />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#story"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 font-semibold text-white text-base tracking-wide shadow-2xl glow-pink hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Gift className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>{HERO_DATA.cta}</span>
          </a>

          <a
            href="#secret-letter"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-card hover:bg-white/10 text-slate-200 text-base font-medium transition-all"
          >
            <span>Read Secret Letter 💌</span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 text-xs tracking-widest uppercase animate-bounce-soft">
        <span className="mb-1">Scroll to Explore</span>
        <ArrowDown className="w-4 h-4 text-pink-400" />
      </div>
    </section>
  );
}
