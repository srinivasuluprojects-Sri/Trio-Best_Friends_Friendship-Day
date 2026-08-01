import React from 'react';
import { MAIN_TRIO_IMAGE } from '../constants/friendshipData';
import { Heart, Sparkles } from 'lucide-react';

export default function MemoryMarquee() {
  const polaroids = [
    { title: "Trio Hanging Out", date: "Forever Moment", rot: "-rotate-3" },
    { title: "Laughter Unlimited", date: "Unfiltered Smiles", rot: "rotate-2" },
    { title: "Crazy Buddies", date: "Core Memories", rot: "-rotate-2" },
    { title: "Soul Connections", date: "Unbreakable Bond", rot: "rotate-3" },
    { title: "Best Chapter of Life", date: "Always Together", rot: "-rotate-1" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40 border-y border-white/10">
      
      <div className="text-center mb-10">
        <h3 className="text-sm font-mono uppercase tracking-widest text-amber-400 font-bold">
          ✨ Memory Polaroid Wall ✨
        </h3>
      </div>

      {/* Marquee Strip */}
      <div className="flex gap-6 overflow-hidden select-none no-scrollbar py-4">
        <div className="flex gap-8 animate-[shimmer_25s_linear_infinite] shrink-0">
          {[...polaroids, ...polaroids, ...polaroids].map((item, idx) => (
            <div
              key={idx}
              className={`w-64 p-4 rounded-xl bg-slate-100 text-slate-900 shadow-2xl transition-transform duration-300 hover:scale-105 ${item.rot} relative`}
            >
              {/* Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-200/60 backdrop-blur-sm rotate-2 shadow-sm border border-amber-300/40" />

              <div className="w-full h-56 rounded-lg overflow-hidden mb-3 bg-slate-900 flex items-center justify-center">
                <img
                  src={MAIN_TRIO_IMAGE}
                  alt={item.title}
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>

              <div className="text-center">
                <h4 className="font-handwriting text-2xl text-slate-800 font-bold leading-tight">
                  {item.title}
                </h4>
                <div className="flex items-center justify-center gap-1 text-[11px] text-pink-600 font-medium mt-1">
                  <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
