import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';

export const AnnouncementTicker: React.FC = () => {
  const items = [
    {
      icon: Flame,
      label: 'AI Agent Firewall v1.0 released: On-device WASI runtime defense',
      to: '/blog',
    },
    {
      icon: Sparkles,
      label: 'New White Paper: The Coding Agent Harness Security Gap',
      to: '/product',
    },
    {
      icon: ShieldAlert,
      label: 'Research: DERAIL Prompt Injection Defenses',
      to: '/solutions/prompt-injection',
    },
  ];

  return (
    <div
      aria-label="Announcements"
      className="group flex overflow-x-hidden bg-[#0a0a0a] text-neutral-300 font-medium text-xs tracking-wide select-none border-b border-white/5 py-2 relative"
    >
      <div className="flex w-max animate-marquee items-center gap-16">
        {/* First set */}
        <div className="flex items-center gap-16 shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.to}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group/item"
              >
                <div className="size-4 rounded-full bg-[#e8602e]/20 flex items-center justify-center text-[#e8602e]">
                  <Icon className="size-2.5 shrink-0 fill-current" />
                </div>
                <span className="group-hover/item:text-[#e8602e] transition-colors">
                  {item.label}
                </span>
                <ArrowUpRight className="size-3 text-neutral-500 group-hover/item:text-[#e8602e] transition-colors" />
              </Link>
            );
          })}
        </div>

        {/* Duplicate set for seamless looping */}
        <div className="flex items-center gap-16 shrink-0" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={`dup-${idx}`}
                to={item.to}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group/item"
              >
                <div className="size-4 rounded-full bg-[#e8602e]/20 flex items-center justify-center text-[#e8602e]">
                  <Icon className="size-2.5 shrink-0 fill-current" />
                </div>
                <span className="group-hover/item:text-[#e8602e] transition-colors">
                  {item.label}
                </span>
                <ArrowUpRight className="size-3 text-neutral-500 group-hover/item:text-[#e8602e] transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
