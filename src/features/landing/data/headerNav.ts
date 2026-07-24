import { LANDING_SECTION_IDS } from '../constants/sectionIds';

export interface HeaderNavItem {
  label: string;
  href: string;
}

/** Navigation labels/order from Figma 55:588 */
export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { label: 'Home', href: `#${LANDING_SECTION_IDS.hero}` },
  { label: 'How It Works', href: `#${LANDING_SECTION_IDS.features}` },
  { label: 'AI Bot', href: `#${LANDING_SECTION_IDS.botEngine}` },
  { label: 'Trading', href: `#${LANDING_SECTION_IDS.trading}` },
  { label: 'Dashboard', href: `#${LANDING_SECTION_IDS.statistics}` },
  { label: 'Pricing', href: `#${LANDING_SECTION_IDS.pricing}` },
];
