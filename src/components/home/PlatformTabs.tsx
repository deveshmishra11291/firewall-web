import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sliders, ShieldAlert, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
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
    telemetryTitle: string;
    details: string;
    metric: string;
  };
}

const TABS: TabItem[] = [
  {
    id: 'preflight',
    name: '01 / PREFLIGHT GATE',
    title: 'Zero-trust AST capability scan before compilation.',
    description: 'Intercepts code before it ever touches a compiler or interpreter. Analyzes token patterns and syntax trees to assign an objective 0–100 risk score.',
    icon: Search,
    bullets: [
      '39 zero-latency heuristic threat rules active on developer endpoints',
      'Detects reverse shells, bash subprocess spawns, and dynamic eval injections',
      'Enforces security presets (Data Analysis, Strict Sandbox, Network-Enabled)',
    ],
    mockData: {
      badge: 'PREFLIGHT AST ENGINE // ARMED',
      telemetryTitle: 'AI Agent Firewall Preflight State',
      details: 'Evaluated: Process [DENIED], FsWrite [RESTRICTED], Network [BLOCKED] // Score: 0/100',
      metric: 'PREFLIGHT PASS',
    },
  },
  {
    id: 'wasi',
    name: '02 / WASI RUNTIME',
    title: 'Sub-5ms WebAssembly execution with hard ceilings.',
    description: 'Allowed code is compiled to WebAssembly (wasm32-wasip1) and executed inside a locked Wasmtime sandbox with instruction-level fuel metering.',
    icon: Sliders,
    bullets: [
      'Instruction-level CPU fuel metering caps DoS and infinite loops (1,000,000 limit)',
      'Hardware-enforced memory boundary locked at 32 MB ceiling',
      'Preopened directory capabilities enforce strict sandbox filesystem boundaries',
    ],
    mockData: {
      badge: 'WASMTIME ENGINE // WASIP1',
      telemetryTitle: 'Wasmtime Execution Harness State',
      details: 'Memory: 32MB Cap // Fuel Consumed: 14,208 / 1,000,000 // Execution Time: 4.2ms',
      metric: 'WASI ISOLATED',
    },
  },
  {
    id: 'watcher',
    name: '03 / THREAT HUNTER',
    title: 'Real-time terminal watcher for coding agents.',
    description: 'Local CLI observability tool ($ agent-firewall watch) that monitors Claude Code, Cursor, Windsurf & Aider, catching malicious writes on the fly.',
    icon: ShieldAlert,
    bullets: [
      'Real-time directory filesystem watcher and process wrapper ($ agent-firewall run)',
      'Immediate quarantine of offending code to .firewall-quarantine/ before execution',
      'Catches duplicate agent loops and runaway self-modifying code generation',
    ],
    mockData: {
      badge: 'TERMINAL INSPECTOR // MONITORING',
      telemetryTitle: 'Threat Hunter Terminal State',
      details: 'Intercepted: Interactive socket reverse shell in src/network_helper.py -> Quarantined',
      metric: 'THREAT QUARANTINED',
    },
  },
  {
    id: 'corsair',
    name: '04 / GITHUB PR BOT',
    title: 'Automated Pull Request firewall with audit proofs.',
    description: 'Corsair webhook bridge intercepts Pull Requests modifying code, runs static AST preflight and WASI validation, and posts automated GitHub verdicts.',
    icon: FileText,
    bullets: [
      'Automated Pull Request review comments (PASSED or BLOCKED with risk telemetry)',
      'FastAPI orchestration engine communicating over Corsair webhook bridge (Port 3001)',
      'Cryptographic telemetry proofs attached to every Pull Request execution',
    ],
    mockData: {
      badge: 'CORSAIR WEBHOOK // GITHUB APP',
      telemetryTitle: 'Corsair GitHub Bridge State',
      details: 'PR #42: Passed AST static gating & 14,208 fuel check // Audit proof posted to GitHub',
      metric: 'PR PASSED',
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
      {/* Labeled Traveling Light Beam Header */}
      <SectionBeamHeader
        number="02"
        title="FIREWALL ARCHITECTURE &amp; EXECUTION GATES"
        subtitle="FOUR-STAGE ZERO-TRUST BOUNDARY"
      />

      {/* Main Section Header */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            EVERY AGENT ACTION
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] font-medium tracking-tight">
            <SplitTextReveal type="words" delay={0.25}>
              governed deterministically.
            </SplitTextReveal>
          </span>
        </h2>
      </div>

      {/* 2-Column Studio Grid: Left Borderless Tabs, Right Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Borderless Minimalist Vertical Tabs (Box-Free & Dot-Free) */}
        <div className="lg:col-span-4 flex flex-col space-y-2 font-mono text-xs">
          {TABS.map((tab, idx) => {
            const isSelected = activeTab.id === tab.id;
            const num = String(idx + 1).padStart(2, '0');
            const label = tab.name.replace(/^\d+\s*\/\s*/, '');
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`py-4 px-4 text-left transition-all duration-200 cursor-pointer flex items-center justify-between border-l-2 ${
                  isSelected
                    ? 'border-[#d9ba84] text-white bg-white/[0.04]'
                    : 'border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/30 hover:bg-white/[0.01]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold tabular-nums tracking-widest ${
                    isSelected ? 'text-[#d9ba84]' : 'text-zinc-600'
                  }`}>
                    {num}
                  </span>
                  <span className="w-[1px] h-3 bg-white/10" />
                  <span className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors ${
                    isSelected ? 'text-white font-semibold' : 'text-zinc-400'
                  }`}>
                    {label}
                  </span>
                </div>
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
                    {/* Dot-Free Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#d9ba84]/10 border border-[#d9ba84]/30 text-[10px] font-mono text-[#d9ba84] font-semibold tracking-widest uppercase mb-4">
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
                  <ul className="space-y-3 font-mono text-xs sm:text-sm text-zinc-100">
                    {activeTab.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-[#d9ba84] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Telemetry Box with Calligraphic State Header */}
                  <div className="p-4 bg-black/85 border border-white/15 rounded-xl font-mono text-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      {/* Calligraphic Sandbox Kernel Harness State */}
                      <span className="font-calligraphic text-lg sm:text-xl text-[#d9ba84] font-normal tracking-wide">
                        {activeTab.mockData.telemetryTitle}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded">
                        {activeTab.mockData.metric}
                      </span>
                    </div>
                    <div className="text-zinc-200 text-xs font-mono">
                      &gt; {activeTab.mockData.details}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400 mt-6">
                <span>SPECIFICATION REFERENCE</span>
                <a
                  href="https://github.com/devmishra2049/ai-agent-firewall#architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-1.5 text-[#d9ba84] hover:underline font-bold"
                >
                  <span>Architecture Docs</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

      </div>

    </section>
  );
};
