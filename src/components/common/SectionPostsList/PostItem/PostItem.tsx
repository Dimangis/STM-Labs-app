import React from 'react';
import styles from './PostItem.module.css';
import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import { PostData } from '../PostData';
import UserInfo from 'components/common/UserInfo/UserInfo';
import jpgPath from '../../../../../public/img/Avatars/JF.jpg';
import { HeaderText } from 'components/common/Text/TextObject';

interface PostItemProps {
  imageUrl: PostData['url']; //Благодаря такому синтаксису я передаю точную часть интерфейса PostData, а точнее url
  // означает тип объекта, который содержится в свойстве url объекта PostData.
  // Это делает код более гибким, и если вы измените тип url в PostData, то изменения также будут автоматически отражены в PostItem.tsx.
  title: string;
  description: string;
  userInfo: PostData['userInfo'];
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, title, description, userInfo }) => {
  const { jpg1x, jpg2x, png1x, png2x } = imageUrl;
  const { avatarSrc, userName, date } = userInfo;
  return (
    <div className={styles.postItem}>
      <PictureComponent jpgPath1x={jpg1x} jpgPath2x={jpg2x} pngPath1x={png1x} pngPath2x={png2x} altText={title} />
      <div className={styles.postTitleBox}>
        <h4 className={styles.postTitle}>{title}</h4>
      </div>
      <HeaderText content={description} fontSize="24px" lineHeight="28px" margin="20px 0" />
      {/* <p className={styles.postDescription}>{description}</p> */}
      <UserInfo avatarSrc={avatarSrc} userName={userName} date={date} />
    </div>
  );
};

export default PostItem;
