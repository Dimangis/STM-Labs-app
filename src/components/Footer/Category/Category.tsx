import styles from '../Footer.modules.css';
import Text from 'components/common/Text/Text';

export default function Category() {
  return (
    <div>
      <Text element="h4" variant="h4">
        Category
      </Text>
      <ul className={styles.list}>
        <li>
          <a href="">
            <Text variant="paragraph" element="span" link={true}>
              Lifestyle
            </Text>
          </a>
        </li>
        <li>
          <a href="">
            <Text variant="paragraph" element="span" link={true}>
              Technology
            </Text>
          </a>
        </li>
        <li>
          <a href="">
            <Text variant="paragraph" element="span" link={true}>
              Travel
            </Text>
          </a>
        </li>
        <li>
          <a href="">
            <Text variant="paragraph" element="span" link={true}>
              Business
            </Text>
          </a>
        </li>
        <li>
          <a href="">
            <Text variant="paragraph" element="span" link={true}>
              Economy
            </Text>
          </a>
        </li>
        <li>
          <a href="">
            <Text variant="paragraph" element="span" link={true}>
              Sports
            </Text>
          </a>
        </li>
      </ul>
    </div>
  );
}
