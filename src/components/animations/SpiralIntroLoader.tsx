import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

interface SpiralIntroLoaderProps {
  onComplete?: () => void;
}

export const SpiralIntroLoader: React.FC<SpiralIntroLoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user already saw intro this session to keep repeated navigations instant
    const hasSeenIntro = sessionStorage.getItem('sandbox_spiral_seen');
    if (hasSeenIntro) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    sound.playClick();

    // Fast cinematic count-up (0% -> 100% in 1.3s)
    const startTime = Date.now();
    const duration = 1300;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedPercent = Math.round(progress * 100);
      setPercent(easedPercent);

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('sandbox_spiral_seen', 'true');
          setIsFinished(true);
          sound.playVerified();
          if (onComplete) onComplete();
        }, 250);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('sandbox_spiral_seen', 'true');
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.8,
            filter: 'blur(20px)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center cursor-pointer overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute inset-0 bg-radial from-[#d9ba84]/15 via-black to-black pointer-events-none" />

          {/* 3D Spinning Golden Spiral SVG Geometry */}
          <div className="relative size-72 sm:size-96 flex items-center justify-center">
            
            {/* Outer Swirling Fibonacci Spiral Path */}
            <motion.svg
              viewBox="-200 -200 400 400"
              className="absolute inset-0 size-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            >
              <defs>
                <linearGradient id="spiralGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="35%" stopColor="#d9ba84" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#c8542f" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>
                <filter id="spiralGlow">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Fibonacci Logarithmic Spiral Arms */}
              {[0, 120, 240].map((rot, idx) => (
                <g key={idx} transform={`rotate(${rot})`}>
                  <path
                    d="M 0,0 
                       C 5,-10 15,-15 25,-10 
                       C 40,-5 50,15 45,35 
                       C 38,65 10,85 -20,80 
                       C -60,75 -95,35 -90,-10 
                       C -85,-65 -35,-115 20,-115 
                       C 85,-115 145,-55 145,15
                       C 145,95 75,165 -15,170"
                    fill="none"
                    stroke="url(#spiralGold)"
                    strokeWidth={idx === 0 ? "2" : "1.2"}
                    strokeDasharray="400"
                    strokeDashoffset={400 - (percent / 100) * 400}
                    filter="url(#spiralGlow)"
                  />
                </g>
              ))}

              {/* Orbital Concentric Ring Pulses */}
              <circle
                cx="0"
                cy="0"
                r="60"
                fill="none"
                stroke="rgba(217, 186, 132, 0.25)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx="0"
                cy="0"
                r="110"
                fill="none"
                stroke="rgba(217, 186, 132, 0.15)"
                strokeWidth="1"
              />
            </motion.svg>

            {/* Inner Spiral Iris Ring (Counter-rotating) */}
            <motion.div
              animate={{ rotate: -360, scale: [0.85, 1.05, 0.85] }}
              transition={{
                rotate: { repeat: Infinity, duration: 6, ease: 'linear' },
                scale: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
              }}
              className="size-24 rounded-full border border-[#d9ba84]/40 flex items-center justify-center shadow-[0_0_30px_rgba(217,186,132,0.3)] backdrop-blur-sm"
            >
              <div className="size-10 rounded-full bg-gradient-to-br from-[#ffffff] to-[#d9ba84] shadow-[0_0_20px_#d9ba84] animate-pulse" />
            </motion.div>
          </div>

          {/* Telemetry Decode & Progress Text */}
          <div className="text-center font-mono-code space-y-3 relative z-10 -mt-6">
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-widest">
              {percent.toString().padStart(2, '0')}%
            </div>
            
            <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-[#d9ba84] uppercase tracking-[0.25em] font-mono">
              <span>INITIALIZING AI AGENT FIREWALL RUNTIME</span>
            </div>

            <div className="text-[10px] text-zinc-600 uppercase tracking-widest pt-1">
              CLICK ANYWHERE TO SKIP
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
