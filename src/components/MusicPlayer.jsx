import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc, Music } from 'lucide-react';

const STORAGE_KEY = 'trio_music_time';

export default function MusicPlayer({ isPlaying, setIsPlaying, isMuted, setIsMuted }) {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTimeText, setCurrentTimeText] = useState('0:00');
  const [durationText, setDurationText] = useState('0:00');

  // Format seconds to M:SS
  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '0:00';
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // ── Restore saved playback position when audio is ready ──
    const handleLoadedMetadata = () => {
      setDurationText(formatTime(audio.duration));
      const savedTime = parseFloat(localStorage.getItem(STORAGE_KEY) || '0');
      if (savedTime > 0 && savedTime < audio.duration) {
        audio.currentTime = savedTime;
      }
    };

    // ── Save position every second while playing ──
    const handleTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTimeText(formatTime(audio.currentTime));
      setDurationText(formatTime(audio.duration));
      localStorage.setItem(STORAGE_KEY, String(audio.currentTime));
    };

    // ── Flush position to localStorage instantly on page close / refresh ──
    const handleBeforeUnload = () => {
      localStorage.setItem(STORAGE_KEY, String(audio.currentTime));
    };

    // ── Loop: restart from 0 when track ends ──
    const handleEnded = () => {
      audio.currentTime = 0;
      localStorage.setItem(STORAGE_KEY, '0');
      audio.play();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    // ── If metadata is already cached (instant reload), restore immediately ──
    if (audio.readyState >= 1) {
      handleLoadedMetadata();
    }

    // ── Autoplay on first user interaction (browser policy bypass) ──
    const tryAutoplay = () => {
      if (audio.paused && !isMuted) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      window.removeEventListener('click', tryAutoplay);
      window.removeEventListener('keydown', tryAutoplay);
      window.removeEventListener('touchstart', tryAutoplay);
    };

    window.addEventListener('click', tryAutoplay, { once: true });
    window.addEventListener('keydown', tryAutoplay, { once: true });
    window.addEventListener('touchstart', tryAutoplay, { once: true });

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
    };
  }, []);

  // Sync play / pause state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying && !isMuted) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, isMuted]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsMuted(false);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
    audio.currentTime = newTime;
    localStorage.setItem(STORAGE_KEY, String(newTime));
    setProgress(e.target.value);
  };

  return (
    <>
      {/* HTML5 Audio Element */}
      <audio ref={audioRef} src="/Anuvanuvu.mp3" preload="auto" />

      {/* Luxury Mini Floating Music Player Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3.5 p-3 rounded-full glass-card border border-pink-500/40 shadow-2xl backdrop-blur-xl group hover:border-pink-400 transition-all duration-300">
        
        {/* Spinning Disc */}
        <div
          onClick={togglePlay}
          className={`w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-400 flex items-center justify-center text-white shadow-lg cursor-pointer transition-transform hover:scale-105 ${
            isPlaying && !isMuted ? 'animate-spin-slow glow-pink' : ''
          }`}
        >
          <Disc className="w-5 h-5 text-amber-200" />
        </div>

        {/* Track Info & Timeline */}
        <div className="hidden sm:flex flex-col pr-1 min-w-[160px]">
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide truncate max-w-[140px]">Anuvanuvu</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-pink-300 font-mono mt-0.5">
            <span>Special Friendship Song</span>
            <span>{currentTimeText}</span>
          </div>
          {/* Seek Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 mt-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
        </div>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 hover:text-white hover:bg-pink-500/40 transition-all shadow-md"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying && !isMuted ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 fill-pink-300" />
          )}
        </button>

        {/* Mute Toggle */}
        <button
          onClick={() => {
            if (isMuted) { setIsMuted(false); setIsPlaying(true); }
            else { setIsMuted(true); setIsPlaying(false); }
          }}
          className="hidden sm:flex p-2.5 rounded-full glass-card text-slate-300 hover:text-white transition-all"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted
            ? <VolumeX className="w-4 h-4 text-slate-400" />
            : <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
          }
        </button>
      </div>
    </>
  );
}
