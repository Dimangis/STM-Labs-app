import React from 'react';
import styles from './PostItem.module.css';

interface PostItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.postItem}>
      <img src={imageUrl} alt="Post" className={styles.postImage} />
      <h4 className={styles.postTitle}>{title}</h4>
      <p className={styles.postDescription}>{description}</p>
    </div>
  );
};

export default PostItem;
