import { useState } from 'react';
import styles from './Searcher.module.css';
import { useSearch } from 'components/hooks/useSearch';

export function Searcher() {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input type="text" className={styles.input} placeholder="Search" value={searchTerm} onChange={handleInputChange} />
  );
}
