import React from 'react';
import styles from './UserInfo.modules.css';
import PictureComponent from '../PictureComponent/PictureComponent';

interface UserInfoProps {
  avatarSrc: string;
  userName: string;
  date: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ avatarSrc, userName, date }) => {
  return (
    <div>
      <div className={styles.userInfoContainer}>
        <PictureComponent jpgPath1x={avatarSrc} altText="Avatar for title block" borderRadius="100px" />
        <div className={`${styles.userInfoText} ${styles.userName}`}>{userName}</div>
        <div className={`${styles.userInfoText} ${styles.date}`}>{date}</div>
      </div>
    </div>
  );
};

export default UserInfo;
