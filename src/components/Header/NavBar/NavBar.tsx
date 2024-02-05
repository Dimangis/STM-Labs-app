import { NavLink } from 'react-router-dom';
import styles from './NavBar.modules.css';
import { PATH_LIST } from 'constants/index';
import Text from 'components/common/Text/Text';

export function NavBar() {
  return (
    <nav>
      <ul className={styles.list}>
        <NavLink className={`${styles.li} ${styles.a}`} to={PATH_LIST.ROOT}>
          <Text content="Home" color="black" bold="400" />
        </NavLink>
        <NavLink className={`${styles.li} ${styles.a}`} to={PATH_LIST.BLOG}>
          Blog
        </NavLink>
        <NavLink className={`${styles.li} ${styles.a}`} to={PATH_LIST.POST}>
          Single Post
        </NavLink>
        <NavLink className={`${styles.li} ${styles.a}`} to={PATH_LIST.AUTHOR}>
          Pages
        </NavLink>
        <NavLink className={`${styles.li} ${styles.a}`} to={PATH_LIST.ROOT}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
