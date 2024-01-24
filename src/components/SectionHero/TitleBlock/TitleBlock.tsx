import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import styles from './TitleBlock.module.css';
import jpgPath from '../../../../public/img/Avatars/JF.jpg';
import UserInfo from 'components/common/UserInfo/UserInfo';

export default function TitleBlock() {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleTheme}>
        <p className={styles.ThemeText}>Technology</p>
      </div>
      <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
      {/* <div className={styles.content}>
        <div className={styles.avatar}>
          <PictureComponent jpgPath1x={jpgPath} altText="Avatar for title block" />
        </div>
        <div className={styles.name}>Jason Francisco</div>
        <div className={styles.date}>August 20, 2022</div>
        <div className={styles.details}></div>
      </div> */}
      <UserInfo avatarSrc={jpgPath} userName="Jason Francisco" date="August 20, 2022" />
    </div>
  );
}
