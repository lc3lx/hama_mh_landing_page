import { Text } from '@components/atoms/Text';
import { Card } from '@components/molecules/Card';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { SectionContainer } from '@components/organisms/SectionContainer';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { SECURITY_CARDS, SECURITY_COPY } from '../../data/security';
import { LANDING_SECTION_IDS } from '../../constants/sectionIds';
import styles from './SecuritySection.module.css';

/**
 * Security & access — Figma 491:1572 (title + 55:386 / 55:370 / 55:378)
 */
export function SecuritySection() {
  const hasCards = SECURITY_CARDS.length > 0;

  return (
    <SectionContainer
      as="section"
      id={LANDING_SECTION_IDS.security}
      spacing="none"
      width="full"
      background="transparent"
      className={styles.security}
      data-figma-node={FIGMA_LANDING_NODES.security}
      aria-labelledby="security-heading"
    >
      <SectionTitle
        className={`${styles.heading} motionSlideUp`}
        align="center"
        titleAs="h2"
        eyebrow={SECURITY_COPY.eyebrow}
        title={<span id="security-heading">{SECURITY_COPY.title}</span>}
      />

      {hasCards ? (
        <ul className={`${styles.grid} motionFadeIn`}>
          {SECURITY_CARDS.map((card) => (
            <li key={card.id} className={styles.gridItem}>
              <Card
                as="article"
                variant="flat"
                padding="none"
                className={styles.card}
                data-figma-node={card.figmaNodeId}
                aria-label={card.title}
              >
                <img
                  className={styles.icon}
                  src={card.iconSrc}
                  alt=""
                  width={29}
                  height={29}
                  decoding="async"
                  loading="lazy"
                  aria-hidden="true"
                />
                <Text as="h3" variant="title" tone="heading" className={styles.cardTitle}>
                  {card.title}
                </Text>
                <Text as="p" variant="body" tone="body" className={styles.cardBody}>
                  {card.description || '—'}
                </Text>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty} role="status">
          No security cards available
        </p>
      )}
    </SectionContainer>
  );
}
