import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words';
  stagger?: number;
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  type = 'chars',
  stagger = 0.02,
}) => {
  if (type === 'words') {
    const words = children.split(' ');
    return (
      <span className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-1">
            <motion.span
              initial={{ y: '115%', opacity: 0, rotate: 2 }}
              whileInView={{ y: '0%', opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: delay + i * (stagger * 2.5),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block origin-bottom-left"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Character-by-character split
  const words = children.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap overflow-hidden py-1">
          {word.split('').map((char, charIdx) => {
            const charTotalIndex = wordIdx * 5 + charIdx;
            return (
              <span key={charIdx} className="inline-block overflow-hidden">
                <motion.span
                  initial={{ y: '120%', opacity: 0, scaleY: 1.2 }}
                  whileInView={{ y: '0%', opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    delay: delay + charTotalIndex * stagger,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};
