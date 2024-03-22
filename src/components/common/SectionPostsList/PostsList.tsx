import { useEffect, useState } from 'react';
import styles from './PostsList.modules.css';
import PostItem from './PostItem/PostItem';
import { useFetch } from 'components/hooks/useFetch';
import { CircularProgress } from '@mui/material';

const PostsList = () => {
  // const [postsData, setPostsData] = useState({});

  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const response = await get('/PostPreview');
  //       setPostsData(response.data);
  //     } catch (error) {
  //       console.error('GETPOST', error);
  //     }
  //   };
  //   getPost();
  // }, []);
  const postsData = useFetch('/PostPreview');
  // useEffect(() => {
  // }, [postsData]);

  const posts = Array.isArray(postsData) ? (
    postsData.map((post, index) => (
      <li key={index} className={styles.postItem}>
        <PostItem imageUrl={post.url} title={post.title} description={post.description} userInfo={post.userInfo} />
      </li>
    ))
  ) : (
    <>
      <li>
        <CircularProgress />
      </li>
      <li>
        <CircularProgress />
      </li>
      <li>
        <CircularProgress />
      </li>
    </>
  );

  return (
    <>
      <ul className={styles.postsListContainer}>{posts}</ul>
      <button className={styles.btnAllPost}>Viev All Post</button>
    </>
  );
};

export default PostsList;
