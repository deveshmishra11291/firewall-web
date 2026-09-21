import React from 'react';
import { Cpu, Layers, ShieldAlert, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { Link } from 'react-router-dom';
import { SectionBeamHeader } from '../../components/layout/SectionBeamHeader';
import { ScrambleText } from '../../components/animations/ScrambleText';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { SpiralScrollUnfold } from '../../components/animations/SpiralScrollUnfold';

export const McpRuntimePage: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="03"
        title="PROTOCOL DEFENSE // MODEL CONTEXT PROTOCOL (MCP)"
        subtitle="ISOLATION BOUNDARY"
      />

      {/* Hero */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            MODEL CONTEXT PROTOCOL
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] font-medium tracking-tight">
            <SplitTextReveal type="words" delay={0.25}>
              (mcp) runtime security.
            </SplitTextReveal>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          MCP allows agents to connect to local databases, terminals, and third-party SaaS integrations. AI AGENT FIREWALL vets, sandboxes, and governs MCP server execution to stop rogue tool privilege escalation.
        </p>
      </div>

      {/* 3 Pillars of MCP Security */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div data-cursor="MCP" className="fps-glass rounded-2xl p-8 space-y-5 hover:border-[#d9ba84]/50 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84] font-mono-code font-bold text-sm">
              01
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Shadow MCP Inventory</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Automatically scans local Claude Desktop, Cursor, and IDE configuration files to discover unapproved community MCP servers running on workstations.
            </p>
            <div className="pt-2 font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
              <ScrambleText text="SCAN_MCP_MANIFEST" />
            </div>
          </div>

          <div data-cursor="ISOLATE" className="fps-glass rounded-2xl p-8 space-y-5 hover:border-[#d9ba84]/50 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84] font-mono-code font-bold text-sm">
              02
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Protocol Sandboxing</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Isolates MCP server processes from the host kernel, preventing malicious servers from reading outside their designated repository scope.
            </p>
            <div className="pt-2 font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
              <ScrambleText text="ENFORCE_SYSCALL_JAIL" />
            </div>
          </div>

          <div data-cursor="GATE" className="fps-glass rounded-2xl p-8 space-y-5 hover:border-[#d9ba84]/50 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84] font-mono-code font-bold text-sm">
              03
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Tool Argument Gating</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Deep inspection of JSON-RPC parameters flags prompt injection payloads targeting local tool methods like bash execution and database updates.
            </p>
            <div className="pt-2 font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
              <ScrambleText text="GATE_RPC_PAYLOAD" />
            </div>
          </div>

        </div>
      </SpiralScrollUnfold>

      {/* 60fps Pre-Footer CTA */}
      <SpiralScrollUnfold intensity={1.1} reverse={true}>
        <div className="fps-glass rounded-3xl p-10 md:p-14 text-center space-y-6">
          <div className="beam-line" />
          <h3 className="text-3xl font-normal text-white uppercase tracking-tight">
            SECURE LOCAL MCP TOOL EXECUTION
          </h3>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Get total inventory and cryptographic runtime protection across all Model Context Protocol servers in your organization.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => sound.playClick()}
              data-cursor="DEMO"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(217,186,132,0.4)] transition-all cursor-pointer"
            >
              <span>Request MCP Shield Demo</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </SpiralScrollUnfold>

    </div>
  );
};
