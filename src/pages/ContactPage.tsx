import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';
import { SectionBeamHeader } from '../components/layout/SectionBeamHeader';
import { ScrambleText } from '../components/animations/ScrambleText';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { SpiralScrollUnfold } from '../components/animations/SpiralScrollUnfold';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playVerified();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
      
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="06"
        title="ENTERPRISE TRIAL &amp; KERNEL HARNESS ACCESS"
        subtitle="PILOT PROGRAM"
      />

      {/* Hero */}
      <div className="space-y-6 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            SEE SANDBOX IN
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] italic font-serif">
            <SplitTextReveal type="words" delay={0.25}>
              real-time action.
            </SplitTextReveal>
          </span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
          Speak with our runtime security architects, explore the on-device sensor engine, or request an enterprise trial license for your team.
        </p>
      </div>

      {/* Form Container */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="fps-glass rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 space-y-8">
          <div className="beam-line" />

          {submitted ? (
            <div className="p-8 text-center space-y-5">
              <div className="size-16 rounded-full bg-[#d9ba84]/15 border border-[#d9ba84] flex items-center justify-center text-[#d9ba84] mx-auto shadow-[0_0_30px_rgba(217,186,132,0.3)]">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-normal text-white uppercase tracking-tight">
                Trial Credentials Dispatched
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
                Thank you. A security engineer from SANDBOX will reach out to <span className="text-[#d9ba84] font-mono-code">{email}</span> within 2 hours with ephemeral sandbox credentials.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono-code text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-zinc-400 uppercase tracking-widest text-[10px]">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="security@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d9ba84] text-xs transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-zinc-400 uppercase tracking-widest text-[10px]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Technologies"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d9ba84] text-xs transition"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-zinc-400 uppercase tracking-widest text-[10px]">
                  Active Coding Agents in Your Organization
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-zinc-300">
                  <label className="flex items-center gap-3 p-3.5 bg-black/60 border border-white/10 rounded-xl cursor-pointer hover:border-[#d9ba84]/50 transition">
                    <input type="checkbox" defaultChecked className="accent-[#d9ba84] size-4 rounded" />
                    <span>Claude Code</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 bg-black/60 border border-white/10 rounded-xl cursor-pointer hover:border-[#d9ba84]/50 transition">
                    <input type="checkbox" defaultChecked className="accent-[#d9ba84] size-4 rounded" />
                    <span>Cursor IDE</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 bg-black/60 border border-white/10 rounded-xl cursor-pointer hover:border-[#d9ba84]/50 transition">
                    <input type="checkbox" className="accent-[#d9ba84] size-4 rounded" />
                    <span>Windsurf</span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 bg-black/60 border border-white/10 rounded-xl cursor-pointer hover:border-[#d9ba84]/50 transition">
                    <input type="checkbox" defaultChecked className="accent-[#d9ba84] size-4 rounded" />
                    <span>MCP Tools</span>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  onClick={() => sound.playClick()}
                  data-cursor="SUBMIT"
                  className="w-full py-4 bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_25px_rgba(217,186,132,0.35)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Demonstration &amp; Trial Key</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </SpiralScrollUnfold>

    </div>
  );
};
