import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppFloating from '../WhatsAppFloating/WhatsAppFloating';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
};

export default Layout;
