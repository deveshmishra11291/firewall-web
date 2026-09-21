import React from 'react';
import { Network, ShieldCheck, Lock, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { Link } from 'react-router-dom';
import { SectionBeamHeader } from '../../components/layout/SectionBeamHeader';
import { ScrambleText } from '../../components/animations/ScrambleText';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { SpiralScrollUnfold } from '../../components/animations/SpiralScrollUnfold';

export const DataLeakagePage: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="02"
        title="DATA LOSS PREVENTION // DNS EXFILTRATION SHIELD"
        subtitle="ZERO EGRESS BREACH"
      />

      {/* Hero */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            HALT DATA LEAKAGE &amp;
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] italic font-serif">
            <SplitTextReveal type="words" delay={0.25}>
              dns exfiltration.
            </SplitTextReveal>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          AI agents regularly parse sensitive tokens, environment variables, and proprietary code. Attackers abuse outbound tool arguments and DNS queries to covertly tunnel intellectual property outside your perimeter.
        </p>
      </div>

      {/* 3 Pillars of Data Protection */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div data-cursor="DNS" className="fps-glass rounded-2xl p-8 space-y-5 hover:border-[#d9ba84]/50 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84]">
              <Network className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">DNS Tunneling Intercept</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Prevents agents from issuing encoded subdomains (e.g. <code className="text-zinc-200 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">[BASE64_KEY].attacker.com</code>) that bypass conventional corporate web filters.
            </p>
            <div className="pt-2 font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
              <ScrambleText text="POL_04_DNS_SHIELD" />
            </div>
          </div>

          <div data-cursor="SECRETS" className="fps-glass rounded-2xl p-8 space-y-5 hover:border-[#d9ba84]/50 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84]">
              <Lock className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Secret &amp; Key Shield</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Real-time regex and Shannon entropy scanning intercepts AWS keys, GitHub tokens, and private SSH certificates before they enter tool query parameters.
            </p>
            <div className="pt-2 font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
              <ScrambleText text="POL_03_ENTROPY_SCAN" />
            </div>
          </div>

          <div data-cursor="LATENCY" className="fps-glass rounded-2xl p-8 space-y-5 hover:border-[#d9ba84]/50 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84]">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Zero Egress Leakage</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Policy evaluation occurs locally on the developer machine in under 1 millisecond. No enterprise proprietary data is sent to external cloud inspectors.
            </p>
            <div className="pt-2 font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
              <ScrambleText text="POL_01_LOCAL_BOUND" />
            </div>
          </div>

        </div>
      </SpiralScrollUnfold>

      {/* 60fps Pre-Footer CTA */}
      <SpiralScrollUnfold intensity={1.1} reverse={true}>
        <div className="fps-glass rounded-3xl p-10 md:p-14 text-center space-y-6">
          <div className="beam-line" />
          <h3 className="text-3xl font-normal text-white uppercase tracking-tight">
            SECURE DEVELOPER WORKSTATION EGRESS
          </h3>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Ensure sensitive environment variables never leak through autonomous agent actions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => sound.playClick()}
              data-cursor="DEMO"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(217,186,132,0.4)] transition-all cursor-pointer"
            >
              <span>Book Data Leakage Demo</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </SpiralScrollUnfold>

    </div>
  );
};
