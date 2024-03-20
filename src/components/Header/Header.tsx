import { NavBar } from './NavBar/NavBar';
import { Searcher } from './Searcher';
import { Logo } from '../common/Logo';
import styles from './Header.modules.css';
import { ThemeChanger } from './ThemeChanger';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header() {
  return (
    <>
      {window.innerWidth > 540 ? (
        <header className={styles.header}>
          <Logo />
          <NavBar />
          <div className={styles.rightblock}>
            <Searcher />
            <ThemeChanger />
          </div>
        </header>
      ) : (
        <header className={styles.header}>
          <div className={styles.headerMobile}>
            <BurgerMenu />
            <Logo />
            <ThemeChanger />
          </div>
          {/* <div className={styles.rightblock}> */}
          <Searcher />

          {/* </div> */}
        </header>
      )}
    </>
  );
}
