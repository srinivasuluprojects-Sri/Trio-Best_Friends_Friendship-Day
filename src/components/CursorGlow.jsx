import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.2;
      trailY += (mouseY - trailY) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div 
        ref={glowRef}
        className="absolute rounded-full opacity-20 blur-2xl pointer-events-none w-[220px] h-[220px] bg-gradient-to-r from-pink-500 to-purple-600 will-change-transform"
      />
      <div 
        ref={dotRef}
        className="absolute w-3.5 h-3.5 rounded-full border border-pink-400/80 bg-purple-500/50 pointer-events-none will-change-transform shadow-[0_0_10px_rgba(236,72,153,0.8)]"
      />
    </div>
  );
}
