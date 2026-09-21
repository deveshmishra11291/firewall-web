import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Flame, ShieldCheck } from 'lucide-react';

export const CircuitRadar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // 1. Anime.js v4 SVG stroke dashoffset animation for bus cables
      animate('.circuit-trace', {
        strokeDashoffset: [200, 0],
        ease: 'inOutSine',
        duration: 2200,
        alternate: true,
        loop: true,
      });

      // 2. Anime.js v4 particle pulse moving along the bus lines
      animate('.data-packet', {
        translateY: [0, 90],
        opacity: [1, 0],
        ease: 'inQuad',
        duration: 1400,
        loop: true,
      });

      // 3. Anime.js v4 pulsating core sensor diode
      animate('.sensor-core', {
        scale: [1, 1.06, 1],
        ease: 'inOutQuad',
        duration: 2000,
        loop: true,
      });
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[360px] md:h-[420px] bg-[#0e0e0e]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl select-none">
      
      {/* Top Header info */}
      <div className="flex items-center justify-between font-mono-code text-[11px] text-neutral-400 pb-3 border-b border-white/5 z-10">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#e8602e] animate-ping"></span>
          <span className="text-white font-semibold flex items-center gap-1.5">
            <Flame className="size-3 text-[#e8602e]" />
            SANDBOX RUNTIME RADAR
          </span>
        </div>
        <span className="text-neutral-500 font-medium">LATENCY: &lt; 0.8ms (LOCAL)</span>
      </div>

      {/* Main Interactive Diagram Canvas */}
      <div className="relative flex-1 flex items-center justify-center">
        
        <svg className="absolute inset-0 size-full stroke-white/10" fill="none" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
          {/* Incoming Agent Decision Bus Lines */}
          <path d="M 100 40 L 300 130" className="circuit-trace stroke-white/15" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 180 40 L 300 130" className="circuit-trace stroke-white/15" strokeWidth="1.5" />
          <path d="M 300 40 L 300 130" className="circuit-trace stroke-[#e8602e]" strokeWidth="2" />
          <path d="M 420 40 L 300 130" className="circuit-trace stroke-white/15" strokeWidth="1.5" />
          <path d="M 500 40 L 300 130" className="circuit-trace stroke-white/15" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Outbound Filtered Execution Lines */}
          <path d="M 300 170 L 150 260" className="circuit-trace stroke-emerald-500/40" strokeWidth="1.5" />
          <path d="M 300 170 L 300 260" className="circuit-trace stroke-emerald-500/40" strokeWidth="1.5" />
          <path d="M 300 170 L 450 260" className="circuit-trace stroke-red-500/40" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Flowing Packets */}
          <circle cx="300" cy="50" r="3.5" className="data-packet fill-[#e8602e]" />
          <circle cx="240" cy="60" r="3" className="data-packet fill-[#e8602e]" />
          <circle cx="360" cy="60" r="3" className="data-packet fill-[#e8602e]" />
        </svg>

        {/* Floating Top Nodes: Models & Agent Frameworks (Sheryians Pill Tags) */}
        <div className="absolute top-2 inset-x-4 flex justify-between max-w-lg mx-auto font-mono-code text-[10px]">
          <div className="px-2.5 py-1 bg-black/80 border border-white/10 rounded-full text-neutral-400 shadow-sm">Claude Code</div>
          <div className="px-2.5 py-1 bg-black/80 border border-white/10 rounded-full text-neutral-400 shadow-sm">Cursor</div>
          <div className="px-2.5 py-1 bg-[#e8602e]/20 border border-[#e8602e] text-[#e8602e] font-bold rounded-full shadow-sm">Tool Calls</div>
          <div className="px-2.5 py-1 bg-black/80 border border-white/10 rounded-full text-neutral-400 shadow-sm">Windsurf</div>
          <div className="px-2.5 py-1 bg-black/80 border border-white/10 rounded-full text-neutral-400 shadow-sm">MCP Client</div>
        </div>

        {/* Center: SANDBOX On-Device Sensor Node (Sheryians Glowing Card) */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="sensor-core size-20 rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border-2 border-[#e8602e] flex flex-col items-center justify-center text-center p-2 cursor-pointer shadow-xl shadow-orange-500/20">
            <Flame className="size-5 text-[#e8602e] mb-1 fill-[#e8602e]" />
            <span className="font-mono-code text-[11px] font-black text-white tracking-wider">SANDBOX</span>
            <span className="text-[8px] font-mono-code text-[#e8602e] font-bold">SENSOR</span>
          </div>
          <span className="font-mono-code text-[9px] text-neutral-400 mt-2 bg-white/5 px-3 py-0.5 border border-white/10 rounded-full shadow-sm">
            Syscall &amp; Tool Interceptor
          </span>
        </div>

        {/* Bottom Destination Nodes */}
        <div className="absolute bottom-2 inset-x-8 flex justify-between max-w-md mx-auto font-mono-code text-[10px]">
          <div className="px-2.5 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center gap-1">
            <ShieldCheck className="size-3" /> Filesystem
          </div>
          <div className="px-2.5 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-full">
            Shell Process
          </div>
          <div className="px-2.5 py-1 bg-red-950/50 border border-red-500/40 text-red-400 font-bold rounded-full flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-red-400"></span>
            Blocked: DNS Exfil
          </div>
        </div>

      </div>

      {/* Bottom telemetry footer */}
      <div className="flex items-center justify-between font-mono-code text-[10px] text-neutral-500 pt-2 border-t border-white/5 z-10">
        <div>ZERO CLOUD DEPENDENCY · REAL-TIME DETERMINISTIC ENFORCEMENT</div>
        <div className="text-emerald-400 font-bold">100% AIR-GAPPED EVALUATION</div>
      </div>

    </div>
  );
};
