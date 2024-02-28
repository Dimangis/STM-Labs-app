import { Logo } from 'components/Header';
import style from '../Footer.modules.css';
import styles from './Bot.modules.css';
import Text from 'components/common/Text/Text';

export default function Bot() {
  return (
    <div className={styles.botContainer}>
      <Logo />
      <div className={styles.policyBlock}>
        <a href="link/to/your/download/file" download>
          <Text variant="paragraph" element="span" link={true}>
            Terms of Use
          </Text>
        </a>
        <a href="link/to/your/download/file" download>
          <Text variant="paragraph" element="span" link={true}>
            Privacy Policy
          </Text>
        </a>
        <a href="link/to/your/download/file" download>
          <Text variant="paragraph" element="span" link={true}>
            Cookie Policy
          </Text>
        </a>
      </div>
    </div>
  );
}
