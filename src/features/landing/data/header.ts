import logoUrl from '@assets/logos/scar-alpha-logo.svg';
import { registerAsset } from '@assets';

registerAsset({
  id: 'logo-scar-alpha',
  kind: 'logo',
  src: logoUrl,
  alt: 'Scar Alpha AI',
  format: 'svg',
  figmaNodeId: '56:8085',
  width: 142,
  height: 61,
});

export { logoUrl as scarAlphaLogo };
