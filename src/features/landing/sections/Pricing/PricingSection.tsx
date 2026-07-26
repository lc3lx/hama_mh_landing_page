import { useId, useState, type CSSProperties } from 'react';
import { Button } from '@components/atoms/Button';
import { Text } from '@components/atoms/Text';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import {
  DAILY_RETURN_RATE,
  DEFAULT_AMOUNT,
  DEFAULT_DAYS,
  estimateProfit,
  formatUsd,
  MAX_DAYS,
  MIN_AMOUNT,
  MIN_DAYS,
  PRICING_COPY,
  PRICING_SPECS,
} from '../../data/pricing';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './PricingSection.module.css';

function parseAmountInput(raw: string): number {
  const cleaned = raw.replace(/[^0-9.]/g, '');
  const value = Number.parseFloat(cleaned);
  return Number.isFinite(value) ? value : 0;
}

/**
 * Pricing calculator — Figma Group 427320811 (524:1946)
 * Binary Options Plan • Pro estimate card with amount + day controls.
 */
export function PricingSection() {
  const amountId = useId();
  const daysId = useId();
  const [amountInput, setAmountInput] = useState(`${DEFAULT_AMOUNT}$`);
  const [days, setDays] = useState<number>(DEFAULT_DAYS);

  const amount = parseAmountInput(amountInput);
  const profit = estimateProfit(amount, days);
  const total = amount + profit;
  const progress = ((days - MIN_DAYS) / (MAX_DAYS - MIN_DAYS)) * 100;

  const sliderVars = {
    '--slider-progress': `${progress}%`,
  } as CSSProperties;

  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.pricing}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.pricing}
      data-figma-node={FIGMA_LANDING_NODES.pricing}
      aria-labelledby="pricing-heading"
    >
      <div className={`${styles.card} motionFadeIn`}>
        <div className={styles.glow} aria-hidden="true" />

        <header className={styles.header}>
          <Text
            as="h2"
            id="pricing-heading"
            variant="display"
            tone="primary"
            className={styles.planTitle}
          >
            {PRICING_COPY.planTitle}
          </Text>
          <div className={styles.returnBlock}>
            <p className={styles.returnRate}>{PRICING_COPY.dailyReturn}</p>
            <p className={styles.returnNote}>{PRICING_COPY.dailyReturnNote}</p>
          </div>
        </header>

        <dl className={styles.specs}>
          {PRICING_SPECS.map((spec) => (
            <div key={spec.label} className={styles.specRow}>
              <dt className={styles.specLabel}>{spec.label}</dt>
              <dd className={styles.specValue}>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.amountField}>
          <label className={styles.amountLabel} htmlFor={amountId}>
            {PRICING_COPY.amountLabel}
          </label>
          <input
            id={amountId}
            className={styles.amountInput}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={amountInput}
            onChange={(event) => setAmountInput(event.target.value)}
            onBlur={() => {
              const next = Math.max(MIN_AMOUNT, parseAmountInput(amountInput));
              setAmountInput(`${Math.round(next)}$`);
            }}
            aria-describedby={`${amountId}-hint`}
          />
          <span id={`${amountId}-hint`} className={styles.srOnly}>
            Minimum amount {MIN_AMOUNT} dollars. Estimates use up to{' '}
            {DAILY_RETURN_RATE * 100}% daily return and are not guaranteed.
          </span>
        </div>

        <div className={styles.sliderBlock} style={sliderVars}>
          <label className={styles.srOnly} htmlFor={daysId}>
            Duration in days
          </label>
          <div className={styles.sliderTrackWrap}>
            <input
              id={daysId}
              className={styles.slider}
              type="range"
              min={MIN_DAYS}
              max={MAX_DAYS}
              step={1}
              value={days}
              onChange={(event) => setDays(Number(event.target.value))}
              aria-valuemin={MIN_DAYS}
              aria-valuemax={MAX_DAYS}
              aria-valuenow={days}
              aria-valuetext={`${days} days`}
            />
          </div>
          <div className={styles.sliderScale} aria-hidden="true">
            <span className={styles.scaleEdge}>{MIN_DAYS}</span>
            <span className={styles.scaleCurrent}>{days}</span>
            <span className={styles.scaleEdge}>{MAX_DAYS}</span>
          </div>
          <p className={styles.disclaimer}>{PRICING_COPY.disclaimer}</p>
        </div>

        <div className={styles.results}>
          <div className={styles.resultCard}>
            <p className={styles.resultLabel}>{PRICING_COPY.estProfitLabel}</p>
            <p className={styles.resultValue} aria-live="polite">
              {formatUsd(profit)}
            </p>
          </div>
          <div className={styles.resultCard}>
            <p className={styles.resultLabel}>{PRICING_COPY.totalLabel}</p>
            <p className={styles.resultValue} aria-live="polite">
              {formatUsd(total)}
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          type="button"
          fullWidth
          className={styles.cta}
        >
          {PRICING_COPY.cta}
        </Button>
      </div>
    </SectionContainer>
  );
}
