import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhyItMatters } from '../components/home/WhyItMatters';
import { PlatformTabs } from '../components/home/PlatformTabs';
import { HeardOnX } from '../components/home/HeardOnX';
import { EnterpriseSection } from '../components/home/EnterpriseSection';
import { SpiralScrollUnfold } from '../components/animations/SpiralScrollUnfold';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Section 01: Why It Matters - Unfolds with Spiral Twist */}
      <SpiralScrollUnfold intensity={1} reverse={false}>
        <WhyItMatters />
      </SpiralScrollUnfold>

      {/* Section 02: Platform Capabilities - Counter-unfolds */}
      <SpiralScrollUnfold intensity={1.1} reverse={true}>
        <PlatformTabs />
      </SpiralScrollUnfold>

      {/* Section 03: Heard On X Disclosures - Unfolds */}
      <SpiralScrollUnfold intensity={0.9} reverse={false}>
        <HeardOnX />
      </SpiralScrollUnfold>

      {/* Section 04: Enterprise & Pre-Footer Banner - Unrolls into place */}
      <SpiralScrollUnfold intensity={1.2} reverse={true}>
        <EnterpriseSection />
      </SpiralScrollUnfold>
    </div>
  );
};
