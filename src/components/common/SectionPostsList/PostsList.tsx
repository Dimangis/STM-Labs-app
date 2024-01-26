import React from 'react';
import styles from './PostsList.modules.css';
import PostItem from './PostItem/PostItem';
import { PostData, postsDataArray } from './PostData';
import { images } from './images';

interface PostsListProps {
  postsData: PostData[];
}

const PostsList: React.FC<PostsListProps> = ({ postsData }) => {
  const posts = postsData.map((post, index) => (
    <li key={index} className={styles.postItem}>
      <PostItem imageUrl={post.url} title={post.title} description={post.description} />
    </li>
  ));

  return (
    <>
      <ul className={styles.postsListContainer}>{posts}</ul>
      <button className={styles.btnAllPost}>Viev All Post</button>
    </>
  );
};

export default PostsList;
