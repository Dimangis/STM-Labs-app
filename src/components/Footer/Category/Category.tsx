import { HeaderText, LinkText } from 'components/common/Text/TextObject';
import styles from '../Footer.modules.css';

export default function Category() {
  return (
    <div>
      <HeaderText content="Category" fontSize="18px" lineHeight="28px" />
      <ul className={styles.list}>
        <li>
          <a href="">
            <LinkText content="Lifestyle" />
          </a>
        </li>
        <li>
          <a href="">
            <LinkText content="Technology" />
          </a>
        </li>
        <li>
          <a href="">
            <LinkText content="Travel" />
          </a>
        </li>
        <li>
          <a href="">
            <LinkText content="Business" />
          </a>
        </li>
        <li>
          <a href="">
            <LinkText content="Economy" />
          </a>
        </li>
        <li>
          <a href="">
            <LinkText content="Sports" />
          </a>
        </li>
      </ul>
    </div>
  );
}
