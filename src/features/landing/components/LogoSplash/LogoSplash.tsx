import { useEffect, useState } from 'react';
import { useI18n } from '@i18n';
import { cn } from '@utils/cn';
import { scarAlphaLogo } from '../../data';
import styles from './LogoSplash.module.css';

const HOLD_MS = 2600;
const EXIT_MS = 780;
const WAVE_FILTER_ID = 'scar-alpha-logo-wave';

export interface LogoSplashProps {
  onFinished: () => void;
}

/**
 * Full-viewport intro: oversized brand mark with a jelly / wave motion, then fade out.
 */
export function LogoSplash({ onFinished }: LogoSplashProps) {
  const { t } = useI18n();
  const [phase, setPhase] = useState<'play' | 'exit' | 'gone'>('play');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hold = reduced ? 180 : HOLD_MS;
    const exit = reduced ? 120 : EXIT_MS;
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = 'hidden';

    const exitTimer = window.setTimeout(() => setPhase('exit'), hold);
    const doneTimer = window.setTimeout(() => {
      html.style.overflow = previousOverflow;
      setPhase('gone');
      onFinished();
    }, hold + exit);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      html.style.overflow = previousOverflow;
    };
  }, [onFinished]);

  if (phase === 'gone') return null;

  return (
    <div
      className={cn(styles.overlay, phase === 'exit' && styles.exiting)}
      role="status"
      aria-live="polite"
      aria-label={t.a11y.splashLoading}
      aria-hidden={phase === 'exit'}
    >
      <div className={styles.vignette} />
      <div className={styles.glow} />

      <div className={styles.stage}>
        <div className={styles.wobble}>
          <svg
            className={styles.logo}
            viewBox="-24 -28 449 178"
            role="img"
            aria-label={t.header.logoAlt}
          >
            <defs>
              <filter
                id={WAVE_FILTER_ID}
                x="-18%"
                y="-40%"
                width="136%"
                height="180%"
                filterUnits="objectBoundingBox"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.018 0.04"
                  numOctaves="2"
                  seed="3"
                  result="noise"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="1.7s"
                    values="0.012 0.028;0.028 0.055;0.012 0.028"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="14"
                  xChannelSelector="R"
                  yChannelSelector="G"
                >
                  <animate
                    attributeName="scale"
                    dur="1.7s"
                    values="6;16;8;14;6"
                    repeatCount="indefinite"
                  />
                </feDisplacementMap>
              </filter>
            </defs>
            <image
              href={scarAlphaLogo}
              width="401"
              height="122"
              filter={`url(#${WAVE_FILTER_ID})`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
