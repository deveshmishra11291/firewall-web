import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { ScrambleText } from '../animations/ScrambleText';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 font-mono-code text-xs text-zinc-400 relative overflow-hidden">
      {/* 60fps Beam Line across footer top */}
      <div className="beam-line" />

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-12">
          <Link
            to="/"
            onClick={() => sound.playClick()}
            data-cursor="HOME"
            className="flex items-center gap-3 text-white group"
          >
            <div className="size-2 rounded-full bg-[#d9ba84] shadow-[0_0_10px_#d9ba84]" />
            <span className="text-lg font-bold text-white tracking-widest uppercase">
              SANDBOX
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs text-zinc-400 uppercase">
              AUTONOMOUS AGENT SECURITY STUDIO
            </span>
          </Link>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span className="flex items-center gap-2 text-zinc-400">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              SYSTEM PROTOCOL: NORMAL
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-[#d9ba84]">SOC 2 TYPE II AUDITED</span>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[11px] uppercase tracking-wider">
          
          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              01 // PLATFORM
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Overview &amp; Harness
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Syscall Hook Engine
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Deterministic Policy
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Cryptographic Audit
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              02 // SOLUTIONS
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/prompt-injection" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Prompt Injection (DERAIL)
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-leakage" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Data Leakage &amp; DNS
                </Link>
              </li>
              <li>
                <Link to="/solutions/mcp-runtime" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  MCP Runtime Defense
                </Link>
              </li>
              <li>
                <Link to="/solutions/excessive-agency" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Excessive Agency (JIT)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              03 // RESEARCH
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Claude Code Postmortem
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Notion 3.0 PDF Vector
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Shopify Agent Exploit
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  DERAIL White Paper
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              04 // STUDIO
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Enterprise Request
                </Link>
              </li>
              <li>
                <span className="text-zinc-500 cursor-default">Paris · San Francisco</span>
              </li>
              <li>
                <span className="text-zinc-500 cursor-default">contact@sandbox.security</span>
              </li>
              <li>
                <span className="text-[#d9ba84]">SANDBOX v2.4</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <div>
            © 2026 SANDBOX SECURITY STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 transition cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-zinc-400 transition cursor-pointer">TERMS OF EXECUTION</span>
            <span className="hover:text-zinc-400 transition cursor-pointer">SECURITY DISCLOSURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
