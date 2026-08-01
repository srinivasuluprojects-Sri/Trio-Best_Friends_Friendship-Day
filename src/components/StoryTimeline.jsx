import React from 'react';
import { motion } from 'framer-motion';
import { STORY_TIMELINE } from '../constants/friendshipData';
import { Sparkles, Heart, Camera, ShieldCheck, Crown, BookOpen } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Camera: Camera,
  ShieldCheck: ShieldCheck,
  Crown: Crown
};

export default function StoryTimeline() {
  return (
    <section id="story" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Our Friendship Chapter</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Every Moment <span className="text-gradient-purple">Tells A Story</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
          From our very first encounter to building an unbreakable lifelong bond, here is a glimpse into the magical journey of our friendship.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Glowing Central Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-600 via-pink-500 to-amber-400 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)]" />

        <div className="space-y-16">
          {STORY_TIMELINE.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full glass-card border-2 border-pink-500 flex items-center justify-center text-pink-400 shadow-xl glow-pink">
                  <IconComponent className="w-5 h-5 animate-pulse" />
                </div>

                {/* Timeline Card Content */}
                <div className={`w-full sm:w-[45%] pl-14 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}`}>
                  <div className="glass-card-interactive p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                    
                    {/* Top Tag & Chapter */}
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'sm:justify-end' : ''}`}>
                      <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                        {item.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-semibold text-purple-300">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs text-pink-400 font-medium tracking-wide mb-4">
                      {item.date}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
