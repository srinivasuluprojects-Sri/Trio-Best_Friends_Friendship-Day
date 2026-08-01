import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Award, Download, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export default function CertificateSection() {
  const certificateRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#020617',
        useCORS: true
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Official-Best-Friend-Certificate.png';
      link.click();
    } catch (err) {
      console.error("Certificate download error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="certificate" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-400/30 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Official Recognition</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Friendship <span className="text-gradient-gold">Certificate</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light">
          An official royal certificate honoring you as the world's greatest best friend.
        </p>
      </div>

      {/* Certificate Frame */}
      <div className="flex flex-col items-center">
        <div
          ref={certificateRef}
          className="w-full max-w-3xl glass-card p-8 sm:p-14 rounded-3xl border-4 border-amber-400/50 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617] text-center gold-border-frame"
        >
          {/* Top Decorative Header */}
          <div className="flex items-center justify-between border-b border-amber-400/30 pb-6 mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 tracking-widest uppercase">
                OFFICIAL CERTIFICATE OF FRIENDSHIP
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">NO. 001-TRIO</span>
          </div>

          {/* Main Title */}
          <h3 className="text-3xl sm:text-5xl font-serif italic text-gradient-gold font-bold mb-4">
            Best Friend of the Lifetime
          </h3>

          <p className="text-slate-300 text-sm sm:text-base font-light mb-8">
            This official certificate is proudly presented to
          </p>

          {/* Recipient Name */}
          <div className="my-6">
            <h4 className="text-4xl sm:text-6xl font-handwriting text-pink-400 font-bold tracking-wide">
              Trio Best Friends ❤️
            </h4>
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
          </div>

          {/* Description Body */}
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed mb-10">
            For infinite loyalty, non-stop laughter, listening to 3 AM secrets, keeping every promise, and remaining the most amazing safe place on Earth.
          </p>

          {/* Signatures & Seal Footer */}
          <div className="grid grid-cols-2 gap-8 border-t border-amber-400/30 pt-8 items-end">
            {/* Left Signature */}
            <div className="text-center">
              <div className="font-handwriting text-2xl text-amber-300 font-bold mb-1">
                Forever Bestie ✨
              </div>
              <div className="w-32 h-0.5 bg-amber-400/40 mx-auto mb-1" />
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Authorized Signature
              </span>
            </div>

            {/* Right Stamp Seal */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-amber-400 bg-amber-500/10 flex items-center justify-center text-amber-300 shadow-xl mb-1 glow-gold">
                <ShieldCheck className="w-8 h-8 text-amber-400" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Lifetime Verified
              </span>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="mt-8 group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-purple-600 font-semibold text-white text-sm tracking-wide shadow-2xl glow-gold hover:shadow-amber-500/50 transition-all duration-300"
        >
          {isDownloading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Download className="w-5 h-5 text-amber-200 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Official Certificate (PNG)</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
