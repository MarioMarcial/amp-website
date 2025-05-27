import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router';
import {
  Home,
  Instruments,
  Instrument,
  Advantages,
  Contact,
  About,
} from './pages';
const HomeLayout = lazy(() => import('./layouts/HomeLayout'));

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <HomeLayout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="/instrumentos" element={<Instruments />} />
          <Route path="/instrumentos/:id" element={<Instrument />} />
          <Route path="/ventajas" element={<Advantages />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>

        <Route path="/" element={<Navigate to={'/'} />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </HashRouter>
  );
};
