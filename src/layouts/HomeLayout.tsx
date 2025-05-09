import { Outlet } from 'react-router';
import { Header, Footer } from '../components';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
