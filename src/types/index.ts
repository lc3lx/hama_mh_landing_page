export type { AppRoute } from '@constants/routes';
export type { BreakpointName } from '@constants/breakpoints';
export type { FigmaLandingNodeId } from '@constants/figma';
export type { LandingSectionId } from '@features/landing';
export type { RegisteredAsset, AssetKind, AssetFormat, AssetSourceSet } from '@assets';

export interface RouteHandle {
  title?: string;
  figmaNodeId?: string;
}
