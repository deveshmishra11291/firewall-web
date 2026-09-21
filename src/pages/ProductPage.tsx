import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, Network, Database, ChevronDown, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';
import { SectionBeamHeader } from '../components/layout/SectionBeamHeader';
import { ScrambleText } from '../components/animations/ScrambleText';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { TiltCard } from '../components/animations/TiltCard';
import { SpiralScrollUnfold } from '../components/animations/SpiralScrollUnfold';

export const ProductPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const attackSurfaces = [
    {
      title: 'Prompts & Skills',
      description: 'The natural-language instructions and community skills that shape how an agent interprets a task and decides what tools to invoke.',
      icon: Terminal,
      code: 'PROMPT_LAYER',
      cursor: 'PROMPT',
    },
    {
      title: 'Memory & RAG',
      description: 'The retained scratchpad context and retrieved document embeddings an agent queries to make autonomous decisions.',
      icon: Database,
      code: 'RAG_CONTEXT',
      cursor: 'RAG',
    },
    {
      title: 'MCP Servers & Tools',
      description: 'The Model Context Protocol servers and operating system tools available to an agent at runtime on the local machine.',
      icon: Cpu,
      code: 'TOOL_HARNESS',
      cursor: 'MCP',
    },
    {
      title: 'Identity & Egress',
      description: 'The developer credentials, API tokens, sensitive databases, and network sockets exposed whenever an agent executes.',
      icon: Network,
      code: 'SYS_EGRESS',
      cursor: 'EGRESS',
    },
  ];

  const supportedAgents = [
    'Claude Code',
    'Cursor',
    'GitHub Copilot',
    'Windsurf',
    'Devika CLI',
    'Custom MCP Agents',
  ];

  const faqs = [
    {
      q: 'Does AI AGENT FIREWALL cover MCP servers and agent skills?',
      a: 'Yes. AI AGENT FIREWALL actively discovers and monitors all Model Context Protocol (MCP) servers, tool endpoints, and custom skills connected to supported agents, including unapproved shadow AI tools and local server endpoints.',
    },
    {
      q: 'Can AI AGENT FIREWALL prevent attacks before they execute?',
      a: 'Yes. Through its Layer 1 Preflight Static AST Gate, code is analyzed before compilation or interpreter execution. If unauthorized capabilities (such as reverse shells or root deletes) are detected, execution is halted in under 0.8ms with zero cloud roundtrip overhead.',
    },
    {
      q: 'Is AI AGENT FIREWALL just passive monitoring?',
      a: 'No. While agent-firewall watch offers real-time terminal observability, agent-firewall run actively compiles and sandboxes code within a hardened WebAssembly (WASI wasm32-wasip1) container with instruction-level CPU fuel limits (1,000,000 cap) and 32MB memory bounds.',
    },
    {
      q: 'What kinds of agent risk does it address?',
      a: 'It neutralizes reverse shells (os.dup2, socket.connect), credential exfiltration (.env, ~/.aws/credentials over DNS/HTTP), filesystem destruction (shutil.rmtree, rm -rf), dynamic eval injections, infinite loop DoS, and unvetted MCP supply chain risks.',
    },
    {
      q: 'Will it work with the agents and tools we already use?',
      a: 'Yes. Universal zero-friction support for Claude Code, Cursor IDE, Windsurf, Devin, Devika CLI, Aider, GitHub Copilot, and custom autonomous agents without requiring model alterations.',
    },
    {
      q: 'Can we keep agent data completely inside our environment?',
      a: 'Yes. The entire preflight scanner and Wasmtime execution harness run 100% on the developer machine or self-hosted CI/CD runner. Source code, tokens, and telemetry never leave your security perimeter.',
    },
  ];

  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="01"
        title="SYSTEM ARCHITECTURE // ON-DEVICE SENSOR ENGINE"
        subtitle="DETERMINISTIC DEFENSE"
      />

      {/* Product Hero */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white uppercase">
          <SplitTextReveal type="words" delay={0.1}>
            SECURE THE AGENT
          </SplitTextReveal> <br />
          <span className="text-[#d9ba84] font-medium tracking-tight">
            <SplitTextReveal type="words" delay={0.25}>
              execution harness.
            </SplitTextReveal>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-2xl leading-relaxed">
          Don't just observe what agents do after the fact. Halt the wrong action before it executes. Protection starts directly on the developer endpoint with zero cloud round-trip latency.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            onClick={() => sound.playClick()}
            data-cursor="ACCESS"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#d9ba84] hover:bg-[#f0d8a8] text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(217,186,132,0.4)] transition-all cursor-pointer"
          >
            <span>Request Platform Access</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Attack Surface Section with 60fps SectionBeamHeader */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="space-y-12">
          <SectionBeamHeader
            number="02"
            title="ATTACK SURFACES IN AGENTIC HARNESSES"
            subtitle="4-TIER DEFENSE SURFACE"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {attackSurfaces.map((item, idx) => {
              const Icon = item.icon;
              return (
                <TiltCard key={idx} maxTilt={10} data-cursor={item.cursor} className="rounded-2xl h-full">
                  <div className="fps-glass rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-[#d9ba84]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d9ba84]">
                          <Icon className="size-5" />
                        </div>
                        <span className="font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">
                          <ScrambleText text={item.code} />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase">{item.title}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.description}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5 text-[10px] font-mono-code text-[#d9ba84] font-bold uppercase tracking-wider">
                      CONTINUOUS SENSOR AUDIT
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </SpiralScrollUnfold>

      {/* Discovered Agents Grid (1:1 Aspect Ratio Style with 3D Tilt) */}
      <SpiralScrollUnfold intensity={1.1} reverse={true}>
        <div className="space-y-8">
          <SectionBeamHeader
            number="03"
            title="SUPPORTED AGENT HARNESSES &amp; INTEGRATIONS"
            subtitle="UNIVERSAL COMPATIBILITY"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono-code text-xs">
            {supportedAgents.map((agent, idx) => (
              <TiltCard key={idx} maxTilt={14} data-cursor="HARNESS" className="rounded-2xl h-full">
                <div className="fps-square-cell rounded-2xl p-5 text-center group cursor-default w-full h-full flex flex-col items-center justify-between">
                  <span className="font-mono text-[10px] text-[#d9ba84] font-bold tracking-wider mb-2">[ACTIVE]</span>
                  <span className="text-white font-semibold text-xs tracking-wider uppercase">{agent}</span>
                  <span className="text-[10px] text-zinc-400 mt-2 font-mono">GOVERNED</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </SpiralScrollUnfold>

      {/* Product FAQ Accordion */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <div className="space-y-10">
          <SectionBeamHeader
            number="04"
            title="FREQUENTLY ASKED ARCHITECTURAL INQUIRIES"
            subtitle="SPECIFICATIONS"
          />

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setOpenFaq(isOpen ? null : idx);
                    }}
                    data-cursor="FAQ"
                    className="w-full flex items-center justify-between text-left py-2 font-normal text-white text-base sm:text-lg hover:text-[#d9ba84] transition-colors cursor-pointer uppercase tracking-tight"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#d9ba84]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="pt-3 pb-4 text-sm text-zinc-400 leading-relaxed font-sans max-w-3xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SpiralScrollUnfold>

    </div>
  );
};
