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
      <div className="flex items-center justify-between font-mono-code text-xs tracking-wider uppercase text-zinc-400">
        <div className="flex items-center gap-4">
          <span className="text-[#d9ba84] font-bold text-sm">
            {number}
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-white font-medium tracking-widest text-[11px] sm:text-xs">
            <ScrambleText text={title} />
          </span>
        </div>

        {subtitle && (
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-400">
            <span className="size-1.5 rounded-full bg-[#d9ba84] animate-pulse"></span>
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );
};
