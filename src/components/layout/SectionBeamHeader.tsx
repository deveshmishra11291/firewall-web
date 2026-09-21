import React from 'react';
import { ScrambleText } from '../animations/ScrambleText';

interface SectionBeamHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionBeamHeader: React.FC<SectionBeamHeaderProps> = ({
  number,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`space-y-4 pt-8 pb-4 relative ${className}`}>
      {/* 60fps.fr Traveling Light Beam Line */}
      <div className="beam-line" />

      {/* Label and Count */}
      <div className="flex items-center justify-between font-mono text-xs uppercase text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-widest text-[#d9ba84] tabular-nums">
            {number}
          </span>
          <span className="w-2.5 h-[1px] bg-white/20" />
          <span className="text-white font-mono font-medium tracking-[0.18em] text-[11px] sm:text-xs">
            <ScrambleText text={title} />
          </span>
        </div>

        {subtitle && (
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-400 font-mono tracking-widest">
            <span className="text-[#d9ba84] font-semibold">//</span>
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );
};
