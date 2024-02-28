import { NavLink } from 'react-router-dom';
import styles from './NavBar.modules.css';
import { PATH_LIST } from 'constants/index';
import Text from 'components/common/Text/Text';

export function NavBar() {
  return (
    <nav>
      <ul className={styles.list}>
        <NavLink to={PATH_LIST.ROOT}>
          <Text variant="paragraph" element="span" link={true}>
            Home
          </Text>
        </NavLink>
        <NavLink to={PATH_LIST.BLOG}>
          <Text variant="paragraph" element="span" link={true}>
            Blog
          </Text>
        </NavLink>
        <NavLink to={PATH_LIST.POST}>
          <Text variant="paragraph" element="span" link={true}>
            Single Post
          </Text>
        </NavLink>
        <NavLink to={PATH_LIST.AUTHOR}>
          <Text variant="paragraph" element="span" link={true}>
            Pages
          </Text>
        </NavLink>
        <NavLink to={PATH_LIST.ROOT}>
          <Text variant="paragraph" element="span" link={true}>
            Contact
          </Text>
        </NavLink>
      </ul>
    </nav>
  );
}
