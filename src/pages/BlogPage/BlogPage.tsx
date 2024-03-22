import Hero from 'components/SectionHero/Hero';
import TitleBlog from 'components/TitleBlog/TitleBlog';
import Aside from 'components/common/Aside/Aside';
import PostsList from 'components/common/SectionPostsList/PostsList';

export function BlogPage() {
  return (
    <>
      <TitleBlog />
      <Hero />
      <PostsList />
      <Aside />
    </>
  );
}
