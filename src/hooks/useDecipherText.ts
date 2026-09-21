import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789_#%$';

export function useDecipherText(finalText: string, durationMs: number = 800) {
  const [displayText, setDisplayText] = useState(finalText);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.max(10, Math.floor(durationMs / 30));
    
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealedLength = Math.floor(progress * finalText.length);

      const scrambled = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealedLength) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(finalText);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [finalText, durationMs]);

  return displayText;
}
