import { PageContainer } from 'components';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/Hero';
import Aside from 'components/common/Aside/Aside';
import { postsDataArray } from 'components/common/SectionPostsList/PostData';
import PostsList from 'components/common/SectionPostsList/PostsList';

export function BlogPage() {
  return (
    <>
      <PageContainer>
        <Header />
        <Hero />
        <PostsList postsData={postsDataArray} />
        <Aside />
      </PageContainer>
      <Footer />
    </>
  );
}
