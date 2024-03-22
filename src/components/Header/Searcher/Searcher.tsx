import { useState } from 'react';
import styles from './Searcher.module.css';

export function Searcher() {
  const [value, setValue] = useState('');

  return (
    <input type="text" className={styles.input} placeholder="Search" onChange={event => setValue(event.target.value)} />
  );
}
