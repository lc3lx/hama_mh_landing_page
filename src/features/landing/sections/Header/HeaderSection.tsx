import { Button } from '@components/atoms/Button';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { LOCALE_META, useI18n } from '@i18n';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import { HEADER_NAV_ITEMS, scarAlphaLogo } from '../../data';
import styles from './HeaderSection.module.css';

/**
 * Landing Header — Figma App (55:584)
 * Logo + Navigation + language toggle + Create Account CTA.
 */
export function HeaderSection() {
  const { t, locale, toggleLocale } = useI18n();
  const switchLabel = LOCALE_META[locale].switchToLabel;

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
            alt={t.header.logoAlt}
            width={142}
            height={61}
            decoding="async"
          />
        </a>

        <nav className={styles.nav} aria-label={t.a11y.primaryNav}>
          <ul className={styles.navList}>
            {HEADER_NAV_ITEMS.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <a className={styles.navLink} href={item.href}>
                  {t.header.nav[item.id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.langToggle}
            onClick={toggleLocale}
            aria-label={t.a11y.switchLanguage}
            title={t.a11y.switchLanguage}
          >
            <span className={styles.langCode} lang={locale === 'en' ? 'ar' : 'en'}>
              {switchLabel}
            </span>
          </button>

          <div className={styles.cta}>
            <Button variant="primary" size="md" type="button">
              {t.header.createAccount}
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
