import styles from './Searcher.module.css';

export function Searcher() {
  return <input type="text" className={styles.input} placeholder="Search" />;
}
