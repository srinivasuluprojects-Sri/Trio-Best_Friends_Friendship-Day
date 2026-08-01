import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ isMuted, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reasons", href: "#reasons" },
    { name: "Secret Letter", href: "#secret-letter" },
    { name: "Certificate", href: "#certificate" },
    { name: "Gift Box", href: "#gift-box" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-3 glass-nav shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-pink-300 transition-colors">
              Trio<span className="text-gradient-gold">BestFriends</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase">Friendship Day Special</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Audio Toggle & CTA) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            title={isMuted ? "Unmute Music" : "Mute Music"}
            className="p-2.5 rounded-full glass-card hover:border-pink-500/50 transition-all text-slate-300 hover:text-white"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl glass-card text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 py-4 glass-card border-t border-white/10 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
