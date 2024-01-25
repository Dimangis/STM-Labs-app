import { PageContainer } from 'components';
import styles from './HomePage.module.css';
import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/Hero';
import Aside from 'components/common/Aside/Aside';
import PostsList from 'components/common/SectionPostsList/PostsList';
import { postsDataArray } from 'components/common/SectionPostsList/PostData';

export function HomePage() {
  return (
    <PageContainer>
      <Header />
      <Hero />
      <Aside />
      <PostsList postsData={postsDataArray} />
    </PageContainer>

    // <div className={styles.test}>
    //   <p>test</p>
    //   <p>tutu</p>
    // </div>
  );
}
