import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGIN_CREDENTIALS } from '../constants/friendshipData';
import { Lock, User, Sparkles, KeyRound, ArrowRight, AlertCircle, Heart } from 'lucide-react';

export default function LoginScreen({ onLoginSuccess }) {
  // Credentials prefilled as requested
  const [username, setUsername] = useState(LOGIN_CREDENTIALS.username);
  const [password, setPassword] = useState(LOGIN_CREDENTIALS.password);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (username.trim() === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError("Invalid Passcode! Please use Trio_BEST_Friends & Forever_Friends");
      }
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#020617] px-4 overflow-hidden"
    >
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/30 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600/25 rounded-full blur-[150px] animate-float-slow" />

      {/* Cute Floating Balloon & Doodle Accents */}
      <div className="absolute top-12 left-12 text-4xl animate-bounce">🎈</div>
      <div className="absolute top-20 right-14 text-4xl animate-float">✨</div>
      <div className="absolute bottom-20 left-16 text-4xl animate-float-slow">💖</div>
      <div className="absolute bottom-14 right-16 text-4xl animate-bounce">👑</div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl glass-card border border-white/15 shadow-2xl backdrop-blur-2xl">
        
        {/* Floating Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold tracking-wider text-pink-300 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Private Surprise Access 🎈✨</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-2">
            Welcome, <span className="text-gradient-gold">Bestie ❤️</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Your credentials have been auto-filled for instant entry.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Input */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-slate-400 font-medium ml-1">
              Username
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-4 w-5 h-5 text-purple-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all font-mono text-sm"
                placeholder="Enter Username"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-slate-400 font-medium ml-1">
              Passcode
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-pink-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all font-mono text-sm"
                placeholder="Enter Passcode"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-white transition-colors"
              >
                <KeyRound className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            type="submit"
            className="w-full relative group overflow-hidden py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-sm tracking-wide shadow-xl glow-purple hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Unlock Memory Universe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </form>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <span>Protected with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" />
          <span>Only for Trio Best Friends</span>
        </div>
      </div>
    </motion.div>
  );
}
