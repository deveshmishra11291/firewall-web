import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { DefenseSimulator } from '../hero/DefenseSimulator';
import { SplitTextReveal } from '../animations/SplitTextReveal';
import { ScrambleText } from '../animations/ScrambleText';
import { TiltCard } from '../animations/TiltCard';
import { motion } from 'framer-motion';
import { HeroScrollCards } from './HeroScrollCards';
import { FpsHeadlinePop } from '../animations/FpsHeadlinePop';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 z-10">
      
      {/* 60fps Studio Header Meta Kicker */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-code text-[11px] uppercase tracking-widest text-zinc-500 border-b border-white/5 pb-6">
        <div className="flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-[#d9ba84] animate-ping" />
          <span className="text-white font-medium">
            <ScrambleText text="AUTONOMOUS AGENT EXECUTION DEFENSE" />
          </span>
        </div>
        <div className="flex items-center gap-4 text-zinc-500">
          <span>PARIS · SAN FRANCISCO</span>
          <span>/</span>
          <span className="text-[#d9ba84]">VERSION 2.4 READY</span>
        </div>
      </div>

      {/* 60fps.fr Signature Kinetic Text Pop Headline (Shifted Right) */}
      <div className="space-y-10 w-full">
        <FpsHeadlinePop />

        {/* Subtitle & Studio Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 items-start border-t border-white/5">
          <p className="md:col-span-8 text-base sm:text-xl text-zinc-200 font-normal leading-relaxed text-crisp">
            SANDBOX is an on-device runtime security engine built for autonomous AI coding harnesses (Claude Code, Cursor, Windsurf, Cline). We intercept unvetted tool arguments, prompt injections, and DNS exfiltration before kernel execution.
          </p>
          <div className="md:col-span-4 flex flex-col gap-3 font-mono-code text-xs">
            <Link
              to="/contact"
              onClick={() => sound.playClick()}
              data-cursor="LAUNCH"
              className="inline-flex items-center justify-between px-6 py-4 rounded-xl border border-[#d9ba84] bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(217,186,132,0.4)] hover:shadow-[0_0_45px_rgba(217,186,132,0.7)] cursor-pointer"
            >
              <span>Explore Sandbox</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <div className="text-[11px] text-zinc-400 font-semibold text-center uppercase tracking-widest">
              &lt; 0.8MS SYSCALL INTERCEPTION
            </div>
          </div>
        </div>
      </div>

      {/* 60fps Signature Capability Cells with 3D Scroll-Driven Kinetic Animation */}
      <HeroScrollCards />

      {/* Interactive 3D Perspective Defense Simulator Showcase */}
      <div className="space-y-4 pt-10">
        <div className="flex items-center justify-between font-mono-code text-xs text-zinc-400 border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#d9ba84] animate-ping" />
            <span className="uppercase text-white font-bold">
              00 / INTERACTIVE EXECUTION HARNESS SIMULATOR
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-500 uppercase">
            LIVE KERNEL INTERCEPTION TESTBED
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="perspective-1000"
        >
          <TiltCard maxTilt={5} glare={false} className="rounded-2xl">
            <DefenseSimulator />
          </TiltCard>
        </motion.div>
      </div>

    </section>
  );
};
