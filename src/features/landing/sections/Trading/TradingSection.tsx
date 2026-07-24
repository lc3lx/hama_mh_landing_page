import { Button } from '@components/atoms/Button';
import { Text } from '@components/atoms/Text';
import { Card } from '@components/molecules/Card';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import {
  TRADING_BINOLLA,
  TRADING_COPY,
  TRADING_SIGNAL,
} from '../../data/trading';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './TradingSection.module.css';

/**
 * Trading Integration — Figma 55:224 (copy) + 55:231 (Binolla) + 55:246 (Signal)
 * Candles chart asset: 488:1266
 */
export function TradingSection() {
  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.trading}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.trading}
      data-figma-node={FIGMA_LANDING_NODES.tradingCopy}
      aria-labelledby="trading-heading"
    >
      <div className={styles.layout}>
        <SectionTitle
          className={`${styles.copy} motionSlideUp`}
          align="start"
          titleAs="h2"
          eyebrow={TRADING_COPY.eyebrow}
          title={
            <span id="trading-heading">{TRADING_COPY.title}</span>
          }
          description={TRADING_COPY.description}
        />

        <div className={`${styles.cards} motionFadeIn`}>
          <Card
            as="article"
            variant="flat"
            padding="none"
            className={`${styles.panel} ${styles.binolla}`}
            data-figma-node={TRADING_BINOLLA.figmaNodeId}
            aria-label={TRADING_BINOLLA.title}
          >
            <div className={styles.binollaHeader}>
              <Text as="h3" variant="title" tone="heading" className={styles.cardTitle}>
                {TRADING_BINOLLA.title}
              </Text>
              <Text as="p" variant="body" tone="accent" className={styles.pair}>
                {TRADING_BINOLLA.pair}
              </Text>
            </div>

            <div className={styles.chartWell} data-figma-node={FIGMA_LANDING_NODES.tradingCandles}>
              <img
                className={styles.candles}
                src={TRADING_BINOLLA.candles}
                alt=""
                width={TRADING_BINOLLA.candlesWidth}
                height={TRADING_BINOLLA.candlesHeight}
                decoding="async"
                loading="lazy"
              />
            </div>

            <div className={styles.actions} role="group" aria-label="Trade direction preview">
              <Button
                type="button"
                variant="primary"
                size="md"
                className={styles.actionBtn}
                aria-label={`${TRADING_BINOLLA.upLabel} — preview control`}
              >
                {TRADING_BINOLLA.upLabel}
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="md"
                className={`${styles.actionBtn} ${styles.btnDown}`}
                aria-label={`${TRADING_BINOLLA.downLabel} — preview control`}
              >
                {TRADING_BINOLLA.downLabel}
              </Button>
            </div>
          </Card>

          <Card
            as="article"
            variant="flat"
            padding="none"
            className={`${styles.panel} ${styles.signal}`}
            data-figma-node={TRADING_SIGNAL.figmaNodeId}
            aria-label={TRADING_SIGNAL.title}
          >
            <Text as="h3" variant="title" tone="heading" className={styles.signalTitle}>
              {TRADING_SIGNAL.title}
            </Text>

            <dl className={styles.rows}>
              {TRADING_SIGNAL.rows.map((row) => (
                <div key={row.id} className={styles.row}>
                  <dt className={styles.rowLabel}>{row.label}</dt>
                  <dd
                    className={`${styles.rowValue} ${
                      row.tone === 'accent' ? styles.rowValueAccent : ''
                    }`}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
