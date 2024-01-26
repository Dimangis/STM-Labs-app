import React from 'react';
import styles from './PostItem.module.css';
import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import { PostData } from '../PostData';
import UserInfo from 'components/common/UserInfo/UserInfo';
import jpgPath from '../../../../../public/img/Avatars/JF.jpg';

interface PostItemProps {
  imageUrl: PostData['url']; //Благодаря такому синтаксису я передаю точную часть интерфейса PostData, а точнее url
  // означает тип объекта, который содержится в свойстве url объекта PostData.
  // Это делает код более гибким, и если вы измените тип url в PostData, то изменения также будут автоматически отражены в PostItem.tsx.
  title: string;
  description: string;
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, title, description }) => {
  const { jpg1x, jpg2x } = imageUrl;
  return (
    <div className={styles.postItem}>
      <PictureComponent jpgPath1x={jpg1x} jpgPath2x={jpg2x} altText={title} />
      <h4 className={styles.postTitle}>{title}</h4>
      <p className={styles.postDescription}>{description}</p>
      <UserInfo avatarSrc={jpgPath} userName="Jason Francisco" date="August 20, 2022" />
    </div>
  );
};

export default PostItem;
