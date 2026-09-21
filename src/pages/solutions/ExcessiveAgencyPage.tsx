import React, { useState } from 'react';
import { AlertOctagon, Terminal, UserCheck, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { Link } from 'react-router-dom';
import { SectionBeamHeader } from '../../components/layout/SectionBeamHeader';
import { ScrambleText } from '../../components/animations/ScrambleText';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { SpiralScrollUnfold } from '../../components/animations/SpiralScrollUnfold';

export const ExcessiveAgencyPage: React.FC = () => {
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="04"
        title="HUMAN-IN-THE-LOOP CONTROLS // YOLO MODE MITIGATION"
        subtitle="JIT GATEWAY"
      />

      {/* Hero */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            TAME EXCESSIVE AGENCY &amp;
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] font-medium tracking-tight">
            <SplitTextReveal type="words" delay={0.25}>
              destructive actions.
            </SplitTextReveal>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          Autonomous agents running with `yolo` or `--dangerously-skip-permissions` can accidentally wipe developer home directories or delete production cloud databases in seconds. AI AGENT FIREWALL enforces strict runtime boundaries with Just-in-Time approval gates.
        </p>
      </div>

      {/* Interactive JIT Approval Gate Simulator */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#d9ba84] uppercase tracking-wider">
              <span className="font-bold">//</span>
              <ScrambleText text="JIT AUTHORIZATION GATEWAY // ARMED" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
              Just-in-Time Approval Simulator
            </h2>
            <p className="text-sm text-zinc-400">
              Experience how AI AGENT FIREWALL catches high-impact destructive commands and halts execution until confirmed by a developer.
            </p>
          </div>

          <div className="fps-glass rounded-2xl p-6 sm:p-8 font-mono-code text-xs space-y-6 shadow-2xl">
            <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-3 border-b border-white/10">
              <span className="flex items-center gap-2 text-amber-400 font-bold">
                [AGENT SUBPROCESS QUEUE: SUSPENDED]
              </span>
              <span className="text-[#d9ba84] font-bold px-2.5 py-1 rounded bg-[#d9ba84]/10 border border-[#d9ba84]/30 font-mono">
                POL_01_PROD_DESTRUCTION
              </span>
            </div>

            <div className="bg-black/60 p-5 rounded-xl border border-white/10 text-white space-y-2">
              <div className="text-zinc-500 text-[10px]">// Attempted Shell Command:</div>
              <div className="text-amber-300 font-bold text-sm">$ terraform destroy -target=module.production_db --auto-approve</div>
              <div className="text-zinc-400 text-[11px] pt-1">
                Target: 16 Production RDS Instances // Blast Radius: Critical Outage
              </div>
            </div>

            {/* Decision Box */}
            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-white font-bold flex items-center gap-2 text-xs">
                  <AlertOctagon className="size-4 text-[#d9ba84]" />
                  MANDATORY DEVELOPER CONFIRMATION REQUIRED
                </span>
                <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/5 font-mono">
                  VERDICT PENDING
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    sound.playInterceptAlert();
                    setApprovalStatus('rejected');
                  }}
                  data-cursor="BLOCK"
                  className="px-5 py-3 bg-red-950/60 hover:bg-red-900 border border-red-800 text-red-300 font-bold rounded-xl transition cursor-pointer text-xs uppercase tracking-wider"
                >
                  BLOCK &amp; TERMINATE (SIGKILL 137)
                </button>
                <button
                  onClick={() => {
                    sound.playVerified();
                    setApprovalStatus('approved');
                  }}
                  data-cursor="PERMIT"
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold rounded-xl transition cursor-pointer text-xs uppercase tracking-wider"
                >
                  APPROVE SINGLE EXECUTION
                </button>
              </div>

              {approvalStatus === 'rejected' && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-900 text-red-300 text-[11px] leading-relaxed font-mono">
                  ⛔ Subprocess killed with SIGKILL 137. Production infrastructure preserved. Incident logged to AI AGENT FIREWALL audit trail.
                </div>
              )}

              {approvalStatus === 'approved' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900 text-emerald-300 text-[11px] leading-relaxed">
                  ✔ Authorized by developer. Single execution token issued with 60-second TTL.
                </div>
              )}
            </div>
          </div>
        </div>
      </SpiralScrollUnfold>

      {/* 60fps Pre-Footer CTA */}
      <SpiralScrollUnfold intensity={1.1} reverse={true}>
        <div className="fps-glass rounded-3xl p-10 md:p-14 text-center space-y-6">
          <div className="beam-line" />
          <h3 className="text-3xl font-normal text-white uppercase tracking-tight">
            ELIMINATE DESTRUCTIVE BLAST RADIUS
          </h3>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Run agents at full velocity without the fear of unintended database drops or rogue shell deletions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => sound.playClick()}
              data-cursor="DEMO"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(217,186,132,0.4)] transition-all cursor-pointer"
            >
              <span>Deploy JIT Safeguards</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </SpiralScrollUnfold>

    </div>
  );
};
