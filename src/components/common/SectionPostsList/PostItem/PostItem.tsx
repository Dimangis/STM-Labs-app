import React from 'react';
import styles from './PostItem.module.css';
import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import { PostData } from '../PostData';
import UserInfo from 'components/common/UserInfo/UserInfo';
import Text from 'components/common/Text/Text';
import imgg from '../../../../../public/img/Posts/Rectangle 38Car@1x.jpg';

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
        <Text variant="subheader" element="h4" textColor="blue">
          {title}
        </Text>
      </div>
      <Text variant="header" element="h3">
        {description}
      </Text>
      <div className={styles.userContainer}>
        <UserInfo avatarSrc={avatarSrc} userName={userName} date={date} />
      </div>
    </div>
  );
};

export default PostItem;
