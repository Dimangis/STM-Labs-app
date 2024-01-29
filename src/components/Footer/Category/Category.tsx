import styles from '../Footer.modules.css';

export default function Category() {
  return (
    <div>
      <h3 className={styles.title}>Category</h3>
      <ul className={styles.list}>
        <li>
          <a href="" className={styles.text}>
            Lifestyle
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Technology
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Travel
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Business
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Economy
          </a>
        </li>
        <li>
          <a href="" className={styles.text}>
            Sports
          </a>
        </li>
      </ul>
    </div>
  );
}
