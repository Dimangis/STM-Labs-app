import React, { useEffect, useState } from 'react';
import styles from './PostsList.modules.css';
import PostItem from './PostItem/PostItem';
import { PostData } from './PostData';
import { get } from 'services/transpot';
import { images } from './images';

interface PostsListProps {
  postsData: PostData[];
}

const PostsList: React.FC<PostsListProps> = () => {
  const [postsData, setPostsData] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await get('/PostPreview');
        setPostsData(response.data);
      } catch (error) {
        console.error('GETPOST', error);
      }
    };
    getPost();
  }, []);

  // useEffect(() => {
  // }, [postsData]);

  const posts = Array.isArray(postsData)
    ? postsData.map((post, index) => (
        <li key={index} className={styles.postItem}>
          <PostItem imageUrl={post.url} title={post.title} description={post.description} userInfo={post.userInfo} />
        </li>
      ))
    : null;

  return (
    <>
      <ul className={styles.postsListContainer}>{posts}</ul>
      <button className={styles.btnAllPost}>Viev All Post</button>
    </>
  );
};

export default PostsList;
