import React from 'react';
import { motion } from 'framer-motion';
import { REASONS_AMAZING } from '../constants/friendshipData';
import { Home, Zap, Sun, Bookmark, Award, Lock, Sparkles, Heart } from 'lucide-react';

const iconMap = {
  Home: Home,
  Zap: Zap,
  Sun: Sun,
  Bookmark: Bookmark,
  Award: Award,
  Lock: Lock
};

export default function ReasonsSection() {
  return (
    <section id="reasons" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-400/30 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Infinite Appreciation</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Why You Are <span className="text-gradient-gold">So Amazing</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          Here are just a few of the million reasons why having you as my best friend is the greatest blessing ever.
        </p>
      </div>

      {/* Grid of Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REASONS_AMAZING.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Heart;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-3xl border border-white/15 hover:border-amber-400/50 shadow-2xl relative overflow-hidden group transition-all duration-300"
            >
              {/* Top Accent Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-500/30 border border-purple-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform shadow-lg">
                  <IconComponent className="w-7 h-7 text-amber-400" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-pink-400 uppercase">
                  {item.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {item.description}
              </p>

              {/* Subtle Glowing Corner */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/25 transition-all" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
