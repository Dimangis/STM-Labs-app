import { Logo } from 'components/Header';
import style from '../Footer.modules.css';
import styles from './Bot.modules.css';

export default function Bot() {
  return (
    <div className={styles.botContainer}>
      <Logo />
      <div className={styles.policyBlock}>
        <a className={style.text} href="link/to/your/download/file" download>
          Terms of Use
        </a>
        <a className={style.text} href="link/to/your/download/file" download>
          Privacy Policy
        </a>
        <a className={style.text} href="link/to/your/download/file" download>
          Cookie Policy
        </a>
      </div>
    </div>
  );
}
