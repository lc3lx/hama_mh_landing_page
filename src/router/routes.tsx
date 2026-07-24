import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FIGMA_LANDING_NODES } from '@constants/figma';
import { ROUTES } from '@constants/routes';

const LandingPage = lazy(() =>
  import('@pages/Landing').then((m) => ({ default: m.LandingPage })),
);

const ComponentLabPage = lazy(() =>
  import('@pages/ComponentLab').then((m) => ({ default: m.ComponentLabPage })),
);

function RouteFallback() {
  return null;
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route
          path={ROUTES.landing}
          element={<LandingPage />}
          handle={{
            title: 'Landing',
            figmaNodeId: FIGMA_LANDING_NODES.desktopRoot,
          }}
        />
        <Route path={ROUTES.componentLab} element={<ComponentLabPage />} />
        <Route path="*" element={<Navigate to={ROUTES.landing} replace />} />
      </Routes>
    </Suspense>
  );
}
