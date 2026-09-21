import React from 'react';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import { sound } from '../utils/sound';
import { Link } from 'react-router-dom';
import { SectionBeamHeader } from '../components/layout/SectionBeamHeader';
import { ScrambleText } from '../components/animations/ScrambleText';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { SpiralScrollUnfold } from '../components/animations/SpiralScrollUnfold';

interface Article {
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
}

const ARTICLES: Article[] = [
  {
    title: 'Claude Code Cross-Session Escalation Risks',
    category: 'RESEARCH',
    date: 'Aug 8, 2026',
    author: 'Abi Raghuram',
    excerpt: 'Detailed technical analysis of how untrusted state persisted in agent scratchpad memories can escalate privileges across developer sessions without triggering fresh security prompts.',
  },
  {
    title: 'The Hidden Risk in Notion 3.0 AI Agents: Web Search Tool Abuse for Data Exfiltration',
    category: 'VULNERABILITY REPORT',
    date: 'Sep 19, 2025',
    author: 'Abi Raghuram',
    excerpt: 'Demonstration of how invisible white-on-white text embedded in customer PDFs forces Notion agents to gather internal page data and append it to web search URL parameters.',
  },
  {
    title: 'Shopify Exploit: Manipulating Autonomous Agent Shoppers',
    category: 'EXPLOIT ANALYSIS',
    date: 'Jul 14, 2025',
    author: 'SANDBOX Labs',
    excerpt: 'How adversarial product descriptions coerce autonomous purchasing agents into executing unverified checkout actions and altering user shipping targets.',
  },
  {
    title: 'DERAIL: Indirect Prompt Injection Heuristics in Agentic Harnesses',
    category: 'WHITE PAPER',
    date: 'May 12, 2025',
    author: 'SANDBOX Security Group',
    excerpt: 'A comprehensive evaluation of data vs. instruction isolation techniques across 12 prominent developer agent frameworks.',
  },
];

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="05"
        title="RESEARCH DISCLOSURES &amp; FIELD DISPATCHES"
        subtitle="VULNERABILITY LABS"
      />

      {/* Hero */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            OUR LATEST
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] italic font-serif">
            <SplitTextReveal type="words" delay={0.25}>
              security findings.
            </SplitTextReveal>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          Original security research, zero-day disclosures, and mitigation white papers from the SANDBOX security research team.
        </p>
      </div>

      {/* Article Grid */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES.map((art, idx) => (
            <div
              key={idx}
              data-cursor="READ"
              className="fps-glass rounded-2xl p-8 flex flex-col justify-between space-y-8 hover:border-[#d9ba84]/50 hover:-translate-y-1.5 transition-all duration-300 group shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono-code text-[10px]">
                  <span className="text-[#d9ba84] font-bold px-2.5 py-1 rounded-full bg-[#d9ba84]/10 border border-[#d9ba84]/30 uppercase tracking-wider">
                    <ScrambleText text={art.category} />
                  </span>
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Calendar className="size-3" />
                    {art.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#d9ba84] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono-code text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <User className="size-3.5 text-[#d9ba84]" />
                  <span>{art.author}</span>
                </div>
                <span
                  onClick={() => sound.playClick()}
                  className="text-[#d9ba84] flex items-center gap-1.5 hover:underline cursor-pointer font-bold"
                >
                  <span>Read Dispatch</span>
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </SpiralScrollUnfold>

      {/* Newsletter */}
      <SpiralScrollUnfold intensity={1.1} reverse={true}>
        <div className="fps-glass rounded-3xl p-10 md:p-14 text-center space-y-6">
          <div className="beam-line" />
          <h3 className="text-3xl font-normal text-white uppercase tracking-tight">
            STAY AHEAD OF AGENT EXPLOITS
          </h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Get technical whitepapers and novel vulnerability briefs delivered straight to your inbox monthly.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="engineer@company.com"
              className="flex-1 bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs font-mono-code text-white focus:outline-none focus:border-[#d9ba84]"
            />
            <button
              onClick={() => sound.playVerified()}
              data-cursor="SUB"
              className="px-6 py-3 bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold text-xs uppercase tracking-wider font-mono-code rounded-xl transition cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </SpiralScrollUnfold>

    </div>
  );
};
