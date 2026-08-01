import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FRIENDSHIP_QUOTES } from '../constants/friendshipData';
import { Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function QuotesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FRIENDSHIP_QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FRIENDSHIP_QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FRIENDSHIP_QUOTES.length) % FRIENDSHIP_QUOTES.length);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="relative glass-card p-8 sm:p-14 rounded-3xl border border-pink-500/30 text-center shadow-2xl overflow-hidden glow-purple">
        
        {/* Background Quote Watermark */}
        <Quote className="absolute -top-6 -left-6 w-40 h-40 text-purple-600/10 pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-8">
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            <span>Words of Wisdom</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-3xl font-serif italic text-white leading-relaxed font-semibold max-w-3xl mx-auto">
                "{FRIENDSHIP_QUOTES[currentIndex].quote}"
              </p>

              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-gradient-gold tracking-wide">
                  {FRIENDSHIP_QUOTES[currentIndex].author}
                </span>
                <span className="text-xs text-slate-400 font-mono mt-0.5">
                  #{FRIENDSHIP_QUOTES[currentIndex].tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots & Controls */}
          <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full glass-card hover:border-pink-500/50 text-slate-300 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {FRIENDSHIP_QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-pink-500 shadow-md' : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full glass-card hover:border-pink-500/50 text-slate-300 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
