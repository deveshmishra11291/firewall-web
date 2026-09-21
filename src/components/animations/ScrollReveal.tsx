import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 40,
  className = '',
  once = true,
}) => {
  const getInitialVariants = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, scale: 0.98 };
      case 'down':
        return { opacity: 0, y: -distance, scale: 0.98 };
      case 'left':
        return { opacity: 0, x: distance, scale: 0.98 };
      case 'right':
        return { opacity: 0, x: -distance, scale: 0.98 };
      case 'zoom':
        return { opacity: 0, scale: 0.92, y: 15 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialVariants()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount: 0.15, margin: "0px 0px -50px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}> = ({ children, className = '', staggerDelay = 0.1, once = true }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
