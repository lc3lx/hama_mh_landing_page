import { PageShell } from '@components/layouts';
import { ScrollToTop } from '@components/atoms/ScrollToTop';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { useScrollReveal } from '@hooks/useScrollMotion';
import { useI18n } from '@i18n';
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
 * Landing feature entry — full page with scroll reveal + back-to-top.
 */
export function LandingFeature({ className }: LandingFeatureProps) {
  useScrollReveal();
  const { t, locale } = useI18n();

  return (
    <>
      <DocumentHead
        key={locale}
        seo={{
          title: t.seo.title,
          description: t.seo.description,
          openGraph: {
            title: t.seo.title,
            description: t.seo.description,
            siteName: t.seo.title,
          },
          twitter: {
            title: t.seo.title,
            description: t.seo.description,
          },
        }}
      />
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
      <ScrollToTop />
    </>
  );
}
