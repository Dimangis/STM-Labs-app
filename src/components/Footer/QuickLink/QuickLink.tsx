import { Link } from 'react-router-dom';
import styles from '../Footer.modules.css';
import style from './QuickLink.modules.css';
import { LinkText } from 'components/common/Text/TextObject';

export default function QuickLink() {
  return (
    <div>
      <h3 className={styles.title}>Quick Link</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={`${style.link}`}>
            <LinkText content="Home" />
          </Link>
        </li>
        <li>
          <Link to="/blog" className={`${style.link}`}>
            <LinkText content="About" />
          </Link>
        </li>
        <li>
          <Link to="/singlepost" className={`${style.link}`}>
            <LinkText content="Blog" />
          </Link>
        </li>
        <li>
          <Link to="/" className={`${style.link}`}>
            <LinkText content="Archived" />
          </Link>
        </li>
        <li>
          <Link to="/author" className={`${style.link}`}>
            <LinkText content="Author" />
          </Link>
        </li>
        <li>
          <Link to="/" className={`${style.link}`}>
            <LinkText content="Contact" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
