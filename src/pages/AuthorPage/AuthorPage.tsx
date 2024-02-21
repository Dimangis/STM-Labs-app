import { PageContainer } from 'components';
import Header from 'components/Header/Header';
import Aside from 'components/common/Aside/Aside';
import PostsList from 'components/common/SectionPostsList/PostsList';
import { postsDataArray } from 'components/common/SectionPostsList/PostData';
import Footer from 'components/Footer/Footer';

export function AuthorPage() {
  return (
    <>
      <Aside marginTop="60px" />
      <PostsList postsData={postsDataArray} />
      <Aside marginTop="60px" />
    </>
  );
}
