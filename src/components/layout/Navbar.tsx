import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Navbar: React.FC = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleAudio = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    sound.setMuted(!nextState);
    if (nextState) {
      sound.playClick();
      sound.startAmbientDrone();
    } else {
      sound.stopAmbientDrone();
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between font-sans">
          
          {/* Left: Custom Emblem Logo + Vertical Separator + "AI AGENT FIREWALL" Brand */}
          <Link
            to="/"
            onClick={() => sound.playClick()}
            data-cursor="HOME"
            className="flex items-center gap-3.5 text-white group cursor-pointer"
          >
            {/* Custom 3D Isometric Containment Shield Glyph */}
            <div className="relative size-9 rounded-xl bg-gradient-to-br from-white/10 to-black/80 border border-[#d9ba84]/30 flex items-center justify-center shadow-[0_0_20px_rgba(217,186,132,0.25)] group-hover:border-[#d9ba84] transition-all duration-300">
              <svg className="size-5 text-[#d9ba84]" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2V12M20 6.5L12 12M4 6.5L12 12M12 12V22"
                  stroke="rgba(217,186,132,0.4)"
                  strokeWidth="1.2"
                />
                <circle cx="12" cy="12" r="2.5" fill="#d9ba84" className="animate-pulse" />
              </svg>
            </div>

            {/* Vertical Separator Line (matching reference layout) */}
            <div className="h-6 w-[1.5px] bg-white/20" />

            {/* Project Name: AI AGENT FIREWALL with runtime tag (Dot-Free) */}
            <div className="flex flex-col text-left leading-tight select-none">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base tracking-widest text-white group-hover:text-[#d9ba84] transition-colors font-mono uppercase">
                  AGENT FIREWALL
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase font-mono">
                ZERO-TRUST WASI RUNTIME
              </span>
            </div>
          </Link>

          {/* Center: Floating Pill Navigation Capsule */}
          <nav className="hidden md:flex items-center p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] gap-1 font-mono text-xs">
            <Link
              to="/"
              onClick={() => sound.playClick()}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                isActive('/')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              Home
            </Link>

            <Link
              to="/product"
              onClick={() => sound.playClick()}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                isActive('/product')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              Architecture
            </Link>

            <Link
              to="/solutions/prompt-injection"
              onClick={() => sound.playClick()}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                location.pathname.startsWith('/solutions')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              Threat Matrix
            </Link>

            <Link
              to="/docs"
              onClick={() => sound.playClick()}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                isActive('/docs') || isActive('/blog')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              CLI &amp; Docs
            </Link>
          </nav>

          {/* Right: GitHub Star Button + Audio Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Audio Feedback Switcher */}
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-[#d9ba84] transition-colors cursor-pointer"
              title="Toggle Audio Feedback"
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="size-3.5 text-[#d9ba84]" />
                  <span className="hidden lg:inline text-[10px]">SOUND [ON]</span>
                </>
              ) : (
                <>
                  <VolumeX className="size-3.5 text-zinc-500" />
                  <span className="hidden lg:inline text-[10px]">SOUND [OFF]</span>
                </>
              )}
            </button>

            {/* GitHub Repo Button */}
            <a
              href="https://github.com/devmishra2049/ai-agent-firewall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-full border border-[#d9ba84] bg-[#d9ba84]/15 hover:bg-[#d9ba84] text-[#d9ba84] hover:text-black text-xs font-bold tracking-wide flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(217,186,132,0.25)] hover:shadow-[0_0_35px_rgba(217,186,132,0.6)] cursor-pointer"
            >
              <ShieldCheck className="size-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                sound.playClick();
                setMenuOpen(!menuOpen);
              }}
              className="md:hidden text-zinc-400 hover:text-white p-1"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="size-6 text-[#d9ba84]" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 font-mono-code text-sm">
          <div className="space-y-6">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
              NAVIGATION
            </div>
            <div className="flex flex-col space-y-4 text-lg">
              <Link
                to="/"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">01</span>
                <span>HOME</span>
              </Link>
              <Link
                to="/product"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">02</span>
                <span>PLATFORM ARCHITECTURE</span>
              </Link>
              <Link
                to="/solutions/prompt-injection"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">03</span>
                <span>PROMPT INJECTION (DERAIL)</span>
              </Link>
              <Link
                to="/solutions/data-leakage"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">04</span>
                <span>DATA LOSS &amp; DNS EXFIL</span>
              </Link>
              <Link
                to="/solutions/mcp-runtime"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">05</span>
                <span>MCP RUNTIME DEFENSE</span>
              </Link>
              <Link
                to="/solutions/excessive-agency"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">06</span>
                <span>EXCESSIVE AGENCY (JIT)</span>
              </Link>
              <Link
                to="/docs"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#d9ba84] tabular-nums mr-3">07</span>
                <span>CLI &amp; TERMINAL DOCS</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
            <span>AI AGENT FIREWALL</span>
            <Link
              to="/contact"
              onClick={() => { sound.playClick(); setMenuOpen(false); }}
              className="text-[#d9ba84] font-bold"
            >
              REQUEST DEMO →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
