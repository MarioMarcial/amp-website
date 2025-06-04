import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router';
import HomeLayout from './layouts/HomeLayout';
import { Spinner } from './components/ui';

const Home = lazy(() => import('./pages/Home'));
const Instruments = lazy(() => import('./pages/Instruments'));
const Instrument = lazy(() => import('./pages/Instrument'));
const Advantages = lazy(() => import('./pages/Advantages'));
const Contact = lazy(() => import('./pages/Contact'));

export const AppRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="instrumentos" element={<Instruments />} />
            <Route path="instrumentos/:id" element={<Instrument />} />
            <Route path="ventajas" element={<Advantages />} />
            <Route path="contacto" element={<Contact />} />
          </Route>

          <Route path="/" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
