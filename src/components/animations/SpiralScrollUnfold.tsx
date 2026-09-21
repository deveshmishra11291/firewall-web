import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SpiralScrollUnfoldProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  reverse?: boolean;
}

export const SpiralScrollUnfold: React.FC<SpiralScrollUnfoldProps> = ({
  children,
  className = '',
  intensity = 1,
  reverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // 3D Spiral Unfolding Transformation
  const dirMultiplier = reverse ? -1 : 1;
  const rotateZ = useTransform(smoothProgress, [0, 1], [-5 * intensity * dirMultiplier, 0]);
  const rotateY = useTransform(smoothProgress, [0, 1], [6 * intensity * dirMultiplier, 0]);
  const rotateX = useTransform(smoothProgress, [0, 1], [4 * intensity, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.96, 1]);
  const y = useTransform(smoothProgress, [0, 1], [40 * intensity, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.35, 1], [0.65, 0.95, 1]);

  return (
    <div ref={ref} className="perspective-1200 will-change-transform">
      <motion.div
        style={{
          rotateZ,
          rotateY,
          rotateX,
          scale,
          y,
          opacity,
          transformStyle: 'preserve-3d',
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
