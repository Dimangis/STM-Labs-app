import styles from './About.modules.css';
import style from '../Footer.modules.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h3 className={style.title}>About</h3>
      <p className={`${style.text} ${style.textDecoration} ${styles.description}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam
      </p>
      <div>
        <b className={styles.boldText}>Email: </b>
        <a href="mailto:info@jstemplate.net" className={style.text}>
          info@jstemplate.net
        </a>
      </div>
      <div>
        <b className={styles.boldText}>Phone: </b>
        <a href="tel:880123456789" className={style.text}>
          880 123 456 789
        </a>
      </div>
    </div>
  );
}
