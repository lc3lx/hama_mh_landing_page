import { useEffect } from 'react';
import { Badge } from '@components/atoms/Badge';
import { Button } from '@components/atoms/Button';
import { Text } from '@components/atoms/Text';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { BREAKPOINTS } from '@constants/breakpoints';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { useMinWidth } from '@hooks/useBreakpoint';
import { LazyImage, preloadHeroAsset } from '@performance';
import { HERO_COPY, heroAssets } from '../../data';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './HeroSection.module.css';

/**
 * Landing Hero — Figma 55:515 (copy) + 388:1507 (phones) + 388:1529/1530 (glows)
 */
export function HeroSection() {
  const isDesktopPhones = useMinWidth(BREAKPOINTS.tablet + 1); // >768 duo layout

  useEffect(() => {
    if (isDesktopPhones) {
      preloadHeroAsset(heroAssets.phonesDuo);
    }
  }, [isDesktopPhones]);

  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.hero}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.hero}
      data-figma-node={FIGMA_LANDING_NODES.heroCopy}
    >
      <div className={styles.glowLayer} aria-hidden="true">
        <img
          className={styles.glowLeft}
          src={heroAssets.glowLeft}
          alt=""
          width={754}
          height={596}
          decoding="async"
          loading="lazy"
          fetchPriority="low"
        />
        <img
          className={styles.glowRight}
          src={heroAssets.glowRight}
          alt=""
          width={646}
          height={646}
          decoding="async"
          loading="lazy"
          fetchPriority="low"
        />
      </div>

      <div className={styles.layout}>
        <div className={`${styles.copy} motionSlideUp`}>
          <Badge
            variant="soft"
            className={styles.eyebrow}
            startIcon={
              <img
                src={heroAssets.eyebrowShield}
                alt=""
                width={20}
                height={20}
                decoding="async"
                aria-hidden="true"
              />
            }
          >
            {HERO_COPY.eyebrow}
          </Badge>

          <Text as="h1" variant="hero" tone="heading" className={styles.title}>
            {HERO_COPY.title}
          </Text>

          <Text as="p" variant="body" tone="body" className={styles.description}>
            {HERO_COPY.description}
          </Text>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="md"
              type="button"
              aria-label={HERO_COPY.primaryCta}
              endIcon={
                <img
                  src={heroAssets.arrowRight}
                  alt=""
                  width={20}
                  height={20}
                  decoding="async"
                  aria-hidden="true"
                />
              }
            >
              {HERO_COPY.primaryCta}
            </Button>

            <Button
              variant="secondary"
              size="md"
              href={HERO_COPY.secondaryHref}
              className={styles.secondaryCta}
              aria-label={HERO_COPY.secondaryCta}
            >
              {HERO_COPY.secondaryCta}
            </Button>
          </div>
        </div>

        <div
          className={`${styles.visual} motionFadeIn`}
          data-figma-node={FIGMA_LANDING_NODES.heroPhones}
        >
          {isDesktopPhones ? (
            <LazyImage
              className={styles.phonesDuo}
              src={heroAssets.phonesDuo}
              alt="Scar Alpha AI mobile app preview on two phones"
              width={563}
              height={749}
              priority
            />
          ) : (
            <div className={styles.phonesStack}>
              <LazyImage
                className={styles.phone}
                src={heroAssets.phoneSplash}
                alt="Scar Alpha AI splash screen on iPhone"
                width={249}
                height={591}
              />
              <LazyImage
                className={styles.phone}
                src={heroAssets.phoneDashboard}
                alt="Scar Alpha AI dashboard on iPhone"
                width={249}
                height={591}
              />
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
