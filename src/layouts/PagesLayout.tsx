import { Outlet } from 'react-router';
import { Header, Footer } from '../components/ui';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
