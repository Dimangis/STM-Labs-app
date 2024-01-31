import { PageContainer } from 'components';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/Hero';

export function BlogPage() {
  return (
    <>
      <PageContainer>
        <Header />
        <Hero />
      </PageContainer>
      <Footer />
    </>
  );
}
