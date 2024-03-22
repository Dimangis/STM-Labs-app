import Hero from 'components/SectionHero/Hero';
import Aside from 'components/common/Aside/Aside';
import PostsList from 'components/common/SectionPostsList/PostsList';

export function HomePage() {
  return (
    <>
      <Hero />
      <Aside />
      <PostsList />
      <Aside marginTop="60px" />
    </>
  );
}
