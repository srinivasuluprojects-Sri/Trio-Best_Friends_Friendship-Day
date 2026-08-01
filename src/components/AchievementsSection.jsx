import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants/friendshipData';
import { Trophy, Smile, Shield, HeartHandshake, Sparkles } from 'lucide-react';

const iconMap = {
  Smile: Smile,
  Shield: Shield,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles
};

export default function AchievementsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-400/30 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Friendship Badges</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Unlocked <span className="text-gradient-gold">Achievements</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          Milestones unlocked throughout our journey together as best friends.
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Trophy;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-400/50 shadow-xl text-center flex flex-col items-center group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-purple-600/30 to-pink-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-4 group-hover:rotate-6 transition-transform shadow-lg glow-gold">
                <IconComponent className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>

              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-slate-400 mb-4 font-light">
                {item.subtitle}
              </p>

              <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden border border-slate-700/50 mb-3">
                <div
                  className="bg-gradient-to-r from-amber-400 to-pink-500 h-full rounded-full"
                  style={{ width: item.progress }}
                />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                {item.status}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
