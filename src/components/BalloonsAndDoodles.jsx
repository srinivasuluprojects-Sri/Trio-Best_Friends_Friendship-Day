import React from 'react';

export default function BalloonsAndDoodles() {
  const balloons = [
    { id: 1, color: 'from-pink-500 via-rose-500 to-pink-400', left: '6%', animDelay: '0s', duration: '14s' },
    { id: 2, color: 'from-purple-600 via-indigo-500 to-pink-500', left: '22%', animDelay: '4s', duration: '18s' },
    { id: 3, color: 'from-amber-400 via-yellow-400 to-amber-500', left: '78%', animDelay: '1s', duration: '15s' },
    { id: 4, color: 'from-cyan-400 via-blue-500 to-indigo-500', left: '90%', animDelay: '5s', duration: '17s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-50">
      {/* Lightweight Hardware-Accelerated Floating Balloons */}
      {balloons.map((b) => (
        <div
          key={b.id}
          style={{
            left: b.left,
            animationDuration: b.duration,
            animationDelay: b.animDelay,
          }}
          className="absolute bottom-0 flex flex-col items-center animate-float-slow will-change-transform"
        >
          {/* Balloon Glossy Oval */}
          <div className={`w-12 h-16 sm:w-14 sm:h-18 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-gradient-to-tr ${b.color} shadow-lg relative`}>
            <div className="absolute top-2 left-2.5 w-3 h-5 rounded-full bg-white/40 rotate-[-30deg]" />
          </div>
          {/* Knot & String */}
          <div className={`w-2 h-1.5 bg-gradient-to-tr ${b.color} rounded-sm`} />
          <div className="w-0.5 h-12 bg-pink-300/40" />
        </div>
      ))}
    </div>
  );
}
