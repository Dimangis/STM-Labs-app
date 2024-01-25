import React from 'react';
import styles from './PostItem.module.css';
import PictureComponent from 'components/common/PictureComponent/PictureComponent';

interface PostItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.postItem}>
      <PictureComponent jpgPath1x={imageUrl} altText={title} />
      <h4 className={styles.postTitle}>{title}</h4>
      <p className={styles.postDescription}>{description}</p>
    </div>
  );
};

export default PostItem;
