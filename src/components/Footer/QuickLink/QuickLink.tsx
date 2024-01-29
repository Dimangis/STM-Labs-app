import styles from '../Footer.modules.css';

export default function QuickLink() {
  return (
    <div>
      <h3 className={styles.title}>Quick Link</h3>
      <ul className={styles.list}>
        <li>
          <a href="" className={styles.text}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            About
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Blog
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Archived
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Author
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
