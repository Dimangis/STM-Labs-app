import { PATH_LIST } from 'router/paths';
import { Link, NavLink } from 'react-router-dom';
import styles from './TitleBlog.modules.css';
import Text from 'components/common/Text/Text';

const TitleBlog = () => {
  return (
    <div>
      <Text variant="header" element="h3" fontSize="30px">
        Page TItle
      </Text>
      <div className={styles.smallContainer}>
        <NavLink to={PATH_LIST.ROOT}>
          <Text variant="paragraph" element="span" link={true} textColor="secondary">
            Home
          </Text>
        </NavLink>
        <div className={styles.stick}></div>
        <Link to={PATH_LIST.ROOT}>
          <Text variant="paragraph" element="span" link={true} textColor="secondary">
            Link One
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default TitleBlog;
