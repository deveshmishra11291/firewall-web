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
            className="flex items-center gap-3 text-white group"
          >
            <span className="text-lg font-bold text-white tracking-widest uppercase font-mono group-hover:text-[#d9ba84] transition-colors">
              AI AGENT FIREWALL
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs text-zinc-400 uppercase font-mono">
              ZERO-TRUST WASI RUNTIME
            </span>
          </Link>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider font-mono">
            <span className="text-emerald-400 font-semibold">
              WASMTIME ENGINE: ARMED
            </span>
            <span className="text-zinc-700">//</span>
            <span className="text-[#d9ba84] font-semibold">39 RULES LOADED</span>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[11px] uppercase tracking-wider font-mono">
          
          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              01 // ARCHITECTURE
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Preflight AST Gate
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  WASI Sandbox Host
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Corsair GitHub Bridge
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  CPU Fuel Metering
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              02 // THREAT VECTORS
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/prompt-injection" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Reverse Shell Defense
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-leakage" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Credential Exfiltration
                </Link>
              </li>
              <li>
                <Link to="/solutions/mcp-runtime" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Root Wiper Mitigation
                </Link>
              </li>
              <li>
                <Link to="/solutions/excessive-agency" onClick={() => sound.playClick()} className="hover:text-[#d9ba84] transition">
                  Infinite Loop &amp; DoS
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              03 // CLI COMMANDS
            </div>
            <ul className="space-y-3 font-mono">
              <li>
                <a href="https://github.com/devmishra2049/ai-agent-firewall#terminal-inspector--agent-threat-hunter" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">
                  agent-firewall watch
                </a>
              </li>
              <li>
                <a href="https://github.com/devmishra2049/ai-agent-firewall#terminal-inspector--agent-threat-hunter" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">
                  agent-firewall run
                </a>
              </li>
              <li>
                <a href="https://github.com/devmishra2049/ai-agent-firewall#terminal-inspector--agent-threat-hunter" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">
                  agent-firewall scan
                </a>
              </li>
              <li>
                <a href="https://github.com/devmishra2049/ai-agent-firewall#terminal-inspector--agent-threat-hunter" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">
                  agent-firewall test
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zinc-600 font-bold text-[10px]">
              04 // REPOSITORY &amp; OPEN SOURCE
            </div>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/devmishra2049/ai-agent-firewall" target="_blank" rel="noopener noreferrer" className="text-[#d9ba84] hover:underline flex items-center gap-1">
                  <span>github.com/ai-agent-firewall</span>
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
              <li>
                <span className="text-zinc-400">Zero-Trust Security Core</span>
              </li>
              <li>
                <span className="text-zinc-500">Apache 2.0 License</span>
              </li>
              <li>
                <span className="text-emerald-400 font-bold">RELEASE v1.0.0</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
          <div>
            © 2026 AI AGENT FIREWALL // APACHE 2.0 OPEN-SOURCE RUNTIME.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/devmishra2049/ai-agent-firewall" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">GITHUB REPO</a>
            <a href="https://github.com/devmishra2049/ai-agent-firewall#overview-what-is-ai-agent-firewall" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">DOCUMENTATION</a>
            <a href="https://github.com/devmishra2049/ai-agent-firewall/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ba84] transition">LICENSE</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
