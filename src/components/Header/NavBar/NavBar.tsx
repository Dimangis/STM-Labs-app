import styles from './NavBar.modules.css';

export function NavBar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Blog
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Single Post
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Pages
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
