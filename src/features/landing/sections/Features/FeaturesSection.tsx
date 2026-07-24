import { Text } from '@components/atoms/Text';
import { Card } from '@components/molecules/Card';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { FEATURE_CARDS, FEATURES_COPY } from '../../data/features';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './FeaturesSection.module.css';

/**
 * Features section — Figma 55:31 (title) + 475:130 (subtitle) + 523:1840 (cards)
 */
export function FeaturesSection() {
  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.features}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.features}
      data-figma-node={FIGMA_LANDING_NODES.featuresTitle}
      aria-labelledby="features-heading"
    >
      <SectionTitle
        id="features-heading"
        className={`${styles.heading} motionSlideUp`}
        align="center"
        titleAs="h2"
        eyebrow={FEATURES_COPY.eyebrow}
        title={FEATURES_COPY.title}
        description={FEATURES_COPY.description}
      />

      <ul
        className={`${styles.grid} motionFadeIn`}
        data-figma-node={FIGMA_LANDING_NODES.featuresGrid}
      >
        {FEATURE_CARDS.map((card) => (
          <li key={card.id} className={styles.gridItem}>
            <Card
              as="article"
              variant="glow"
              padding="md"
              className={styles.card}
              data-figma-node={card.figmaNodeId}
            >
              <img
                className={styles.icon}
                src={card.iconSrc}
                alt=""
                width={32}
                height={32}
                decoding="async"
                loading="lazy"
                aria-hidden="true"
              />
              <Text as="h3" variant="title" tone="heading" className={styles.cardTitle}>
                {card.title}
              </Text>
              <Text as="p" variant="body" tone="body" className={styles.cardBody}>
                {card.description}
              </Text>
            </Card>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
