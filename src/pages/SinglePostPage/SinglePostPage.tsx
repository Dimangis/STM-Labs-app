import { PageContainer } from 'components';
import Header from 'components/Header/Header';
import PostsList from 'components/common/SectionPostsList/PostsList';
import { postsDataArray } from 'components/common/SectionPostsList/PostData';
import Footer from 'components/Footer/Footer';

export function SinglePostPage() {
  return (
    <>
      <PostsList postsData={postsDataArray} />
    </>

    // <div className={styles.test}>
    //   <p>test</p>
    //   <p>tutu</p>
    // </div>
  );
}
