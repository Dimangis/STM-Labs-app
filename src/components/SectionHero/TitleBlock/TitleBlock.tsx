import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import styles from './TitleBlock.module.css';
import jpgPath from '../../../../public/img/Avatars/JF.jpg';
import UserInfo from 'components/common/UserInfo/UserInfo';
import { HeaderText } from 'components/common/Text/TextObject';
import { current } from '@reduxjs/toolkit';

export default function TitleBlock() {
  const currentPage: boolean = window.location.pathname === '/blog';

  return (
    <div className={currentPage ? styles.titleBlockSecondary : styles.titleBlockMain}>
      <div className={styles.blockContent}>
        <div className={styles.titleTheme}>
          <p className={styles.ThemeText}>Technology</p>
        </div>
        <h1>
          <HeaderText
            content="The Impact of Technology on the Workplace: How Technology is Changing"
            fontSize="36px"
            lineHeight="40px"
            color={currentPage ? 'white' : undefined}
          />
        </h1>
        <UserInfo avatarSrc={jpgPath} userName="Jason Francisco" date="August 20, 2022" />
      </div>
    </div>
  );
}
