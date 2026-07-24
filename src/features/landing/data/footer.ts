import { LANDING_SECTION_IDS } from '../constants/sectionIds';
import { scarAlphaLogo } from './header';

export type FooterLink = {
  id: string;
  label: string;
  href: string;
  /** Opens in a new tab when true (social destinations). */
  external?: boolean;
};

export type FooterNavGroup = {
  id: string;
  title: string;
  figmaNodeId: string;
  links: readonly FooterLink[];
};

export const FOOTER_COPY = {
  disclaimerBefore: 'By subscribing, you agree to our ',
  disclaimerLinkLabel: 'Privacy Policy',
  disclaimerAfter: ' and provide consent to receive updates from our company.',
  copyright: '© 2026 Scar Alpha AI. developed by Hul Company',
  logoAlt: 'Scar Alpha AI',
} as const;

/** Reuses Header logo asset — Figma footer mark 491:1579 matches Header 56:8085 brand. */
export const FOOTER_LOGO = {
  src: scarAlphaLogo,
  width: 142,
  height: 61,
  figmaNodeId: '491:1579',
} as const;

/**
 * Footer nav — General / Additional / Follow Us (Figma 385:1448).
 * Legal + social destinations are placeholders until product URLs exist.
 */
export const FOOTER_NAV_GROUPS: readonly FooterNavGroup[] = [
  {
    id: 'general',
    title: 'General',
    figmaNodeId: '385:1449',
    links: [
      {
        id: 'home',
        label: 'Home',
        href: `#${LANDING_SECTION_IDS.hero}`,
      },
      {
        id: 'how-it-works',
        label: 'How It Works',
        href: `#${LANDING_SECTION_IDS.features}`,
      },
      {
        id: 'ai-bot',
        label: 'AI Bot',
        href: `#${LANDING_SECTION_IDS.botEngine}`,
      },
      {
        id: 'trading',
        label: 'Trading',
        href: `#${LANDING_SECTION_IDS.trading}`,
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: `#${LANDING_SECTION_IDS.statistics}`,
      },
    ],
  },
  {
    id: 'additional',
    title: 'Additional',
    figmaNodeId: '385:1457',
    links: [
      {
        id: 'privacy',
        label: 'Privacy Policy',
        href: '#privacy',
      },
      {
        id: 'terms',
        label: 'Terms of Service',
        href: '#terms',
      },
    ],
  },
  {
    id: 'follow-us',
    title: 'Follow Us',
    figmaNodeId: '385:1462',
    links: [
      {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/',
        external: true,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        external: true,
      },
    ],
  },
] as const;

export const FOOTER_PRIVACY_HREF = '#privacy';
