import { PageContainer } from 'components';
import styles from './HomePage.module.css';
import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/Hero';

export function HomePage() {
  return (
    <PageContainer>
      <Header />
      <Hero />
    </PageContainer>
    // <div className={styles.test}>
    //   <p>test</p>
    //   <p>tutu</p>
    // </div>
  );
}
