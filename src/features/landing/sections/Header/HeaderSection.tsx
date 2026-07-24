import { Button } from '@components/atoms/Button';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import { HEADER_NAV_ITEMS, scarAlphaLogo } from '../../data';
import styles from './HeaderSection.module.css';

/**
 * Landing Header — Figma App (55:584)
 * Logo + Navigation + Create Account CTA. Not sticky (not in Figma).
 */
export function HeaderSection() {
  return (
    <SectionContainer
      as="header"
      id={LANDING_SECTION_IDS.header}
      spacing="none"
      background="default"
      className={styles.header}
      data-figma-node={FIGMA_LANDING_NODES.header}
    >
      <div className={styles.bar}>
        <a className={styles.logoLink} href={`#${LANDING_SECTION_IDS.hero}`}>
          <img
            className={styles.logo}
            src={scarAlphaLogo}
            alt="Scar Alpha AI"
            width={142}
            height={61}
            decoding="async"
          />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {HEADER_NAV_ITEMS.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button variant="primary" size="md" type="button">
            Create Account
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
