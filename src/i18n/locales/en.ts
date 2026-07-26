import type { Messages } from '../types';

export const en: Messages = {
  seo: {
    title: 'Scar Alpha AI',
    description: 'Scar Alpha AI — Smart AI Trading Bot for Binary Options',
  },
  a11y: {
    primaryNav: 'Primary',
    footerNav: 'Footer',
    backToTop: 'Back to top',
    switchLanguage: 'Switch language',
    productHighlights: 'Product highlights',
    tradeDirection: 'Trade direction preview',
  },
  header: {
    logoAlt: 'Scar Alpha AI',
    createAccount: 'Create Account',
    nav: {
      home: 'Home',
      howItWorks: 'How It Works',
      aiBot: 'AI Bot',
      trading: 'Trading',
      dashboard: 'Dashboard',
      pricing: 'Pricing',
    },
  },
  hero: {
    eyebrow: 'Premium AI-powered trading control',
    title: 'Scar Alpha AI — Smart AI Trading Bot for Binary Options',
    description:
      'Control your strategies, follow live trades, manage indicators, and trade through Binolla from one intelligent interface.',
    primaryCta: 'Create Account',
    secondaryCta: 'View Bot Preview',
    phonesDuoAlt: 'Scar Alpha AI mobile app preview on two phones',
    phoneSplashAlt: 'Scar Alpha AI splash screen on iPhone',
    phoneDashboardAlt: 'Scar Alpha AI dashboard on iPhone',
  },
  featureStrip: {
    items: {
      'ai-bot-controls': 'AI Bot Controls',
      'technical-indicators': 'Technical Indicators',
      'binolla-trading': 'Binolla Trading Integration',
      'trade-tracking': 'Real-Time Trade Tracking',
      'activation-key': 'Activation Key Access',
    },
  },
  features: {
    eyebrow: 'Product overview',
    title: 'One interface for AI-powered trading control',
    description:
      'Manage your AI bot, trading view, performance, and live trade insights from one premium interface.',
    cards: {
      'user-dashboard': {
        title: 'User Dashboard',
        description:
          'Track your balance, profits, losses, win rate, active trades, and bot status from one clear dashboard.',
      },
      'ai-bot-engine': {
        title: 'AI Bot Engine',
        description:
          'Choose market type, trading pair, technical indicator, strategy, amount, duration, profit target, and loss limit.',
      },
      'embedded-trading': {
        title: 'Embedded Trading',
        description:
          'Trade through the integrated Binolla view while keeping Scar Alpha AI signals and bot insights accessible.',
      },
      'trade-tracking': {
        title: 'Trade Tracking',
        description:
          'Follow live and completed trades with detailed results, strategies, indicators, and signal strength.',
      },
    },
  },
  pricing: {
    planTitle: 'Binary Options Plan • Pro',
    dailyReturn: 'Up to 1.5%',
    dailyReturnNote: 'Estimated Daily Return (Not Guaranteed)',
    amountLabel: 'Enter Amount ($)',
    disclaimer: 'Estimated results only — you may profit or lose.',
    estProfitLabel: 'Est. Profit',
    totalLabel: 'Total',
    cta: 'Estimate Plan',
    daysLabel: 'Duration in days',
    daysValue: (days) => `${days} days`,
    specs: [
      { label: 'Duration:', value: 'Up to 30 days' },
      { label: 'Minimum:', value: '100$' },
      { label: 'Risk Level:', value: 'Variable' },
      { label: 'Transparency:', value: 'Simulated Estimate Only' },
    ],
  },
  botEngine: {
    eyebrow: 'AI Bot engine',
    title: 'Control the AI Bot with precision',
    description:
      'A calm control center for market choice, strategy setup, signal insights, and risk controls.',
    cards: {
      duration: {
        title: 'Duration',
        description: 'Define the duration of each trade.',
      },
      'market-type': {
        title: 'Market Type',
        description: 'Choose the market you want to trade.',
      },
      'trading-pair': {
        title: 'Trading Pair',
        description: 'Select the trading pair that fits your strategy.',
      },
      'daily-profit-target': {
        title: 'Daily Profit Target',
        description: 'Set your daily profit target percentage.',
      },
      'daily-loss-limit': {
        title: 'Daily Loss Limit',
        description: 'Set your maximum daily loss limit.',
      },
      'technical-indicator': {
        title: 'Technical Indicator',
        description: 'Pick the indicator that guides your signals.',
      },
      strategy: {
        title: 'Strategy',
        description: 'Choose the strategy that matches your goals.',
      },
      'signal-strength': {
        title: 'Signal Strength',
        description: 'Adjust the minimum signal strength to consider.',
      },
      'current-bot-status': {
        title: 'Current Bot Status',
        description: 'Monitor the current status of your AI bot',
      },
    },
  },
  trading: {
    eyebrow: 'Trading integration',
    title: 'Trade through Binolla, manage everything from Scar Alpha AI',
    description:
      'Scar Alpha AI keeps the trading experience connected by displaying Binolla inside the app’s Trading page, while the bot dashboard, trades, strategies, indicators, and AI settings remain part of Scar Alpha AI.',
    binollaTitle: 'Binolla Trading Page',
    upLabel: 'UP',
    downLabel: 'DOWN',
    signalTitle: 'Scar Alpha Signal',
    rows: {
      indicator: { label: 'Indicator', value: 'RSI + MACD' },
      strategy: { label: 'Strategy', value: 'Trend Filter' },
      'market-type': { label: 'Market Type', value: 'Binolla' },
      strength: { label: 'Strength', value: '82%' },
    },
  },
  statistics: {
    eyebrow: 'Dashboard preview',
    title: 'Readable performance overview without clutter',
    metrics: {
      'current-balance': 'Current Balance',
      'today-profit': 'Today Profit',
      'today-loss': 'Today Loss',
      'win-rate': 'Win Rate',
    },
    tradesTitle: 'Recent Trades — Demo',
    tradesStatus: 'Bot Active · Subscription Monthly',
    tradeStrategies: {
      'eur-usd': 'Trend Filter',
      'gbp-jpy': 'RSI Reversal',
      'aud-cad': 'MACD Flow',
    },
    chartAlt: 'Current balance chart with 7-day range selected',
  },
  tradeTracking: {
    eyebrow: 'Trade tracking',
    title: 'Live and completed trades, clearly labeled',
    cards: {
      'live-trades': {
        title: 'Live Trades',
        description:
          'Demo preview with signal strength, strategy used, indicator used, market type, and result context.',
      },
      'completed-trades': {
        title: 'Completed Trades',
        description:
          'Demo preview with signal strength, strategy used, indicator used, market type, and result context.',
      },
      'profit-loss': {
        title: 'Profit / Loss Results',
        description:
          'Demo preview with signal strength, strategy used, indicator used, market type, and result context.',
      },
      timeline: {
        title: 'Trade Details Timeline',
        description:
          'Demo preview with signal strength, strategy used, indicator used, market type, and result context.',
      },
    },
  },
  security: {
    eyebrow: 'Security & access',
    title: 'Trust-focused account access',
    cards: {
      'secure-login': {
        title: 'Secure login and role-based system behind the scenes',
        description:
          'Subscription-based access and account status controls keep the experience private and controlled.',
      },
      'admin-approval': {
        title: 'Admin approval required',
        description:
          'Subscription-based access and account status controls keep the experience private and controlled.',
      },
      'activation-key': {
        title: 'Activation Key required',
        description:
          'Subscription-based access and account status controls keep the experience private and controlled.',
      },
    },
  },
  footer: {
    disclaimerBefore: 'By subscribing, you agree to our ',
    disclaimerLinkLabel: 'Privacy Policy',
    disclaimerAfter: ' and provide consent to receive updates from our company.',
    copyrightBefore: '© 2026 Scar Alpha AI. developed by ',
    copyrightCompany: 'Hul Company',
    logoAlt: 'Scar Alpha AI',
    groups: {
      general: {
        title: 'General',
        links: {
          home: 'Home',
          'how-it-works': 'How It Works',
          'ai-bot': 'AI Bot',
          trading: 'Trading',
          dashboard: 'Dashboard',
        },
      },
      additional: {
        title: 'Additional',
        links: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
        },
      },
      'follow-us': {
        title: 'Follow Us',
        links: {
          instagram: 'Instagram',
          linkedin: 'LinkedIn',
        },
      },
    },
  },
};
