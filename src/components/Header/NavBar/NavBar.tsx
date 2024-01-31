import { Link } from 'react-router-dom';
import styles from './NavBar.modules.css';

export function NavBar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.li}>
          <Link to="/" className={styles.a}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/blog" className={styles.a}>
            Blog
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/singlepost" className={styles.a}>
            Single Post
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/author" className={styles.a}>
            Pages
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/" className={styles.a}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
