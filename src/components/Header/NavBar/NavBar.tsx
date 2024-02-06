import { NavLink } from 'react-router-dom';
import styles from './NavBar.modules.css';
import { PATH_LIST } from 'constants/index';
import { LinkText } from 'components/common/Text/TextObject';

export function NavBar() {
  return (
    <nav>
      <ul className={styles.list}>
        <NavLink to={PATH_LIST.ROOT}>
          <LinkText content="Home" />
        </NavLink>
        <NavLink to={PATH_LIST.BLOG}>
          <LinkText content="Blog" />
        </NavLink>
        <NavLink to={PATH_LIST.POST}>
          <LinkText content="Single Post" />
        </NavLink>
        <NavLink to={PATH_LIST.AUTHOR}>
          <LinkText content="Pages" />
        </NavLink>
        <NavLink to={PATH_LIST.ROOT}>
          <LinkText content="Contact" />
        </NavLink>
      </ul>
    </nav>
  );
}
