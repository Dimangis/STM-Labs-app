import PostsList from 'components/common/SectionPostsList/PostsList';
import { postsDataArray } from 'components/common/SectionPostsList/PostData';
import AuthorFull from 'components/SectionAuthor/AuthorFull';

export function AuthorPage() {
  return (
    <>
      <AuthorFull />
      <PostsList postsData={postsDataArray} />
    </>
  );
}
