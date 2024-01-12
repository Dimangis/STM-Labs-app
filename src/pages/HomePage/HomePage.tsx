import { PageContainer } from 'components';
import styles from './HomePage.module.css';
import Header from 'components/Header/Header';

export function HomePage() {
  return (
    <PageContainer>
      <Header />
    </PageContainer>
    // <div className={styles.test}>
    //   <p>test</p>
    //   <p>tutu</p>
    // </div>
  );
}
