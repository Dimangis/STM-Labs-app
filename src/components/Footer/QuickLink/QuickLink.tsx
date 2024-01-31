import { Link } from 'react-router-dom';
import styles from '../Footer.modules.css';
import style from './QuickLink.modules.css';

export default function QuickLink() {
  return (
    <div>
      <h3 className={styles.title}>Quick Link</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={`${styles.text} ${style.link}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className={`${styles.text} ${style.link}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/singlepost" className={`${styles.text} ${style.link}`}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/" className={`${styles.text} ${style.link}`}>
            Archived
          </Link>
        </li>
        <li>
          <Link to="/author" className={`${styles.text} ${style.link}`}>
            Author
          </Link>
        </li>
        <li>
          <Link to="/" className={`${styles.text} ${style.link}`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
