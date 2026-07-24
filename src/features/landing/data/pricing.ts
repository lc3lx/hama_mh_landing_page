import sliderThumbUrl from '@assets/icons/pricing/slider-thumb.svg';
import { registerAsset } from '@assets';

registerAsset({
  id: 'icon-pricing-slider-thumb',
  kind: 'icon',
  src: sliderThumbUrl,
  alt: '',
  format: 'svg',
  figmaNodeId: '523:1933',
  width: 20,
  height: 20,
});

/**
 * Pricing calculator config — Figma 524:1946.
 *
 * Figma static Est. Profit ($112.50) / Total ($612.50) do not match
 * amount=100$ × days=8 × 1.5%. Those canvas numbers are treated as
 * placeholder mock content, not the calculation source of truth.
 * The live estimate uses the configurable rate below (aligned with
 * “Up to 1.5% Estimated Daily Return”).
 */
export const DAILY_RETURN_RATE = 0.015;
export const MIN_AMOUNT = 100;
export const MAX_DAYS = 30;
export const DEFAULT_AMOUNT = 100;
export const DEFAULT_DAYS = 8;
export const MIN_DAYS = 1;

/** @deprecated Prefer named exports above; kept for existing imports. */
export const PRICING_CALC = {
  dailyRate: DAILY_RETURN_RATE,
  minAmount: MIN_AMOUNT,
  minDays: MIN_DAYS,
  maxDays: MAX_DAYS,
  defaultAmount: DEFAULT_AMOUNT,
  defaultDays: DEFAULT_DAYS,
} as const;

/** Pricing calculator — Figma 524:1946 / info-block 523:1903 */
export const PRICING_COPY = {
  planTitle: 'Binary Options Plan • Pro',
  dailyReturn: `Up to ${DAILY_RETURN_RATE * 100}%`,
  dailyReturnNote: 'Estimated Daily Return (Not Guaranteed)',
  amountLabel: 'Enter Amount ($)',
  disclaimer: 'Estimated results only — you may profit or lose.',
  estProfitLabel: 'Est. Profit',
  totalLabel: 'Total',
  cta: 'Estimate Plan',
} as const;

export const PRICING_SPECS = [
  { label: 'Duration:', value: `Up to ${MAX_DAYS} days` },
  { label: 'Minimum:', value: `${MIN_AMOUNT}$` },
  { label: 'Risk Level:', value: 'Variable' },
  { label: 'Transparency:', value: 'Simulated Estimate Only' },
] as const;

export const pricingAssets = {
  sliderThumb: sliderThumbUrl,
} as const;

export function estimateProfit(amount: number, days: number): number {
  const safeAmount = Math.max(0, amount);
  const safeDays = Math.min(MAX_DAYS, Math.max(MIN_DAYS, days));
  return safeAmount * DAILY_RETURN_RATE * safeDays;
}

export function formatUsd(value: number): string {
  return `$${value.toFixed(2)}`;
}
