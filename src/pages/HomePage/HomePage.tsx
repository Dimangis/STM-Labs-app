import { CircularProgress } from '@mui/material';
import { User, isUser } from 'components/common/Interfaces/UserInterface';
import UserTable from 'components/common/UserTable/UserTable';
import { useFetch } from 'components/hooks/useFetch';
import { useSearch } from 'components/hooks/useSearch';
import Text from '../../components/common/Text/Text';
import { useEffect, useState } from 'react';
import { debounce } from 'utils/debounce'; //Вообще debounce в materialui есть, но вот моя реализация.

export function HomePage() {
  const data = useFetch<User>('api/', '?results=15');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    if (data && Array.isArray(data.results) && data.results.every(isUser)) {
      setFilteredUsers(data.results);
    }
  }, [data]);

  useEffect(() => {
    if (data && Array.isArray(data.results)) {
      const handleSearch = debounce((term: string) => {
        const searchTermLowerCase = term.toLowerCase();
        const filtered = data.results.filter((user: User) =>
          `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTermLowerCase),
        );
        setFilteredUsers(filtered);
      }, 300);
      handleSearch(searchTerm);
    }
  }, [searchTerm, data]);

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
      {filteredUsers.length > 0 ? <UserTable users={filteredUsers} /> : <Text variant="header">No users found</Text>}
    </div>
  );
}
