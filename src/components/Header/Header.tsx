import { NavBar } from './NavBar/NavBar';
import { Searcher } from './Searcher';
import { Logo } from './Logo';
import styles from './Header.modules.css';
import { ThemeChanger } from './ThemeChanger';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
      <div>
        <Searcher />
        <ThemeChanger />
      </div>
    </header>
  );
}
