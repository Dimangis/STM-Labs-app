import { CircularProgress } from '@mui/material';
import { User, isUser } from 'components/common/Interfaces/UserInterface';
import UserTable from 'components/common/UserTable/UserTable';
import { useFetch } from 'components/hooks/useFetch';

export function HomePage() {
  const data = useFetch('api/', '?results=15');

  if (!data || !Array.isArray(data.results)) {
    return <CircularProgress />;
  }

  const users = data.results;

  if (!users.every(isUser)) {
    console.log('Invalid data format');
    return <CircularProgress />;
  }

  return (
    <div>
      <h1>User Table</h1>
      <UserTable users={users} />
    </div>
  );
}
