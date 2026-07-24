import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { FEATURE_STRIP_ITEMS } from '../../data/featureStrip';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './FeatureStripSection.module.css';

/**
 * Feature Strip — Figma Group 3221 (388:1766)
 * Horizontal checklist of product capabilities under the Hero.
 */
export function FeatureStripSection() {
  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.featureStrip}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.strip}
      data-figma-node={FIGMA_LANDING_NODES.featureStrip}
      aria-label="Product highlights"
    >
      <ul className={`${styles.list} motionFadeIn`}>
        {FEATURE_STRIP_ITEMS.map((item) => (
          <li key={item.id} className={styles.item} data-figma-node={item.figmaNodeId}>
            <img
              className={styles.icon}
              src={item.iconSrc}
              alt=""
              width={20}
              height={20}
              decoding="async"
              loading="lazy"
              aria-hidden="true"
            />
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
