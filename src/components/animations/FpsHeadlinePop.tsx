import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

interface Statement {
  id: string;
  kicker: string;
  prefix: string;
  highlight: string;
  suffix: string;
  tag: string;
}

const STATEMENTS: Statement[] = [
  {
    id: 'runtime',
    kicker: 'We provide',
    prefix: 'Deterministic runtime defense and',
    highlight: 'autonomous agent containment',
    suffix: 'at the device syscall hook.',
    tag: '01 / RUNTIME DEFENSE',
  },
  {
    id: 'intercept',
    kicker: 'We intercept',
    prefix: 'Hostile tool calls,',
    highlight: 'indirect prompt injections',
    suffix: 'and outbound DNS exfiltration.',
    tag: '02 / ZERO TRUST',
  },
  {
    id: 'govern',
    kicker: 'We govern',
    prefix: 'Real-time terminal execution for',
    highlight: 'Claude Code, Cursor & Cline',
    suffix: 'before kernel dispatch.',
    tag: '03 / KERNEL BOUNDARY',
  },
  {
    id: 'enforce',
    kicker: 'We enforce',
    prefix: 'Sub-millisecond interception with',
    highlight: 'cryptographic audit proofs',
    suffix: 'for SOC 2 Type II compliance.',
    tag: '04 / FORENSIC PROOF',
  },
];

// Single word component with smooth kinetic aperture bloom & blur deceleration
interface AnimatedWordProps {
  word: string;
  index: number;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)', scale: 0.95 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.028,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="inline-block mr-[0.26em] text-white text-crisp will-change-transform"
    >
      {word}
    </motion.span>
  );
};

export const FpsHeadlinePop: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeStatement = STATEMENTS[currentIndex];
  const timerRef = useRef<number | null>(null);

  // Auto-cycle timer with progress bar (6.5 seconds per statement)
  useEffect(() => {
    setProgress(0);
    const intervalTime = 6500;
    const stepTime = 50;
    let elapsed = 0;

    timerRef.current = window.setInterval(() => {
      if (isPaused) return;

      elapsed += stepTime;
      setProgress((elapsed / intervalTime) * 100);

      if (elapsed >= intervalTime) {
        elapsed = 0;
        setCurrentIndex((prev) => (prev + 1) % STATEMENTS.length);
        if (typeof sound.playScramble === 'function') {
          sound.playScramble();
        } else {
          sound.playClick();
        }
      }
    }, stepTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const selectStatement = (idx: number) => {
    sound.playClick();
    if (typeof sound.playScramble === 'function') sound.playScramble();
    setCurrentIndex(idx);
  };

  const nextStatement = () => {
    sound.playClick();
    if (typeof sound.playScramble === 'function') sound.playScramble();
    setCurrentIndex((prev) => (prev + 1) % STATEMENTS.length);
  };

  const prefixWords = activeStatement.prefix.split(' ');
  const suffixWords = activeStatement.suffix.split(' ');

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full flex flex-col items-start md:items-end text-left md:text-right space-y-5 select-none"
    >
      {/* 60fps Tactical Meta Selector Pills */}
      <div className="flex flex-wrap items-center gap-1.5 font-mono-code text-[10px] uppercase tracking-wider">
        {STATEMENTS.map((st, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={st.id}
              onClick={() => selectStatement(idx)}
              data-cursor="SELECT"
              className={`px-3 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'border-[#d9ba84] bg-white/10 text-white font-bold shadow-[0_0_15px_rgba(217,186,132,0.3)]'
                  : 'border-white/10 bg-black/60 text-zinc-400 hover:text-white hover:border-white/25'
              }`}
            >
              <span className={`size-1.5 rounded-full ${isSelected ? 'bg-[#d9ba84] animate-ping' : 'bg-zinc-600'}`} />
              <span>{st.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Main Kinetic Statement Container */}
      <div
        onClick={nextStatement}
        data-cursor="NEXT"
        className="cursor-pointer group relative py-1 w-full max-w-2xl lg:max-w-3xl"
        title="Click to cycle statement"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStatement.id}
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {/* Elegant Champagne Gold Kicker Line ("We provide", "We intercept") */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#d9ba84] text-xl sm:text-2xl md:text-3xl font-light font-sans tracking-wide text-crisp flex items-center md:justify-end gap-2.5"
            >
              <span className="size-2 rounded-full bg-[#d9ba84] shadow-[0_0_12px_#d9ba84] animate-pulse" />
              <span>{activeStatement.kicker}</span>
            </motion.div>

            {/* Editorial Scale Typography with Prominent Middle Highlight */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight leading-[1.25] text-white">
              
              {/* Line 1 / Prefix */}
              <div className="flex flex-wrap md:justify-end items-center">
                {prefixWords.map((word, wIdx) => (
                  <AnimatedWord key={wIdx} word={word} index={wIdx} />
                ))}
              </div>

              {/* Line 2: Highlighted Key Phrase in the Middle + Suffix */}
              <div className="flex flex-wrap md:justify-end items-center gap-y-2 mt-1.5">
                
                {/* PROMINENT MIDDLE HIGHLIGHTED PHRASE */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.90, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.55,
                    delay: prefixWords.length * 0.028 + 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative inline-flex items-center gap-2 px-3 py-1 mr-2 rounded-xl bg-gradient-to-r from-[#d9ba84]/20 via-[#d9ba84]/10 to-[#d9ba84]/20 border border-[#d9ba84]/45 shadow-[0_0_30px_rgba(217,186,132,0.35)] backdrop-blur-md overflow-hidden group-hover:border-[#d9ba84] transition-all"
                >
                  {/* Subtle Light Beam Sweep across the Highlight Badge */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  
                  {/* Glowing Gold Beacon */}
                  <span className="size-1.5 rounded-full bg-[#d9ba84] shadow-[0_0_8px_#d9ba84] shrink-0" />

                  {/* Highlighted Gold Gradient Typography */}
                  <span className="bg-gradient-to-r from-[#d9ba84] via-[#fff0d0] to-[#d9ba84] bg-clip-text text-transparent font-semibold tracking-tight italic font-serif">
                    {activeStatement.highlight}
                  </span>
                </motion.span>

                {/* Suffix words following the highlight */}
                {suffixWords.map((word, wIdx) => (
                  <AnimatedWord
                    key={wIdx}
                    word={word}
                    index={prefixWords.length + 3 + wIdx}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 60fps Photon Beam Sweep Progress Line */}
        <div className="mt-6 h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#d9ba84] via-[#fff0d0] to-[#d9ba84] transition-all duration-75 ease-linear shadow-[0_0_10px_#d9ba84]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

    </div>
  );
};
