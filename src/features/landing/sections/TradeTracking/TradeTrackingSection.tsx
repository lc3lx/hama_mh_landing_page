import { Text } from '@components/atoms/Text';
import { Card } from '@components/molecules/Card';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import {
  TRADE_TRACKING_CARDS,
  TRADE_TRACKING_COPY,
} from '../../data/tradeTracking';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './TradeTrackingSection.module.css';

/**
 * Trade Tracking — Figma 55:315 (title) + 55:323–55:353 (4 cards)
 */
export function TradeTrackingSection() {
  const hasCards = TRADE_TRACKING_CARDS.length > 0;

  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.tradeTracking}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.tradeTracking}
      data-figma-node={FIGMA_LANDING_NODES.tradeTracking}
      aria-labelledby="trade-tracking-heading"
    >
      <SectionTitle
        className={`${styles.heading} motionSlideUp`}
        align="center"
        titleAs="h2"
        eyebrow={TRADE_TRACKING_COPY.eyebrow}
        title={
          <span id="trade-tracking-heading">{TRADE_TRACKING_COPY.title}</span>
        }
      />

      {hasCards ? (
        <ul className={`${styles.grid} motionFadeIn`}>
          {TRADE_TRACKING_CARDS.map((card) => (
            <li key={card.id} className={styles.gridItem}>
              <Card
                as="article"
                variant="glow"
                padding="none"
                className={styles.card}
                data-figma-node={card.figmaNodeId}
                aria-label={card.title}
              >
                <img
                  className={styles.icon}
                  src={card.iconSrc}
                  alt=""
                  width={29}
                  height={29}
                  decoding="async"
                  loading="lazy"
                  aria-hidden="true"
                />
                <Text as="h3" variant="title" tone="heading" className={styles.cardTitle}>
                  {card.title}
                </Text>
                <Text as="p" variant="body" tone="body" className={styles.cardBody}>
                  {card.description || '—'}
                </Text>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty} role="status">
          No trade tracking cards available
        </p>
      )}
    </SectionContainer>
  );
}
