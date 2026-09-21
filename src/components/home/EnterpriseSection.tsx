import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, KeyRound, Server, Headphones, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { SectionBeamHeader } from '../layout/SectionBeamHeader';
import { ScrambleText } from '../animations/ScrambleText';
import { SplitTextReveal } from '../animations/SplitTextReveal';
import { TiltCard } from '../animations/TiltCard';

export const EnterpriseSection: React.FC = () => {
  const compliance = [
    {
      title: 'SOC 2 Type II',
      description: 'Audited security controls for on-device agent execution.',
      icon: ShieldCheck,
      metric: 'CRYPTOGRAPHIC AUDIT',
      cursor: 'SOC2',
    },
    {
      title: 'Enterprise Identity',
      description: 'SSO, SAML & OIDC mapped directly to agent subprocesses.',
      icon: KeyRound,
      metric: 'RBAC MAPPING',
      cursor: 'IDENTITY',
    },
    {
      title: 'Self-Hosted VPC',
      description: '100% on-device operation. Source code never leaves perimeter.',
      icon: Server,
      metric: 'AIR-GAPPED COMPATIBLE',
      cursor: 'VPC',
    },
    {
      title: '24/7 Red Team SLA',
      description: 'Dedicated exploit researchers and zero-day response guarantee.',
      icon: Headphones,
      metric: 'DEDICATED SUPPORT',
      cursor: 'SUPPORT',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 overflow-hidden">
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="04"
        title="ENTERPRISE READINESS &amp; COMPLIANCE"
        subtitle="GOVERNANCE GUARANTEE"
      />

      {/* Main Section Header */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            BUILT FOR PRODUCTION
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] font-medium tracking-tight">
            <SplitTextReveal type="words" delay={0.25}>
              engineering organizations.
            </SplitTextReveal>
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed text-crisp">
          AI AGENT FIREWALL integrates natively with your existing identity providers, SIEM dashboards, and compliance regimens.
        </p>
      </div>

      {/* 60fps Signature 1:1 Aspect Ratio Client Grid with 3D Tilt */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {compliance.map((item, idx) => {
          const Icon = item.icon;
          return (
            <TiltCard key={idx} maxTilt={14} data-cursor={item.cursor} className="rounded-2xl h-full">
              <div className="fps-square-cell rounded-2xl p-7 text-center group cursor-default w-full h-full flex flex-col items-center justify-between border border-white/15 shadow-xl">
                <div className="size-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#d9ba84] mb-4 group-hover:scale-110 group-hover:border-[#d9ba84]/50 group-hover:bg-[#d9ba84]/15 transition-all">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#d9ba84] transition-colors text-crisp">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="font-mono-code text-[11px] text-[#d9ba84] font-semibold mt-4 uppercase tracking-wider">
                  <ScrambleText text={item.metric} />
                </span>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* 60fps Luxury Pre-Footer Action Box */}
      <div className="fps-glass rounded-3xl p-10 md:p-16 relative overflow-hidden border border-white/20 shadow-2xl space-y-8">
        <div className="beam-line" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d9ba84] tracking-widest uppercase font-semibold">
              <span>ZERO-TRUST RUNTIME BOUNDARY</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight font-sans">
              AGENTS ACT. <br />
              <span className="text-[#d9ba84] font-bold">FIREWALL GOVERNS.</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-200 font-sans leading-relaxed text-crisp">
              Equip your engineering teams with autonomous AI agents (Claude Code, Cursor, Windsurf) without risking host root compromise or sensitive IP leakage.
            </p>
          </div>

          <div>
            <a
              href="https://github.com/devmishra2049/ai-agent-firewall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_0_30px_rgba(217,186,132,0.4)] hover:shadow-[0_0_50px_rgba(217,186,132,0.7)] cursor-pointer font-mono"
            >
              <span>GET STARTED ON GITHUB</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
