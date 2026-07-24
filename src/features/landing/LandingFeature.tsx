import { PageShell } from '@components/layouts';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { DocumentHead } from '@seo';
import { cn } from '@utils/cn';
import { HeaderSection } from './sections/Header';
import { HeroSection } from './sections/Hero';
import { FeatureStripSection } from './sections/FeatureStrip';
import { FeaturesSection } from './sections/Features';
import { PricingSection } from './sections/Pricing';
import { BotEngineSection } from './sections/BotEngine';
import { TradingSection } from './sections/Trading';
import { StatisticsSection } from './sections/Statistics';
import { TradeTrackingSection } from './sections/TradeTracking';
import { SecuritySection } from './sections/Security';
import { FooterSection } from './sections/Footer';
import type { LandingFeatureProps } from './types';
import styles from './LandingFeature.module.css';

/**
 * Landing feature entry.
 * Sections mount one at a time (Phase 4 approvals).
 */
export function LandingFeature({ className }: LandingFeatureProps) {
  return (
    <>
      <DocumentHead />
      <PageShell
        className={cn(styles.root, className)}
        data-figma-node={FIGMA_LANDING_NODES.desktopRoot}
      >
        <HeaderSection />
        <HeroSection />
        <FeatureStripSection />
        <FeaturesSection />
        <PricingSection />
        <BotEngineSection />
        <TradingSection />
        <StatisticsSection />
        <TradeTrackingSection />
        <SecuritySection />
        <FooterSection />
      </PageShell>
    </>
  );
}
