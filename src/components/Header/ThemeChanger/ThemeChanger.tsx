import styles from './ThemeChanger.module.css';

export function ThemeChanger() {
  //return <input type="checkbox" className={styles.switcher} />;
  return (
    <div className={styles.switcher}>
      <div className={styles.circle}></div>
    </div>
  );
}
