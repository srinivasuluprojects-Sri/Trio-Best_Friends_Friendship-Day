import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import CursorGlow from './components/CursorGlow';
import BackgroundAurora from './components/BackgroundAurora';
import BalloonsAndDoodles from './components/BalloonsAndDoodles';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StoryTimeline from './components/StoryTimeline';
import MemoryGallery from './components/MemoryGallery';
import ReasonsSection from './components/ReasonsSection';
import QuotesCarousel from './components/QuotesCarousel';
import MemoryCardsScratch from './components/MemoryCardsScratch';
import SecretLetter from './components/SecretLetter';
import AchievementsSection from './components/AchievementsSection';
import CertificateSection from './components/CertificateSection';
import GiftBoxSection from './components/GiftBoxSection';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [currentStep, setCurrentStep] = useState('splash'); // 'splash' | 'login' | 'experience'
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true); // Autoplay true by default

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    setIsPlayingMusic(!isPlayingMusic);
  };

  const handleSplashComplete = () => {
    setCurrentStep('login');
    setIsPlayingMusic(true);
  };

  const handleLoginSuccess = () => {
    setCurrentStep('experience');
    setIsPlayingMusic(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0B132B] text-white selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
      {/* Custom Glow Cursor */}
      <CursorGlow />

      {/* Ambient Aurora Background */}
      <BackgroundAurora />

      {/* Floating Cute Balloons & Hand-drawn Doodles */}
      <BalloonsAndDoodles />

      {/* Global Music Player (Plays Anuvanuvu.mp3 continuously across all screens & refreshes) */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      {/* State Orchestration */}
      <AnimatePresence mode="wait">
        {currentStep === 'splash' && (
          <SplashScreen
            key="splash"
            onComplete={handleSplashComplete}
            isMuted={isMuted}
            toggleAudio={toggleAudio}
          />
        )}

        {currentStep === 'login' && (
          <LoginScreen
            key="login"
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </AnimatePresence>

      {/* Main Experience */}
      {currentStep === 'experience' && (
        <div className="relative z-10">
          <Navbar isMuted={isMuted} toggleAudio={toggleAudio} />

          <main className="space-y-12">
            <HeroSection />
            <StoryTimeline />
            <MemoryGallery />
            <ReasonsSection />
            <QuotesCarousel />
            <MemoryCardsScratch />
            <SecretLetter />
            <AchievementsSection />
            <CertificateSection />
            <GiftBoxSection />
          </main>

          {/* Footer */}
          <footer className="py-12 px-4 border-t border-white/10 text-center text-xs text-slate-500 font-mono tracking-widest uppercase">
            <p>Crafted with Endless Love for Trio Best Friends ❤️</p>
            <p className="mt-1 text-slate-600">Forever Best Friends • Friendship Day Special</p>
          </footer>
        </div>
      )}
    </div>
  );
}
