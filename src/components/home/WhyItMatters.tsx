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
      title: 'Reverse Shells & RCE',
      subtitle: 'Attacker takes control of host shell.',
      description: 'Autonomous agents generate socket connects and spawn interactive reverse shells (std::process::Command, os.dup2, bash), granting root terminal access.',
      icon: ShieldAlert,
      code: 'REVERSE_SHELL_RCE',
      cursor: 'SHELL',
      defense: 'SIGKILL 137 (0.4ms)',
      severity: 'CRITICAL',
    },
    {
      title: 'Credential Exfiltration',
      subtitle: 'Private tokens leaked over DNS & HTTP.',
      description: 'Prompt-injected agents read sensitive files (.env, /etc/passwd, ~/.aws/credentials) and silently exfiltrate them via outbound socket payloads.',
      icon: Database,
      code: 'SECRET_EXFILTRATION',
      cursor: 'SECRETS',
      defense: 'SOCKET EGRESS JAIL',
      severity: 'HIGH',
    },
    {
      title: 'Filesystem Destruction',
      subtitle: 'Rogue wipes and unauthorized deletes.',
      description: 'Hallucinated or poisoned agents run destructive file commands (shutil.rmtree, rm -rf, truncate) that corrupt developer source repositories.',
      icon: EyeOff,
      code: 'DESTRUCTIVE_WIPE',
      cursor: 'DESTRUCTION',
      defense: 'CAP-STD ROOT LOCK',
      severity: 'CRITICAL',
    },
    {
      title: 'Runaway Loops & DoS',
      subtitle: 'Infinite generation freezes host CPU.',
      description: 'Recursive tool invocations and infinite generation loops exhaust CPU cycles. AI Agent Firewall enforces a strict 1,000,000 CPU fuel ceiling.',
      icon: Network,
      code: 'CPU_FUEL_EXHAUSTION',
      cursor: 'FUEL',
      defense: '1M CPU FUEL CAP',
      severity: 'HIGH',
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
          <span className="text-[#d9ba84] font-medium tracking-tight">
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
            <TiltCard key={idx} maxTilt={10} className="rounded-2xl h-full">
              <div
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

                {/* Clean Non-Directing Metadata Text Div */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-400 mt-6">
                  <span className="text-zinc-500 uppercase tracking-wider font-medium">DEFENSE</span>
                  <span className="text-[#d9ba84] font-bold tracking-wider">{threat.defense}</span>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>

    </section>
  );
};
