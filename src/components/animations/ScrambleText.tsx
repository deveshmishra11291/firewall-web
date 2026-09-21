import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  duration?: number;
  chars?: string;
  autoStart?: boolean;
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%^&*<>~[]';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleOnHover = true,
  duration = 0.8,
  chars = DEFAULT_CHARS,
  autoStart = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  const triggerScramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const update = () => {
      frame++;
      const progress = frame / totalFrames;

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          // If this character position has finished resolving:
          if (index / text.length < progress) {
            return char;
          }
          // Otherwise, pick a random scramble character
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame < totalFrames) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    if (autoStart) {
      triggerScramble();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text]);

  return (
    <span
      onMouseEnter={() => {
        if (scrambleOnHover) triggerScramble();
      }}
      className={`inline-block font-mono-code transition-colors cursor-default ${className}`}
    >
      {displayText}
    </span>
  );
};
