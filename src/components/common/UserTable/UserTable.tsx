import { User } from '../Interfaces/UserInterface';
import { formatDate } from '../../../utils/formatDate';
import styles from './UserTable.module.css';
import Text from '../Text/Text';
import PictureComponent from '../PictureComponent/PictureComponent';

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <Text variant="h5">Name</Text>
          </th>
          <th>
            <Text variant="h5">Picture</Text>
          </th>
          <th>
            <Text variant="h5">Location</Text>
          </th>
          <th>
            <Text variant="h5">Email</Text>
          </th>
          <th>
            <Text variant="h5">Phone</Text>
          </th>
          <th>
            <Text variant="h5">Registered Date</Text>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
              <Text variant="subheader" textColor="primary">{`${user.name.first} ${user.name.last}`}</Text>
            </td>
            <td>
              <PictureComponent
                jpgPath1x={user.picture.thumbnail}
                altText={`${user.name.first} ${user.name.last}`}
                borderRadius="100px"
              />
            </td>
            <td>
              <Text variant="subheader" textColor="primary">{`${user.location.state}, ${user.location.city}`}</Text>
            </td>
            <td>
              <Text variant="subheader" textColor="primary">
                {user.email}
              </Text>
            </td>
            <td>
              <Text variant="subheader" textColor="primary">
                {user.phone}
              </Text>
            </td>
            <td>
              <Text variant="subheader" textColor="primary">
                {formatDate(user.registered.date)}
              </Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
