import { Link } from 'react-router-dom';
import styles from '../Footer.modules.css';

export default function QuickLink() {
  return (
    <div>
      <h3 className={styles.title}>Quick Link</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.text}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className={styles.text}>
            About
          </Link>
        </li>
        <li>
          <Link to="/singlepost" className={styles.text}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.text}>
            Archived
          </Link>
        </li>
        <li>
          <Link to="/author" className={styles.text}>
            Author
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.text}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
