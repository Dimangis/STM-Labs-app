import { HeaderText, LinkText } from 'components/common/Text/TextObject';
import { PATH_LIST } from 'router/paths';
import { NavLink } from 'react-router-dom';
import styles from './TitleBlog.modules.css';

const TitleBlog = () => {
  return (
    <div>
      <HeaderText content="Page TItle" fontSize="30px" lineHeight="36px" />
      <div className={styles.smallContainer}>
        <NavLink to={PATH_LIST.ROOT}>
          <LinkText content="Home" />
        </NavLink>
        <div className={styles.stick}></div>
        <NavLink to={PATH_LIST.ROOT}>
          <LinkText content="Link One" />
        </NavLink>
      </div>
    </div>
  );
};

export default TitleBlog;
