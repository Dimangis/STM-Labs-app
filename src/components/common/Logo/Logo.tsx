import styles from './Logo.modules.css';
import LogoIcon from '../../../../public/img/SVG/Logo.svg';

export function Logo() {
  return (
    <div className={styles.container}>
      <LogoIcon width={36} height={36} color="var(--logo-fill-color)" />
      <h1 className={styles.Meta}>
        Meta<b className={styles.Blog}>Blog</b>
      </h1>
    </div>
  );
}
