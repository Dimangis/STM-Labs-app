import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { PageContainer } from 'components/common';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};
export default Layout;
