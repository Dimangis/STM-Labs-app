import styles from './TitleBlock.module.css';
import jpgPath from '../../../../public/img/Avatars/JF.jpg';
import UserInfo from 'components/common/UserInfo/UserInfo';
import Text from 'components/common/Text/Text';

export default function TitleBlock() {
  const currentPage: boolean = window.location.pathname === '/blog';

  return (
    <div className={currentPage ? styles.titleBlockSecondary : styles.titleBlockMain}>
      <div className={styles.blockContent}>
        <div className={styles.titleTheme}>
          <Text variant="subheader" element="h4">
            Technology
          </Text>
        </div>
        <Text variant="h2" element="h2" textColor={currentPage ? 'white' : undefined}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </Text>
        <UserInfo avatarSrc={jpgPath} userName="Jason Francisco" date="August 20, 2022" />
      </div>
    </div>
  );
}
