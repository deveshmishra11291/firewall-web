import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { TiltCard } from '../animations/TiltCard';
import { ScrambleText } from '../animations/ScrambleText';

interface CapabilityCardData {
  id: string;
  metric: string;
  metricColor?: string;
  label: string;
  sublabel: string;
  sublabelColor?: string;
  cursor: string;
}

const CARDS: CapabilityCardData[] = [
  {
    id: 'injection',
    metric: '99.98%',
    metricColor: 'text-white',
    label: 'DERAIL INJECTION BLOCK',
    sublabel: 'OWASP LLM01',
    sublabelColor: 'text-[#d9ba84]/90',
    cursor: 'INJECTION',
  },
  {
    id: 'latency',
    metric: '< 0.8ms',
    metricColor: 'text-[#d9ba84]',
    label: 'KERNEL HOOK LATENCY',
    sublabel: 'ZERO CLOUD DELAY',
    sublabelColor: 'text-emerald-400/95',
    cursor: 'LATENCY',
  },
  {
    id: 'mcp-tools',
    metric: '100+',
    metricColor: 'text-white',
    label: 'VETTED MCP PROTOCOLS',
    sublabel: 'SHADOW TOOL AUDIT',
    sublabelColor: 'text-[#d9ba84]/90',
    cursor: 'MCP TOOLS',
  },
  {
    id: 'compliance',
    metric: 'SOC 2',
    metricColor: 'text-white',
    label: 'TYPE II ATTESTATION',
    sublabel: 'CRYPTOGRAPHIC AUDIT',
    sublabelColor: 'text-[#d9ba84]/90',
    cursor: 'COMPLIANCE',
  },
];

interface AnimatedCardProps {
  card: CapabilityCardData;
  index: number;
  scrollY: MotionValue<number>;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ card, index, scrollY }) => {
  // Staggered physics profile for fluid sequential ripple across the 4 cards
  const springConfigs = [
    { stiffness: 95, damping: 24 },
    { stiffness: 85, damping: 22 },
    { stiffness: 80, damping: 21 },
    { stiffness: 72, damping: 19 },
  ];

  const smoothScrollY = useSpring(scrollY, {
    ...springConfigs[index % springConfigs.length],
    restDelta: 0.001,
  });

  // 3D Spatial Trajectory:
  // At scrollY = 0: Cards form a dramatic 3D perspective command cockpit arch
  // At scrollY = 220: Cards smoothly unfold, straighten, and lock into flat alignment
  // At scrollY = 500: Cards remain flat while in primary reading zone
  // At scrollY = 850: Cards tilt back in 3D parallax depth as Defense Simulator rises
  const yRotations = [
    [-18, 0, 0, 10],
    [-7, 0, 0, 4],
    [7, 0, 0, -4],
    [18, 0, 0, -10],
  ];

  const xRotations = [
    [15, 0, 0, -12],
    [18, 0, 0, -14],
    [18, 0, 0, -14],
    [15, 0, 0, -12],
  ];

  const zRotations = [
    [-5, 0, 0, 3],
    [-2, 0, 0, 1],
    [2, 0, 0, -1],
    [5, 0, 0, -3],
  ];

  const yOffsets = [
    [50, 0, 0, -35],
    [75, 0, 0, -55],
    [75, 0, 0, -55],
    [50, 0, 0, -35],
  ];

  const rotateY = useTransform(smoothScrollY, [0, 220, 500, 850], yRotations[index]);
  const rotateX = useTransform(smoothScrollY, [0, 220, 500, 850], xRotations[index]);
  const rotateZ = useTransform(smoothScrollY, [0, 220, 500, 850], zRotations[index]);
  const y = useTransform(smoothScrollY, [0, 220, 500, 850], yOffsets[index]);
  const scale = useTransform(smoothScrollY, [0, 220, 500, 850], [0.91, 1, 1, 0.94]);
  const opacity = useTransform(smoothScrollY, [0, 120, 650, 950], [0.85, 1, 1, 0.7]);

  return (
    <div className="perspective-1200 will-change-transform h-full">
      <motion.div
        style={{
          rotateY,
          rotateX,
          rotateZ,
          y,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
        }}
        className="h-full"
      >
        <TiltCard maxTilt={14} data-cursor={card.cursor} className="rounded-2xl h-full">
          <div className="fps-square-cell rounded-2xl p-6 group cursor-default w-full h-full flex flex-col justify-between items-center border border-white/15 shadow-2xl">
            <div className={`text-3xl sm:text-4xl font-mono-code font-extrabold ${card.metricColor || 'text-white'} group-hover:text-[#d9ba84] transition-colors text-crisp`}>
              {card.metric}
            </div>
            <div className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-200 mt-2 text-center font-medium text-crisp">
              <ScrambleText text={card.label} />
            </div>
            <span className={`text-[10px] ${card.sublabelColor || 'text-[#d9ba84]/80'} mt-1 font-mono-code font-bold`}>
              {card.sublabel}
            </span>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
};

export const HeroScrollCards: React.FC = () => {
  const { scrollY } = useScroll();

  return (
    <div className="pt-6 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CARDS.map((card, idx) => (
          <AnimatedCard
            key={card.id}
            card={card}
            index={idx}
            scrollY={scrollY}
          />
        ))}
      </div>
    </div>
  );
};
