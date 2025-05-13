import { Outlet } from 'react-router';
import { Header, Footer } from '../components/ui';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function HomeLayout() {
  useScrollToTop();
  return (
    <>
      <Header />
      <main className="bg-graydark">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
