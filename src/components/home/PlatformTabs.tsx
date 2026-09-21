import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sliders, ShieldAlert, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { Link } from 'react-router-dom';
import { SectionBeamHeader } from '../layout/SectionBeamHeader';
import { ScrambleText } from '../animations/ScrambleText';
import { SplitTextReveal } from '../animations/SplitTextReveal';
import { TiltCard } from '../animations/TiltCard';

interface TabItem {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: typeof Search;
  bullets: string[];
  mockData: {
    badge: string;
    details: string;
    metric: string;
  };
}

const TABS: TabItem[] = [
  {
    id: 'discover',
    name: '01 / DISCOVER',
    title: 'Know what is executing on every workstation.',
    description: 'Automated visibility into unmonitored agent harnesses, local Model Context Protocol (MCP) servers, and community extensions.',
    icon: Search,
    bullets: [
      'Discovers shadow AI agents across macOS, Linux, and Windows hosts',
      'Inventories local Claude Desktop, Cursor, and IDE configuration endpoints',
      'Continuous telemetry on agent subprocesses and tool invocations',
    ],
    mockData: {
      badge: 'DISCOVERY ENGINE // ARMED',
      details: 'Discovered: 4 Active Agents (Claude Code, Cursor, Copilot, Custom MCP)',
      metric: '100% VISIBILITY',
    },
  },
  {
    id: 'govern',
    name: '02 / GOVERN',
    title: 'Enforce deterministic least privilege.',
    description: 'Unified zero-trust policy engine applied across all CLI and IDE agent harnesses without changing underlying models.',
    icon: Sliders,
    bullets: [
      'Lock sensitive paths (~/.ssh, ~/.aws, ~/.env, /etc)',
      'Block unauthorized network destinations and outbound DNS exfiltration',
      'Mandate human-in-the-loop approval gates for destructive commands',
    ],
    mockData: {
      badge: 'POLICY ENGINE // ENFORCED',
      details: 'Active Ruleset: Zero-Trust Perimeter v2.4 (Strict Isolation)',
      metric: '0 SECRETS EXPOSED',
    },
  },
  {
    id: 'enforce',
    name: '03 / ENFORCE',
    title: 'Halt hostile tool calls at the syscall hook.',
    description: 'Sensitive actions intercepted directly on the device in under 1 millisecond with zero cloud round-trip latency.',
    icon: ShieldAlert,
    bullets: [
      'Sub-millisecond syscall interception (< 0.8ms local delay)',
      'Real-time argument sanitization for shell and tool commands',
      'Stops indirect prompt injection (DERAIL) and DNS tunneling',
    ],
    mockData: {
      badge: 'KERNEL HOOK // INTERCEPT',
      details: 'Syscall Interception: SIGKILL Issued on Destructive Shell Path',
      metric: '< 0.8MS LATENCY',
    },
  },
  {
    id: 'prove',
    name: '04 / PROVE',
    title: 'Cryptographic forensic audit trails.',
    description: 'Immutable flight recorder logs capturing prompt inputs, tool arguments, and kernel verdicts for internal audit and SOC 2 Type II compliance.',
    icon: FileText,
    bullets: [
      'Reconstruct entire agent sessions with contextual causality',
      'Forensic bundles formatted for SOC 2 Type II auditors',
      'Exportable JSON-LD cryptographic event proofs',
    ],
    mockData: {
      badge: 'AUDIT RECORDER // HASHED',
      details: 'Log Hash: sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f',
      metric: '100% AUDITABLE',
    },
  },
];

export const PlatformTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabItem>(TABS[0]);

  const handleTabClick = (tab: TabItem) => {
    sound.playClick();
    setActiveTab(tab);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 overflow-hidden">
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="02"
        title="CAPABILITIES MATRIX &amp; CONTROL PLANE"
        subtitle="END-TO-END EXECUTION LIFECYCLE"
      />

      {/* Main Section Header */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            EVERY AGENT DECISION
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] italic font-serif">
            <SplitTextReveal type="words" delay={0.25}>
              governed deterministically.
            </SplitTextReveal>
          </span>
        </h2>
      </div>

      {/* Split Layout: Vertical Menu + Display Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Vertical Tabs (60fps Editorial Menu) */}
        <div className="lg:col-span-4 flex flex-col gap-3 font-mono-code text-xs">
          {TABS.map((tab) => {
            const isSelected = activeTab.id === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                data-cursor="SELECT"
                className={`p-5 rounded-xl text-left transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#d9ba84] bg-white/10 text-white shadow-[0_0_25px_rgba(217,186,132,0.25)]'
                    : 'border-white/10 bg-black/60 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-black/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`size-8 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#d9ba84] text-black font-bold' : 'bg-white/10 text-zinc-300'
                  }`}>
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-bold tracking-wider">{tab.name}</span>
                </div>
                {isSelected && (
                  <span className="size-2 rounded-full bg-[#d9ba84] shadow-[0_0_10px_#d9ba84] animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Display Showcase Panel with 3D Tilt */}
        <div className="lg:col-span-8">
          <TiltCard maxTilt={5} glare={true} className="rounded-2xl">
            <div className="fps-glass rounded-2xl p-8 sm:p-12 relative min-h-[420px] flex flex-col justify-between shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d9ba84]/15 border border-[#d9ba84]/40 text-[10px] font-mono-code text-[#d9ba84] font-bold tracking-widest uppercase mb-4">
                  <span className="size-1.5 rounded-full bg-[#d9ba84] animate-pulse" />
                  <ScrambleText text={activeTab.mockData.badge} />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
                  {activeTab.title}
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-200 mt-3 max-w-xl leading-relaxed text-crisp">
                  {activeTab.description}
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 font-mono-code text-xs sm:text-sm text-zinc-100">
                {activeTab.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#d9ba84] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Telemetry Box */}
              <div className="p-4 bg-black/80 border border-white/15 rounded-xl font-mono-code text-xs space-y-2">
                <div className="flex items-center justify-between text-zinc-400 text-[11px] uppercase font-bold">
                  <span>SANDBOX KERNEL HARNESS STATE</span>
                  <span className="text-[#d9ba84] font-bold text-xs">{activeTab.mockData.metric}</span>
                </div>
                <div className="text-zinc-100 text-[12px] font-medium">
                  &gt; {activeTab.mockData.details}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono-code text-xs text-zinc-400 mt-6">
            <span>SPECIFICATION REFERENCE</span>
            <Link
              to="/product"
              onClick={() => sound.playClick()}
              data-cursor="SPECS"
              className="inline-flex items-center gap-1.5 text-[#d9ba84] hover:underline font-bold"
            >
              <span>Explore Platform</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </TiltCard>
    </div>

      </div>

    </section>
  );
};
