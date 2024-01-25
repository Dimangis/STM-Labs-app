import React from 'react';
import styles from './PostsList.modules.css';
import PostItem from './PostItem/PostItem';
import { commonImagePath, postsDataArray } from './PostData';

interface PostsListProps {
  postsData: {
    postName: string;
    title: string;
    description: string;
  }[];
}

const PostsList: React.FC<PostsListProps> = ({ postsData }) => {
  const posts = postsData.map((post, index) => (
    <li key={index} className={styles.postItem}>
      <PostItem
        imageUrl={`${commonImagePath}${post.postName}@1x.jpg`}
        title={post.title}
        description={post.description}
      />
    </li>
  ));

  return <ul className={styles.postsListContainer}>{posts}</ul>;
};

export default PostsList;
