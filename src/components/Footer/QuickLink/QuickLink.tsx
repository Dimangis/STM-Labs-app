import { Link } from 'react-router-dom';
import styles from '../Footer.modules.css';
import Text from 'components/common/Text/Text';

export default function QuickLink() {
  return (
    <div>
      <Text element="h4" variant="h4">
        Quick Link
      </Text>
      <ul className={styles.list}>
        <li>
          <Link to="/">
            <Text variant="paragraph" element="span" link={true}>
              Home
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <Text variant="paragraph" element="span" link={true}>
              About
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/singlepost">
            <Text variant="paragraph" element="span" link={true}>
              Blog
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Text variant="paragraph" element="span" link={true}>
              Archived
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/author">
            <Text variant="paragraph" element="span" link={true}>
              Author
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Text variant="paragraph" element="span" link={true}>
              Contact
            </Text>
          </Link>
        </li>
      </ul>
    </div>
  );
}
