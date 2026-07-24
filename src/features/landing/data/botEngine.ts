import iconDuration from '@assets/images/bot-engine/duration.png';
import iconDailyProfit from '@assets/images/bot-engine/daily-profit.png';
import iconStrategy from '@assets/images/bot-engine/strategy.png';
import iconMarketType from '@assets/images/bot-engine/market-type.png';
import iconDailyLoss from '@assets/images/bot-engine/daily-loss.png';
import iconSignalStrength from '@assets/images/bot-engine/signal-strength.png';
import iconTradingPair from '@assets/images/bot-engine/trading-pair.png';
import iconTechnicalIndicator from '@assets/images/bot-engine/technical-indicator.png';
import iconBotStatus from '@assets/images/bot-engine/bot-status.png';
import { registerAsset } from '@assets';

registerAsset({
  id: 'img-bot-engine-duration',
  kind: 'image',
  src: iconDuration,
  alt: '',
  format: 'png',
  figmaNodeId: '488:148',
  width: 51,
  height: 74,
});

registerAsset({
  id: 'img-bot-engine-daily-profit',
  kind: 'image',
  src: iconDailyProfit,
  alt: '',
  format: 'png',
  figmaNodeId: '488:151',
  width: 74,
  height: 65,
});

registerAsset({
  id: 'img-bot-engine-strategy',
  kind: 'image',
  src: iconStrategy,
  alt: '',
  format: 'png',
  figmaNodeId: '488:142',
  width: 51,
  height: 78,
});

registerAsset({
  id: 'img-bot-engine-market-type',
  kind: 'image',
  src: iconMarketType,
  alt: '',
  format: 'png',
  figmaNodeId: '488:133',
  width: 70,
  height: 69,
});

registerAsset({
  id: 'img-bot-engine-daily-loss',
  kind: 'image',
  src: iconDailyLoss,
  alt: '',
  format: 'png',
  figmaNodeId: '488:154',
  width: 61,
  height: 67,
});

registerAsset({
  id: 'img-bot-engine-signal-strength',
  kind: 'image',
  src: iconSignalStrength,
  alt: '',
  format: 'png',
  figmaNodeId: '488:157',
  width: 71,
  height: 64,
});

registerAsset({
  id: 'img-bot-engine-trading-pair',
  kind: 'image',
  src: iconTradingPair,
  alt: '',
  format: 'png',
  figmaNodeId: '488:136',
  width: 77,
  height: 50,
});

registerAsset({
  id: 'img-bot-engine-technical-indicator',
  kind: 'image',
  src: iconTechnicalIndicator,
  alt: '',
  format: 'png',
  figmaNodeId: '488:139',
  width: 66,
  height: 68,
});

registerAsset({
  id: 'img-bot-engine-bot-status',
  kind: 'image',
  src: iconBotStatus,
  alt: '',
  format: 'png',
  figmaNodeId: '488:160',
  width: 71,
  height: 72,
});

export const BOT_ENGINE_COPY = {
  eyebrow: 'AI Bot engine',
  title: 'Control the AI Bot with precision',
  description:
    'A calm control center for market choice, strategy setup, signal insights, and risk controls.',
} as const;

export type BotEngineCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
  figmaNodeId: string;
  /** Figma image frame size (1x) */
  iconWidth: number;
  iconHeight: number;
  /** Offset inside 85×85 plate (image left/top − plate left/top) */
  iconOffsetX: number;
  iconOffsetY: number;
};

/**
 * Desktop 3×3 order matches Figma columns 524:1949 / 524:1948 / 524:1947
 * (row-major: Duration → Market Type → Trading Pair → …).
 *
 * Icon geometry from Figma image nodes relative to plate Rectangle 1 (85×85).
 */
export const BOT_ENGINE_CARDS: readonly BotEngineCard[] = [
  {
    id: 'duration',
    title: 'Duration',
    description: 'Define the duration of each trade.',
    icon: iconDuration,
    figmaNodeId: '488:89',
    iconWidth: 51,
    iconHeight: 74,
    iconOffsetX: 17,
    iconOffsetY: 6,
  },
  {
    id: 'market-type',
    title: 'Market Type',
    description: 'Choose the market you want to trade.',
    icon: iconMarketType,
    figmaNodeId: '55:172',
    iconWidth: 70,
    iconHeight: 69,
    iconOffsetX: 8,
    iconOffsetY: 8,
  },
  {
    id: 'trading-pair',
    title: 'Trading Pair',
    description: 'Select the trading pair that fits your strategy.',
    icon: iconTradingPair,
    figmaNodeId: '488:17',
    iconWidth: 77,
    iconHeight: 50,
    iconOffsetX: 4,
    iconOffsetY: 18,
  },
  {
    id: 'daily-profit-target',
    title: 'Daily Profit Target',
    description: 'Set your daily profit target percentage.',
    icon: iconDailyProfit,
    figmaNodeId: '488:97',
    iconWidth: 74,
    iconHeight: 65,
    iconOffsetX: 6,
    iconOffsetY: 10,
  },
  {
    id: 'daily-loss-limit',
    title: 'Daily Loss Limit',
    description: 'Set your maximum daily loss limit.',
    icon: iconDailyLoss,
    figmaNodeId: '488:105',
    iconWidth: 61,
    iconHeight: 67,
    iconOffsetX: 12,
    iconOffsetY: 9,
  },
  {
    id: 'technical-indicator',
    title: 'Technical Indicator',
    description: 'Pick the indicator that guides your signals.',
    icon: iconTechnicalIndicator,
    figmaNodeId: '488:25',
    iconWidth: 66,
    iconHeight: 68,
    iconOffsetX: 10,
    iconOffsetY: 9,
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Choose the strategy that matches your goals.',
    icon: iconStrategy,
    figmaNodeId: '488:33',
    iconWidth: 51,
    iconHeight: 78,
    iconOffsetX: 17,
    iconOffsetY: 3,
  },
  {
    id: 'signal-strength',
    title: 'Signal Strength',
    description: 'Adjust the minimum signal strength to consider.',
    icon: iconSignalStrength,
    figmaNodeId: '488:113',
    iconWidth: 71,
    iconHeight: 64,
    iconOffsetX: 7,
    iconOffsetY: 11,
  },
  {
    id: 'current-bot-status',
    title: 'Current Bot Status',
    description: 'Monitor the current status of your AI bot',
    icon: iconBotStatus,
    figmaNodeId: '488:121',
    iconWidth: 71,
    iconHeight: 72,
    iconOffsetX: 7,
    iconOffsetY: 7,
  },
] as const;
