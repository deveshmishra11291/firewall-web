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
    id: 'preflight',
    kicker: 'We gate',
    prefix: 'Zero-trust AST static scanning and',
    highlight: 'preflight capability boundaries',
    suffix: 'before code ever compiles.',
    tag: '01 / PREFLIGHT GATE',
  },
  {
    id: 'wasi',
    kicker: 'We isolate',
    prefix: 'Sub-5ms WebAssembly execution with',
    highlight: 'instruction-level CPU fuel metering',
    suffix: 'and 32MB memory ceilings.',
    tag: '02 / WASI RUNTIME',
  },
  {
    id: 'runtime',
    kicker: 'We intercept',
    prefix: 'Reverse shells, credential theft & loops in',
    highlight: 'Claude Code, Cursor & Windsurf',
    suffix: 'at the host terminal runtime.',
    tag: '03 / TERMINAL WATCHER',
  },
  {
    id: 'corsair',
    kicker: 'We audit',
    prefix: 'Automated GitHub Pull Request reviews via',
    highlight: 'Corsair webhook firewall bots',
    suffix: 'with instant PASSED or BLOCKED proofs.',
    tag: '04 / GITHUB PR BOT',
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
      className="w-full flex flex-col items-start md:items-end text-left md:text-right space-y-6 select-none"
    >
      {/* Studio Minimalist Typographic Tabs (Boxless & Dot-Free) */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-8 pb-1 border-b border-white/5 w-full md:w-auto md:justify-end">
        {STATEMENTS.map((st, idx) => {
          const isSelected = idx === currentIndex;
          const num = String(idx + 1).padStart(2, '0');
          const title = st.tag.replace(/^\d+\s*\/\s*/, '');
          return (
            <button
              key={st.id}
              onClick={() => selectStatement(idx)}
              className="group relative pb-2 transition-all cursor-pointer flex items-baseline gap-2 text-left"
            >
              <span className={`font-mono text-xs font-semibold tabular-nums tracking-widest transition-colors ${
                isSelected ? 'text-[#d9ba84]' : 'text-zinc-600 group-hover:text-zinc-400'
              }`}>
                {num}
              </span>
              <span className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                isSelected ? 'text-white font-semibold' : 'text-zinc-400 group-hover:text-zinc-200'
              }`}>
                {title}
              </span>
              {/* Sleek active underline bar */}
              {isSelected && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d9ba84] via-[#fff0d0] to-[#d9ba84] shadow-[0_0_12px_#d9ba84]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Kinetic Statement Container */}
      <div
        onClick={nextStatement}
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
            {/* Calligraphic Champagne Gold Kicker (No Pointing Dot) */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#d9ba84] font-calligraphic text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-crisp flex items-center md:justify-end"
            >
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
                
                {/* Refined Engineering Highlight Badge (Dot-Free) */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.5,
                    delay: prefixWords.length * 0.028 + 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative inline-flex items-center px-3.5 py-1 mr-2 rounded-lg bg-white/[0.04] border border-[#d9ba84]/40 shadow-[0_0_24px_rgba(217,186,132,0.2)] backdrop-blur-md overflow-hidden group-hover:border-[#d9ba84] transition-all"
                >
                  {/* Subtle Light Beam Sweep across the Highlight Badge */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />

                  {/* Clean, Modern Bold Champagne Typography */}
                  <span className="bg-gradient-to-r from-white via-[#f0d8a8] to-[#d9ba84] bg-clip-text text-transparent font-bold tracking-tight font-sans">
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
