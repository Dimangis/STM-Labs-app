import styles from './About.modules.css';
import style from '../Footer.modules.css';
import Text from 'components/common/Text/Text';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <Text element="h4" variant="h4">
        About
      </Text>
      <Text variant="paragraph" element="p" textColor="secondary" padding="15px 0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam
      </Text>
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
