import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import HomeLayout from './layouts/HomeLayout';
import {
  Home,
  Instruments,
  Instrument,
  Advantages,
  Contact,
  About,
} from './pages';
const PagesLayout = lazy(() => import('./layouts/PagesLayout'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <PagesLayout />
            </Suspense>
          }
        >
          <Route path="/instrumentos" element={<Instruments />} />
          <Route path="/instrumentos/instrumento" element={<Instrument />} />
          <Route path="/ventajas" element={<Advantages />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>

        <Route path="/" element={<Navigate to={'/'} />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};
