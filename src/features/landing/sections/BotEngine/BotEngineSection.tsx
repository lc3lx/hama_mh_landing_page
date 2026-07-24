import { Text } from '@components/atoms/Text';
import { Card } from '@components/molecules/Card';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { BOT_ENGINE_CARDS, BOT_ENGINE_COPY } from '../../data/botEngine';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './BotEngineSection.module.css';

const ICON_LAYOUT_CLASS: Record<(typeof BOT_ENGINE_CARDS)[number]['id'], string> = {
  duration: styles.icon_duration,
  'market-type': styles.icon_marketType,
  'trading-pair': styles.icon_tradingPair,
  'daily-profit-target': styles.icon_dailyProfit,
  'daily-loss-limit': styles.icon_dailyLoss,
  'technical-indicator': styles.icon_technical,
  strategy: styles.icon_strategy,
  'signal-strength': styles.icon_signal,
  'current-bot-status': styles.icon_botStatus,
};

/**
 * AI Bot Engine — Figma 55:134 (title) + 524:1947–1949 (9 control cards)
 */
export function BotEngineSection() {
  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.botEngine}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.botEngine}
      data-figma-node={FIGMA_LANDING_NODES.botEngineTitle}
      aria-labelledby="bot-engine-heading"
    >
      <SectionTitle
        id="bot-engine-heading"
        className={`${styles.heading} motionSlideUp`}
        align="center"
        titleAs="h2"
        eyebrow={BOT_ENGINE_COPY.eyebrow}
        title={BOT_ENGINE_COPY.title}
        description={BOT_ENGINE_COPY.description}
      />

      <ul className={`${styles.grid} motionFadeIn`} role="list">
        {BOT_ENGINE_CARDS.map((card) => (
          <li key={card.id} className={styles.gridItem}>
            <Card
              as="article"
              variant="flat"
              padding="none"
              className={styles.card}
              data-figma-node={card.figmaNodeId}
            >
              <div className={styles.iconPlate} aria-hidden="true">
                <img
                  className={`${styles.icon} ${ICON_LAYOUT_CLASS[card.id]}`}
                  src={card.icon}
                  alt=""
                  width={card.iconWidth}
                  height={card.iconHeight}
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className={styles.copy}>
                <Text as="h3" variant="title" tone="heading" className={styles.cardTitle}>
                  {card.title}
                </Text>
                <Text as="p" variant="caption" tone="muted" className={styles.cardBody}>
                  {card.description}
                </Text>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
