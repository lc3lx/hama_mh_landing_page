import { Badge } from '@components/atoms/Badge';
import { Text } from '@components/atoms/Text';
import { Card } from '@components/molecules/Card';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import {
  STATISTICS_CHART,
  STATISTICS_COPY,
  STATISTICS_METRICS,
  STATISTICS_TRADES,
} from '../../data/statistics';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './StatisticsSection.module.css';

const TONE_CLASS = {
  positive: styles.tone_positive,
  neutral: styles.tone_neutral,
  negative: styles.tone_negative,
} as const;

/**
 * Statistics — Figma 55:266 (title) + 55:274 (metrics) + 491:1487 (chart) + 55:299 (trades)
 *
 * Demo metrics/trades are intentional Figma preview data (typed source).
 * Chart asset is swappable via STATISTICS_CHART without layout redesign.
 */
export function StatisticsSection() {
  const hasMetrics = STATISTICS_METRICS.length > 0;
  const hasTrades = STATISTICS_TRADES.items.length > 0;
  const hasChart = Boolean(STATISTICS_CHART.src);

  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.statistics}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.statistics}
      data-figma-node={FIGMA_LANDING_NODES.statisticsTitle}
      aria-labelledby="statistics-heading"
    >
      <SectionTitle
        className={`${styles.heading} motionSlideUp`}
        align="center"
        titleAs="h2"
        eyebrow={STATISTICS_COPY.eyebrow}
        title={
          <span id="statistics-heading">{STATISTICS_COPY.title}</span>
        }
      />

      {hasMetrics ? (
        <ul
          className={`${styles.metrics} motionFadeIn`}
          data-figma-node={FIGMA_LANDING_NODES.statisticsMetrics}
        >
          {STATISTICS_METRICS.map((metric) => (
            <li key={metric.id} className={styles.metricItem}>
              <Card
                as="article"
                variant="flat"
                padding="none"
                className={styles.metricCard}
                data-figma-node={metric.figmaNodeId}
                aria-label={`${metric.label}: ${metric.value}`}
              >
                <p className={styles.metricLabel}>{metric.label}</p>
                <p className={`${styles.metricValue} ${TONE_CLASS[metric.tone]}`}>
                  {metric.value || '—'}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty} role="status">
          No metrics available
        </p>
      )}

      <div className={`${styles.panels} motionFadeIn`}>
        {hasChart ? (
          <figure
            className={styles.chart}
            data-figma-node={STATISTICS_CHART.figmaNodeId}
          >
            {/* Chart slot: replace <img> with a dynamic chart later via STATISTICS_CHART */}
            <img
              className={styles.chartImage}
              src={STATISTICS_CHART.src}
              alt={STATISTICS_CHART.alt}
              width={STATISTICS_CHART.width}
              height={STATISTICS_CHART.height}
              decoding="async"
              loading="lazy"
            />
          </figure>
        ) : (
          <p className={styles.empty} role="status">
            Chart unavailable
          </p>
        )}

        <Card
          as="article"
          variant="flat"
          padding="none"
          className={styles.trades}
          data-figma-node={STATISTICS_TRADES.figmaNodeId}
          aria-label={STATISTICS_TRADES.title}
        >
          <Text as="h3" variant="title" tone="heading" className={styles.tradesTitle}>
            {STATISTICS_TRADES.title}
          </Text>

          {hasTrades ? (
            <ul className={styles.tradeList}>
              {STATISTICS_TRADES.items.map((trade) => (
                <li key={trade.id} className={styles.tradeItem}>
                  <p className={styles.tradeText}>
                    <span>{trade.pair || '—'}</span>
                    <span className={styles.tradeSep} aria-hidden="true">
                      •
                    </span>
                    <span>{trade.strategy || '—'}</span>
                    <span className={styles.tradeSep} aria-hidden="true">
                      •
                    </span>
                    <span>{trade.result || '—'}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty} role="status">
              No recent trades
            </p>
          )}

          {STATISTICS_TRADES.status ? (
            <div className={styles.status}>
              <Badge variant="soft" className={styles.statusBadge}>
                {STATISTICS_TRADES.status}
              </Badge>
            </div>
          ) : null}
        </Card>
      </div>
    </SectionContainer>
  );
}
