import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { SectionBeamHeader } from '../layout/SectionBeamHeader';
import { ScrambleText } from '../animations/ScrambleText';
import { SplitTextReveal } from '../animations/SplitTextReveal';
import { TiltCard } from '../animations/TiltCard';

interface Post {
  name: string;
  handle: string;
  role: string;
  text: string;
  url: string;
}

const POSTS: Post[] = [
  {
    name: 'Simon Willison',
    handle: '@simonw',
    role: 'AI Researcher & Datasette Creator',
    text: 'Classic prompt injection attack here against Notion: hidden text (white on white) in a PDF which, when processed by Notion, causes their agent to gather confidential data from other pages and append it into a query string that gets passed to their functions_search() tool',
    url: 'https://x.com/simonw',
  },
  {
    name: 'Johann Rehberger',
    handle: '@wunderwuzzi23',
    role: 'Security Researcher',
    text: 'Claude Code - Data Exfiltration with DNS: I compromised Claude Code via prompt injection, read sensitive files from the machine, and exfiltrated the data via DNS. Happy to share this high-severity vulnerability has been fixed!',
    url: 'https://x.com/wunderwuzzi23',
  },
  {
    name: 'JER',
    handle: '@lifeofjer',
    role: 'Startup Founder',
    text: 'An AI agent (Cursor + Claude Opus 4.6) deleted our production database in 9 seconds using a Railway API call with zero confirmation. Then, when asked why, the agent apologized.',
    url: 'https://x.com/lifeofjer',
  },
  {
    name: 'Sebastien Guillemot',
    handle: '@SebastienGllmt',
    role: 'Engineer & Founder',
    text: 'Bad news: Claude nuked my entire dev machine. Claude decided to test a sandbox it was building by running `rm -rf` on my home directory. The sandbox didn\'t work. It\'s all gone.',
    url: 'https://x.com/SebastienGllmt',
  },
  {
    name: 'Alexey Grigorev',
    handle: '@Al_Grigor',
    role: 'DataTalksClub Founder',
    text: 'Claude Code wiped our production database with a Terraform command. It took down the DataTalksClub course platform and 2.5 years of submissions: homework, projects, and leaderboards. Automated snapshots were gone too.',
    url: 'https://x.com/Al_Grigor',
  },
  {
    name: 'Andrej Karpathy',
    handle: '@karpathy',
    role: 'AI Researcher',
    text: 'Feels a bit like the wild west of early computing, with computer viruses (now = malicious prompts hiding in web data/tools), and not well developed defenses (antivirus, or a lot more developed kernel/user space separation).',
    url: 'https://x.com/karpathy',
  },
  {
    name: 'Philipp Schmid',
    handle: '@_philschmid',
    role: 'Hugging Face Tech Lead',
    text: 'Using skip dangerous or yolo mode is still too risky. If you have to maintain an allow or deny list, share it below. Most agents support an allowlist for commands, but we need runtime enforcement.',
    url: 'https://x.com/_philschmid',
  },
  {
    name: 'Daniel San',
    handle: '@dani_avila7',
    role: 'Software Architect',
    text: '--dangerously-skip-permissions looks even riskier now. Those paths used to be protected even with the flag on. Now more than ever, run this in a sandbox, or skip it entirely and use runtime control.',
    url: 'https://x.com/dani_avila7',
  },
];

export const HeardOnX: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    sound.playClick();
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 overflow-hidden">
      {/* 60fps Section Beam Header */}
      <SectionBeamHeader
        number="03"
        title="PUBLIC DISCLOSURES &amp; INDUSTRY POSTMORTEMS"
        subtitle="FIELD EVIDENCE"
      />

      {/* Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white uppercase">
            <SplitTextReveal type="words" delay={0.1}>
              THE INCIDENTS
            </SplitTextReveal> <br />
            <span className="text-[#d9ba84] italic font-serif">
              <SplitTextReveal type="words" delay={0.25}>
                are already documented.
              </SplitTextReveal>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed text-crisp">
            Firsthand accounts from researchers, founders, and security teams when autonomous coding agents execute without runtime constraints.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            data-cursor="PREV"
            className="size-12 rounded-full border border-white/20 hover:border-[#d9ba84] bg-black/60 hover:bg-black/90 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
            aria-label="Previous quote"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            data-cursor="NEXT"
            className="size-12 rounded-full border border-white/20 hover:border-[#d9ba84] bg-black/60 hover:bg-black/90 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
            aria-label="Next quote"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel with 3D Tilt */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {POSTS.map((post, idx) => (
          <TiltCard key={idx} maxTilt={8} className="min-w-[340px] max-w-[380px] shrink-0 h-full">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              data-cursor="SOURCE"
              className="w-full h-full p-8 fps-glass rounded-2xl flex flex-col justify-between hover:border-[#d9ba84]/60 hover:-translate-y-1 transition-all duration-300 group snap-start shadow-2xl shadow-black/90 border border-white/15"
            >
              <p className="text-xs sm:text-[13px] text-zinc-100 leading-relaxed font-mono-code mb-8 text-crisp">
                "{post.text}"
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm tracking-wide">{post.name}</div>
                  <div className="text-[10px] text-zinc-400 font-sans">{post.role}</div>
                  <div className="text-[11px] text-[#d9ba84] font-mono-code font-semibold mt-0.5">
                    <ScrambleText text={post.handle} />
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-[#d9ba84] transition-colors" />
              </div>
            </a>
          </TiltCard>
        ))}
      </div>

    </section>
  );
};
