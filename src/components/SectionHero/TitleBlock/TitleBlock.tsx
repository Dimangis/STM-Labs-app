import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import styles from './TitleBlock.module.css';
import jpgPath from '../../../../public/img/Avatars/JF.jpg';
import UserInfo from 'components/common/UserInfo/UserInfo';

export default function TitleBlock() {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.blockContent}>
        <div className={styles.titleTheme}>
          <p className={styles.ThemeText}>Technology</p>
        </div>
        <h1 className={styles.h1}>
          The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing
        </h1>
        <UserInfo avatarSrc={jpgPath} userName="Jason Francisco" date="August 20, 2022" />
      </div>
    </div>
  );
}
