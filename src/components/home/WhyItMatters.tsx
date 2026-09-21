import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOff, Database, ShieldAlert, Network, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { SectionBeamHeader } from '../layout/SectionBeamHeader';
import { ScrambleText } from '../animations/ScrambleText';
import { SplitTextReveal } from '../animations/SplitTextReveal';
import { TiltCard } from '../animations/TiltCard';

export const WhyItMatters: React.FC = () => {
  const threats = [
    {
      title: 'Shadow AI Agents',
      subtitle: 'Security sees actions only after kernel dispatch.',
      description: 'Developers install unapproved CLI harnesses and community tools with full host machine permissions and zero centralized governance.',
      icon: EyeOff,
      to: '/product',
      code: 'UNMONITORED_HARNESS',
      cursor: 'SHADOW',
    },
    {
      title: 'Exposed Secrets',
      subtitle: 'Credentials leak into tool query strings.',
      description: 'Private tokens, database connection strings, and internal company schemas enter web search tools and third-party SaaS APIs without warning.',
      icon: Database,
      to: '/solutions/data-leakage',
      code: 'TOOL_ARG_EXPOSURE',
      cursor: 'SECRETS',
    },
    {
      title: 'Prompt Injection',
      subtitle: 'Untrusted content hijacks the execution path.',
      description: 'Malicious instructions hidden inside ingested PDFs, cloned repositories, or issue comments redirect the agent trajectory to run attacker code.',
      icon: ShieldAlert,
      to: '/solutions/prompt-injection',
      code: 'INDIRECT_INJECTION',
      cursor: 'DERAIL',
    },
    {
      title: 'DNS Tunneling',
      subtitle: 'Intellectual property exfiltrated silently.',
      description: 'Agents encode internal source files into DNS subdomain lookups, bypassing conventional DLP filters before perimeter monitors alert.',
      icon: Network,
      to: '/solutions/data-leakage',
      code: 'DNS_TUNNEL_EXFIL',
      cursor: 'EGRESS',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 60fps.fr Signature Labeled Traveling Light Beam Header */}
      <SectionBeamHeader
        number="01"
        title="THREAT TOPOGRAPHY &amp; ATTACK VECTORS"
        subtitle="RUNTIME DEFENSE ESSENTIALS"
      />

      {/* Main Section Header */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            UNPREDICTABLE AI.
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] italic font-serif">
            <SplitTextReveal type="words" delay={0.25}>
              uncontrolled execution.
            </SplitTextReveal>
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
          When autonomous coding agents gain access to file systems, bash shells, and cloud APIs, traditional security tools miss the execution moment.
        </p>
      </div>

      {/* 4 60fps.fr Luxury Studio Glass Cards with 3D Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {threats.map((threat, idx) => {
          const Icon = threat.icon;
          return (
            <TiltCard key={idx} maxTilt={12} className="rounded-2xl h-full">
              <Link
                to={threat.to}
                onClick={() => sound.playClick()}
                data-cursor={threat.cursor}
                className="fps-glass rounded-2xl p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 shadow-2xl relative overflow-hidden h-full"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84] group-hover:scale-110 group-hover:border-[#d9ba84]/50 transition-all">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
                      <ScrambleText text={threat.code} />
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#d9ba84] transition-colors text-crisp">
                      {threat.title}
                    </h3>
                    <div className="text-xs text-[#d9ba84] font-mono-code font-semibold tracking-wide">
                      {threat.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-normal">
                    {threat.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono-code text-xs text-zinc-400 group-hover:text-white transition-colors mt-6 font-medium">
                  <span>VIEW SPECIFICATION</span>
                  <ArrowUpRight className="size-4 text-[#d9ba84] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </TiltCard>
          );
        })}
      </div>

    </section>
  );
};
