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
          
          {/* Left: Custom Emblem Logo + Vertical Separator + "SANDBOX" Brand */}
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

            {/* Project Name: SANDBOX with secondary runtime tag */}
            <div className="flex flex-col text-left leading-tight select-none">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-widest text-white group-hover:text-[#d9ba84] transition-colors font-mono-code uppercase">
                  SANDBOX
                </span>
                <span className="size-1.5 rounded-full bg-[#d9ba84] shadow-[0_0_8px_#d9ba84] animate-ping" />
              </div>
              <span className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase font-mono-code">
                RUNTIME DEFENSE
              </span>
            </div>
          </Link>

          {/* Center: Floating Pill Navigation Capsule (matching reference layout) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] gap-1">
            <Link
              to="/"
              onClick={() => sound.playClick()}
              data-cursor="HOME"
              className={`px-4 py-1.5 rounded-xl text-xs transition-all duration-200 ${
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
              data-cursor="PLATFORM"
              className={`px-4 py-1.5 rounded-xl text-xs transition-all duration-200 ${
                isActive('/product')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              Platform
            </Link>

            <Link
              to="/solutions/prompt-injection"
              onClick={() => sound.playClick()}
              data-cursor="SOLUTIONS"
              className={`px-4 py-1.5 rounded-xl text-xs transition-all duration-200 ${
                location.pathname.startsWith('/solutions')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              Solutions
            </Link>

            <Link
              to="/blog"
              onClick={() => sound.playClick()}
              data-cursor="RESEARCH"
              className={`px-4 py-1.5 rounded-xl text-xs transition-all duration-200 ${
                isActive('/blog')
                  ? 'bg-white/10 text-[#d9ba84] font-bold shadow-[0_0_12px_rgba(217,186,132,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              Research
            </Link>
          </nav>

          {/* Right: CTA Pill Button + Sign In Link + Audio Toggle */}
          <div className="flex items-center gap-4 sm:gap-5">
            
            {/* Audio Feedback Switcher */}
            <button
              onClick={toggleAudio}
              data-cursor="AUDIO"
              className="flex items-center gap-1.5 text-[11px] font-mono-code text-zinc-400 hover:text-[#d9ba84] transition-colors cursor-pointer"
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

            {/* Request Demo / Call Pill Button (matching reference CTA) */}
            <Link
              to="/contact"
              onClick={() => sound.playClick()}
              data-cursor="DEMO"
              className="px-4 sm:px-5 py-2 rounded-full border border-[#d9ba84] bg-[#d9ba84]/15 hover:bg-[#d9ba84] text-[#d9ba84] hover:text-black text-xs font-bold tracking-wide flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(217,186,132,0.25)] hover:shadow-[0_0_35px_rgba(217,186,132,0.6)] cursor-pointer"
            >
              <ShieldCheck className="size-3.5" />
              <span>Request Demo</span>
              <ArrowUpRight className="size-3 hidden sm:inline" />
            </Link>

            {/* Sign In Link (matching reference) */}
            <Link
              to="/contact"
              onClick={() => sound.playClick()}
              data-cursor="LOGIN"
              className="text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </Link>

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
            <div className="flex flex-col space-y-4 text-xl">
              <Link
                to="/"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                01 / HOME
              </Link>
              <Link
                to="/product"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                02 / PLATFORM ARCHITECTURE
              </Link>
              <Link
                to="/solutions/prompt-injection"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                03 / PROMPT INJECTION (DERAIL)
              </Link>
              <Link
                to="/solutions/data-leakage"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                04 / DATA LOSS &amp; DNS EXFIL
              </Link>
              <Link
                to="/solutions/mcp-runtime"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                05 / MCP RUNTIME DEFENSE
              </Link>
              <Link
                to="/solutions/excessive-agency"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                06 / EXCESSIVE AGENCY (JIT)
              </Link>
              <Link
                to="/blog"
                onClick={() => { sound.playClick(); setMenuOpen(false); }}
                className="text-white hover:text-[#d9ba84]"
              >
                07 / RESEARCH PAPERS
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
            <span>SANDBOX AGENTIC SECURITY</span>
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
