import { NavBar } from './NavBar/NavBar';
import { Searcher } from './Searcher';
import { Logo } from '../common/Logo';
import styles from './Header.modules.css';
import { ThemeChanger } from './ThemeChanger';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
      <div className={styles.rightblock}>
        <Searcher />
        <ThemeChanger />
      </div>
    </header>
  );
}
